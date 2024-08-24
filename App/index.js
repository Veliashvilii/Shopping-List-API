const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const cors = require('cors');
const Database = require('../Config/Database.js');
const socketHandler = require('../Sockets/Socket.js');

// Authentication Routers
const Login = require('../Routers/Auth/Login.js');
const Register = require('../Routers/Auth/Register.js');
const ForgotPassword = require('../Routers/Auth/ForgotPassword.js');

// Shopping List Routers
const CreateShoppingList = require('../Routers/Shopping List/CreateShoppingList.js');
const GetShoppingList = require('../Routers/Shopping List/GetShoppingList.js');
const DeleteShoppingList = require('../Routers/Shopping List/DeleteShoppingList.js');

// User Routers
const GetMyShoppingLists = require('../Routers/User/GetMyShoppingLists.js');
const GetMe = require('../Routers/User/GetMe.js');

dotenv.config();

const app = express();
app.use(cors());
const server = http.createServer(app); // HTTP sunucusu oluştur
const io = socketIo(server); // Socket.io'yu başlat

// How data we accept?
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

// Which endpoints are used in the API?
app.use('/', Login);
app.use('/', Register);
app.use('/', ForgotPassword);
app.use('/', CreateShoppingList);
app.use('/', GetMyShoppingLists);
app.use('/', GetShoppingList);
app.use('/', DeleteShoppingList);
app.use('/', GetMe);

// Database connection and server has running on PORT
socketHandler(io);
Database()
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});