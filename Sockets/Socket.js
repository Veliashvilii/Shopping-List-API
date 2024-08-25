const connectionHandler = require('./Events/Connection.js');
const joinRoomHandler = require('./Events/JoinRoom.js');
const addItemHandler = require('./Events/AddItem.js');
const removeItemHandler = require('./Events/RemoveItem.js');
const updateListHandler = require('./Events/UpdateList.js');

const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('A new user connected:', socket.id);

    // Handle connection events
    connectionHandler(socket, io);
    
    // Handle other events
    socket.on('joinRoom', joinRoomHandler(socket, io));
    socket.on('addItem', addItemHandler(socket, io));
    socket.on('removeItem', removeItemHandler(socket, io));
    socket.on('updateList', updateListHandler(socket, io));
  });
};

module.exports = socketHandler;
