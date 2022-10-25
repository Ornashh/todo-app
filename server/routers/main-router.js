import express from "express";
import userRouter from "./user-router.js";
import todoRouter from "./todo-router.js";
import AuthMiddleware from "../middlewares/auth-middleware.js";
const router = express.Router();

router.use("/user", userRouter);
router.use("/", AuthMiddleware, todoRouter);

export default router;
