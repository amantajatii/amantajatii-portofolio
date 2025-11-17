"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className=" bg-white px-8 py-4 w-full rounded-xl shadow-md flex justify-between items-center">
      <div className="">
        <p className="font-bold text-[#18857e]">Amantajatii</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row gap-8 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/journey">Journey</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="https://mail.google.com/mail/u/0/?fs=1&to=amantajati15@gmail.com&tf=cm">
              <button className="px-4 py-2 bg-[#18857e] rounded-lg text-white shadow-md hover:bg-[#159c95] transition">
                Contact me
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={handleMobileNav}>
          <GiHamburgerMenu />
        </button>
        <div>
          <div
            className={
              mobileNav
                ? "absolute top-20 right-0 bg-white/70 backdrop-blur-lg mx-8 px-8 py-4 rounded-xl shadow-md flex flex-col items-center"
                : "hidden"
            }>
            <ul className="flex flex-col gap-4 w-full items-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Journey</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li>
                <button className="px-4 py-2 bg-[#18857e] rounded-lg text-white shadow-md hover:bg-[#159c95] transition cursor-pointer">
                  Contact me
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
