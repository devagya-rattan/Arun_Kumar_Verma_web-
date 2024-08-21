// importtim all dependencies
import express from "express";
import { configDotenv } from "dotenv";
import colors from "colors";
// Defining the express routing by assign it to a variable-------->
const app = express();
// middlewares
configDotenv();
app.use(express.json());

// Starting the server on port
app.listen(process.env.PORT, () => {
  console.log(
    ` Server is listening to the port ${process.env.PORT} `.bgCyan.black
  );
});
