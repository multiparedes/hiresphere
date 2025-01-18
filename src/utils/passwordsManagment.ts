import { hashSync, compareSync } from 'bcrypt'

function hashPassword(password: string): string {
  try {
    return hashSync(password, 10)
  } catch (err) {
    console.error('Error during password hashing. ', err)
    throw err
  }
}

async function checkPassword(password: string, hash: string): Promise<boolean> {
  try {
    return compareSync(password, hash)
  } catch (err) {
    console.error('Error during password hashing. ', err)
    throw err
  }
}

export { hashPassword, checkPassword }
