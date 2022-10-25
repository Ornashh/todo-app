import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppContext } from "../context";

const PrivateRoute = () => {
  const { isAuth } = useAppContext();
  const location = useLocation();

  if (isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/sign_in" state={{ from: location }} />;
  }
};

export default PrivateRoute;
