// import React from "react";
// import { FaSeedling, FaChalkboardTeacher, FaLeaf } from "react-icons/fa";
// import { motion } from "framer-motion";

// const trainings = [
//   {
//     title: "Urban Gardening Workshop",
//     icon: <FaSeedling className="text-4xl mb-4 text-[#2E442F]" />,
//     description:
//       "Learn hands-on techniques for creating small urban gardens that thrive in limited spaces. Ideal for beginners and city dwellers.",
//   },
//   {
//     title: "Professional Landscaping",
//     icon: <FaChalkboardTeacher className="text-4xl mb-4 text-[#2E442F]" />,
//     description:
//       "Take your career to the next level with expert guidance on landscape design, client management, and sustainable practices.",
//   },
//   {
//     title: "Eco-Friendly Gardening",
//     icon: <FaLeaf className="text-4xl mb-4 text-[#2E442F]" />,
//     description:
//       "Discover eco-conscious solutions to grow your garden, including composting, water conservation, and permaculture basics.",
//   },
// ];

// const TrainingSection = () => {
//   return (
//     <section className="bg-[#EEF3EC] py-20 px-6 relative overflow-hidden">
//       {/* Section Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-5xl font-extrabold text-[#2E442F] mb-2">
//           Our Training <span className="text-[#90A48B]">Programs</span>
//         </h2>
//         <p className="text-[#2E442F]/80 max-w-2xl mx-auto mt-2 text-lg">
//           Empower yourself with hands-on skills and knowledge for all levels of gardeners and professionals.
//         </p>
//       </div>

//       {/* Training Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {trainings.map((training, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
//             className="bg-white rounded-xl shadow-xl p-8 text-center transform hover:-translate-y-1 transition-all cursor-pointer border border-[#2E442F]/10"
//           >
//             {training.icon}
//             <h3 className="text-2xl font-semibold mb-3 text-[#2E442F]">{training.title}</h3>
//             <p className="text-[#2E442F]/70 text-sm leading-relaxed">{training.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TrainingSection;













































// TrainingSection.jsx
import React from "react";
import { motion } from "framer-motion";

const TrainingSection = () => {
  return (
    <section className="bg-[#EEF3EC] py-15 px-6 relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#2E442F] mb-2">
          Our Training Program
        </h2>
        <p className="text-[#2E442F]/80 max-w-2xl mx-auto mt-2 text-lg">
          Build a Green Career with TiCi’s 3-Month Intensive Program.
        </p>
      </div>

      <motion.div
        className="bg-white border border-[#2E442F]/10 rounded-xl p-8 shadow-xl max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-[#2E442F]">
          Build a Green Career with Us
        </h3>
        <p className="text-[#2E442F]/70 mb-6">
          Our industry-backed, hands-on training equips you with skills in tissue culture, greenhouse maintenance, aquascaping, and more — designed for students & professionals alike.
        </p>
        <a
          href="/training-program"
          className="inline-block px-6 py-3 bg-[#2E442F] text-white rounded-full font-medium hover:bg-[#90A48B] transition"
        >
          Read More
        </a>
      </motion.div>
    </section>
  );
};

export default TrainingSection;
