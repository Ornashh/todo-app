import React from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { useAppContext } from "./context";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import PrivateRoute from "./utils/privateRoute";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer limit={3} />
    </Router>
  );
}

export default App;
