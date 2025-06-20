import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const teamMembers = [
  {
    name: "William Carter",
    role: "Landscape Architect",
    image: "/Members/1.webp",
  },
  {
    name: "Emily Grace",
    role: "Landscape Designer",
    image: "/Members/2.webp",
  },
  {
    name: "Anthony Mitchell",
    role: "Garden Designer",
    image: "/Members/3.webp",
  },
  {
    name: "Sophia Brown",
    role: "Plant Specialist",
    image: "/Members/4.webp",
  },
  {
    name: "Liam Smith",
    role: "Horticulturist",
    image: "/Members/5.webp",
  },
];

const OurTeam = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleMembers = teamMembers.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? teamMembers.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 3 >= teamMembers.length ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#EEF3EC] py-16 px-4 md:px-10 text-center">
      <h2 className="text-4xl font-bold text-[#3D5734] mb-10">OUR TEAM</h2>

      <div className="relative max-w-[1300px] mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-[#2E442F] text-white rounded-full p-2 hover:bg-[#3D5734] transition absolute -left-4 md:-left-6 z-10"
        >
          <HiChevronLeft className="text-2xl" />
        </button>

        {/* Members */}
        <div className="flex justify-between gap-6 w-full">
          {visibleMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden w-[340px] flex-shrink-0"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="flex items-center justify-between p-4">
                <div className="text-left">
                  <h3 className="font-semibold text-[#2E442F]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
                <div className="bg-[#2E442F] p-2 rounded-full text-white">
                  <FaFacebookF />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-[#2E442F] text-white rounded-full p-2 hover:bg-[#3D5734] transition absolute -right-4 md:-right-6 z-10"
        >
          <HiChevronRight className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default OurTeam;
