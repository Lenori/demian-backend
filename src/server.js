import server from './app';

const app = require('http').Server(server);
const io = require('socket.io')(app);

const fs = require('fs');

let roomModel = fs.readFileSync('src/socket/supplygame/rooms/models/room.json');
let stocksRoomModel = fs.readFileSync('src/socket/stocksgame/rooms/models/room.json');
let boardRoomModel = fs.readFileSync('src/socket/boardgame/rooms/models/room.json');

io.on('connection', (client) => {
    client.on('playSupplyGame', data => {
        client.nick = data.nick;
        client.room = data.room;
        client.admin = data.admin;
        client.game = 'supply_game';

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
            
                client.emit('choosenTeam', {myTeam: 1, myId: client.id});
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
                
                client.emit('choosenTeam', {myTeam: myTeam, myId: client.id});
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

    client.on('changePlayerTeam', (data) => {
        let room = [];
        room = JSON.parse(fs.readFileSync(`src/socket/supplygame/rooms/${client.room}.json`));

        room.teams.map(team => {
            team.map(slot => {
                if (slot.id == data.id) {
                    slot.name = "";
                    slot.id = "";
                }
            });
        });

        let capitain = false;
        let joined = false;

        room.teams.map((team, index) => {
            if (index == data.newTeamIndex) {
                team.map((slot, position) => {
                    if (slot.id == "" && !joined) {
                        slot.name = data.name;
                        slot.id = data.id;

                        if (position == 0) {
                            capitain = true;
                        }

                        joined = true;
                    }
                });
            }
        });

        let newTeamInfo = {
            client: data.id,
            myTeam: data.newTeamIndex + 1,
            capitain: capitain
        };

        client.to(`supply_game_${client.room}`).emit('changeTeams', newTeamInfo);

        fs.writeFileSync(`src/socket/supplygame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));

        client.emit('roomUpdate', room.teams);
        client.to(`supply_game_${client.room}`).emit('roomUpdate', room.teams);
    });

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
              
            const report = [];

            pricing.map((team, index) => {
                let sold = 0;
                let shirts = 0;
                let total = team.shirts * team.price;

                if (index == 0) {
                    sold = total * 0.45;
                    shirts = Math.floor(team.shirts * 0.45);
                }
                
                if (index == 1) {
                    sold = total * 0.35;
                    shirts = Math.floor(team.shirts * 0.35);
                } 

                if (index == 2) {
                    sold = total * 0.15;
                    shirts = Math.floor(team.shirts * 0.15);
                } 

                if (index == 3) {
                    sold = total * 0.05;
                    shirts = Math.floor(team.shirts * 0.05);
                } 
                
                const sellReport = {
                    team: team.team,
                    sold: sold,
                    shirts: shirts,
                    price: team.price
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
        if (client.game == 'supply_game') {
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
        } else if (client.game == 'board_game') {
            const players = io.sockets.adapter.rooms[`board_game_${client.room}`];

            if (players == undefined) {
                if (client.room) {
                    fs.unlink(`src/socket/boardgame/rooms/${client.room}.json`, (err) => {if (err) throw err;})
                }
            } else {
                let room = [];
                room = JSON.parse(fs.readFileSync(`src/socket/boardgame/rooms/${client.room}.json`));
                
                if (client.admin) {
                    room.room_teacher = null;
                } else {
                    const index = room.players.findIndex(player => player.id == client.id);
                    room.players.splice(index, 1);                    
                    room.totalPlayers = room.players.length;
                }            
                
                fs.writeFileSync(`src/socket/boardgame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));
            } 
        }  
    })

    client.on('playBingoGame', data => {
        client.nick = data.nick;
        client.room = data.room;
        client.admin = data.admin;

        client.join(`bingo_game_${client.room}`);
        client.emit('bingo_success', `Welcome to room ${client.room}`);
    });

    client.on('bingo_gameStarting', data => {
        client.to(`bingo_game_${client.room}`).emit('bingo_gameStarting', data);
    });

    client.on('bingo', data => {
        client.to(`bingo_game_${client.room}`).emit('bingo', data);
    });

    client.on('playStocksGame', data => {
        client.nick = data.nick;
        client.room = data.room;
        client.admin = data.admin;
        client.game = 'stock_game';

        const players = io.sockets.adapter.rooms[`stocks_game_${client.room}`];

        if (players == undefined) {            
            client.join(`stocks_game_${client.room}`);

            const newRoom = JSON.parse(stocksRoomModel);

            newRoom.room_id = client.room;

            if (client.admin) {
                newRoom.room_teacher = client.id;
            } else {
                newRoom.totalPlayers = newRoom.totalPlayers + 1;
            }

            fs.writeFileSync(`src/socket/stocksgame/rooms/${client.room}.json`, JSON.stringify(newRoom, null, 2));

            client.emit('stocks_success', `Welcome to room ${client.room}`);
        }

        else {
            client.join(`stocks_game_${client.room}`);

            let room = [];
            room = JSON.parse(fs.readFileSync(`src/socket/stocksgame/rooms/${client.room}.json`));

            let joined = false;

            if (client.admin) {
                if (room.room_teacher !== null) {
                    client.emit('stocks_failure', `Room ${client.room} already has a teacher.`);
                    return;
                }
                else {
                    room.room_teacher = client.id;
                    joined = true;
                }
                    
            } else {
                room.totalPlayers = room.totalPlayers + 1;
                joined = true;
            }
            
            if (joined) {
                fs.writeFileSync(`src/socket/stocksgame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));
                client.emit('stocks_success', `Welcome to room ${client.room}`);
            }
        }
    });

    client.on('stocks_gameStarting', () => {
        client.to(`stocks_game_${client.room}`).emit('stocks_gameStarting');
    });

    client.on('stocks_playerReady', () => {
        let room = [];
        room = JSON.parse(fs.readFileSync(`src/socket/stocksgame/rooms/${client.room}.json`));

        room.playersReady = room.playersReady + 1;

        fs.writeFileSync(`src/socket/stocksgame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));

        if (room.playersReady == room.totalPlayers) {
            client.emit('stocks_everyoneReady');
            client.to(`stocks_game_${client.room}`).emit('stocks_everyoneReady');
        }

    });

    client.on('stocks_playerResults', (data) => {
        let room = [];
        room = JSON.parse(fs.readFileSync(`src/socket/stocksgame/rooms/${client.room}.json`));

        room.results.push(data);

        if (room.results.length == room.totalPlayers) {
            const ranking = room.results.sort(function(a, b) {
                return parseFloat(a.bank) - parseFloat(b.bank);
            });

            client.emit('stocks_gameReport', ranking);
            client.to(`stocks_game_${client.room}`).emit('stocks_gameReport', ranking);
        }
    });

    client.on('playBoardGame', data => {
        client.nick = data.nick;
        client.room = data.room;
        client.admin = data.admin;
        client.game = 'board_game';

        const players = io.sockets.adapter.rooms[`board_game_${client.room}`];

        if (players == undefined) {            
            client.join(`board_game_${client.room}`);

            const newRoom = JSON.parse(boardRoomModel);

            newRoom.room_id = client.room;

            if (client.admin) {
                newRoom.room_teacher = client.id;
            } else {
                newRoom.totalPlayers = newRoom.totalPlayers + 1;
                newRoom.players.push({id: client.id, nick: client.nick});
            }

            fs.writeFileSync(`src/socket/boardgame/rooms/${client.room}.json`, JSON.stringify(newRoom, null, 2));

            client.emit('board_success', `Welcome to room ${client.room}`);
        }

        else if (players.length <= 6) {
            client.join(`board_game_${client.room}`);

            let room = [];
            room = JSON.parse(fs.readFileSync(`src/socket/boardgame/rooms/${client.room}.json`));

            let joined = false;

            if (client.admin) {
                if (room.room_teacher !== null) {
                    client.emit('board_failure', `Room ${client.room} already has a teacher.`);
                    return;
                }
                else {
                    room.room_teacher = client.id;
                    joined = true;
                }
                    
            } else {
                room.totalPlayers = room.totalPlayers + 1;
                room.players.push({id: client.id, nick: client.nick});
                joined = true;
            }
            
            if (joined) {
                fs.writeFileSync(`src/socket/boardgame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));
                client.emit('board_success', `Welcome to room ${client.room}`);
            }
        }

        else
            client.emit('board_failure', `Room ${client.room} is full.`);
    })

    client.on('board_gameStarting', () => {
        let room = [];
        room = JSON.parse(fs.readFileSync(`src/socket/boardgame/rooms/${client.room}.json`));

        client.emit('board_listPlayers', room.players);
        client.to(`board_game_${client.room}`).emit('board_listPlayers', room.players);

        client.to(`board_game_${client.room}`).emit('board_gameStarting');

    });

    client.on('board_gameCard', data => {
        client.to(`board_game_${client.room}`).emit('board_gameCard', data);
    });

    client.on('board_movePlayer', data => {
        client.to(`board_game_${client.room}`).emit('board_movePlayer', data);
    });

    client.on('board_buyProperty', data => {
        client.to(`board_game_${client.room}`).emit('board_propertyBought', data);
    });

    client.on('board_soldProperty', data => {
        client.to(`board_game_${client.room}`).emit('board_soldProperty', data);
    });

    client.on('board_changeOwnership', data => {
        client.to(`board_game_${client.room}`).emit('board_changeOwnership', data);
    });

    client.on('board_nextTurn', () => {
        client.to(`board_game_${client.room}`).emit('board_nextTurn');
    });

    client.on('board_endRound', () => {
        client.to(`board_game_${client.room}`).emit('board_endRound');
    });

    client.on('board_makeOffer', data => {
        client.to(`board_game_${client.room}`).emit('board_receiveOffer', data);
    });

    client.on('board_acceptOffer', data => {
        client.to(`board_game_${client.room}`).emit('board_buyProperty', data);
    });

    client.on('board_playerResults', (data) => {
        if (!client.admin) {
            let room = [];
            room = JSON.parse(fs.readFileSync(`src/socket/boardgame/rooms/${client.room}.json`));

            room.results.push(data);

            if (room.results.length == room.totalPlayers) {
                const ranking = room.results.sort(function(a, b) {
                    return parseFloat(b.cash) - parseFloat(a.cash);
                });

                client.emit('board_gameReport', ranking);
                client.to(`board_game_${client.room}`).emit('board_gameReport', ranking);
            } else {
                fs.writeFileSync(`src/socket/boardgame/rooms/${client.room}.json`, JSON.stringify(room, null, 2));
            }
        }
    });

})

app.listen(3333);