// Making the Connection
const socket = io.connect('http://localhost:3000');
// Query DOM
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let feedback = document.getElementById('feedback');

// Emitt Events

btn.addEventListener('click', () => {
    socket.emit('send', {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
})

// listen for events

socket.on('send', (data) => {
    if (!data.handle) {
        data.handle = 'Anonymous';
    } else {
        output.innerHTML += '<p><strong>' + data.handle + ' : </strong>' + data.message + '</p>';
    }
});

socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});