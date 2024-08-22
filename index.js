const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Login = require('./Routers/Auth/Login.js');

const app = express();
app.use(cors());
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

app.use('/', Login);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})