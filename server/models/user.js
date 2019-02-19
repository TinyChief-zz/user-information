const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birth: {
    type: Date
  },
  gender: {
    type: String
  },
  interests: {
    type: String
  },
  updated: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)

function validateRequest (req, res) {
  const schema = {
    email: Joi.string().email(),
    firstName: Joi.string()
      .min(2)
      .max(30),
    lastName: Joi.string()
      .min(2)
      .max(30),
    password: Joi.string(),
    gender: Joi.string().regex(/(male|female)/),
    interests: Joi.string().max(100),
    birth: Joi.date()
  }
  const result = Joi.validate(req.body, schema)
  if (result.error) {
    res.status(400).send('Validation error: ' + result.error.details[0].message)
  }
}

module.exports.User = User
module.exports.validate = validateRequest
module.exports.userSchema = userSchema
