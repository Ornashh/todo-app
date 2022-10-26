import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import "../../assets/styles/auth.scss";

import { signUp } from "../../api";
import PageLayout from "../../components/PageLayout";
import Textfield from "../../ui/Textfield";
import Button from "../../ui/Button";
import settings from "../../utils/toastSettings";
import { signUpSchemas } from "../../utils/schemas";

const initialState = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
};

const SignUp = () => {
  const onSubmit = (values, actions) => {
    signUp(values)
      .then(() => {
        toast.success("You have successfully signed up", settings);
        actions.resetForm();
      })
      .catch((error) => {
        toast.error(error.response.data.message, settings);
        actions.setSubmitting(false);
      });
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: initialState,
      validationSchema: signUpSchemas,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit,
    });

  return (
    <PageLayout title="Sign up">
      <div className="auth_outer">
        <div className="auth_inner">
          <h1 className="auth_title">Sign up</h1>
          <form className="auth_body" onSubmit={handleSubmit}>
            <div className="auth_item">
              <Textfield
                name="first_name"
                label="First name"
                requiredMark
                value={values.first_name}
                handleChange={handleChange}
                errors={errors.first_name}
              />
              <Textfield
                name="last_name"
                label="Last name"
                requiredMark
                value={values.last_name}
                handleChange={handleChange}
                errors={errors.last_name}
              />
            </div>
            <Textfield
              name="username"
              label="Username"
              requiredMark
              value={values.username.trim()}
              handleChange={handleChange}
              errors={errors.username}
            />
            <Textfield
              name="password"
              type="password"
              label="Password"
              requiredMark
              value={values.password.trim()}
              handleChange={handleChange}
              errors={errors.password}
            />
            <Button type="submit" fullWidth disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Sign up"}
            </Button>
          </form>
          <div className="auth_footer">
            <h6>Have an account?</h6>
            <Link to="/sign_in">Sign in</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignUp;
