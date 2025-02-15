import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "./Formfileds.css";
import Login from "../pages/Login";
import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Formfileds() {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    confirmPassword: "",
  });

  const [steps, setSteps] = useState(1);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, [steps]);

  const validate = (step) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const userRegexar = / ^[a-zA-Z0-9_\u0621-\u064A]{3,20}$/;

    if (step === 1) {
      if (!formValue.email) {
        newErrors.email = "البريد الإلكتروني مطلوب";
      } else if (!emailRegex.test(formValue.email)) {
        newErrors.email = "البريد الإلكتروني غير صحيح";
      }
    }

    if (step === 2) {
      if (!formValue.username.trim()) {
        newErrors.username = "اسم المستخدم مطلوب";
      } else if (formValue.username.length < 3) {
        newErrors.username = "يجب أن يكون الاسم 3 أحرف على الأقل";
      }

      if (!formValue.phone) {
        newErrors.phone = "رقم الهاتف مطلوب";
      } else if (!phoneRegex.test(formValue.phone)) {
        newErrors.phone = "رقم الهاتف يجب أن يكون بين 10-15 رقم";
      }

      if (!formValue.age) {
        newErrors.age = "العمر مطلوب";
      } else if (formValue.age < 10) {
        newErrors.age = "العمر يجب أن يكون اكبر من 10 سنوات";
      }
    }

    if (step === 3) {
      if (!formValue.password) {
        newErrors.password = "كلمة المرور مطلوبة";
      } else if (!passwordRegex.test(formValue.password)) {
        newErrors.password =
          "يجب أن تحتوي كلمة المرور على الأقل على 8 أحرف، حرف كبير، حرف صغير، رقم، ورمز خاص";
      }

      if (formValue.password !== formValue.confirmPassword) {
        newErrors.confirmPassword = "كلمة المرور غير متطابقة";
      }
    }

    return newErrors;
  };

  const handelSteps = (e) => {
    e.preventDefault();
    const validationErrors = validate(steps);

    if (Object.keys(validationErrors).length === 0) {
      if (steps < 4) {
        setSteps((prev) => prev + 1);
      } else {
        // التحقق النهائي قبل الإرسال
        if (formValue.password === formValue.confirmPassword) {
          // هنا يمكنك إضافة منطق إرسال البيانات للخادم
          console.log("Form submitted:", formValue);
          navigate("/Login"); // الانتقال بعد التحقق النهائي
        } else {
          setErrors({
            confirmPassword: "كلمة المرور غير متطابقة",
          });
        }
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <>
      <div className="steps w-[100%] p border-b-1 pt-[10px] flex justify-between relative">
        <span className="step active right-0 ">1</span>
        <span
          className={
            steps >= 2 ? "step active right-[50%] " : "step right-[50%]"
          }
        >
          2
        </span>
        <span
          className={
            steps === 3
              ? "step  active  right-[95%] md:right-[97.50%] xl:right-[95.50%] "
              : "step last right-[95%] sm:right-[95%] md:right-[97.50%] xl:right-[95.75%]"
          }
        >
          3
        </span>
      </div>

      <form onSubmit={handelSteps}>
        {steps === 1 && (
          <div className="step1 ">
            <div className="filed mt-5 lg:pb-5 xl:pb-0  frist">
              <label>البريد الالكتروني</label>
              <input
                type="text"
                value={formValue.email}
                placeholder="ادخل البريد الالكتروني"
                onChange={handelChange}
                name="email"
                className={errors.email && "error"}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
          </div>
        )}

        {steps === 2 && (
          <div className="step2">
            <div className="filed frist">
              <label>اسم المستخدم</label>
              <input
                type="text"
                value={formValue.username}
                placeholder="ادخل اسم المستخدم"
                name="username"
                onChange={handelChange}
                className={errors.username && "error"}
              />
              {errors.username && (
                <span className="error-message">{errors.username}</span>
              )}
            </div>

            <div className="filed">
              <label>رقم الهاتف</label>
              <input
                type="tel"
                value={formValue.phone}
                placeholder="ادخل رقم الهاتف"
                onChange={handelChange}
                name="phone"
                className={errors.phone && "error"}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="filed">
              <label>العمر</label>
              <input
                type="number"
                value={formValue.age}
                placeholder="ادخل عمرك"
                onChange={handelChange}
                name="age"
                className={errors.age && "error"}
              />
              {errors.age && (
                <span className="error-message">{errors.age}</span>
              )}
            </div>
          </div>
        )}

        {steps === 3 && (
          <div className="step3">
            <div className="filed  frist">
              <label>كلمة المرور</label>
              <input
                type="password"
                value={formValue.password}
                placeholder="ادخل كلمة المرور"
                onChange={handelChange}
                name="password"
                className={errors.password && "error"}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="filed lg:pb-3 xl:p-0">
              <label>تاكيد كلمة المرور</label>
              <input
                type="password"
                placeholder="قم باعادة ادخال كلمه السر"
                onChange={handelChange}
                name="confirmPassword"
                className={errors.confirmPassword && "error"}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          </div>
        )}
        {steps > 3 ? (
          <div className=" hidden justify-center  min-[375px]:py-[10px] min-[540px]:p-[30px] xl:p-[70px]">
            <button
              type="submit"
              className="btn w-[200px] h-[50px] min-[375px]:w-[150px]  text-lg font-bold outline-0 rounded-full bg-[#0D8F75]"
            >
              {steps === 3 ? "إنشاء الحساب" : "التالي"}
            </button>
          </div>
        ) : (
          <div className="flex justify-center min-[320px]:pt-[50px]  min-[320px]:pb-[100px] min-[375px]:py-[10px] min-[540px]:p-[30px] lg:p-2 xl:p-[40px]">
            <button
              type="submit"
              className="btn w-[200px] h-[50px]  text-lg font-bold outline-0 rounded-full bg-[#0D8F75]"
            >
              {steps === 3 ? "إنشاء الحساب" : "التالي"}
            </button>
          </div>
        )}

        {steps === 4 && (
          <div className="flex justify-center flex-col items-center ">
            <div className="finsh-text pt-[60px]">
              {" "}
              <FaRegCheckCircle className="inline-block text-4xl text-[#0D8F75] " />
              <span className="text-lg"> تم انشاءالحساب بنجاح</span>
            </div>
            <div className="flex justify-center min-[320px]:py-[150px] min-[375px]:py-[50px] min-[540px]:p-[30px] xl:p-[70px]">
              <button
                type="submit"
                className="btn w-[200px] h-[50px]  text-lg font-bold outline-0 rounded-full bg-[#0D8F75]"
              >
                <Link to="/Login">تسجيل الدخول</Link>
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
