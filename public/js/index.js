var socket = io();
socket.on('connect',function(){
	console.log('connected to server');

	// socket.emit('createMessage',{
	// 	from:'Raj',
	// 	text:'hello'
	// })
});

socket.on('disconnect',function(){
	console.log('disconnected to server');
});

socket.on('newMessage',function(message){
	console.log('Add New Message');
	console.log(message);
});