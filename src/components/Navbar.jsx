"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useRef } from "react";

const Navbar = () => {
  const navbar = useRef();

  const NavToggler = () => {
    navbar.current.classList.toggle("translate-x-[100%]");
  };

  return (
    <nav>
      <div className="wrapper py-6 flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="shopping-app-logo"
            className="w-[80px] lg:w-[100px]"
          />
        </Link>
        <div className="flex items-center gap-5">
          <div
            className="fixed left-0 top-0 bg-secondary w-full h-full flex items-center justify-center flex-col gap-7 text-white font-[500] translate-x-[100%] transition-all duration-500 z-50 md:static md:translate-x-0 md:flex-row md:w-auto md:bg-transparent md:text-black"
            ref={navbar}
          >
            <Link
              href="#"
              className="md:hover:text-secondary transition-all duration-300 hover:text-black"
            >
              Destinations
            </Link>
            <Link
              href="#"
              className="md:hover:text-secondary transition-all duration-300 hover:text-black"
            >
              Hotels
            </Link>
            <Link
              href="#"
              className="md:hover:text-secondary transition-all duration-300 hover:text-black"
            >
              Flights
            </Link>
            <Link
              href="#"
              className="md:hover:text-secondary transition-all duration-300 hover:text-black"
            >
              Bookings
            </Link>
            <Link
              href="#"
              className="md:hover:text-secondary transition-all duration-300 hover:text-black"
            >
              Login
            </Link>
            <span
              className="cursor-pointer absolute top-7 right-6 text-xl md:hidden bg-white text-black"
              onClick={NavToggler}
            >
              <FaXmark />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="border-2 border-black font-[500] rounded px-5 py-2 text-sm hover:bg-black hover:text-white transition-all duration-300"
            >
              Sign up
            </Link>
            <span
              className="cursor-pointer text-lg md:hidden"
              onClick={NavToggler}
            >
              <FaBars />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
