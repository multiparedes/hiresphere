import { Router } from 'express'
import {
  getAllUsers,
  postEmployee,
  postApplicant,
  getAllEmployees,
  getAllApplicants
} from '../controllers/Users'

import authMiddleware from '../middlewares/auth'
import { postEmployeeSchema, postApplicantSchema } from '../validations/Users'

const router = Router()

router
  .get('/', authMiddleware, getAllUsers)
  .get('/employee', authMiddleware, getAllEmployees)
  .post('/employee', postEmployeeSchema, postEmployee)
  .get('/applicant', authMiddleware, getAllApplicants)
  .post('/applicant', postApplicantSchema, postApplicant)

export default router
