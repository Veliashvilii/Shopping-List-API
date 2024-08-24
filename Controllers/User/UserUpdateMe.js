const Auth = require('../../Models/Auth/Auth.js');

const UserUpdateMe = async(req, res) => {
  try {
    const {fullName, email} = req.body;
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: No user ID found" });
    }

    let updateFields = {};
    if (fullName) updateFields.fullName = fullName;
    if (email) updateFields.email = email;

    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        status: "Failed",
        message: "No user information provided to update!"
      });
    }

    await Auth.findByIdAndUpdate(userId, updateFields);
    const user = await Auth.findById(userId).lean();

    res.status(200).json({
      status: "Success",
      user,
      message: "User information has been updated!"
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message
    });
  }
};

module.exports = UserUpdateMe;