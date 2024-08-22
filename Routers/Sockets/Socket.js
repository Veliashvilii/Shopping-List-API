// Tasarlanacak Örnek Kod Parçası
/**
const express = require('express');
const { addItem, getItems } = require('../controllers/shoppingListController');

const router = express.Router();

router.post('/add', addItem);
router.get('/', getItems);

module.exports = router;
 */

const express = require('express');
const SocketController = require('../../Controllers/Sockets/Socket.js');
const router = express.Router();

// Örneğin bazı yollar tanımlayın
router.post('/api/socket', SocketController.addItem);

module.exports = router;