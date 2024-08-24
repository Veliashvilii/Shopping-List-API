const express = require('express');
const AuthMiddleware = require('../../Middleware/Auth.js');
const GetMyShoppingLists = require('../../Controllers/User/GetMyShoppingLists.js');

const router = express.Router();

router.get('/api/my-shopping-lists', AuthMiddleware, GetMyShoppingLists);

module.exports = router;