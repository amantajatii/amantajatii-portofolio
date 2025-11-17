import React from "react";

const projectsList = [
  {
    id: 1,
    year: "May 2025 – Now",
    title: "Movo Payment Project",
    position: "Frontend Engineer & Performance Contributor",
    description:
      "As a Frontend Engineer and Performance Contributor, I developed the core frontend architecture utilizing Next.js and Tailwind CSS. My key focus was optimizing performance for real-time data display, specifically for the live chart functionality. I also participated in the planning for Web3 integration and ensured efficient client-side state management.",
  },
  {
    id: 2,
    year: "January 2025 – March 2025",
    title: "Samsung Innovation Campus Batch 6",
    position: "STAGE 1 & 2 PARTICIPANT",
    description:
      "I actively participated in both stages of the training program, focusing on high-demand technical fields. This included deepening my knowledge and implementing projects in the fields of IoT, Python, and AI.",
  },
];

const organizationsList = [
  {
    id: 1,
    year: "November 2025 – Now",
    title: "Find IT! 2026",
    position: "SUBCOORDINATOR (Design, Documentation, and Decor)",
    description:
      "In this subcoordinator role, I oversaw the documentation workflow (photo and video) for all event activities. I was responsible for the quality of photo and video output, ensuring compliance with event branding. I coordinated Documentation needs with other divisions (Design and Decoration).",
  },
  {
    id: 2,
    year: "October 2025 – Now",
    title: "Open House DTETI FT UGM 2025",
    position: "SUBCOORDINATOR (Design, Documentation, and Decor)",
    description:
      "I oversaw the documentation workflow (photo and video) for all event activities. I was responsible for the quality of photo and video output, ensuring compliance with event branding. I coordinated Documentation needs with other divisions (Design and Decoration).",
  },
  {
    id: 3,
    year: "November 2024 – December 2024",
    title: "ENFORIAN DTETI FT UGM 2024",
    position: "MEMBER, DESIGN DIVISION",
    description:
      "I contributed to the visual execution of the event, which involved designing plaques for award recipients, creating social media designs to boost participation, and developing lanyard designs for the committee.",
  },
  {
    id: 4,
    year: "October 2024 – November 2024",
    title: "Open House DTETI FT UGM 2024",
    position: "MEMBER, DESIGN, DOCUMENTATION, AND DECOR",
    description:
      "I was involved in creating social media designs for event promotion. I documented the event through photo and video. I produced various visual assets for event necessities.",
  },
  {
    id: 5,
    year: "2022-2023",
    title: "Lembaga Pers Mu'allimin",
    position: "Member, Illustration and Layout Division",
    description:
      "I managed the organization's social media presence. I created magazine designs and layouts. I designed the cover website. I documented organizational activities.",
  },
  {
    id: 6,
    year: "January 2023 – February 2023",
    title: "Mu'allimin Annual Competition and Festival VIII",
    position: "Member, Media and Creative Division",
    description:
      "I documented the event through photo and video. I created social media designs. I operated the camera for live streaming.",
  },
  {
    id: 7,
    year: "June 2022 – July 2022",
    title: "Forum Ta'aruf Siswa Mu'allimin 2023",
    position: "Member, Media Division",
    description:
      "My tasks included documenting the activities. I created social media designs. I performed live reports during the event.",
  },
  {
    id: 8,
    year: "October 2024 – January 2025",
    title: "Documentation Staff - Technocorner",
    position: "Documentation Staff",
    description:
      "I provided documentation support, showcasing strong teamwork, communication, and adaptability skills.",
  },
];
const Journey = () => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl flex flex-col w-fit md:gap-2 bg-white rounded-lg shadow-md px-8 py-4 mt-4 text-center text-[#186d69]">
        Technical Projects & Training
      </h2>
      <div>
        {projectsList.map((project) => (
          <div
            className="flex flex-col md:gap-2 bg-white rounded-lg shadow-md px-8 py-8 mt-4"
            key={project.id}>
            <div className="flex flex-col" key={project.id}>
              <h1 className="text-3xl font-bold uppercase text-[#22aa9e]">
                {project.title}
              </h1>
              <h3 className="uppercase text-[#3bc6b7] font-semibold mt-1">
                {project.year} - {project.position}
              </h3>
              <p className="mt-3 text-justify text-[#184947]">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-bold text-3xl flex flex-col w-fit md:gap-2 bg-white rounded-lg shadow-md px-8 py-4 mt-4 text-center text-[#186d69]">
        Technical Projects & Training
      </h2>
      <div>
        {organizationsList.map((organization) => (
          <div
            className="flex flex-col md:gap-2 bg-white rounded-lg shadow-md px-8 py-8 mt-4"
            key={organization.id}>
            <div className="flex flex-col" key={organization.id}>
              <h1 className="text-3xl font-bold uppercase text-[#22aa9e]">
                {organization.title}
              </h1>
              <h3 className="uppercase text-[#3bc6b7] font-semibold mt-1">
                {organization.year} - {organization.position}
              </h3>
              <p className="mt-3 text-justify text-[#184947]">
                {organization.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
