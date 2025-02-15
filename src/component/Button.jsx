import "./Button.css";
import React from "react";
import { Link } from "react-router-dom";
export default function Button() {
  return (
    <Link to="Singup">
      <button className="btn px-[20px] py-[8px] bg-[#0D8F75] text-2xl flex justify-center rounded-md border-none outline-0 text-white ">
        تسجيل دخول
      </button>
    </Link>
  );
}
