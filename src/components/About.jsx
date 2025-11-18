"use client";
import React from "react";
import { motion } from "motion/react";
import { delay } from "motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const About = () => {
  return (
    <motion.section
      className="mt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div className="bg-white rounded-3xl shadow-lg border border-teal-50 px-8 md:px-12 py-10 md:py-14">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#3bc6b7]">
              About
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#164b46]">
              About Diaz
            </h1>
          </div>

          <div className="space-y-4 text-[#184947] leading-relaxed text-justify">
            <p>
              I'm Diaz, a 19-year-old Information Technology student at
              Universitas Gadjah Mada. My passion for software engineering is
              rooted in a desire for deep technical mastery and structured
              problem-solving. I specialize in building highly performant and
              user-centric web applications, leveraging modern frameworks like{" "}
              <span className="font-semibold text-[#18857e]">Next.js</span> and{" "}
              <span className="font-semibold text-[#18857e]">Tailwind CSS</span>
              . I actively seek out complex challenges, from optimizing
              real-time data flow to ensuring end-to-end scalability. My
              commitment is clear: to deliver robust, cutting-edge software
              solutions that prioritize both speed and elegant architecture.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
