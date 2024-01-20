import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  

  // Check if the token is present in localStorage
  const token = localStorage.getItem("token");
  if (!token) {
    // If the token is not present, redirect to the login page
    return <Navigate to="/" />;
  }

  // If the token is present, render the children (In component)
  return <>{children}</>;
};

export default Protected;