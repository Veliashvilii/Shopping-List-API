const express = require('express');
const ForgotPassword = require('../../Controllers/Auth/ForgotPassword.js');

const router = express.Router();

router.post('/auth/forgot-password', ForgotPassword);

module.exports = router;