import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'
export const app: Application = express()
export const port = process.env.PORT || 5000

// Using cors
app.use(cors())

// Using body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// For testing purpose api route
app.get('/', async (req: Request, res: Response) => {
  res.send('Server is working')
})

// Application routes
// app.use('/api/v1/users/', UserRoute.router)
// app.use('/api/v1/academic-semister', AcademicSemisterRoute.router)

app.use('/api/v1', routes)
// Using globalErrorHandler
app.use(globalErrorHandler)
