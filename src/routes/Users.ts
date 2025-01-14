import { Router } from 'express'
import { getAllUsers, postEmployee, postApplicant } from '../controllers/Users'

import { postEmployeeSchema, postApplicantSchema } from '../validations/Users'

const router = Router()

router
  .get('/', getAllUsers)
  .post('/employee', postEmployeeSchema, postEmployee)
  .post('/applicant', postApplicantSchema, postApplicant)

export default router
