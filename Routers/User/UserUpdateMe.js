const express = require('express');
const AuthMiddleware = require('../../Middleware/Auth.js');
const UserUpdateMe = require('../../Controllers/User/UserUpdateMe.js');

const router = express.Router();

router.put('/api/me', AuthMiddleware, UserUpdateMe);

module.exports = router;