import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ResetPasswordForm = ({ onBackToLogin }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();

    if (newPassword.length < 6) {
      setErrorMessage("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("كلمتا المرور غير متطابقتين");
      return;
    }

    setErrorMessage("");
    setShowAlert(true);

    // إعادة التوجيه بعد عرض رسالة النجاح
    setTimeout(() => {
      setShowAlert(false);
      onBackToLogin();
    }, 3000);
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <div className="login-icon">
          <img
            src={`${process.env.PUBLIC_URL}/images/loginIcon.png`}
            alt="Reset Password Icon"
          />
        </div>
        <h2>إعادة تعيين كلمة المرور</h2>
      </div>
      <form className="login-form" onSubmit={handlePasswordChange}>
        <label htmlFor="new-password">أدخل كلمة المرور الجديدة *</label>
        <div className="password-input">
          <input
            type={showNewPassword ? "text" : "password"}
            id="new-password"
            placeholder="ادخل كلمة السر"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={toggleNewPasswordVisibility}
          >
            <FontAwesomeIcon
              icon={showNewPassword ? faEye : faEyeSlash}
              aria-hidden="true"
            />
          </button>
        </div>

        <label htmlFor="confirm-password">تأكيد كلمة المرور الجديدة *</label>
        <div className="password-input">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            placeholder="قم بإعادة إدخال كلمة السر"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={toggleConfirmPasswordVisibility}
          >
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEye : faEyeSlash}
              aria-hidden="true"
            />
          </button>
        </div>

        {errorMessage && (
          <Alert variant="danger" className="mt-3">
            {errorMessage}
          </Alert>
        )}

        <button type="submit" className="login-button mt-3">
          تغيير كلمة المرور
        </button>
      </form>

      {showAlert && (
        <Alert variant="success" className="mt-3">
          تم تغيير كلمة المرور بنجاح!
        </Alert>
      )}
    </div>
  );
};

export default ResetPasswordForm;
