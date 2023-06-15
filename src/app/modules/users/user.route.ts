import express from 'express'
import { UserController } from './users.controller'
import { RequestValidation } from '../../middlewares/vlaidateRequest'
import { UserValidation } from './user.validation'

const router = express.Router()
router.post(
  '/create-user',
  RequestValidation(UserValidation),
  UserController.createUser
)

export const UserRoute = { router }
