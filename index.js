var express = require('express');
var app =express();
var htpp=require('http').Server(app);
// usando socketio
var io =require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

var port= process.env.PORT || 3000;

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');

});

http.listen(port,function(){
	console.log('Escuchando en el puntero: ' +port);
});
