const express = require('express');
const AuthMiddleware = require('../../Middleware/Auth.js');
const UpdateMyPassword = require('../../Controllers/User/UpdateMyPassword.js');

const router = express.Router();

router.put('/api/update-my-password', AuthMiddleware, UpdateMyPassword);

module.exports = router;