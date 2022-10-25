import express from "express";
import UserController from "../controllers/user-controller.js";
import { authValidator } from "../utils/validator.js";
const router = express.Router();

router.post("/sign_up", authValidator, UserController.signUp);
router.post("/sign_in", UserController.signIn);

export default router;
