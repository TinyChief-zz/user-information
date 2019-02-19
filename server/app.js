require('dotenv').config()
const debug = require('debug')('app:startup')
const express = require('express')
const cors = require('cors')
const router = require('./routes')
const mongoose = require('mongoose')
const app = express()

mongoose
  .connect(
    process.env.MONGO_DB
  )
  .then(() => {
    // mongoose.connection.db.dropDatabase()
    // console.log('DB was dropped')
    console.log('Connected to MongoDB...')
  })
  .catch(err => console.log(err))

app.use(cors())
app.use(express.json())
app.use(router)

// Configuration
debug(`App is started in ${process.env.NODE_ENV} mode.`)

const port = process.env.PORT || 3000
app.listen(port, () => {
  debug(`Listening on port ${port}...`)
})
