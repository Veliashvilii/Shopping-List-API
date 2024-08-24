const ShoppingList = require('../../Models/Shopping List/ShoppingList.js');
const { v4: uuidv4 } = require('uuid');

const createShoppingList = async(req, res) => {
  try {
    const {items, note} = req.body;
    const userId = req.userId;
    //const roomId = generateRoomId()
    const roomId = `room_${uuidv4()}`;

    console.log('Generated roomId:', roomId); // Debugging

    const room = await ShoppingList.create({
      roomId: roomId,
      items: items,
      message: note,
      participants: userId
    });

    res.status(201).json({
      status: "Success",
      room,
      message: "OK"
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message
    })
  }
};

module.exports = createShoppingList;