import { ZodError, ZodIssue } from 'zod'
import { IGenericErrorResponst } from '../interfaces/common'
import { IGenericError } from '../interfaces/error'

const handleZodError = (error: ZodError): IGenericErrorResponst => {
  const statusCode = 400
  const message = 'Validation error'
  const errorMessages: IGenericError[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })

  return {
    message,
    statusCode,
    errorMessages,
  }
}
export default handleZodError
