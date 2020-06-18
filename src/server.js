import server from './app';

const app = require('http').Server(server);
const io = require('socket.io')(app);

const rooms = [];
const roomModel = {
    room_id: null,
    room_teacher: null,
    results: [],
    totalTeams: 0,
    teamsReady: 0,
    roundShirts: null,
    stock: [],
    teams: [
        [   
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''}
        ],
        [
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''}
        ],
        [
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''}
        ],
        [
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''}
        ],
        [
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''},
            {name: '', id: ''}
        ]
    ]
}

const stockModel = {
    team: null,
    shirts: null,
    price: null
}

io.on('connection', (client) => {
    client.on('playSupplyGame', data => {
        client.nick = data.nick;
        client.room = data.room;
        client.admin = data.admin;

        const players = io.sockets.adapter.rooms[`supply_game_${client.room}`];

        if (players == undefined) {            
            client.join(`supply_game_${client.room}`);

            const newRoom = roomModel;

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

            rooms.push(newRoom);

            client.emit('roomUpdate', newRoom.teams);
            client.to(`supply_game_${client.room}`).emit('roomUpdate', newRoom.teams);
            client.emit('success', `Welcome to room ${client.room}`);
        }

        else if (players.length <= 29) {
            client.join(`supply_game_${client.room}`);

            let joined = false;
            let myTeam = null;
            let mySlot = null;

            rooms.map((room, rIndex) => {
                if (room.room_id == client.room) {

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
                        room.teams.map(team => {
                            team.map((slot, sIndex) => {
                                if (slot.name == '' && !joined) {
                                    slot.name = client.nick;
                                    slot.id = client.id;
                                    joined = true;
                                    myTeam = rIndex + 1;
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
                }
            })
            
            if (joined)
                client.emit('success', `Welcome to room ${client.room}`);
        }

        else
            client.emit('failure', `Room ${client.room} is full.`);
    })

    client.on('gameStarting', () => {
        rooms.map(room => {
            if (room.room_id == client.room) {
                room.teamsReady = 0;
                room.stock = [];
                room.roundShirts = 0;             
            }
        })

        client.to(`supply_game_${client.room}`).emit('gameStarting');
    });

    client.on('nextRound', () => {
        rooms.map(room => {
            if (room.room_id == client.room) {
                room.teamsReady = 0;
                room.stock = [];
                room.roundShirts = 0;             
            }
        })
        client.to(`supply_game_${client.room}`).emit('nextRound');
    });

    client.on('lifeEvent', (data) => {
        rooms.map(room => {
            if (room.room_id == client.room) {
                room.roundShirts = data.demandForShirts;
            }
        })

        client.to(`supply_game_${client.room}`).emit('lifeEvent', data);
    });

    client.on('buyShirts', (data) => {
        client.to(`supply_game_${client.room}`).emit('buyShirts', data);

        rooms.map(room => {
            if (room.room_id == client.room) {

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
            }
        })
    });

    client.on('endGame', () => {
        client.to(`supply_game_${client.room}`).emit('endGame');
    });

    client.on('teamBank', (data) => {
        rooms.map(room => {
            if (room.room_id == client.room) {
                
                room.results.push(data);

                if (room.results.length == room.totalTeams) {
                    const ranking = room.results.sort(function(a, b) {
                        return parseFloat(a.bank) - parseFloat(b.bank);
                    });

                    client.emit('gameReport', ranking);
                    client.to(`supply_game_${client.room}`).emit('gameReport', ranking);
                }
            }
        })

        client.to(`supply_game_${client.room}`).emit('lifeEvent', data);
    });

    client.on('disconnect', function() {
        console.log(`${client.id} disconnected`);
        rooms.map(room => {
            if (room.room_id == client.room) {
                room.teams.map(team => {
                    team.map(slot => {
                        if (slot.id == client.id) {
                            slot.name = '';
                            slot.id = '';
                        }                           
                    })
                })

                client.to(`supply_game_${client.room}`).emit('roomUpdate', room.teams);
            }
        })
    })
})

app.listen(3333);