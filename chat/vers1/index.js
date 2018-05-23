const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
// const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    let express = require('express');
    app.use(express.static(path.join(__dirname)));
    res.sendFile(path.join(__dirname, '../chat', 'index.html'));
});

io.on('connection', (socket) => {
    socket.on('chatMessage', (from, msg) => {
        io.emit('chatMessage', from, msg);
    });
    socket.on('notifyUser', (user) => {
        io.emit('notifyUser', user);
    });
});

http.listen(8080, () => {
    console.log('magick happening on localhost:' + port);
});