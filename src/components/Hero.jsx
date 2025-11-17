import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 bg-white rounded-lg shadow-md px-8 py-16 md:py-16 lg:py-24 xl:py-28 mt-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:gap-2">
          <h1 className="text-4xl font-bold text-justify">
            Diaz Amantajati Susilo
          </h1>
          <p className="text-justify">
            I'm an undergraduate Information Engineering student at Gadjah Mada
            University.
          </p>
        </div>
        <ul className="flex gap-4 items-center justify-center md:justify-start">
          <li>
            <button className="p-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition">
              <FiGithub />
            </button>
          </li>
          <li>
            <button className="p-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
              <FiLinkedin />
            </button>
          </li>
          <li>
            <button className="p-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition">
              <FiTwitter />
            </button>
          </li>
        </ul>
        <div className="flex justify-center md:justify-start">
          <button className="px-4 py-2 flex w-fit bg-[#18857e] rounded-lg text-white shadow-md hover:bg-[#159c95] transition">
            Contact Me
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src="/profile-pic.jpeg"
          alt="Profile Picture"
          className="w-72 md:w-64 h-64 rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
