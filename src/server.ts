import path from "path";

import mongoose, { Error } from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: path.join(__dirname, "../config.env") });

const server = app.listen(8080, () => {
  console.log("App running on port 8080");
});

const DB: string = process.env.DATABASE_URL;

mongoose.Promise = Promise;
mongoose
  .connect(DB, {
    dbName: "catering-events",
  })
  .then(() => console.log("DB connection successful!"));
mongoose.connection.on("error", (error: Error) => console.log(error));
