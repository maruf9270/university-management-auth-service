/* eslint-disable no-console */
import mongoose from 'mongoose'
import { app } from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

let server: Server
// Handling uncaught exception on server
process.on('uncaughtException', error => {
  console.log('Uncaught exception detected. Shutting of ....', error)
  process.exit(1)
})

// Handling Sigterm
process.on('SIGTERM', () => {
  logger.info('SIGTERm is received')
  if (server) {
    server.close()
  }
  process.exit(1)
})
async function database() {
  try {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
      logger.info(`Server started successfully on port :${config.port}`)
    })
    logger.info('Database connect successfully')
  } catch (err) {
    errorLogger.error('Faild to connect to the database', err)
  }

  // HANDLING Unhandled rejection
  process.on('unhandledRejection', error => {
    errorLogger.error(error)
    console.log('Unhandled promise dected , We are closing our server....')
    if (Server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

database()
