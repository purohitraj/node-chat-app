const express = require('express');
const app = express();
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');


const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket)=>{
	console.log('new user connected');
	
	socket.emit('newMessage',{
		from:'Raj Purohit',
		text:'Hello Raj',
		createdAt:123
	});

	socket.on('createMessage',(message)=> {
		console.log(message);
	})
	socket.on('disconnect',()=>{
		console.log('user disconected');
	});
});


app.use(express.static(publicPath))

server.listen(port,() => {
	console.log(`Start Localhost at port ${port}`)
})