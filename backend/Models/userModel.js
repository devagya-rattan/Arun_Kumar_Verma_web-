import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true, required: true }
);

const User = mongoose.model("users", user);


export default User;

