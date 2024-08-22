// importtim all dependencies
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import colors from "colors";
import { postgreConnection } from "./Models/database.js";
import userRouter from "./Routes/userRouter.js";
// Defining the express routing by assign it to a variable-------->
const app = express();
// middlewares
configDotenv();
app.use(express.json());
app.use(cors());
app.use(cors());
app.use("/api/users", userRouter);
// Connecting to the database Postgres pg4 admin
postgreConnection();
// Starting the server on port
app.listen(process.env.PORT, () => {
  console.log(
    ` Server is listening to the port ${process.env.PORT} `.bgCyan.black
  );
});
