import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const db_connection: string =
  <string>process.env.DB_URL || "mongodb://127.0.0.1:27017/test";

const env = {
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",
  staging: process.env.NODE_ENV === "staging",
  production: process.env.NODE_ENV === "production",
};

export { port, env, db_connection };
