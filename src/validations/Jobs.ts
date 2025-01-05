import { z } from 'zod'
import { validateRequest } from 'zod-express-middleware'

// Post job validations
export const postJobSchema = validateRequest({
  body: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    skills: z.string().min(1),
    salary: z.string().min(1),
    location: z.string().min(1),
    type: z.string().min(1)
  })
})
