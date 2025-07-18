"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineSpaceDashboard } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [state, setState] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const navigation = [
    { title: "About Me", path: "/", icon: <FaRegUser /> },
    {
      title: "Services",
      path: "/#Services",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      title: "Certification",
      path: "/#Certification",
      icon: <TbCertificate />,
    },
    { title: "Projects", path: "/#Projects", icon: <FaCode /> },
    { title: "Contact Me", path: "/#Contact", icon: <MdOutlineEmail /> },
  ];
  return (
    <div className="bg-gray-900">
      <header className="">
        <nav
          id="nav-container"
          className={`pb-5 md:text-sm transition-all duration-300 ${
            state
              ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl md:mx-0 md:mt-0 md:relative md:bg-transparent"
              : ""
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-4 md:flex md:items-center md:justify-between md:px-8">
            {/* Header top row */}
            <div className="flex items-center justify-between py-4 md:py-10">
              <div className="md:hidden menu-toggle">
                <button
                  onClick={() => setState(!state)}
                  className="text-gray-300 hover:text-white focus:outline-none text-2xl"
                >
                  {state ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <div
              ref={menuRef}
              className={`flex-1 md:flex md:items-center md:justify-center md:mt-2 ${
                state ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                {navigation.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 hover:text-slate-100 hover:font-semibold hover:bg-slate-950 px-4 py-2 rounded-full"
                  >
                    <Link
                      href={item.path}
                      className="flex items-center gap-2 text-base"
                    >
                      {item.title}
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
