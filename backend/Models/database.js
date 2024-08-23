import { Sequelize } from "sequelize";
import colors from "colors";
export const sequelize = new Sequelize(
  "postgres://postgres:Devagya@123@localhost:5432/arun-portfolio",
  { dialect: "postgres" }
);

export const postgreConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log(
      "Connection to postgres has been established successfully.".bgBlue.white
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
