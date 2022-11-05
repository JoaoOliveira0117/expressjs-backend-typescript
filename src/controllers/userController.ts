import { Request, Response } from 'express'
import { BaseController } from '.'
import { error, success } from '../helpers/responses'
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
      return success(res, users)
    } catch (err: any) {
      return error(res, err.message)
    }
  }

  async postUser (req: Request, res: Response): Promise<Response> {
    try {
      const user = req.body
      const newUser = new User(user)
      await newUser.save()
      return success(res, newUser)
    } catch (err: any) {
      return error(res, err.message)
    }
  }

  async testAuthentication (req: Request, res: Response): Promise<Response> {
    try {
      return success(res, 'Success!')
    } catch (err: any) {
      return error(res, err.message)
    }
  }
}

const userController = new UserController()
export default userController.router
