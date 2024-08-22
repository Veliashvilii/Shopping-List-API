const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const SocketRoute = require('../Routers/Sockets/Socket.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use('/api/shopping-list', SocketRoute);

require('../Sockets/Socket.js')(io);

module.exports = server;