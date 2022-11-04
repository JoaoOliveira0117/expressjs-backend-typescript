import { Request, Response } from 'express'
import { BaseController } from '.'
import authenticate from '../middlewares/auth'
import { User } from '../schemas'

class UserController extends BaseController {
  constructor () {
    super()

    this.router.get('', this.getUsers)
    this.router.post('/register', this.postUser)

    this.router.use(authenticate)
    this.router.get('/testing', this.testAuthentication)
  }

  async getUsers (req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find()
      return res.json({
        data: users
      })
    } catch (err: any) {
      return res.status(400).json({
        error: err.message
      })
    }
  }

  async postUser (req: Request, res: Response): Promise<Response> {
    try {
      const user = req.body
      const newUser = new User(user)
      await newUser.save()
      return res.json({
        data: newUser
      })
    } catch (err: any) {
      return res.status(400).json({
        error: err.message
      })
    }
  }

  async testAuthentication (req: Request, res: Response): Promise<Response> {
    try {
      return res.json({
        data: 'Success!'
      })
    } catch (err: any) {
      return res.status(400).json({
        error: err.message
      })
    }
  }
}

const userController = new UserController()
export default userController.router
