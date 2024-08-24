const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
  roomId: {
    type: String,
    unique: true,
    required: true
  },
  items: [String],
  message: String,
  participants: [String]
});

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

module.exports = ShoppingList;