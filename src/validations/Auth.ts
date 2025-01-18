import { z } from 'zod'
import { validateRequest } from 'zod-express-middleware'

const loginSchema = validateRequest({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(4)
  })
})

export { loginSchema }
