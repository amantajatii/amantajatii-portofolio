import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-16 bg-white rounded-3xl shadow-lg px-8 py-14 md:py-20 lg:py-24 mt-6">
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#164b46] leading-tight">
            Diaz Amantajati Susilo
          </h1>
          <p className="text-[#2f6a64] text-lg leading-relaxed">
            I'm an undergraduate Information Engineering student at Gadjah Mada
            University, passionate about design, technology, and building modern
            interfaces.
          </p>
        </div>

        <ul className="flex gap-4 items-center">
          <li>
            <a
              href="https://github.com/amantajatii"
              className="flex h-11 w-11 items-center justify-center 
                 rounded-full border-2 border-black 
                 text-gray-700 bg-white
                 shadow-sm hover:shadow-md
                 hover:bg-black hover:text-white
                 transition-all duration-300"
              target="_blank">
              <FiGithub size={20} />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/diazamantajatisusilo/"
              className="flex h-11 w-11 items-center justify-center 
                 rounded-full border-2 border-blue-500 
                 text-blue-600 bg-white
                 shadow-sm hover:shadow-md
                 hover:bg-blue-600 hover:text-white
                 transition-all duration-300"
              target="_blank">
              <FiLinkedin size={20} />
            </a>
          </li>

          <li>
            <a
              href="https://x.com/home"
              className="flex h-11 w-11 items-center justify-center 
                 rounded-full border-2 border-sky-400 
                 text-sky-500 bg-white
                 shadow-sm hover:shadow-md
                 hover:bg-sky-500 hover:text-white
                 transition-all duration-300"
              target="_blank">
              <FiTwitter size={20} />
            </a>
          </li>
        </ul>

        <div>
          <Link
            href="https://mail.google.com/mail/u/0/?fs=1&to=amantajati15@gmail.com&tf=cm"
            target="_blank">
            <button className="px-4 py-2 border-2 border-[#159c95] rounded-lg text-[#159c95] hover:text-white shadow-md hover:bg-[#159c95] transition cursor-pointer">
              Contact me
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src="/profile-pic.jpeg"
          alt="Profile Picture"
          className="w-64 md:w-72 h-64 md:h-72 rounded-2xl object-cover shadow-md hover:shadow-xl transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Hero;
