const express = require('express')
const morgan = require('morgan')
const auth = require('./auth')
const router = express.Router()

router.use(morgan('combined'))

router.use('/api/auth', auth)

module.exports = router
