import mongoose from "mongoose";

async function dbConnect() {
  console.log("connecting to MongoDB...")
  await mongoose.connect('mongodb://localhost:27017/test')
    .then(()=>console.log("success!"))
    .catch(err => console.log(err));
}

export default dbConnect;