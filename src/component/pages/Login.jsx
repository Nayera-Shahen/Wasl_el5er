import React, { useState } from "react";
import LoginForm from "../login/LoginForm";
import ForgotPasswordForm from "../login/ForgotPasswordForm";
import ResetPasswordForm from "../login/ResetPasswordForm";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [view, setView] = useState("login"); // "login" | "forgotPassword" | "resetPassword"

  const handleForgotPassword = () => setView("forgotPassword");
  const handleResetPassword = () => setView("resetPassword");
  const handleBackToLogin = () => setView("login");

  return (
    <div className="login-container">
      {view === "login" && (
        <LoginForm onForgotPassword={handleForgotPassword} />
      )}
      {view === "forgotPassword" && (
        <ForgotPasswordForm onNext={handleResetPassword} />
      )}
      {view === "resetPassword" && (
        <ResetPasswordForm onBackToLogin={handleBackToLogin} />
      )}
    </div>
  );
};

export default Login;
