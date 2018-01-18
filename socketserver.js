const socket = require('socket.io');
const index = require('./index');

module.exports.iouse = function () {
	index.io.use((socket,next)=>{

		index.io.sockets.emit('chat', {handle : 'NEW USER', message : 'joined'});
		next();

	});

}; 

module.exports.on = function () {

	index.io.on('connection', (socket) => {
	// console.log(`connection made with ${socket.id}`);
	
		socket.on('chat', (data) => {
			index.io.sockets.emit('chat', data);
		});
		// console.log(socket.id);


		socket.on('typing',(data) => {
			index.socket.broadcast.emit('typing', data);
		});

		socket.on('disconnect', function () {
			console.log('disconnect');      
	    });
	});

};

