const connectionHandler = require('./Events/Connection.js');
const addItemHandler = require('./Events/AddItem.js');
const removeItemHandler = require('./Events/RemoveItem.js');

const socketHandler = (io) => {
  io.on('connection', (socket) => {

    // Handle connection events
    connectionHandler(socket, io);
    
    // Handle other events
    socket.on('addItem', addItemHandler(socket, io));
    socket.on('removeItem', removeItemHandler(socket, io));
  });
};

module.exports = socketHandler;
