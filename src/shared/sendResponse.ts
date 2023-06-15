import { Response } from 'express'
const sendResponse = <T>(
  res: Response,
  data: {
    statusCode: number
    success: boolean
    message?: string
    data: T
  }
): void => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  })
}

export default sendResponse
