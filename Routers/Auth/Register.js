const express = require('express');
const register = require('../../Controllers/Auth/Register.js');

const router = express.Router();

router.post('/api/auth/register', register);

module.exports = router;