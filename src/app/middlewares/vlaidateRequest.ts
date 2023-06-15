import { NextFunction, Request, Response } from 'express'

import { AnyZodObject } from 'zod'

const vlaidateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
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

// const validateUser: RequestHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await UserValidation.parseAsync({
//       body: req.body,
//       querry: req.query,
//       params: req.params,
//       cookies: req.cookies,
//     })
//     next()
//   } catch (error) {
//     next(error)
//   }
// }

export const RequestValidation = vlaidateRequest
