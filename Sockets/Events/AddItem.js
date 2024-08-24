const ShoppingList = require('../../Models/Shopping List/ShoppingList.js');

module.exports = (socket, io) => async ({ roomID, item }) => {
  try {
    const list = await ShoppingList.findOne({ roomID });
    if (list) {
      list.items.push(item);
      await list.save();
      io.to(roomID).emit('updateList', list);
    }
  } catch (error) {
    console.error('Öğe eklerken hata oluştu:', error);
  }
};