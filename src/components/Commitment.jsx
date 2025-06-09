// Commitment.jsx
import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const features = [
  {
    id: '01',
    title: 'Expertise and Experience',
    description:
      'With years of hands-on experience, our team of professional gardeners and landscapers bring a wealth of knowledge to every project.',
    bg: 'bg-white text-gray-900',
  },
  {
    id: '02',
    title: 'Personalized Service',
    description:
      'We believe that every garden is unique, just like its owner. We take the time to understand your vision, preferences, and the specific needs.',
    bg: 'bg-[#2E442F] text-white',
  },
  {
    id: '03',
    title: 'Comprehensive Solutions',
    description:
      'From garden design and installation to regular maintenance and seasonal updates.',
    bg: 'bg-[#2E442F] text-white',
  },
  {
    id: '04',
    title: 'Quality Workmanship',
    description:
      'Our commitment to quality is evident in every service we provide.',
    bg: 'bg-[#90A48B] text-gray-900',
  },
];

const Commitment = () => {
  return (
    <section className="bg-[#2E442F] text-white py-16 px-6 md:px-20">
      <div className="mb-6">
        <button className="bg-[#40553D] text-white px-4 py-2 rounded-full text-sm font-semibold">
          WHY CHOOSE US
        </button>
      </div>

      <h2 className="text-5xl font-bold mb-2">
        OUR COMMITMENT TO
      </h2>
      <h2 className="text-5xl font-bold text-[#90A48B] mb-6">
        EXCELLENCE
      </h2>

      <p className="max-w-3xl text-lg leading-relaxed mb-8">
        Established in 1999, our garden service has been transforming outdoor spaces into thriving, beautiful landscapes for over two decades. With a commitment to quality and personalized care, our experienced team offers a full range of services, from design to maintenance, ensuring your garden flourishes in every season.
      </p>

      <div className="mb-8 flex flex-wrap items-center gap-4">
        <button className="bg-[#40553D] border border-white text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-white hover:text-[#2E442F] transition duration-300">
          OUR PROJECTS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {features.map(({ id, title, description, bg }) => (
          <div
            key={id}
            className={`rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${bg}`}
          >
            <div className="flex items-start justify-between mb-3">
              <FaLeaf className="text-3xl" />
              <span className="text-sm font-bold">{id}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-base">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Commitment;
