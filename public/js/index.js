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

	var li = jQuery('<li></li>');
	li.text(`${message.from}:${message.text}`);
	jQuery('#messages').append(li);
});

// socket.emit('createMessage',{
// 	from:'Raj',
// 	text:'Hiii'
// },function(data) {
// 	console.log(data);
// })

$(document).ready(function() {
	$('#message-form').on('submit',function(e) {
		e.preventDefault();

		socket.emit('createMessage',{
			from:'User',
			text:$('[name=message]').val()
		},function(){
		});
	})
})