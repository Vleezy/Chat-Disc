const users = [];

// New user joins the chat
function newUserJoins(id, username, chatroom) {
    const user = { id, username, chatroom };

    users.push(user);

    return user;
}

// Find current User 
function getCurrentUser(id) {
    return users.find(user => users.id === id);
}

// User leaves the chatroom
function userLeaves(id) {
    const index = users.findIndex(user => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Retrieve all the room users
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    newUserJoins,
    getCurrentUser,
    userLeaves,
    getRoomUsers
}
