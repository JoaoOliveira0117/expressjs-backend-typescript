import express from 'express'
import cors from 'cors'
import dbConnect from './config/db'
import router from './routes'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/', router)

dbConnect().catch((err) => console.log(err))

app.listen(3000, () => {
  console.log('App up and running at http://localhost:3000')
})
