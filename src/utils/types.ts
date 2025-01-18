import type {
  User,
  Applicant as ApplicantType,
  Employee as EmployeeType
} from '@prisma/client'

export type Applicant = ApplicantType & {
  user: Omit<User, 'password'>
}
export type Employee = EmployeeType & {
  user: Omit<User, 'password'>
}
