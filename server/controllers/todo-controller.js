import { validationResult } from "express-validator";
import TodoModel from "../models/todo-model.js";
import UserModel from "../models/user-model.js";

class TodoController {
  async getTodos(req, res) {
    try {
      const list = await UserModel.findById(req.id)
        .select("-password")
        .populate("todos")
        .exec();

      return res.status(200).json({ message: "Task list", data: list });
    } catch (error) {
      return res.status(500).json({
        message: "Error getting task",
      });
    }
  }

  async CreateTodo(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Error creating task",
          data: errors.mapped(),
        });
      }
      const { title, desc } = req.body;
      const todo = await TodoModel.create({
        title: title,
        desc: desc,
      });
      if (todo) {
        await UserModel.findOneAndUpdate(
          { _id: req.id },
          { $push: { todos: todo } }
        );
        const list = await UserModel.findById(req.id)
          .select("-password")
          .populate("todos")
          .exec();
        return res.status(200).json({ message: "Task created", data: list });
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating task" });
    }
  }

  async UpdateTodo(req, res) {
    try {
      const todo = req.body;
      if (!todo._id) {
        res.status(400).json({ message: "ID not specified" });
      }
      const updatedTodo = await TodoModel.findByIdAndUpdate(todo._id, todo, {
        new: true,
      });
      if (updatedTodo.isCompleted === true) {
        await UserModel.findOneAndUpdate(
          { _id: req.id },
          { $push: { completedTodos: updatedTodo } }
        );
      }
      if (updatedTodo) {
        const list = await UserModel.findById(req.id)
          .select("-password")
          .populate("todos")
          .exec();
        return res.json({ message: "Task updated", data: list });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating task" });
    }
  }

  async DeleteTodo(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "ID not specified" });
      }
      const deletedTodoId = await UserModel.findOneAndUpdate(
        { _id: req.id },
        { $pull: { todos: id } }
      );
      const deletedTodo = await TodoModel.findByIdAndDelete(id);

      if (deletedTodoId && deletedTodo) {
        const list = await UserModel.findById(req.id)
          .select("-password")
          .populate("todos")
          .exec();

        return res.json({ message: "Task deleted", data: list });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting task" });
    }
  }
}

export default new TodoController();
