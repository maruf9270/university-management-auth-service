import express, { Application, Request, Response } from 'express'
import cors from 'cors'
export const app: Application = express()
export const port = process.env.PORT || 5000

// Using cors
app.use(cors())

// Using body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// For testing purpose api route
app.get('/', (req: Request, res: Response) => {
  res.send('Server is working')
})
