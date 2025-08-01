import React, { useState } from "react";
import { motion as FramerMotion } from "framer-motion";

const NutrientBooster = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageData = [
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/vital minerals/IMG-20250630-WA0131.jpg",
      title: "VITAL MINERALS",
      description: "Play an important role in maintaining proper photosynthesis and physiology of plants."
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/Soil additives/IMG-20250630-WA0125.jpg",
      title: "SOIL ADDITIVES",
      description: "(Boost root, growth of plants, provides nutrients for lenser periods)"
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/grenoculum/IMG-20250630-WA0126.jpg",
      title: "GREENOCULUM",
      description: "The vitimate sollutants enriched with probiotics and calcium to revoulutionize and your expriences."
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Organics/IMG-20250630-WA0127.jpg",
      title: "ALL IN ONE ORGANICS (Booster for microbial and plants)",
      description: " Organics contains nutrients for aquatic plants in organic format , which is easily used up by microfloral community and in turn provides simple and effective nutrients to the plants. Organic suppliments helps in other micronutrients uptake and stabilization. "
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Non CO2/IMG-20250630-WA0134.jpg",
      title: "ALL IN ONE NON CO2 (Carbon dionide supplement and effiecient algae control)",
      description: " "
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one basic/IMG-20250630-WA0136.jpg",
      title: "ALL IN ONE BASIC",
      description: "The basic variant contains balanced amount of nutrients to promot plants health and colouration while it’s stable nutrients composition doesn’t induce algae problems. It contains all micro and macro nutrients in available format for plant uptake."
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Advance/IMG20250701140714.jpg",
      title: "ALL IN ONE ADVANCE (COMPREHENSIVE NUTRIENT FUSION)",
      description: " A hormonious blend of essential nutrients, minerals, and trace elements providing your aquatic plant with everything they need to flourish and thrive."
    },
    {
      image: "/Nutrient booster/Hydrponic Nutrition/solution 1 , 2 , 3/IMG-20250630-WA0137.jpg",
      title: "Solutuion 1, 2, 3",
      description: "optimized for hydroponic system including paluderium & vertical planter sets. Our hydrogro nutrients solution delivers a comprehensive spectrum of growth enhancing nutrients, Ensuring flavorishing and plant growth in any hydroponic environments."
    },
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/Iron & trace element/IMG-20250630-WA0129.jpg",
      title: "IRON & TRACE ELEMENT",
      description: "Essential for DNA synthesis,respiration and photosynthesis, boosts chlorophyll production in aquatic plants, maintains healthy chloroplast structure and fuction."
    },
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/nitrogen & Phosphorus/IMG-20250630-WA0128.jpg",
      title: "NITROGEN & PHOSPHORUS",
      description: "Nitrogen and phosphorus makes the building blocks in plants. All the enzymes related to plant photosynthesis and metabolism needs nitrogen, phosphorus is needed in plant growth."
    },
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/Phytamin/IMG-20250630-WA0132.jpg",
      title: "PHYTAMINE",
      description: "Boosts plant metabolism and cell growth, supports fatty acid synthesis and tissue regulation, acts as a catalyst in photosynthesis and improves microbial activities in aquatic setups, promotes fish healthy and immunity, enhances nutrient uptake from water."
    },
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/Phytohormone/IMG-20250630-WA0130.jpg",
      title: "PHYTOHORMONES",
      description: "Phytohormones induce and control cellular metabolism in plants. Proper concentration of phytohormones induces rooting and shoot formation depending on environmental conditions."
    },
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/potassium/IMG-20250630-WA0133.jpg",
      title: "POTASSIUM",
      description: "A vital nutrient in plant physiology which supports photosynthesis, Oxygen production and leaf development, mobile ion quickly depleted from water column, regular dosing ensures healthy growth."
    },
    {
      image: "/Nature aquarium/IMG_2387.JPG",
      title: "Showcase Tank",
      description: "A well-balanced nature aquarium with rock and wood layout."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Nutrient Booster</h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Specialized fertilizers and supplements for optimal plant growth.
          </p>
        </div>

        <div className="mb-12">
          <img 
            src="/Product4.avif" 
            alt="Featured Nature Aquarium" 
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="mb-16 " >
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Varieties</h2>
          <FramerMotion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {imageData.map((item, index) => (
              <FramerMotion.div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-md h-130 bg-white cursor-pointer"
                variants={itemVariants}
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 " 
                />
              </FramerMotion.div>
            ))}
          </FramerMotion.div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-2xl ">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              >
                ✕
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-64 h-80 object-cover rounded-lg shadow "
              />
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedImage.title}</h2>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default NutrientBooster;