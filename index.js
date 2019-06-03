const socket = require('socket.io');
const express = require('express');
const app = express();

app.use(express.static('client'));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`Listening on Port ${PORT}...`)
    }
});
const io = socket(server);
io.on('connection', (socket) => {
    console.log('Socket Connection Established...', socket.id); //request.connection._peername
    
    socket.on('send', (data) => {
        io.sockets.emit('send', data);
    });
});