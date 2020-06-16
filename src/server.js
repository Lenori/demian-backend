import server from './app';

const app = require('http').Server(server);
const io = require('socket.io')(app);

const rooms = [];
const roomModel = {
    room_id: null,
    room_teacher: null,
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
        client.to(`supply_game_${client.room}`).emit('gameStarting');
    });

    client.on('nextRound', () => {
        client.to(`supply_game_${client.room}`).emit('nextRound');
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