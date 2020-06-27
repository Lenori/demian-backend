import server from './app';

const app = require('http').Server(server);
const io = require('socket.io')(app);

const fs = require('fs');

let roomModel = fs.readFileSync('src/socket/supplygame/rooms/models/room.json');

io.on('connection', (client) => {
    client.on('playSupplyGame', data => {
        client.nick = data.nick;
        client.room = data.room;
        client.admin = data.admin;

        const players = io.sockets.adapter.rooms[`supply_game_${client.room}`];

        if (players == undefined) {            
            client.join(`supply_game_${client.room}`);

            const newRoom = JSON.parse(roomModel);

            newRoom.room_id = client.room;

            if (client.admin) {
                newRoom.room_teacher = client.id;
            } else {
                newRoom.teams[0][0].name = client.nick;
                newRoom.teams[0][0].id = client.id; 
            
                client.emit('choosenTeam', 1);
                client.emit('capitain');
                client.team = 1;
                client.capitain = true; 
                newRoom.totalTeams = newRoom.totalTeams + 1;
            }

            fs.writeFileSync(`src/socket/supplygame/rooms/${client.room}.json`, JSON.stringify(newRoom, null, 2));

            client.emit('roomUpdate', newRoom.teams);
            client.to(`supply_game_${client.room}`).emit('roomUpdate', newRoom.teams);
            client.emit('success', `Welcome to room ${client.room}`);
        }

        else if (players.length <= 29) {
            client.join(`supply_game_${client.room}`);

            let joined = false;
            let myTeam = null;
            let mySlot = null;

            let room = [];
            room = JSON.parse(fs.readFileSync(`src/socket/supplygame/rooms/${client.room}.json`));

            if (client.admin) {
                if (room.room_teacher !== null) {
                    client.emit('failure', `Room ${client.room} already has a teacher.`);
                    return;
                }
                else {
                    room.room_teacher = client.id;
                    joined = true;
                }
                    
            } else {
                room.teams.map((team, tIndex) => {
                    team.map((slot, sIndex) => {
                        if (slot.name == '' && !joined) {
                            slot.name = client.nick;
                            slot.id = client.id;
                            joined = true;
                            myTeam = tIndex + 1;
                            mySlot = sIndex + 1;                         
                        }                           
                    })
                })
                
                client.emit('choosenTeam', myTeam);
                client.team = myTeam;
                
                if (mySlot == 1) {
                    room.totalTeams = room.totalTeams + 1;
                    client.capitain = true;
                    client.emit('capitain');
                }
            }

            client.emit('roomUpdate', room.teams);
            client.to(`supply_game_${client.room}`).emit('roomUpdate', room.teams);
            
            if (joined) {
                fs.writeFileSync(`src/socket/supplygame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));
                client.emit('success', `Welcome to room ${client.room}`);
            }
        }

        else
            client.emit('failure', `Room ${client.room} is full.`);
    })

    client.on('gameStarting', () => {
        let room = [];
        room = JSON.parse(fs.readFileSync(`src/socket/supplygame/rooms/${client.room}.json`));

        room.teamsReady = 0;
        room.stock = [];
        room.roundShirts = 0;  

        fs.writeFileSync(`src/socket/supplygame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));

        client.to(`supply_game_${client.room}`).emit('gameStarting');
    });

    client.on('nextRound', () => {
        let room = [];
        room = JSON.parse(fs.readFileSync(`src/socket/supplygame/rooms/${client.room}.json`));

        room.teamsReady = 0;
        room.stock = [];
        room.roundShirts = 0;

        fs.writeFileSync(`src/socket/supplygame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));

        client.to(`supply_game_${client.room}`).emit('nextRound');
    });

    client.on('lifeEvent', (data) => {
        let room = [];
        room = JSON.parse(fs.readFileSync(`src/socket/supplygame/rooms/${client.room}.json`));

        room.roundShirts = data.demandForShirts;

        fs.writeFileSync(`src/socket/supplygame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));

        client.to(`supply_game_${client.room}`).emit('lifeEvent', data);
    });

    client.on('buyShirts', (data) => {
        client.to(`supply_game_${client.room}`).emit('buyShirts', data);

        let room = [];
        room = JSON.parse(fs.readFileSync(`src/socket/supplygame/rooms/${client.room}.json`));

        const stock = {
            team: data.team,
            shirts: data.shirts,
            price: data.price
        }

        room.stock.push(stock);
        room.teamsReady = room.teamsReady + 1;

        if (room.teamsReady == room.totalTeams) {
            
            const pricing = room.stock.sort(function(a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            });

            let shirtDemand = room.roundShirts;                
            const report = [];

            pricing.map(team => {
                let sold = 0;
                if (shirtDemand > 0) {
                    if (team.shirts >= shirtDemand) {
                        sold = shirtDemand;
                        shirtDemand = 0;
                    } else {
                        sold = team.shirts;
                        shirtDemand = shirtDeman - team.shirts;
                    }
                }                
                
                const sellReport = {
                    team: team.team,
                    sold: sold
                }

                report.push(sellReport);
            });

            client.emit('endRound', report);
            client.to(`supply_game_${client.room}`).emit('endRound', report);
        }

        fs.writeFileSync(`src/socket/supplygame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));
    });

    client.on('endGame', () => {
        client.to(`supply_game_${client.room}`).emit('endGame');
        fs.unlink(`src/socket/supplygame/rooms/${client.room}.json`, (err) => {if (err) throw err;})
    });

    client.on('teamBank', (data) => {
        let room = [];
        room = JSON.parse(fs.readFileSync(`src/socket/supplygame/rooms/${client.room}.json`));

        room.results.push(data);

        if (room.results.length == room.totalTeams) {
            const ranking = room.results.sort(function(a, b) {
                return parseFloat(a.bank) - parseFloat(b.bank);
            });

            client.emit('gameReport', ranking);
            client.to(`supply_game_${client.room}`).emit('gameReport', ranking);
        }
        
        client.to(`supply_game_${client.room}`).emit('lifeEvent', data);
    });

    client.on('disconnect', function() {
        const players = io.sockets.adapter.rooms[`supply_game_${client.room}`];

        if (players == undefined) {
            if (client.room) {
                fs.unlink(`src/socket/supplygame/rooms/${client.room}.json`, (err) => {if (err) throw err;})
            }
        } else {
            let room = [];
            room = JSON.parse(fs.readFileSync(`src/socket/supplygame/rooms/${client.room}.json`));
            
            if (client.admin) {
                room.room_teacher = null;
            } else {
                room.teams.map(team => {
                    team.map(slot => {
                        if (slot.id == client.id) {
                            slot.name = '';
                            slot.id = '';
                        }                           
                    })
                })
            }            
            
            fs.writeFileSync(`src/socket/supplygame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));
            client.to(`supply_game_${client.room}`).emit('roomUpdate', room.teams);
        }        
    })
})

app.listen(3333);