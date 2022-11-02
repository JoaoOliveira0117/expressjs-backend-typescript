import express from "express";
import dbConnect from "./config/db";
import { UserController } from "./controllers";
import { Test } from "./schemas";
const app = express();

app.use(express.json());

app.use("/user", UserController);

app.get("/", (req, res) => {
  const test = new Test({ name: "I'm a test!"});
  test.save();
  res.send(test.name);
});

const start = async () => {
  await dbConnect();

  app.listen(3000, ()=>{
    console.log("Listening...")
  });
}

start();