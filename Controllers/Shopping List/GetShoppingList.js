const ShoppingList = require('../../Models/Shopping List/ShoppingList.js');

const GetShoppingList = async(req, res) => {
  try {
    const roomId = req.query.roomId;
    const shoppingList = await ShoppingList.find({roomId: roomId}).select('roomId items message participants -_id');
  
    if (shoppingList) {
      res.status(200).json({
        status: "Success",
        shoppingList
      });
    } else {
      return res.status(404).json({
        status: "Failed",
        message: "Shopping lists not found!"
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Failed to retrieve shopping lists!"
    });
  }
};

module.exports = GetShoppingList;