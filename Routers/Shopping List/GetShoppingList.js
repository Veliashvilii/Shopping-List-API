const express = require('express');
const AuthMiddleware = require('../../Middleware/Auth.js');
const GetShoppingList = require('../../Controllers/Shopping List/GetShoppingList.js');

const router = express.Router();

router.get('/api/shopping-list', AuthMiddleware, GetShoppingList);

module.exports = router