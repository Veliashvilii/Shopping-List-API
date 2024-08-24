const ShoppingList = require('../../Models/Shopping List/ShoppingList.js');

module.exports = (socket, io) => async ({ roomID, item }) => {
  try {
    const list = await ShoppingList.findOne({ roomID });
    if (list) {
      list.items = list.items.filter(i => i !== item);
      await list.save();
      io.to(roomID).emit('updateList', list);
    }
  } catch (error) {
    console.error('Öğe kaldırılırken hata oluştu:', error);
  }
};