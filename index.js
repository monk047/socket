const express = require('express');
const socket = require('socket.io');


const app = express();

//Create a Server
const server = app.listen(3000, () => {
	console.log('Listening on port 3000');
});

//Setup a Public folder
app.use(express.static('public'));


//******************
const io = socket(server);

io.on('connection', (socket) => {
	// console.log(`connection made with ${socket.id}`);
	
	socket.on('chat', (data) => {
		io.sockets.emit('chat', data);
	});
	// console.log(socket.id);


	socket.on('typing',(data) => {
		socket.broadcast.emit('typing', data);
	});
});