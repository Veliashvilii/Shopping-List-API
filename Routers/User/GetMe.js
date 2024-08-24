const express = require('express');
const AuthMiddleware = require('../../Middleware/Auth.js');
const GetMe = require('../../Controllers/User/GetMe.js');

const router = express.Router();

router.get('/api/me', AuthMiddleware, GetMe);

module.exports = router;