const ShoppingList = require('../../Models/Shopping List/ShoppingList.js');

const GetMyShoppingLists = async(req, res) => {
  try {
    const userId = req.userId;
    const shoppingLists = await ShoppingList.find({participants: userId}).select('roomId items message participants -_id');

    if (shoppingLists) {
      res.status(200).json({
        status: "Success",
        shoppingLists
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
    })
  }
};

module.exports = GetMyShoppingLists;