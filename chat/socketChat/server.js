const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    console.log('User Connected');
    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
    socket.on('client emit', (msg) => {
        io.emit('server emit', msg);
    })
});


http.listen(port, () => {
    console.log('Magick Spells Being Cast at LocalHost:' + port);
});