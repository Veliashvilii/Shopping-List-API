const ShoppingList = require('../../Models/Shopping List/ShoppingList.js');

module.exports = (socket, io) => async (roomID) => {
  try {
    const list = await ShoppingList.findOne({ roomID });
    if (list) {
      io.to(roomID).emit('updateList', list);
    }
  } catch (error) {
    console.error('Liste güncellenirken hata oluştu:', error);
  }
};