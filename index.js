const server = require('./app') // la aplicación Express real
const config = require('./utils/config')
const logger = require('./utils/logger')

server.listen(config.PORT, () => {
  logger.info(`${config.SERVERNAME} Server running on port ${config.PORT}`)
})
