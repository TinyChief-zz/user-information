const { User, validate } = require('../models/user')
const bcrypt = require('bcryptjs')

function hashPassword (password, options) {
  const SALT_FACTOR = 8
  const salt = bcrypt.genSaltSync(SALT_FACTOR)
  return bcrypt.hashSync(password, salt)
}

// Get ALL posts
module.exports.login = async (req, res) => {
  try {
    // Does user with provided email exist
    const candidate = await User.findOne({ email: req.body.email })
    if (!candidate) {
      res.status(404).send({
        message: 'Нет пользователя с такими данными.'
      })
    }
    // Compare provided password with one from DB
    const passwordIsRight = bcrypt.compareSync(
      req.body.password,
      candidate.password
    )
    if (!passwordIsRight) {
      res.status(400).json({
        message: 'Проверьте правильность введеного пароля.'
      })
    }

    res.status(200).send(candidate)
  } catch (err) {
    res.status(400).json({
      error: err
    })
  }
}

module.exports.register = async (req, res) => {
  try {
    // Validate req.body to have email, password and name
    validate(req, res)
    console.log(req.body)
    const candidate = await User.findOne({ email: req.body.email })

    if (candidate) {
      res.status(400).json({
        message: 'Пользователь с такой электронной почтой уже зарегистрирован'
      })

      return
    }

    req.body.password = hashPassword(req.body.password)

    const user = new User(req.body)
    const result = await user.save(user)

    res.send(result)
  } catch (err) {
    res.status(400).json({
      error: err
    })
  }
}
