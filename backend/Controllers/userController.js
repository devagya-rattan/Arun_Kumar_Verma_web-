import  User  from "../Models/userModel.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newuser = new User({
      name,
      email,
      password,
    });
    const users = await newuser.save();
    res.status(201).json(users);
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
