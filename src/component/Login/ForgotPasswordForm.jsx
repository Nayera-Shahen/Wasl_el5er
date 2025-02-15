import React, { useState } from "react";

const ForgotPasswordForm = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    if (!email.includes("@")) {
      setError("يرجى إدخال بريد إلكتروني صحيح");
    } else {
      setError("");
      onNext();
    }
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <div className="login-icon">
          <img
            src={`${process.env.PUBLIC_URL}/images/loginIcon.png`}
            alt="Forgot Password Icon"
          />
        </div>
        <h2>هل نسيت كلمة المرور؟</h2>
        <p>
          "لا تقلق، نحن هنا لمساعدتك! إذا كنت تتذكر بريدك الإلكتروني، أدخل
          بياناتك واضغط على التالي."
        </p>
      </div>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          validateEmail();
        }}
      >
        <label htmlFor="reset-email">أدخل البريد الإلكتروني *</label>
        <input
          type="email"
          id="reset-email"
          placeholder="أدخل البريد الإلكتروني المسجل لإعادة تعيين كلمة المرور"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="button" className="login-button" onClick={validateEmail}>
          التالي
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;

