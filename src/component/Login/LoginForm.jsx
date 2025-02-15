import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Singup from "../pages/Singup"
const LoginForm = ({ onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!email.includes("@")) {
      setEmailError("البريد الإلكتروني غير صالح");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      console.log("تم تسجيل الدخول بنجاح");
      navigate("/home");
    }
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <div className="login-icon">
          <img
            src={`${process.env.PUBLIC_URL}/images/loginIcon.png`}
            alt="Login Icon"
          />
        </div>
        <h2>تسجيل الدخول</h2>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">أدخل البريد الإلكتروني *</label>
        <input
          type="email"
          id="email"
          placeholder="ادخل البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error-message">{emailError}</p>}

        <label htmlFor="password">أدخل كلمة المرور *</label>
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="ادخل كلمة السر"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              aria-hidden="true"
            />
          </button>
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}

        <a href="#" className="forgot-password" onClick={onForgotPassword}>
          نسيت كلمة السر؟
        </a>

        <button type="submit" className="login-button">
          تسجيل دخول
        </button>
      </form>

      <div className="sign-up-link">
        <p>
          ليس لديك حساب؟ <Link to="/Singup">إنشاء حساب جديد</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
