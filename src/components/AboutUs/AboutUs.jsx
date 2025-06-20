import React from 'react'
import OurTeam from './OurTeam'
import Crafting from '../Crafting'
import { FaStar, FaLeaf, FaSmile, FaSeedling } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import CommitmentSection from './CommitmentSection';
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const AboutUs = () => {
  return (
    <div>
         {/* Hero section */}
            <section
                className="relative h-[80vh] w-full flex items-center justify-start bg-cover bg-center bg-no-repeat px-6 mt-10"
                style={{ backgroundImage: `url('/projects/2.jpg')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-0"></div>

                <div className="relative z-10 text-white max-w-2xl space-y-6">
                    <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow-lg">
                        About Us
                    </h1>
                    <p className="text-xl sm:text-1xl leading-relaxed drop-shadow">
                        Transform Your Garden into a Personal Paradise!
                    </p>
                    
                </div>
            </section>

            {/* Crafting section */}
            <section
      className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat px-6 flex items-center"
      
    >
      <div className="absolute inset-0 bg-[#374C37] z-0" />
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          {...fadeUp}
          className="text-white space-y-6 max-w-2xl"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white rounded-full px-4 py-1 text-sm font-semibold"
          >
            OUR STORY
          </motion.button>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            CRAFTING BEAUTIFUL <br />
            GARDENS <span className="text-[#90A48B]">SINCE '99</span>
          </h1>

          <p className="text-gray-200 text-lg">
            Established in 1999, our garden service has been transforming outdoor
            spaces into thriving, beautiful landscapes for over two decades. With
            a commitment to quality and personalized care, our experienced team
            offers a full range of services, from design to maintenance, ensuring
            your garden flourishes in every season.
          </p>

          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#90A48B] to-[#6F856B] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
            >
              OUR PROJECTS
            </motion.button>
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
          {[
            {
              title: "Excellent",
              stars: 5,
              subtitle: "Based on 185 reviews",
              icon: <SiTrustpilot className="text-teal-400 text-xl" />,
              label: "Trustpilot",
              bg: "bg-white/10 backdrop-blur-md text-white",
            },
            {
              title: "850+",
              icon: <FaSmile className="text-3xl text-yellow-300 animate-bounce" />,
              subtitle: "Happy Customers",
              bg: "bg-[#2E442F] text-white",
            },
            {
              title: "550+",
              icon: <FaSeedling className="text-3xl text-green-300 animate-bounce" />,
              subtitle: "Garden Designed",
              bg: "bg-[#3D5734] text-white",
            },
            {
              title: "4.8 out of 5",
              stars: 5,
              subtitle: "Based on 200 reviews",
              icon: <FcGoogle className="text-2xl" />,
              label: "Google",
              bg: "bg-white/10 backdrop-blur-md text-white",
            },
          ].map((card, i) => (
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`${card.bg} rounded-xl p-5 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between`}
              key={i}
            >
              <div className="mb-2">
                <h3 className="text-lg font-semibold">
                  {card.title}
                </h3>

                {card.stars && (
                  <div className="flex text-yellow-400 my-1">
                    {Array(card.stars)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="mr-1" />
                      ))}
                  </div>
                )}

                <p className="text-sm mb-1">{card.subtitle}</p>

                {card.icon && (
                  <div className="flex items-center gap-2 text-sm">
                    {card.icon}
                    {card.label && <span>{card.label}</span>}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
        <OurTeam/>
        <CommitmentSection/>
    </div>
  )
}

export default AboutUs