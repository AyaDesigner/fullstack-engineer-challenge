import { db_connection } from "./config/environment";
import app from "./app";
import mongoose from "mongoose";


mongoose.connect(db_connection).then(() => {
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
