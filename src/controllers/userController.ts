import { Request, Response } from "express";
import { BaseController } from ".";
import { User } from "../schemas";

class UserController extends BaseController  {
  constructor() {
    super();

    this.router.get('', this.getUsers);
    this.router.post('', this.postUser);
  }

  async getUsers(req: Request, res: Response) {
    const users = await User.find();
    return res.json({
      data: users
    })
  }

  async postUser(req: Request, res: Response) {
    const user = { name: req.body.name, email: req.body.email };
    const newUser = new User(user)
    await newUser.save();
    return res.json({
      data: newUser 
    })
  }
}

const userController = new UserController();
export default userController.router;