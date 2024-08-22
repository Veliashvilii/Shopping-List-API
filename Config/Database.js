const mongoose = require('mongoose');

const database = () => {
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connect is Success!")
  }).catch((err) => {
    console.log(err)
  })
}

module.exports = database