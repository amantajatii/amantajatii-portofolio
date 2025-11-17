import React from "react";

const projects = [
  {
    id: 1,
    title: "Amantajati's Old Website",
    year: "2023",
    subtitle: "HTML · Tailwind · JavaScript",
    description:
      "My first portfolio website. HTML + Tailwind + vanilla JS — the start of my software engineering journey.",
    image: "/aboutamantajatii.jpeg",
  },
  {
    id: 2,
    title: "NusaPay",
    year: "2025",
    subtitle: "UI/UX Designer",
    description:
      "Designed the cross-chain payment experience for NusaPay, focusing on clarity, trust, and smooth flows.",
    image: "/nusapay.jpeg",
  },
  {
    id: 3,
    title: "Movo Website",
    year: "2025",
    subtitle: "Next.js · Tailwind CSS",
    description:
      "As a Frontend Engineer and Performance Contributor , I developed the core frontend architecture utilizing Next.js and Tailwind CSS. My key focus was optimizing performance for real-time data display (e.g., live chart) and ensuring efficient client-side state management for Web3 integration.",
    image: "/movo.png",
  },
  {
    id: 4,
    title: "This Website",
    year: "2025",
    subtitle: "Next.js · Tailwind CSS",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS, focused on smooth interactions and accessibility.",
    image: "/amantajatii-portofolio.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-12 md:mt-16 mb-12">
      <div className="flex justify-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-[0.35em] text-[#186d69] text-center">
          PROJECT
        </h2>
      </div>

      <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between bg-white rounded-3xl shadow-md border border-[#e3f3f1] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="relative aspect-[16/10] bg-[#e9f7f5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-6 py-5 md:px-7 md:py-6 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg md:text-xl font-bold text-[#186d69]">
                    {project.title}
                  </h3>
                  <span className="text-sm font-semibold text-[#3bc6b7]">
                    {project.year}
                  </span>
                </div>

                {project.subtitle && (
                  <p className="text-xs md:text-sm uppercase tracking-wide text-[#22aa9e]">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-sm md:text-[0.95rem] leading-relaxed text-[#184947] text-justify">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-[#22aa9e] via-[#3bc6b7] to-[#186d69]" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
