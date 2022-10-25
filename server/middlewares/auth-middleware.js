import jwt from "jsonwebtoken";
import { ACCESS_TOKEN } from "../utils/constants.js";

const AuthMiddleware = (req, res, next) => {
  if (req.headers["auth"] === undefined) {
    return res.json({ message: "You are not authorized" });
  }

  const token = req.headers["auth"];

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN);
    req.id = decoded.id;
    return next();
  } catch (error) {
    res.json({ message: "You are not authorized" });
  }
};

export default AuthMiddleware;
