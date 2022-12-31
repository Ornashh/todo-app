import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import "../../assets/styles/auth.scss";

import { useAppContext } from "../../context";
import { signIn } from "../../api";
import TextField from "../../ui/Textfield";
import Button from "../../ui/Button";
import { signInSchemas } from "../../utils/schemas";
import Settings from "../../utils/settings";
import PageTitle from "../../utils/pageTitle";

const SignIn = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext();

  const onSubmit = (values, actions) => {
    signIn(values)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.data));
          window.location.reload();
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message, Settings(theme));
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
    <PageTitle title="Sign in">
      <div className="auth_outer">
        <div className="auth_inner">
          <h1 className="auth_title">{t("Auth.Sign in")}</h1>
          <form className="auth_body" onSubmit={handleSubmit}>
            <TextField
              name="username"
              label={t("Auth.Username")}
              requiredMark
              disabled={isSubmitting}
              value={values.username.trim()}
              handleChange={handleChange}
              errors={errors.username}
            />
            <TextField
              name="password"
              type="password"
              label={t("Auth.Password")}
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
              loading={isSubmitting}
            >
              {t("Auth.Sign in")}
            </Button>
          </form>
          <div className="auth_footer">
            <h6>{t("Auth.No account")}</h6>
            <Link to="/sign_up">{t("Auth.Sign up")}</Link>
          </div>
        </div>
      </div>
    </PageTitle>
  );
};

export default SignIn;
