import { Request, Response } from 'express'
import { prisma } from '../db'
import { query, validationResult, matchedData } from 'express-validator'

const getAllJobsGuest = async (req: Request, res: Response) => {
  try {
    const jobs = await prisma.job.findMany()
    return res.status(200).send(jobs)
  } catch (error) {
    return res.status(500).send({ error, message: 'Error fetching jobs' })
  }
}

// Post job validations
const postJobSchema = [
  query('title').notEmpty().withMessage('field_cannot_be_empty'),
  query('description').notEmpty().withMessage('field_cannot_be_empty'),
  query('skills').notEmpty().withMessage('field_cannot_be_empty'),
  query('salary').notEmpty().withMessage('field_cannot_be_empty'),
  query('location').notEmpty().withMessage('field_cannot_be_empty'),
  query('type').notEmpty().withMessage('field_cannot_be_empty')
]

const postJob = async (req: Request, res: Response) => {
  try {
    const results = validationResult(req)
    if (!results.isEmpty()) {
      return res.status(400).send({ errors: results.array() })
    }

    const job = await prisma.job.create({
      ...matchedData(req)
    })

    return res.status(201).send(job)
  } catch (error) {
    return res.status(500).send({ error, message: 'Error creating job' })
  }
}

export { getAllJobsGuest, postJob, postJobSchema }
