import bcrypt from 'bcrypt'

async function hashPassword (plainText: string): Promise<string> {
  try {
    const hash = await bcrypt.hash(plainText, 10)
    return hash
  } catch (err: any) {
    throw new Error(err)
  }
}

async function comparePasswords (plainText: string, hash: string): Promise<boolean> {
  try {
    const result = await bcrypt.compare(plainText, hash)
    return result
  } catch (err: any) {
    throw new Error(err)
  }
}

export { hashPassword, comparePasswords }
