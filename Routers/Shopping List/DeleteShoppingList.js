const express = require('express');
const AuthMiddleware = require('../../Middleware/Auth.js');
const DeleteShoppingList = require('../../Controllers/Shopping List/DeleteShoppingList.js');

const router = express.Router();

router.delete('/api/shopping-list', AuthMiddleware, DeleteShoppingList);

module.exports = router;