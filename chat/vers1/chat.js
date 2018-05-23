const socket = io();
function submitFunc() {
    let from = $('#user').val();
    let message = $('#m').val();
    if (message != '') { socket.emit('chatMessage', from, message); }
    $('#m').val('').focus();
    return false;
}
function notifyTyping() {
    let user = $('#user').val();
    socket.emit('notifyUser', user);
}

socket.on('chatMessage', (from, msg) => {
    let me = $('#user').val();
    if (user != me) {
        $('#notifyUser').text(user + 'is typing ...');
    }
    setTimeout(() => { $('#notifyUser').text(''); },
        10000);;
});

$(document).ready(() => {
    let name = makeid();
    $('#user').val(name);
    socket.emit('chatMessage', 'System', '<b>' + name + '</b> has joined the discussion');
});

function makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let t = 0; t < 5; t++) {
        text += possible.chatAt(Math.floor(Math.random() * 
    possible.length));
    }
    return text;
}