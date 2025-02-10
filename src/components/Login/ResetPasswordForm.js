import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const ResetPasswordForm = ({ onBackToLogin }) => {
  const [showAlert, setShowAlert] = useState(false);
  const handlePasswordChange = (event) => {
    event.preventDefault();
    // يمكنك هنا تنفيذ منطق تغيير كلمة المرور
    setShowAlert(true);

    // إخفاء التنبيه بعد 3 ثوانٍ والعودة إلى تسجيل الدخول
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
            src={require("../../assets/images/loginIcon.png")}
            alt="Reset Password Icon"
          />
        </div>
        <h2>إعادة تعيين كلمة المرور</h2>
      </div>
      <form className="login-form" onSubmit={handlePasswordChange}>
        <label htmlFor="new-password">أدخل كلمة المرور الجديدة *</label>
        <input
          type="password"
          id="new-password"
          placeholder="ادخل كلمة السر"
        />
        <label htmlFor="confirm-password">تأكيد كلمة المرور الجديدة *</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="قم بإعادة إدخال كلمة السر"
        />
        <button type="submit" className="login-button">
          تغيير كلمة المرور
        </button>
      </form>
       {/* عرض التنبيه إذا كانت حالته showAlert = true */}
       {showAlert && (
        <Alert className="custom-alert">تم تغيير كلمة المرور بنجاح!</Alert>
      )}
    </div>
  );
};

export default ResetPasswordForm;
