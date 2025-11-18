"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const menuRef = useRef(null);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileNav(false);
      }
    };

    if (mobileNav) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNav]);

  return (
    <div className="relative z-50 bg-white px-8 py-4 w-full rounded-xl shadow-md flex justify-between items-center">
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
            <Link
              href="https://mail.google.com/mail/u/0/?fs=1&to=amantajati15@gmail.com&tf=cm"
              target="_blank">
              <button className="px-4 py-2 border-2 border-[#159c95] rounded-lg text-[#159c95] hover:text-white shadow-md hover:bg-[#159c95] transition cursor-pointer">
                Contact me
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden" ref={menuRef}>
        <button onClick={handleMobileNav}>
          <GiHamburgerMenu />
        </button>
        <div>
          <div
            className={
              mobileNav
                ? "absolute top-16 right-0 z-50 bg-white/70 backdrop-blur-lg px-8 py-4 rounded-xl shadow-md flex items-center"
                : "hidden"
            }>
            <ul className="flex flex-col gap-4 w-full items-center">
              <li>
                <Link href="/" onClick={handleMobileNav}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/journey" onClick={handleMobileNav}>
                  Journey
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={handleMobileNav}>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="https://mail.google.com/mail/u/0/?fs=1&to=amantajati15@gmail.com&tf=cm"
                  target="_blank"
                  onClick={handleMobileNav}>
                  <button className="px-4 py-2 border-2 border-[#159c95] rounded-lg text-[#159c95] hover:text-white shadow-md hover:bg-[#159c95] transition cursor-pointer">
                    Contact me
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
