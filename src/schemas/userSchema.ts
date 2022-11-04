import mongoose from 'mongoose'
import { comparePasswords, hashPassword } from '../helpers/hash'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', function (next) {
  const user = this

  if (user && !user.isModified('password')) return next()

  hashPassword(user.password)
    .then(hashed => {
      user.password = hashed
      next()
    }).catch((err) => next(err))
})

userSchema.methods.comparePasswords = async function (plainText: string, next: any) {
  const user = this

  const test = comparePasswords(plainText, user.password).then((value) => next(null, value)).catch((err) => next(err))
  return await test
}

const User = mongoose.model('user', userSchema)

export default User
