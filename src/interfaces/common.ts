import { IGenericError } from './error'

export type IGenericErrorResponst = {
  statusCode: number | string
  message: string
  errorMessages: IGenericError[]
}
