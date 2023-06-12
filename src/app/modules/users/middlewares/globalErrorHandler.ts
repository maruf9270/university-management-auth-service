/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import config from '../../../../config/index'
import { IGenericError } from '../../../../interfaces/error'
import { handleValidationError } from '../../../../errors/handleValidationError'
import ApiError from '../../../../errors/ApiError'
import { errorLogger } from '../../../../shared/logger'
import { ZodError } from 'zod'
import handleZodError from '../../../../errors/handleZodError'

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //using logger for loggng error
  config.env !== 'production'
    ? console.log('Error from global error handler ~ ', error)
    : errorLogger.error('Error from global error handler ', error)
  let statusCode = 500
  let message = 'Something went wrong'
  let errorMessages: IGenericError[] = []
  // eslint-disable-next-line prefer-const
  let stack = config.env !== 'production' ? error?.stack : undefined

  //   Handling validation error
  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode as number
    errorMessages = simplifiedError.errorMessages
    message = simplifiedError.message
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError.statusCode as number
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode as number
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack,
  })
  next()
}

export default globalErrorHandler
