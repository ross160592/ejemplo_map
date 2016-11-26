var express= require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/public')); //serving statics files like css, js, images

var port=process.env.PORT || 3000; //this is for heroku

app.get('/', function(req, res){

  res.sendFile(__dirname + '/index.html');

});
http.listen(port,function(){
    console.log('Escuchando en el puerto: '+port);//mensaje en consola 
});


var socketCount=0; //contador de conexiones al Server
io.on('connection',function(socket){
	console.log('Usuario conectado...');
	socketCount++;
	io.sockets.emit('usuario conectado',socketCount);//emitiendo mensajes a todos los sockets o usuarios conectados


});

socket.on('disconnet',function(){
	socketCount++;//decremento del contador
	console.log('Usuario Desconectado');//mensaje en consola
	io.sockets.emit('usuario desconectado');//mensaje a todos los sockets
})