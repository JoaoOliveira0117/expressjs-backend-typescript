import mongoose from 'mongoose'

async function dbConnect (): Promise<void> {
  try {
    console.log('connecting to MongoDB...')
    await mongoose.connect('mongodb://localhost:27017/test')
    console.log('success!')
  } catch (err: any) {
    throw new Error(err)
  }
}

export default dbConnect
