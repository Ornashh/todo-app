import React from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { useAppContext } from "./context";
import PrivateRoute from "./utils/privateRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Tasks from "./pages/Tasks";

function App() {
  const { isAuth } = useAppContext();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign_up"
          element={isAuth ? <Navigate to="/tasks" /> : <SignUp />}
        />
        <Route
          path="/sign_in"
          element={isAuth ? <Navigate to="/tasks" /> : <SignIn />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/tasks" element={<Tasks />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <ToastContainer limit={3} />
    </Router>
  );
}

export default App;
