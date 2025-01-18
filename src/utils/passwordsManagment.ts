import { hash, compare } from 'bcrypt'

async function hashPassword(password: string): Promise<string> {
  try {
    return await hash(password, 10)
  } catch (err) {
    console.error('Error during password hashing. ', err)
    throw err
  }
}

async function checkPassword(password: string, hash: string): Promise<boolean> {
  try {
    return await compare(password, hash)
  } catch (err) {
    console.error('Error during password hashing. ', err)
    throw err
  }
}

export { hashPassword, checkPassword }
