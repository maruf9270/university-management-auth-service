import mongoose from 'mongoose'
import { app } from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

async function database() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      logger.info(`Server started successfully on port :${config.port}`)
    })
    logger.info('Database connect successfully')
  } catch (err) {
    errorLogger.error('Faild to connect to the database', err)
  }
}

database()
