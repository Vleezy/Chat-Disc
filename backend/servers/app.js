const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

// Get username and chatroom from the URL
const { username, chatroom } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

const socket = io();

// User joins the chatroom
socket.emit('joinChatRoom', { username, chatroom })

// Message from the server 
socket.on('message', message => {
    console.log(message);
})