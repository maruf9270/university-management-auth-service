import express from 'express'
import { RequestValidation } from '../../middlewares/vlaidateRequest'
import { AcademicSemisterValidation } from './academicSemister.validate'
import { AcademicSemisterController } from './academicSemister.controller'

const router = express.Router()

router.post(
  '/create-semister',
  RequestValidation(AcademicSemisterValidation),
  AcademicSemisterController.createAcademicSemister
)

export const AcademicSemisterRoute = { router }
