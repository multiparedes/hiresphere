import express, { Request, Response } from 'express'
import 'dotenv/config'

// Env file variables
const PORT = process.env.LOCAL_PORT || 8080

const app = express()

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

app.get('/health', (req: Request, res: Response) => {
  return res.status(200).send({
    status: 'Ok',
    uptime: process.uptime(),
    date: new Date()
  })
})
