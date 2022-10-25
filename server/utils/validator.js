import { check } from "express-validator";

const authValidator = [
  check("first_name", "First name is required").exists(),
  check("last_name", "Last name is required").exists(),
  check("username", "Username is required")
    .exists()
    .isLength({ min: 5, max: 32 })
    .matches(/^[A-Za-z0-9]+$/)
    .trim(),
  check("password", "Password is required")
    .exists()
    .isLength({ min: 5, max: 32 })
    .matches(/^[A-Za-z0-9-_]+$/)
    .trim(),
];

const createTodoValidator = [
  check("title", "Title is required").exists().isLength({ max: 24 }),
];

export { authValidator, createTodoValidator };
