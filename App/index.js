const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
const Database = require('../Config/Database.js');

// Authentication Routers
const Login = require('../Routers/Auth/Login.js');
const Register = require('../Routers/Auth/Register.js');
const ForgotPassword = require('../Routers/Auth/ForgotPassword.js');

dotenv.config();

const app = express();
app.use(cors());

// How data we accept?
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

// Which endpoints are used in the API?
app.use('/', Login);
app.use('/', Register);
app.use('/', ForgotPassword);

// Database connection and server has running on PORT
Database()
const server = require('./App.js');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})