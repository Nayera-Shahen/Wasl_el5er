import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ onForgotPassword }) => {
  return (
    <div className="login-box">
      <div className="login-header">
        <div className="login-icon">
          <img
            src={require("../../assets/images/loginIcon.png")}
            alt="Login Icon"
          />
        </div>
        <h2>تسجيل الدخول</h2>
      </div>

      <form className="login-form">
        <label htmlFor="email">أدخل البريد الإلكتروني *</label>
        <input type="email" id="email" placeholder="ادخل البريد الإلكتروني" />

        <label htmlFor="password">أدخل كلمة المرور *</label>
        <div className="password-input">
          <input type="password" id="password" placeholder="ادخل كلمة السر" />
          <span className="toggle-password"></span>
        </div>

        <a href="#" className="forgot-password" onClick={onForgotPassword}>
          نسيت كلمة السر؟
        </a>

        <button type="submit" className="login-button">
          تسجيل دخول
        </button>
      </form>

      <div className="sign-up-link">
        <p>
          ليس لديك حساب؟{" "}
          <Link to="/signup" className="signup-link">
            إنشاء حساب جديد
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;


