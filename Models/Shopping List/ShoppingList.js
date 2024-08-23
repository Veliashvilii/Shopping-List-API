const mongoose = require('mongoose');

const ShoppingListSchema = new mongoose.Schema({
  roomID: {
    type: String,
    required: true,
    unique: true
  },

  items: [String]
});

const ShoppingList = mongoose.model('ShoppingList', ShoppingListSchema);
module.exports = ShoppingList;