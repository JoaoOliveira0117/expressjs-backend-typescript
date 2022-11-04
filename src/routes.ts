import express from 'express'
import { SessionController, UserController } from './controllers'

const router = express.Router()

router.use('/', SessionController)
router.use('/user', UserController)

export default router
