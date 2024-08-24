const Auth = require('../../Models/Auth/Auth.js');
const Bcrypt = require('bcryptjs');

const UpdateMyPassword = async(req, res) => {
  try {
    const { password, new_password, new_password_confirmation } = req.body;
    const userId = req.userId;

    if(!userId) {
      return res.status(401).json({ 
        status: "Failed",
        message: "Unauthorized: No user ID found"
      });
    }

    if (new_password !== new_password_confirmation) {
      return res.status(400).json({
        status: "Failed",
        message: "Passwords do not match!"
      });
    }

    const user = await Auth.findById(userId);

    if (!user) {
      return res.status(404).json({
        status: "Failed",
        message: "User not found!"
      });
    }

    const isMatch = await Bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        status: "Failed",
        message: "Current password is incorrect!"
      });
    }

    const hashedNewPassword = await Bcrypt.hash(new_password, 10);
    await Auth.findByIdAndUpdate(userId, { password: hashedNewPassword });

    res.status(200).json({
      status: "Success",
      message: "Your password has been updated!"
    });

  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message
    });
  }
};

module.exports = UpdateMyPassword;