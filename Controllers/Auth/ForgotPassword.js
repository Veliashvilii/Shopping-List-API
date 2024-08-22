const Auth = require('../../Models/Auth.js');

const ForgotPassword = async(req, res) => {
  try {
    const email = req.body.email
    const user = await Auth.findOne({email})

    if (user) {
      res.status(200).json({
        status: "Success",
        message: "A password reset email has been sent to your email address. Please check your inbox"
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: "Email address not found. Please check and try again."
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Failed to send password reset email. Please try again later or contact support."
    })
  }
}

module.exports = ForgotPassword;