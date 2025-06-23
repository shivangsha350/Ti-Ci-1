// import React from "react";
// import { FaLeaf } from "react-icons/fa";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Tissue Culture & Plant Biotechnology",
//     description:
//       "Our state-of-the-art labs specialize in the micropropagation of exotic plants, helping nurseries, greenhouses, and decor companies access high-quality planting material at scale.",
//     image: "/garden.jpeg",
//     readMore: true,
//   },
//   {
//     title: "Aquascaping & Aquatic Habitat Design",
//     description:
//       "TiCi brings artistry to aquariums through bespoke aquascapes and sustainable aquatic habitats, blending beauty with eco-balance.",
//     image: "/maintainance.jpeg",
//     readMore: true,
//   },
//   {
//     title: "Hydroponics, Aquaponics & Urban Farming",
//     description:
//       "We design space-efficient, low-maintenance systems that deliver high yields using minimal resources for homes, schools, and commercial setups.",
//     image: "/decking.jpeg",
//     readMore: true,
//   },
//   // {
//   //   title: "Terrariums & Indoor Rainforests",
//   //   description:
//   //     "From miniature glass ecosystems to immersive installations, we bring nature indoors with moss walls, indoor waterfalls, and rainforest scapes.",
//   //   image: "/services/terrariums.jpg",
//   //   readMore: true,
//   // },
//   // {
//   //   title: "Training & Mentorship",
//   //   description:
//   //     "Our practical, job-ready training programs nurture future tissue culture specialists, aquascaping artists, and ecosystem project managers.",
//   //   image: "/services/training.jpg",
//   //   readMore: true,
//   // },
// ];

// const ServiceSection = () => {
//   return (
//     <section className="bg-[#374C37] text-white px-6 py-20">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-[#2E422D] rounded-xl overflow-hidden shadow-xl flex flex-col group hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//             >
//               {/* Image */}
//               <div
//                 className="h-[260px] bg-cover bg-center relative group-hover:scale-105 transition-transform duration-500"
//                 style={{ backgroundImage: `url(${service.image})` }}
//               >
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
//                 <div className="absolute top-4 left-4 bg-white text-[#2E422D] p-2 rounded-full shadow-lg">
//                   <FaLeaf className="text-xl" />
//                 </div>
//               </div>

//               {/* Text */}
//               <div className="p-6 flex flex-col flex-grow justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>

//                 {service.readMore && (
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-6 self-start border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#2E422D] transition font-medium"
//                   >
//                     READ MORE
//                   </motion.button>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;



















































// import React from "react";
// import { FaLeaf } from "react-icons/fa";

// const services = [
//   {
//     title: "Garden Design",
//     description:
//       "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
//     image: "/garden.jpeg",
//   },
//   {
//     title: "Garden Maintenance",
//     description:
//       "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
//     image: "/maintainance.jpeg",
//   },
//   {
//     title: "Decking and Patio",
//     description:
//       "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
//     image: "/decking.jpeg",
//   },
//   {
//     title: "Plant Selection",
//     description:
//       "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
//     image: "/decking.jpeg",
//   },
// ];

// const ServiceCard = ({ title, description, image }) => {
//   return (
//     <div className="group relative bg-[#2E442F] rounded-xl overflow-hidden shadow-md transition-all duration-300">
//       {/* Image Layer */}
//       <div
//         className="h-72 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
//         style={{ backgroundImage: `url(${image})` }}
//       />

//       {/* Overlay Content on Hover */}
//       <div className="absolute top-0 left-0 w-full h-72 bg-[#2E442F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//         {/* <button className="bg-[#90A48B] text-[#2E442F] font-semibold px-6 py-2 rounded-full shadow hover:bg-white hover:text-[#1d3122] hover:cursor-pointer transition-all duration-300">
//           VIEW DETAILS
//         </button> */}

//         <button className="cursor-pointer bg-[#90A48B] text-[#2E442F] font-semibold px-6 py-2 rounded-full shadow transition-all duration-300 hover:bg-[#A6BBA3]">
//   VIEW DETAILS
// </button>

//       </div>


      

//       {/* Icon + Title (only show before hover) */}
//       <div className="absolute top-0 left-0 w-full h-72 flex flex-col items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
//         <FaLeaf className="text-4xl mb-2" />
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </div>

//       {/* Description (Always Visible) */}
//       <div className="px-6 py-5 text-white text-sm leading-relaxed">
//         {description}
//       </div>
//     </div>
//   );
// };

// const ServicesSection = () => {
//   return (
//     <section className="bg-[#EEF3EC] py-16 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((service, idx) => (
//           <ServiceCard key={idx} {...service} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;




















































import React from "react";
import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Garden Design",
    description:
      "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
    image: "/garden.jpeg",
  },
  {
    title: "Garden Maintenance",
    description:
      "Our experts ensure your garden remains lush and vibrant with tailored upkeep for every season.",
    image: "/maintainance.jpeg",
  },
  {
    title: "Decking and Patio",
    description:
      "Extend your living space outdoors with elegant, durable decking and patios crafted to suit your lifestyle.",
    image: "/decking.jpeg",
  },
  {
    title: "Plant Selection",
    description:
      "Curated plant varieties chosen for your space, climate, and aesthetics to ensure a thriving garden.",
    image: "/decking.jpeg",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServiceCard = ({ title, description, image }) => {
  return (
    <>
    <motion.div
      variants={cardVariants}
      className="group relative bg-[#2E442F] rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
    >
      {/* Image */}
      <div
        className="h-72 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Hover Overlay */}
      <div className="absolute top-0 left-0 w-full h-72 bg-[#2E442F]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <button className="cursor-pointer bg-[#90A48B] text-[#2E442F] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#A6BBA3] transition-all duration-300">
          VIEW DETAILS
        </button>
      </div>

      {/* Title + Icon */}
      <div className="absolute top-0 left-0 w-full h-72 flex flex-col items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
        <FaLeaf className="text-4xl mb-2 animate-pulse" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {/* Description */}
      <div className="px-6 py-5 text-white text-sm leading-relaxed">
        {description}
      </div>
    </motion.div>
    </>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-[#EEF3EC] py-16 px-6">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
