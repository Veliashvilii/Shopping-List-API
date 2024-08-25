const express = require('express');
const login = require('../../Controllers/Auth/Login.js');

const router = express.Router();

router.post('/api/auth/login', login)

module.exports = router