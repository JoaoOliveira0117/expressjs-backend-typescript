import { NextFunction, Request, Response } from 'express'
import { validateToken } from '../helpers/token'

async function authenticate (req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const header = req.headers.authorization ?? ''
    const token = header.split(' ')[1]
    const isValid = validateToken(token)

    if (!isValid) return res.status(401).json({ error: 'Invalid Bearer token' })

    return next()
  } catch (err: any) {
    return res.status(401).json({ error: err.message })
  }
}

export default authenticate
