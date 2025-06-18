import React from "react";
import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Tissue Culture & Plant Biotechnology",
    description:
      "Our state-of-the-art labs specialize in the micropropagation of exotic plants, helping nurseries, greenhouses, and decor companies access high-quality planting material at scale.",
    image: "/garden.jpeg",
    readMore: true,
  },
  {
    title: "Aquascaping & Aquatic Habitat Design",
    description:
      "TiCi brings artistry to aquariums through bespoke aquascapes and sustainable aquatic habitats, blending beauty with eco-balance.",
    image: "/maintainance.jpeg",
    readMore: true,
  },
  {
    title: "Hydroponics, Aquaponics & Urban Farming",
    description:
      "We design space-efficient, low-maintenance systems that deliver high yields using minimal resources for homes, schools, and commercial setups.",
    image: "/decking.jpeg",
    readMore: true,
  },
  // {
  //   title: "Terrariums & Indoor Rainforests",
  //   description:
  //     "From miniature glass ecosystems to immersive installations, we bring nature indoors with moss walls, indoor waterfalls, and rainforest scapes.",
  //   image: "/services/terrariums.jpg",
  //   readMore: true,
  // },
  // {
  //   title: "Training & Mentorship",
  //   description:
  //     "Our practical, job-ready training programs nurture future tissue culture specialists, aquascaping artists, and ecosystem project managers.",
  //   image: "/services/training.jpg",
  //   readMore: true,
  // },
];

const ServiceSection = () => {
  return (
    <section className="bg-[#374C37] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-[#2E422D] rounded-xl overflow-hidden shadow-xl flex flex-col group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Image */}
              <div
                className="h-[260px] bg-cover bg-center relative group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-white text-[#2E422D] p-2 rounded-full shadow-lg">
                  <FaLeaf className="text-xl" />
                </div>
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {service.readMore && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 self-start border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#2E422D] transition font-medium"
                  >
                    READ MORE
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
