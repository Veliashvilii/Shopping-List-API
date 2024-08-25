const ShoppingList = require('../../Models/Shopping List/ShoppingList.js');

module.exports = (socket, io) => {
  return async ({ roomId, item }) => {
    try {
      const list = await ShoppingList.findOne({ roomId: roomId });

      if (list) {
        if (!list.items.includes(item)) {
          console.log('Item not found in the list:', item);
          socket.emit('error', 'This item is not in the list.');
          return;
        } else {
          console.log('Removing item from the list:', item);
          list.items = list.items.filter(i => i !== item);
          await list.save();
          io.to(roomId).emit('updateList', list);
        }
      } else {
        socket.emit('error', 'List not found.');
      }
    } catch (error) {
      console.error('Error removing item:', error);
      socket.emit('error', 'An error occurred while removing the item.');
    }
  };
};