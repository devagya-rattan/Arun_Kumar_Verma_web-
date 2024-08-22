// importtim all dependencies
import express from "express";
import { configDotenv } from "dotenv";
import colors from "colors";
import mongoose from "mongoose";
import userRouter from "./Routes/userRouter.js"
// Defining the express routing by assign it to a variable-------->
const app = express();
// middlewares
configDotenv();
app.use(express.json());
app.use("/api/users",userRouter)
// Connecting to the database MONGO_DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(" Database connected to mongodb ".bgMagenta.white))
  .catch((error) => console.log("error connected to databse ", error));
// Starting the server on port
app.listen(process.env.PORT, () => {
  console.log(
    ` Server is listening to the port ${process.env.PORT} `.bgCyan.black
  );
});
