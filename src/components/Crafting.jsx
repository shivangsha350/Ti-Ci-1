// import React from "react";
// import { FaStar, FaLeaf, FaSmile, FaSeedling } from "react-icons/fa";
// import { SiTrustpilot } from "react-icons/si";
// import { FcGoogle } from "react-icons/fc";
// import { motion } from "framer-motion";

// const fadeUp = {
//   initial: { opacity: 0, y: 40 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// const Crafting = () => {
//   return (
//     <section
//       className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat px-6 flex items-center"
//       style={{ backgroundImage: "url('/leaves.webp')" }}
//     >
//       <div className="absolute inset-0 bg-black/60 z-0" />
//       <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* Left Content */}
//         <motion.div {...fadeUp} className="text-white space-y-6 max-w-2xl">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-white/10 border border-white rounded-full px-4 py-1 text-sm font-semibold"
//           >
//             ABOUT US
//           </motion.button>

//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             From Aquasphere to TiCi
//           </h1>

//           <p className="text-gray-200 text-lg">
//             TiCi began in 2012 as Aquasphere, focused on aquascaping. In 2021 we rebranded to TiCi — specializing in tissue culture, sustainable ecosystems, and green innovation.
//           </p>

//           <p className="text-gray-200 text-lg">
//             Our milestones include launching a homegrown aquascaping product line, setting up advanced labs for plant tissue culture, training future green professionals, and partnering with educational institutes.
//           </p>

          

//           <div className="flex gap-4 flex-wrap">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-r from-[#90A48B] to-[#6F856B] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
//             >
//               OUR PROJECTS
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Right Cards */}
//         <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
//           {[
//             {
//               title: "Excellent",
//               stars: 5,
//               subtitle: "Based on 185 reviews",
//               icon: <SiTrustpilot className="text-teal-400 text-xl" />,
//               label: "Trustpilot",
//               bg: "bg-white/10 backdrop-blur-md text-white",
//             },
//             {
//               title: "850+",
//               icon: <FaSmile className="text-3xl text-yellow-300 animate-bounce" />,
//               subtitle: "Happy Customers",
//               bg: "bg-[#2E442F] text-white",
//             },
//             {
//               title: "550+",
//               icon: <FaSeedling className="text-3xl text-green-300 animate-bounce" />,
//               subtitle: "Gardens Designed",
//               bg: "bg-[#3D5734] text-white",
//             },
//             {
//               title: "4.8 out of 5",
//               stars: 5,
//               subtitle: "Based on 200 reviews",
//               icon: <FcGoogle className="text-2xl" />,
//               label: "Google",
//               bg: "bg-white/10 backdrop-blur-md text-white",
//             },
//           ].map((card, i) => (
//             <motion.div
//               {...fadeUp}
//               transition={{ duration: 0.5, delay: i * 0.2 }}
//               className={`${card.bg} rounded-xl p-5 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between`}
//               key={i}
//             >
//               <div className="mb-2">
//                 <h3 className="text-lg font-semibold">{card.title}</h3>
//                 {card.stars && (
//                   <div className="flex text-yellow-400 my-1">
//                     {Array(card.stars)
//                       .fill(0)
//                       .map((_, i) => (
//                         <FaStar key={i} className="mr-1" />
//                       ))}
//                   </div>
//                 )}
//                 <p className="text-sm mb-1">{card.subtitle}</p>
//                 {card.icon && (
//                   <div className="flex items-center gap-2 text-sm">
//                     {card.icon}
//                     {card.label && <span>{card.label}</span>}
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Crafting;
























































import React from "react";
import { FaStar, FaLeaf, FaSmile, FaSeedling } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Crafting = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 pt-24 pb-10 flex items-center"
      style={{ backgroundImage: "url('/leaves.webp')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          {...fadeUp}
          className="text-white space-y-4 sm:space-y-6 max-w-xl"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white rounded-full px-4 py-1 text-xs sm:text-sm font-semibold"
          >
            ABOUT US
          </motion.button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            From Aquasphere to TiCi
          </h1>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            TiCi is where science meets art and design meets ecology. We build living systems which include planted aquariums, vertical gardens, insect farms, and immersive natural enclosures that invite people to reconnect with nature.
          </p>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Rooted in hands-on experimentation and deep ecological observation, TiCi blends biotechnology with design to create sustainable ecosystems for hobbyists, greenpreneurs, and future-forward spaces. We don’t just add greenery, we grow experiences!
          </p>

          <div className="pt-2 sm:pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#90A48B] to-[#6F856B] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
            >
              OUR PROJECTS
            </motion.button>
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
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
              subtitle: "Gardens Designed",
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
              className={`${card.bg} rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all flex flex-col justify-between`}
              key={i}
            >
              <div className="mb-2">
                <h3 className="text-base sm:text-lg font-semibold">
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

                <p className="text-xs sm:text-sm mb-1">{card.subtitle}</p>

                {card.icon && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
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
  );
};

export default Crafting;
