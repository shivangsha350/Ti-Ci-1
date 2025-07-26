import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const HomeProjects = () => {
  return (
    <section className="bg-[#EEF3EC] py-16 px-6 md:px-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="/projects/vertical garden.jpg"
            alt="Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md">
              Featured Projects
            </h2>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-[#2E442F]">
            Featured Projects Across India
          </h3>
          <p className="text-[#2E442F]/80 leading-relaxed">
            We’ve executed projects that merge beauty with ecology, including:
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 text-[#2E442F]/90">
            {[
              "Public aquarium installations in metro cities",
              "Indoor rainforest décor for luxury resorts",
              "Vertical farming setups for urban balconies",
              "Educational aquaponic demos in schools",
              "Customized terrarium & desktop gardens for offices",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="text-[#3B6029]" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/projects"
            className="inline-block mt-4 bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            See All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProjects;
