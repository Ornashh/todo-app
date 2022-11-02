import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import "../../assets/styles/auth.scss";

import { signIn } from "../../api";
import PageLayout from "../../components/PageLayout";
import TextField from "../../ui/Textfield";
import Button from "../../ui/Button";
import { signInSchemas } from "../../utils/schemas";
import settings from "../../utils/toastSettings";

const SignIn = () => {
  const onSubmit = (values, actions) => {
    signIn(values)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.data));
          window.location.reload();
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message, settings);
        actions.setSubmitting(false);
      });
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: { username: "", password: "" },
      validationSchema: signInSchemas,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit,
    });

  return (
    <PageLayout title="Sign in">
      <div className="auth_outer">
        <div className="auth_inner">
          <h1 className="auth_title">Sign in</h1>
          <form className="auth_body" onSubmit={handleSubmit}>
            <TextField
              name="username"
              label="Username"
              requiredMark
              disabled={isSubmitting}
              value={values.username.trim()}
              handleChange={handleChange}
              errors={errors.username}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              requiredMark
              disabled={isSubmitting}
              value={values.password.trim()}
              handleChange={handleChange}
              errors={errors.password}
            />
            <Button
              type="submit"
              fullWidth
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Sign in"}
            </Button>
          </form>
          <div className="auth_footer">
            <h6>Don't have an account?</h6>
            <Link to="/sign_up">Sign up</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignIn;
