import { NextFunction, Request, Response } from 'express'
import { error } from '../helpers/responses'
import { validateToken } from '../helpers/token'

async function authenticate (req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const header = req.headers.authorization ?? ''
    const token = header.split(' ')[1]
    const isValid = validateToken(token)

    if (!isValid) return error(res, 'Invalid Bearer token')

    return next()
  } catch (err: any) {
    return error(res, err.message)
  }
}

export default authenticate
