import _ from 'lodash'
import type { Applicant, Employee } from './types'

const formatUser = (user: Applicant | Employee) => {
  return _.omit(
    {
      ...user.user,
      ...user
    },
    ['userId', 'user', 'role']
  )
}

export { formatUser }
