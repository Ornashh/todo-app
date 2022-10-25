import express from "express";
import TodoController from "../controllers/todo-controller.js";
import { createTodoValidator } from "../utils/validator.js";
const router = express.Router();

router.get("/todos", TodoController.getTodos);
router.post("/create_todo", createTodoValidator, TodoController.CreateTodo);
router.put("/update_todo", TodoController.UpdateTodo);
router.delete("/delete_todo/:id", TodoController.DeleteTodo);

export default router;
