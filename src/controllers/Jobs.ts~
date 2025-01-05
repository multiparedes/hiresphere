import { Request, Response } from 'express'
import { prisma } from '../db'

const getAllJobsGuest = async (req: Request, res: Response) => {
  try {
    const jobs = await prisma.job.findMany()
    return res.status(200).send(jobs)
  } catch (error) {
    return res.status(500).send({ error, message: 'Error fetching jobs' })
  }
}

const postJob = async (req: Request, res: Response) => {
  try {
    const job = await prisma.job.create({
      ...req.body
    })

    return res.status(201).send(job)
  } catch (error) {
    return res.status(500).send({ error, message: 'Error creating job' })
  }
}

export { getAllJobsGuest, postJob }
