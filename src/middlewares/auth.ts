import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET || 'SUP3R_SECR37'

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]

      jwt.verify(token, secret)
      next()
    } else {
      res.status(401).send({ message: 'Unauthorized' })
    }
  } catch (e) {
    console.error(e)
    res.status(401).send({ message: 'Unauthorized' })
  }
}

export default authMiddleware
