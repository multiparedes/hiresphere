import type { Request, Response } from 'express'
import { prisma } from '../utils/db'
import { checkPassword } from '../utils/passwordsManagment'
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'SUP3R_SECR37'
const expirationTime = process.env.JWT_EXPIRES_IN || '1h'

async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: {
      email
    },
    select: {
      password: true,
      type: true
    }
  })

  if (!user) return res.status(401).send({ message: 'User not found' })
  const passwordValid = await checkPassword(password, user.password)

  if (passwordValid) {
    const fullUser = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (fullUser) {
      const token = jwt.sign(fullUser, secret, {
        expiresIn: expirationTime
      })
      return res.status(200).send({ user: fullUser, token })
    }
  } else {
    return res.status(401).send({ message: 'Invalid password' })
  }
}

export { loginUser }
