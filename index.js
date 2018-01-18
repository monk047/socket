const express = require('express');
const socket = require('socket.io');
const socketserver = require('./socketserver');


const app = express();

//Create a Server
const server = app.listen(3000, () => {
	console.log('Listening on port 3000');
});

//Setup a Public folder
app.use(express.static('public'));


//******************
const io = socket(server);

module.exports.io = io;

socketserver.iouse();
socketserver.on();

