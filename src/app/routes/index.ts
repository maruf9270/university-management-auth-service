import express from 'express'
import { UserRoute } from '../modules/users/user.route'
import { AcademicSemisterRoute } from '../modules/academicSemister/academicSemister.route'

const routes = express.Router()

routes.use('/users', UserRoute.router)
routes.use('/academic-semisters', AcademicSemisterRoute.router)

export default routes
