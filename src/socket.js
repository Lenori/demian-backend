export default function socket(client) {
    console.log('A new client connected! ID: ', client.id);

    client.on('playSupplyGame', data => {
        const players = io.sockets.clients(`supply_game_${data.room}`);
        console.log(players);
        client.join(`supply_game_${data.room}`);
    })
}