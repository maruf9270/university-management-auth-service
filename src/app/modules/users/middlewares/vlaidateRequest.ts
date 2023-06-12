import { NextFunction, RequestHandler, Request, Response } from 'express'
import { UserValidation } from '../user.validation'

// const validateUser =
//   () => async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await UserValidation.parseAsync({
//         body: req.body.user,
//         querry: req.query,
//         params: req.params,
//         cookies: req.cookies,
//       })
//       next()
//     } catch (error) {
//       next(error)
//     }
//   }

const validateUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserValidation.parseAsync({
      body: req.body,
      querry: req.query,
      params: req.params,
      cookies: req.cookies,
    })
    next()
  } catch (error) {
    next(error)
  }
}

export const RequestValidation = {
  validateUser,
}
