import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN } from "../utils/constants.js";
import UserModel from "../models/user-model.js";

const generateToken = (id, username) => {
  return jwt.sign({ id: id, username: username }, ACCESS_TOKEN, {
    expiresIn: "24h",
  });
};

class UserController {
  async signUp(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Registration error", data: errors.mapped() });
      }
      const { first_name, last_name, username, password } = req.body;
      const guest = await UserModel.findOne({ username });
      if (guest) {
        return res
          .status(400)
          .json({ message: `Username ${username} already exist` });
      }
      const hashPassword = bcrypt.hashSync(password, 5);
      const user = await UserModel.create({
        first_name,
        last_name,
        username,
        password: hashPassword,
      });
      const token = generateToken(user._id, user.username);
      return res.json({
        message: "You have successfully registered",
        data: {
          token: token,
          id: user._id,
          username: username,
        },
      });
    } catch (error) {
      res.status(400).json({ message: "Registration error" });
    }
  }

  async signIn(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Authorization error", data: errors.mapped() });
      }
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }
      let verified = bcrypt.compareSync(password, user.password);
      if (!verified) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }
      const token = generateToken(user._id, user.username);
      return res.json({
        message: "You have successfully logged in",
        data: {
          token: token,
          id: user._id,
          username: username,
        },
      });
    } catch (error) {
      res.status(400).json({ message: "Authorization error" });
    }
  }
}

export default new UserController();
