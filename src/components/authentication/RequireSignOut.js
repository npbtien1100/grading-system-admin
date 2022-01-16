import React from "react";
import { Navigate } from "react-router-dom";

function RequireSignOut({ children }) {
  //localStorage.getItem("token")
  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" />;
  }
  return children;
}

export default RequireSignOut;
