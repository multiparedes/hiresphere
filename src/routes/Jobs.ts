import { Router } from 'express'
import { getAllJobsGuest, postJob, postJobSchema } from '../controllers/Jobs'

const router = Router()

export default router
  .get('/', getAllJobsGuest)
  .post('/', postJobSchema, postJob)
