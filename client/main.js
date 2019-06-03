// Making the Connection
const socket = io.connect('http://localhost:3000');
// Query DOM
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');

// Emitt Events

btn.addEventListener('click',()=>{
    socket.emit('send',{
        message: message.value,
        handle: handle.value
    });
});

// listen for events

socket.on('send',(data)=>{
    if(!(data.handle || data.message)){
        alert('Plase Enter Handle and Message!');
    }
    else{
        output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
    }
})