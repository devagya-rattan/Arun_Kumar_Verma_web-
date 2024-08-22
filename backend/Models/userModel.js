import { DataTypes } from "sequelize";
import { sequelize } from "./database.js"; // Ensure this import is correct

export const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Uncomment this if emails need to be unique
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// module.exports = User; // If you need compatibility with CommonJS
