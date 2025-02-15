import Logo from "../../assets/d13798d6-b167-4cf9-8e79-d7a3eb2f3315.jfif";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import Volunteeringdropdown from "./Volunteeringdropdown";
import Servicesmenudrop from "./Servicesmenudrop";
import Searchbar from "./Searchbar";
import Login from "../pages/login";
import Button from "../Button";
import Sidebar from "../sidebarr/Sidebar";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const [dropdownVolunteering, setDropdownVolunteering] = useState(false);
  const handelDropdownVolunteering = () =>
    setDropdownVolunteering(!dropdownVolunteering);
  const [dropdownServices, setDropdownServices] = useState(false);
  const handelDropdownServices = () => setDropdownServices(!dropdownServices);

  return (
    <>
      <div className="nav  h-[80px]  md:block  ">
        <div className="nav-con bg-[#FFFFFF]  h-[80px] grid xl:grid-cols-[250px_minmax(350px,1fr)_300px]  lg:grid-cols-[250px_minmax(300px,1fr)_200px] md:grid-cols-[150px_minmax(300px,1fr)_250px] shadow-xs   ">
          <div className="logo-con  flex items-center text-lg ">
            <img
              className=" md:w-[60px] w-[80px] md:h-[60px] h-[80px] rounded-full shadow-xs "
              src={Logo}
              alt="Logo"
            />
            <p className="self-center lg:text-xl xl:text-xl ">وصل الخير</p>
          </div>
          {/* logo-con */}
          <div className="Links  flex justify-between">
            <ul className="flex items-center text-xl ">
              <li className=" lg:pr-[30px] md:pr-[20px] pad ">
                <Link to="/">الرئيسية</Link>
              </li>
              <li className="lg:pr-[30px] pad md:pr-[15px] xl:pr-[80px]">
                <Link to="/Associations" className="nav-links">
                  الجمعيات
                </Link>
              </li>

              <li className="lg:pr-[30px] md:pr-[15px] pad xl:pr-[80px] flex">
                <Link to="/Services" className="nav-links">
                  خدمات
                </Link>
                <p className="pr-[15px] self-center">
                  {" "}
                  <IoChevronDown
                    onClick={handelDropdownServices}
                    className="md:hidden lg:block"
                  />
                </p>
                {dropdownServices && (
                  <Servicesmenudrop className="md:hidden lg:block" />
                )}
              </li>
              <li className="lg:pr-[40px] md:pr-[15px] xl:pr-[80px] pad">
                <Link to="/Donate" className="nav-links">
                  التبرع
                </Link>
              </li>

              <li className="lg:pr-[30px] md:pr-[15px]  lg:border-l-2 lg:pl-[40px] pad xl:border-none xl:pr-[80px] flex relative ">
                <Link to="/Volunteering" className="nav-links">
                  التطوع
                </Link>
                <p className="pr-[15px] self-center">
                  {" "}
                  <IoChevronDown
                    onClick={handelDropdownVolunteering}
                    className="md:hidden lg:block "
                  />
                </p>
                {dropdownVolunteering && (
                  <Volunteeringdropdown className="md:hidden lg:block " />
                )}
              </li>
            </ul>
            <Searchbar />
          </div>

          {/* Links */}
          <div className="  sing-con flex text-xl xl:pr-[20px] lg:justify-around md:justify-end items-center">
            <p className="ic sm:hidden md:block md:ml-[15px]  bg-[#0D8F75] w-[50px] rounded-md flex justify-center pr-[9px] ">
              <CiUser className="inline-block  text-3xl text-[#FFFFFF]   " />
            </p>
            <Link to="/Login" className="nav-links-mobile  lg:text-lg">
              تسجيل الدخول
            </Link>
          </div>
        </div>
        {/* nav-con */}
      </div>
      <Sidebar />
    </>
  );
}
