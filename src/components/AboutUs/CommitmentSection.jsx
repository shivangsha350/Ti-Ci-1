import React from "react";
import { FaLeaf } from "react-icons/fa";

const commitments = [
  {
    number: "01",
    title: "Expertise and Experience",
    description:
      "With years of hands-on experience, our team of professional gardeners and landscapers bring a wealth of knowledge to every project.",
  },
  {
    number: "02",
    title: "Personalized Service",
    description:
      "We believe that every garden is unique, just like its owner. We take the time to understand your vision, preferences, and the specific needs.",
  },
  {
    number: "03",
    title: "Comprehensive Solutions",
    description:
      "From garden design and installation to regular maintenance and specialty services, we offer a full range of garden services.",
  },
  {
    number: "04",
    title: "Quality Workmanship",
    description:
      "Our commitment to quality is evident in every service we provide. We use only the best materials, plants, and tools to your garden.",
  },
  {
    number: "05",
    title: "Eco-Friendly Practices",
    description:
      "We are dedicated to environmentally sustainable practices. Our organic gardening methods, water-wise landscaping, and waste management.",
  },
  {
    number: "06",
    title: "Satisfaction Guarantee",
    description:
      "Our top priority is your satisfaction. We take pride in our work, and our many happy customers are a testament to the quality and care.",
  },
];

const CommitmentSection = () => {
  return (
    <section className="bg-[#EEF3EC] py-16 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center text-[#3D5734] mb-2">
        OUR COMMITMENT TO
      </h2>
      <h3 className="text-4xl font-bold text-center text-[#7C8B78] mb-10">
        EXCELLENCE
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {commitments.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-6 text-white flex flex-col justify-between ${
              idx < 3 ? "bg-[#2E442F]" : "bg-[#7C8B78]"
            }`}
          >
            <div className="flex items-start gap-3 mb-4">
              <FaLeaf className="text-3xl" />
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </div>
            </div>
            <p className="text-sm">{item.description}</p>
            <span className="text-right font-semibold">{item.number}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommitmentSection;
