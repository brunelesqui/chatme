require('dotenv').config()

const PATH        = '/api/messages'
const PORT        = process.env.PORT
const SERVERNAME  = process.env.SERVERNAME
const MONGODB_URI = process.env.NODE_ENV === 'production'
  ? process.env.MONGODB_URI
  : process.env.TEST_MONGODB_URI

module.exports = {
  MONGODB_URI,
  PATH,
  PORT,
  SERVERNAME
}