import * as yup from "yup";

export const signUpSchemas = yup.object().shape({
  first_name: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Only alphabet")
    .required("First name is required"),
  last_name: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Only alphabet")
    .required("Last name is required"),
  username: yup
    .string()
    .min(5)
    .max(32)
    .matches(/^[A-Za-z0-9]+$/, "Only alphanumeric")
    .required("Username is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
});

export const signInSchemas = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
