const Auth = require('../../Models/Auth/Auth.js');

const GetMe = async(req, res) => {
  try {
    const userId = req.userId;
    const user = await Auth.findById(userId).select('-password -__v');

    if (user) {
      res.status(200).json({
        status: "Success",
        user
      });
    } else {
      return res.status(404).json({
        status: "Failed",
        message: "User not found!"
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Failed to found user!"
    });
  }
};

module.exports = GetMe;