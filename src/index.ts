import express from 'express'
import dbConnect from './config/db'
import router from './routes'
const app = express()

app.use(express.json())

app.use('/', router)

dbConnect().catch((err) => console.log(err))

app.listen(3000, () => {
  console.log('Listening...')
})
