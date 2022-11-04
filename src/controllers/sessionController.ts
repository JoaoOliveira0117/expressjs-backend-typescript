import { Request, Response } from 'express'
import { generateToken } from '../helpers/token'
import { User } from '../schemas'
import BaseController from './baseController'

class SessionController extends BaseController {
  constructor () {
    super()

    this.router.post('/login', this.login)
  }

  async login (req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) {
        throw new Error('user not found')
      }

      // @ts-expect-error
      const doesPasswordMatch = user.comparePasswords(req.body.password, (err: any, isMatch: boolean) => {
        if (err) throw err
        return isMatch
      })

      if (!doesPasswordMatch) {
        throw new Error('Incorrect password')
      }

      return res.json({
        data: {
          email: user.email,
          token: generateToken()
        }
      })
    } catch (err: any) {
      return res.status(400).json({
        error: err.message
      })
    }
  }
}

const sessionController = new SessionController()
export default sessionController.router
