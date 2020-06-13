import server from './app';
import socket from './socket';

const app = require('http').Server(server);
const io = require('socket.io')(app);

io.on('connection', (client) => {
    socket(client);
})

app.listen(3333);