import { port } from "./config/environment";
import app from "./app";
import mongoose from "mongoose";


mongoose
  .connect(
    "mongodb://127.0.0.1:27017/test"
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  });


const start = async () => {
  try {
    await app.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  } catch {
    console.log("Not able to run GraphQL server");
  }
};

start();
