const express = require('express');
const AuthMiddleware = require('../../Middleware/Auth.js');
const CreateShoppingListController = require('../../Controllers/Shopping List/CreateShoppingList.js');

const router = express.Router();

router.post('/api/create-shopping-list', AuthMiddleware, CreateShoppingListController);

module.exports = router;