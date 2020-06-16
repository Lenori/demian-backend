import server from './app';

const app = require('http').Server(server);
const io = require('socket.io')(app);

const rooms = [];
const roomModel = {
    room_id: null,
    teams: [
        [   
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
            {name: '', id: ''}
        ],
        [
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
            {name: '', id: ''}
        ],
        [
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
        const players = io.sockets.adapter.rooms[`supply_game_${client.room}`];

        if (players == undefined) {            
            client.join(`supply_game_${client.room}`);

            const newRoom = roomModel;

            newRoom.room_id = client.room;
            newRoom.teams[0][0].name = client.nick;
            newRoom.teams[0][0].id = client.id;

            rooms.push(newRoom);
            
            client.emit('roomUpdate', newRoom.teams);
            client.to(`supply_game_${client.room}`).emit('roomUpdate', newRoom.teams);
            client.emit('success', `Welcome to room ${client.room}`);
        }

        else if (players.length <= 29) {
            client.join(`supply_game_${client.room}`);

            let joined = false;

            rooms.map(room => {
                if (room.room_id == client.room) {
                    room.teams.map(team => {
                        team.map(slot => {
                            if (slot.name == '' && !joined) {
                                slot.name = client.nick;
                                slot.id = client.id;
                                joined = true;
                            }                           
                        })
                    })

                    client.emit('roomUpdate', room.teams);
                    client.to(`supply_game_${client.room}`).emit('roomUpdate', room.teams);
                }
            })
            
            client.emit('success', `Welcome to room ${client.room}`);
        }

        else
            client.emit('failure', `Room ${client.room} is full.`);
    })

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