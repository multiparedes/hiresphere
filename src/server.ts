import express, { Request, Response } from 'express'

import 'dotenv/config'
import morgan from 'morgan'

// Env file variables
const PORT = process.env.LOCAL_PORT || 8080

const app = express()

app.use(express.json())
app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :date[iso] :remote-addr'
  )
)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

app.get('/health', (req: Request, res: Response) => {
  return res.status(200).send({
    status: 'Okss',
    uptime: process.uptime(),
    date: new Date()
  })
})

// Import routes
import Users from './routes/Users'
import Auth from './routes/Auth'

// Define server routes
app.use('/users', Users)
app.use('/auth', Auth)
