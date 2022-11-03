import express from 'express'
import dbConnect from './config/db'
import { UserController } from './controllers'
const app = express()

app.use(express.json())

app.use('/user', UserController)

dbConnect().catch((err) => console.log(err))

app.listen(3000, () => {
  console.log('Listening...')
})
