import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const findUser = await User.findOne({ where: { email } });
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (findUser) {
      res.status(200).json({ message: "The user already exists" });
    } else {
      const userData = { name, email, password: hashedPassword };
      const user = await User.create(userData);
      const payload = {
        user: {
          id: user.id,
        },
      };
      jsonwebtoken.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) {
            console.error(err.message);
            return res.status(500).send("Server error");
          }
          res.json({ user, token });
        }
      );
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) {
      res.status(500).json({ message: "user not found please register" });
    }
    const validateuser = await bcrypt.compare(password, findUser.password);
    if (!validateuser) {
      res.status(500).json({ message: "Invalid password" });
    }
    const token = jsonwebtoken.sign({ id: findUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({
      token,
      user: {
        id: findUser.id,
        username: findUser.username,
        email: findUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
