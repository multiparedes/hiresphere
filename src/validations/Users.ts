import { z } from 'zod'
import { validateRequest } from 'zod-express-middleware'

const baseUserSchema = {
  email: z.string().email(),
  password: z.string().min(4),
  name: z.string().nonempty()
}

const postEmployeeSchema = validateRequest({
  body: z.object({
    ...baseUserSchema,
    companyName: z.string().nonempty(),
    website: z.string().url()
  })
})

const postApplicantSchema = validateRequest({
  body: z.object({
    ...baseUserSchema,
    resume: z.string().nonempty()
  })
})

export { postEmployeeSchema, postApplicantSchema }
