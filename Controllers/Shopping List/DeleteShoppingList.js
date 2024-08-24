const ShoppingList = require('../../Models/Shopping List/ShoppingList.js');

const DeleteShoppingList = async(req, res) => {
  try {
    const roomId = req.query.roomId;
    const shoppingList = await ShoppingList.findOne({ roomId: roomId });

    if (!shoppingList) {
      return res.status(404).json({
        status: "Failed",
        message: "Shopping list not found!"
      });
    }

    await ShoppingList.findByIdAndDelete(shoppingList._id);

    const isShoppingList = await ShoppingList.findOne({ roomId: roomId });
    
    if (!isShoppingList) {
      return res.status(200).json({
        status: "Success",
        message: "Shopping list deleted successfully!"
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: "Shopping List was not deleted successfully!"
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message
    });
  }
};

module.exports = DeleteShoppingList;
