"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "/public/LOGO512.png";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-white flex justify-center py-2 shadow-lg fixed top-0 z-50  items-center">
      <div className="container flex justify-around xl:justify-between items-center content-center">
        <div className="w">
          <Image
            className="hover:animate-rotate w-16  sm:w-20 xl:w-24 2xl:w-28 "
            src={logo}
            alt="Logo"
            width={130}
            height={130}
          />
        </div>
        <div
          role="tablist"
          className="tabs tabs-lifted lg:tabs-lg sm:tabs-sm xs:tabs-xs hidden sm:block"
        >
          <Link
            role="tab"
            className={`tab ${
              pathname === "/home" ? "tab-active" : ""
            } font-bold  hover:tab-active`}
            href="/home"
          >
            Home
          </Link>
          <Link
            role="tab"
            className={`tab ${
              pathname === "/services" ? "tab-active" : ""
            } font-bold`}
            href="/services"
          >
            Services
          </Link>
          <Link
            role="tab"
            className={`tab ${
              pathname === "/shop" ? "tab-active" : ""
            } font-bold hover:tab-active`}
            href="/shop"
          >
            Shop
          </Link>
          <Link
            role="tab"
            className={`tab ${
              pathname === "/aboutUs" ? "tab-active" : ""
            } font-bold hover:tab-active`}
            href="/aboutUs"
          >
            About Us
          </Link>
          <Link
            role="tab"
            className={`tab ${
              pathname === "/serviceRequest" ? "tab-active" : ""
            } font-bold hover:tab-active`}
            href="/serviceRequest"
          >
            Service Request
          </Link>
        </div>
        <div role="tab" className="tab flex gap-2 content-center items-center ">
          <div className="form-control hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto bg-slate-200"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14"
            >
              <div className="w-12 rounded-full">
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="User Photo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-200 text-black font-bold  rounded-box w-52"
            >
              <li className="hover:bg-gray-600 rounded-box">
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li className="hover:bg-gray-600 rounded-box">
                <a>Settings</a>
              </li>
              <li className="hover:bg-gray-600 rounded-box">
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
