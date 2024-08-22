const Auth = require('../../Models/Auth/Auth.js');
const Bcrypt = require('bcryptjs');
const Jwt = require('jsonwebtoken')

const login = async(req, res) => {
  try {
    const {email, password} = req.body
    const user = await Auth.findOne({email})

    if (!user) {
      return res.status(500).json({
        status: "Failed",
        message: "This email is not found on system!"
      })
    }

    const comparePassword = await Bcrypt.compare(password, user.password)
    if (!comparePassword) {
      return res.status(500).json({
        status: "Failed",
        message: "Your password is not match!"
      })
    }

    const token = Jwt.sign({id: user.id}, process.env.SECRET_TOKEN, {expiresIn: '1h'})
    res.status(200).json({
      status: "Success",
      user,
      token
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message
    })
  }
}

module.exports = login