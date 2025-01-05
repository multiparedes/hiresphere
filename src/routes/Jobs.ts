import { Router } from 'express'
import { getAllJobsGuest, postJob } from '../controllers/Jobs'
import { postJobSchema } from '../validations/Jobs'

const router = Router()

export default router
  .get('/', getAllJobsGuest)
  .post('/', postJobSchema, postJob)