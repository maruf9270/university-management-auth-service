import express from 'express'
import { UserController } from './users.controller'
import { RequestValidation } from './middlewares/vlaidateRequest'

const router = express.Router()
router.post(
  '/create-user',
  RequestValidation.validateUser,
  UserController.createUser
)

export const UserRoute = { router }
