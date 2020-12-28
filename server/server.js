const path = require('path');
const publicPath = path.join(__dirname, '/../public');

const express = require('express'); 

const http = require('http');

const socketIO = require('socket.io');
const { Socket } = require('dgram');

var app= express();
port = process.env.PORT || 3000

let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

    socket.on('new_message1', (data) => {
        console.log(data);
        socket.broadcast.emit('new_message1', data);
    })
    
})


server.listen(port, ()=>{
    console.log(`connected at port ${port}`);
});