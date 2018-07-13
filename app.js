const app = require('./config/server');

const servre = app.listen(3000, function () {
    console.log("Servidor rodando...");
});



const io = require('socket.io').listen(app);

app.set('io', io);

io.on('connection', function (socket) { 
    console.log("usuario Conectado");

    socket.on('disconnect', function(){
        console.log("usuario desconectado");
    });

    socket.on('mensagemParaoServidor', function (data) {
        socket.emit('mensagemParaoCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem
        });

        socket.broadcast('mensagemParaoCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem
        });

        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit('participantesParaoCliente', {apelido: data.apelido});
            
            socket.broadcast.emit('participantesParaoCliente', {apelido: data.apelido});
        };
    });
});