"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "/public/LOGO512.png";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  interface Menu {
    name: string;
    link: string;
    badge?: string;
  }

  const mainMenu: Menu[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "About Us",
      link: "/aboutUs",
    },
    {
      name: "Service Request",
      link: "/serviceRequest",
    },
  ];

  const userMenu: Menu[] = [
    {
      name: "Profile",
      link: "/profile",
      badge: "New",
    },
    {
      name: "Settings",
      link: "/settings",
    },
    {
      name: "Logout",
      link: "/",
    },
  ];

  const pathname = usePathname();
  return (
    <div className="w-full bg-white flex justify-center py-2 shadow-lg fixed top-0 z-50  items-center">
      <div className="container flex justify-around xl:justify-between items-center content-center">
        <Link href="/">
          <Image
            className="hover:animate-rotate w-24   xl:w-24 2xl:w-28  "
            src={logo}
            alt="Logo"
            width={130}
            height={130}
          />
        </Link>
        <div
          role="tablist"
          className="tabs tabs-lifted lg:tabs-lg hidden sm:block"
        >
          {mainMenu.map((menu, index) => (
            <Link
              key={index} // Add key prop with a unique value
              role="tab"
              className={`tab ${
                pathname === `${menu.link}` ? "tab-active" : "text-slate-600"
              } font-bold  hover:tab-active`}
              href={menu.link}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div className="tab flex gap-2 content-center items-center ">
          <div className="form-control hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto bg-slate-200 text-slate-600"
            />
          </div>
          <div className="dropdown dropdown-end hidden sm:block ">
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
              {userMenu.map((menu, index) => (
                <li key={index} className="hover:bg-gray-600 rounded-box">
                  <Link href={menu.link} className="justify-between">
                    {menu.name}
                    {menu.badge && <span className="badge">{menu.badge}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Drawer Start  */}

          <div className="  ">
            <div className="flex-none sm:hidden ">
              <div className="drawer drawer-end">
                <input
                  id="smDrawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label
                    htmlFor="smDrawer"
                    className="drawer-button btn  bg-white border-gray-400 hover:bg-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="drawer-side ">
                  <label
                    htmlFor="smDrawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="menu p-4 w-2/3 min-h-full bg-slate-300 text-slate-950 absolute">
                    <div className="flex flex-col w-full border-opacity-50">
                      <ul className="grid card rounded-box place-items-stretch">
                        {mainMenu.map((menu, index) => (
                          <li
                            key={index}
                            className={`${
                              pathname === `${menu.link}`
                                ? "hover:bg-gray-600 bg-gray-600 rounded-box "
                                : ""
                            }`}
                          >
                            <Link href={menu.link}>
                              {menu.name}
                              {menu.badge && (
                                <span className="badge">{menu.badge}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="divider">User Menu</div>
                      <ul className="grid  card rounded-box place-items-stretch">
                        {userMenu.map((menu, index) => (
                          <li
                            key={index}
                            className={`${
                              pathname === `${menu.link}`
                                ? "hover:bg-gray-600 bg-gray-600 rounded-box "
                                : ""
                            }`}
                          >
                            <Link href={menu.link}>
                              {menu.name}
                              {menu.badge && (
                                <span className="badge">{menu.badge}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <label
                      htmlFor="smDrawer"
                      aria-label="close sidebar"
                      className="drawer-button absolute bottom-20 left-1/2 transform -translate-x-1/2 w-10 h-10 "
                    >
                      <svg
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                        className="h-10 w-10"
                      >
                        <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
