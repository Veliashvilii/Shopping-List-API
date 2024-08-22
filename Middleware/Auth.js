const Jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    let decodedData;

    if (token) {
      decodedData = Jwt.verify(token, process.env.SECRET_TOKEN);
      req.userId = decodedData?.id || decodedData?.sub;
    } else {
      return res.status(401).json({ message: "Authentication token missing or invalid" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = auth;