import type { Request, Response } from 'express'
import { prisma } from '../utils/db'
import { hashPassword } from '../utils/passwordsManagment'

async function getAllUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany({
    include: { employee: true, applicant: true }
  })

  return res.json(users)
}

async function postEmployee(req: Request, res: Response) {
  const { email, password, name, companyName, website } = req.body

  try {
    const newEmployee = await prisma.employee.create({
      data: {
        companyName,
        website,
        user: {
          create: {
            name,
            email,
            password: await hashPassword(password),
            type: 'Employee'
          }
        }
      },
      include: {
        user: true
      }
    })

    res.json(newEmployee)
  } catch (error) {
    console.error(error)
    res.status(500).send({ error, message: 'Error creating employee' })
  }
}

async function postApplicant(req: Request, res: Response) {
  const { email, password, name, resume } = req.body

  try {
    const newApplicant = await prisma.applicant.create({
      data: {
        resume,
        user: {
          create: {
            name,
            email,
            password: await hashPassword(password),
            type: 'Applicant'
          }
        }
      },
      include: {
        user: true
      }
    })

    res.json(newApplicant)
  } catch (error) {
    console.error(error)
    res.status(500).send({ error, message: 'Error creating applicant' })
  }
}

export { getAllUsers, postEmployee, postApplicant }
