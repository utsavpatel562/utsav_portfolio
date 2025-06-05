import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
function Header() {
  const [state, setState] = useState(false);

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

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);
  return (
    <>
      <div className="bg-gray-900">
        <header>
          <nav
            className={`pb-5 md:text-sm ${
              state
                ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                } `}
              >
                <ul className="flex-1 mt-5 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="text-gray-300 hover:text-slate-100 hover:font-semibold hover:bg-slate-950 p-2 md:pr-5 md:pl-5 rounded-full"
                      >
                        <Link
                          href={item.path}
                          className="block md:flex items-center gap-2 md:text-[16px] cursor-none"
                        >
                          {item.title}
                          {item.icon}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
