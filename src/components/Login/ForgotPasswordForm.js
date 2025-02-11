import React from "react";

const ForgotPasswordForm = ({ onNext }) => {
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
      <form className="login-form">
        <label htmlFor="reset-email">أدخل البريد الإلكتروني *</label>
        <input
          type="email"
          id="reset-email"
          placeholder="أدخل البريد الإلكتروني المسجل لإعادة تعيين كلمة المرور"
        />
        <button type="button" className="login-button" onClick={onNext}>
          التالي
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
