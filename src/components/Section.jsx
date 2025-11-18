"use client";
import { motion } from "motion/react";
import { del } from "motion/react-client";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const itemsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const Section = ({ title, subtitle, items }) => {
  return (
    <motion.section
      className="mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div className="inline-flex flex-col gap-1 rounded-xl bg-white/90 px-6 py-4 shadow-md border border-teal-100">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#2f8f88]">
          Journey
        </span>
        <h2 className="font-bold text-2xl md:text-3xl text-[#186d69]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base text-[#437e7a] mt-1">{subtitle}</p>
        )}
      </div>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <motion.article
            key={item.id}
            className="relative overflow-hidden rounded-xl bg-white/90 border border-teal-50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            variants={itemsVariants}>
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#22aa9e] via-[#3bc6b7] to-[#6ae5cf]" />

            <div className="pl-5 pr-6 md:pl-7 md:pr-8 py-6 md:py-7">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl md:text-2xl font-bold uppercase text-[#22aa9e] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold tracking-wide uppercase text-[#3bc6b7]">
                    {item.position}
                  </p>
                </div>

                <span className="mt-1 inline-flex items-center justify-center rounded-full bg-[#e6f7f5] px-3 py-1 text-[11px] md:text-xs font-medium text-[#246f6a] w-fit">
                  {item.year}
                </span>
              </div>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-[#184947] text-justify">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Section;
