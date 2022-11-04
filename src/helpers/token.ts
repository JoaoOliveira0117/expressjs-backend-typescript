import jwt from 'jsonwebtoken'

const JWT_SECRET_KEY = 'super_secret_key'

function generateToken (): string {
  const jwtSecretKey = JWT_SECRET_KEY
  const data = {
    time: Date(),
    userId: 12
  }

  const token = jwt.sign(data, jwtSecretKey)
  return token
}

function validateToken (token: string): boolean {
  const verified = jwt.verify(token, JWT_SECRET_KEY)
  return !!verified
}

export { generateToken, validateToken }
