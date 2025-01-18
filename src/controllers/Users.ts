import type { Request, Response } from 'express'
import { prisma } from '../utils/db'
import { hashPassword } from '../utils/passwordsManagment'
import type { Applicant, Employee } from '../utils/types'
import { formatUser } from '../utils/formatQueries'

async function getAllUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany({
    include: { employee: true, applicant: true }
  })

  return res.json(users)
}

async function getAllEmployees(req: Request, res: Response) {
  const employees = await prisma.employee.findMany({
    include: { user: true }
  })

  return res.json(employees.map((u: Employee) => formatUser(u)))
}

async function getAllApplicants(req: Request, res: Response) {
  const applicants = await prisma.applicant.findMany({
    include: { user: true }
  })

  return res.json(applicants.map((a: Applicant) => formatUser(a)))
}

async function checkUserExists(email: string): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  return !!user?.id
}

async function postEmployee(req: Request, res: Response) {
  const { email, password, name, companyName, website } = req.body

  if (await checkUserExists(email)) {
    return res
      .status(400)
      .send({ message: 'User already exists with this email' })
  }

  try {
    const newEmployee = await prisma.employee.create({
      data: {
        companyName,
        website,
        user: {
          create: {
            name,
            email,
            password: hashPassword(password),
            type: 'Employee'
          }
        }
      },
      include: {
        user: true
      }
    })

    res.json(formatUser(newEmployee))
  } catch (error) {
    console.error(error)
    res.status(500).send({ error, message: 'Error creating employee' })
  }
}

async function postApplicant(req: Request, res: Response) {
  const { email, password, name, resume } = req.body

  if (await checkUserExists(email)) {
    return res
      .status(400)
      .send({ message: 'User already exists with this email' })
  }

  try {
    const newApplicant = await prisma.applicant.create({
      data: {
        resume,
        user: {
          create: {
            name,
            email,
            password: hashPassword(password),
            type: 'Applicant'
          }
        }
      },
      include: {
        user: true
      }
    })

    res.json(formatUser(newApplicant))
  } catch (error) {
    console.error(error)
    res.status(500).send({ error, message: 'Error creating applicant' })
  }
}

export {
  getAllUsers,
  getAllEmployees,
  getAllApplicants,
  postEmployee,
  postApplicant
}
