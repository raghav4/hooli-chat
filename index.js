var socket = require("socket.io");
const express = require('express');
const app = express();

app.use(express.static('client'));

// app.get('/', (req, res) => {
//     res.send('Welcome to Hooli Chat!');
// })

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, (err) => {
    if(err) {
        throw err;
    }
    else{
        console.log(`Listening on Port ${PORT}...`)
    }
});

const io = socket(server);
io.sockets.on('connection',(socket) => {
	console.log('connection :', socket.request.connection._peername);
	socket.emit('message', { message: 'Server is Saying welcome to the chat'+socket.id });
		
	
	socket.on('send',(data)=> {
       
		io.sockets.emit('message', data);
    });
});