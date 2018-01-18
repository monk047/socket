
//Establish the connection
const socket = io.connect('http://localhost:3000/');

//query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');


//emit event
btn.addEventListener('click', () => {
	socket.emit('chat',{
		message : message.value,
		handle : handle.value
	});
	message.value = '';
}); 

//listen for type event
message.addEventListener('keypress',() => {
	socket.emit('typing', handle.value);
});

//listen for event
socket.on('chat', (data) => {
	feedback.innerHTML = '';
	output.innerHTML += '<p><strong>'+ data.handle + ' : </strong>' + data.message + '</p>';
});

socket.on('typing', (data) => {
	if (feedback.innerHTML === '')
	{
		feedback.innerHTML += '<p><strong>'+ data + ' is typing..</strong>' ;
	}
});

socket.on('active', (data) => {
	console.log("data received on chat file"+data.username);
});
