const ShoppingList = require('../../Models/Shopping List/ShoppingList.js');

module.exports = (socket, io) => {
  return async ({ roomId, item }) => {
    try {
      const list = await ShoppingList.findOne({ roomId: roomId });
      
      if (list) {
        if (list.items.includes(item)) {
          console.log('Item already exists in the list:', item);
          socket.emit('error', 'This item is already in the list.');
          return;
        } else {
          console.log('Adding new item to the list:', item);
          list.items.push(item);
          await list.save();
          io.to(roomId).emit('updateList', list);
        }
      } else {
        socket.emit('error', 'List not found.');
      }
    } catch (error) {
      console.error('Error adding item:', error);
      socket.emit('error', 'An error occurred while adding the item.');
    }
  };
};