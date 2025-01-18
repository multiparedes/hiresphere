import { Router } from 'express'
import { loginUser } from '../controllers/Auth'
import { loginSchema } from '../validations/Auth'

const router = Router()

router.post('/login', loginSchema, loginUser)

export default router
