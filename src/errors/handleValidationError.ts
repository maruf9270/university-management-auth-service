import mongoose from 'mongoose'
import { IGenericError } from '../interfaces/error'
import { IGenericErrorResponst } from '../interfaces/common'

export const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponst => {
  const errors: IGenericError[] = Object.values(err.errors).map(
    (e: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: e?.path,
        message: e?.message,
      }
    }
  )
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}
