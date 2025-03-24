import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import pic from "/photo.avif";
import { Link } from "react-scroll";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        {/* nav container  */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 py-2">
            <img src={pic} alt="" className="h-12 rounded-full w-12" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Thufe<span className="text-red-500">l</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navabar  */}
          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 cursor-pointer hover:underline duration-300"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <IoCloseSharp size={30} /> : <IoMenu size={30} />}
            </div>
          </div>
        </div>
        {/* mobile navbar  */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden text-xl font-semibold h-screen flex flex-col items-center justify-center space-y-3">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-300 hover:underline"
                  key={id}
                >
                  <Link onClick={()=>setMenu(!menu)}
                    to={text}
                    activeClass="active"
                    offset={-70}
                    smooth={true}
                    duration={700}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
