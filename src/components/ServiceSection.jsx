// import React from "react";
// import { FaLeaf } from "react-icons/fa";
// import { motion } from "framer-motion";

// // const services = [
// //   {
// //     title: "Garden Design",
// //     description:
// //       "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
// //     image: "/garden.jpeg",
// //   },
// //   {
// //     title: "Garden Maintenance",
// //     description:
// //       "Our experts ensure your garden remains lush and vibrant with tailored upkeep for every season.",
// //     image: "/maintainance.jpeg",
// //   },
// //   {
// //     title: "Decking and Patio",
// //     description:
// //       "Extend your living space outdoors with elegant, durable decking and patios crafted to suit your lifestyle.",
// //     image: "/decking.jpeg",
// //   },
// //   {
// //     title: "Plant Selection",
// //     description:
// //       "Curated plant varieties chosen for your space, climate, and aesthetics to ensure a thriving garden.",
// //     image: "/decking.jpeg",
// //   },
// // ];

// // Animation variants
// const services = [
//   {
//     title: "Tissue Culture & Biotechnology",
//     description:
//       "Micropropagation of exotic plants in sterile labs. Scalable, high-quality planting material for nurseries & greenhouses.",
//     image: "/garden.jpeg",
//   },
//   {
//     title: "Aquascaping & Habitats",
//     description:
//       "Custom freshwater aquascapes and sustainable aquatic designs. Balanced filtration & stunning underwater aesthetics.",
//     image: "/maintainance.jpeg",
//   },
//   {
//     title: "Hydroponics & Urban Farming",
//     description:
//       "Space-saving hydroponic and aquaponic setups for schools, homes, and commercial spaces with organic yields.",
//     image: "/decking.jpeg",
//   },
//   {
//     title: "Terrariums & Indoor Rainforests",
//     description:
//       "Desktop gardens, moss walls, and lush green installations that bring nature indoors with minimal upkeep.",
//     image: "/decking.jpeg",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const ServiceCard = ({ title, description, image }) => {
//   return (
//     <>
//     <motion.div
//       variants={cardVariants}
//       className="group relative bg-[#2E442F] rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
//     >
//       {/* Image */}
//       <div
//         className="h-72 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
//         style={{ backgroundImage: `url(${image})` }}
//       />

//       {/* Hover Overlay */}
//       <div className="absolute top-0 left-0 w-full h-72 bg-[#2E442F]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//         <button className="cursor-pointer bg-[#90A48B] text-[#2E442F] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#A6BBA3] transition-all duration-300">
//           VIEW DETAILS
//         </button>
//       </div>

//       {/* Title + Icon */}
//       <div className="absolute top-0 left-0 w-full h-72 flex flex-col items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
//         <FaLeaf className="text-4xl mb-2 animate-pulse" />
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </div>

//       {/* Description */}
//       <div className="px-6 py-5 text-white text-sm leading-relaxed">
//         {description}
//       </div>
//     </motion.div>
//     </>
//   );
// };

// const ServicesSection = () => {
//   return (
//     <section className="bg-[#EEF3EC] py-16 px-6">
//       <motion.div
//         className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {services.map((service, idx) => (
//           <ServiceCard key={idx} {...service} />
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default ServicesSection;
