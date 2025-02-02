const express  = require('express')
const mongoose = require('mongoose')
const cors     = require('cors')

require('express-async-errors')

const config     = require('./utils/config')
const logger     = require('./utils/logger')
const middleware = require('./utils/middleware')

const messagesRouter = require('./controllers/messages')

const app = express()

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(config.PATH, messagesRouter)
app.use(express.static('dist'))
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
