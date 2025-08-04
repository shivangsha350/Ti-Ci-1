// import React, { useState } from "react";
// import { motion as FramerMotion } from "framer-motion";

// const NutrientBooster = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const imageData = [
//     {
//       image: "/Nutrient booster/Liquid fertilizer & water conditioner/vital minerals/IMG-20250630-WA0131.jpg",
//       title: "VITAL MINERALS",
//       description: "Play an important role in maintaining proper photosynthesis and physiology of plants."
//     },
//     {
//       image: "/Nutrient booster/Liquid fertilizer & water conditioner/Soil additives/IMG-20250630-WA0125.jpg",
//       title: "SOIL ADDITIVES",
//       description: "(Boost root, growth of plants, provides nutrients for lenser periods)"
//     },
//     {
//       image: "/Nutrient booster/Liquid fertilizer & water conditioner/grenoculum/IMG-20250630-WA0126.jpg",
//       title: "GREENOCULUM",
//       description: "The vitimate sollutants enriched with probiotics and calcium to revoulutionize and your expriences."
//     },
//     {
//       image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Organics/IMG-20250630-WA0127.jpg",
//       title: "ALL IN ONE ORGANICS (Booster for microbial and plants)",
//       description: " Organics contains nutrients for aquatic plants in organic format , which is easily used up by microfloral community and in turn provides simple and effective nutrients to the plants. Organic suppliments helps in other micronutrients uptake and stabilization. "
//     },
//     {
//       image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Non CO2/IMG-20250630-WA0134.jpg",
//       title: "ALL IN ONE NON CO2 (Carbon dionide supplement and effiecient algae control)",
//       description: " "
//     },
//     {
//       image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one basic/IMG-20250630-WA0136.jpg",
//       title: "ALL IN ONE BASIC",
//       description: "The basic variant contains balanced amount of nutrients to promot plants health and colouration while it’s stable nutrients composition doesn’t induce algae problems. It contains all micro and macro nutrients in available format for plant uptake."
//     },
//     {
//       image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Advance/IMG20250701140714.jpg",
//       title: "ALL IN ONE ADVANCE (COMPREHENSIVE NUTRIENT FUSION)",
//       description: " A hormonious blend of essential nutrients, minerals, and trace elements providing your aquatic plant with everything they need to flourish and thrive."
//     },
//     {
//       image: "/Nutrient booster/Hydrponic Nutrition/solution 1 , 2 , 3/IMG-20250630-WA0137.jpg",
//       title: "Solutuion 1, 2, 3",
//       description: "optimized for hydroponic system including paluderium & vertical planter sets. Our hydrogro nutrients solution delivers a comprehensive spectrum of growth enhancing nutrients, Ensuring flavorishing and plant growth in any hydroponic environments."
//     },
//     {
//       image: "/Nutrient booster/Aquatic plant nutrition/pro series/Iron & trace element/IMG-20250630-WA0129.jpg",
//       title: "IRON & TRACE ELEMENT",
//       description: "Essential for DNA synthesis,respiration and photosynthesis, boosts chlorophyll production in aquatic plants, maintains healthy chloroplast structure and fuction."
//     },
//     {
//       image: "/Nutrient booster/Aquatic plant nutrition/pro series/nitrogen & Phosphorus/IMG-20250630-WA0128.jpg",
//       title: "NITROGEN & PHOSPHORUS",
//       description: "Nitrogen and phosphorus makes the building blocks in plants. All the enzymes related to plant photosynthesis and metabolism needs nitrogen, phosphorus is needed in plant growth."
//     },
//     {
//       image: "/Nutrient booster/Aquatic plant nutrition/pro series/Phytamin/IMG-20250630-WA0132.jpg",
//       title: "PHYTAMINE",
//       description: "Boosts plant metabolism and cell growth, supports fatty acid synthesis and tissue regulation, acts as a catalyst in photosynthesis and improves microbial activities in aquatic setups, promotes fish healthy and immunity, enhances nutrient uptake from water."
//     },
//     {
//       image: "/Nutrient booster/Aquatic plant nutrition/pro series/Phytohormone/IMG-20250630-WA0130.jpg",
//       title: "PHYTOHORMONES",
//       description: "Phytohormones induce and control cellular metabolism in plants. Proper concentration of phytohormones induces rooting and shoot formation depending on environmental conditions."
//     },
//     {
//       image: "/Nutrient booster/Aquatic plant nutrition/pro series/potassium/IMG-20250630-WA0133.jpg",
//       title: "POTASSIUM",
//       description: "A vital nutrient in plant physiology which supports photosynthesis, Oxygen production and leaf development, mobile ion quickly depleted from water column, regular dosing ensures healthy growth."
//     },
//     {
//       image: "/Nature aquarium/IMG_2387.JPG",
//       title: "Showcase Tank",
//       description: "A well-balanced nature aquarium with rock and wood layout."
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Nutrient Booster</h1>
//           <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
//             Specialized fertilizers and supplements for optimal plant growth.
//           </p>
//         </div>

//         <div className="mb-12">
//           <img 
//             src="/Product4.avif" 
//             alt="Featured Nature Aquarium" 
//             className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
//           />
//         </div>

//         <div className="mb-16 " >
//           <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Varieties</h2>
//           <FramerMotion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {imageData.map((item, index) => (
//               <FramerMotion.div 
//                 key={index} 
//                 className="overflow-hidden rounded-lg shadow-md h-130 bg-white cursor-pointer"
//                 variants={itemVariants}
//                 onClick={() => setSelectedImage(item)}
//               >
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 " 
//                 />
//               </FramerMotion.div>
//             ))}
//           </FramerMotion.div>
//         </div>

//         {selectedImage && (
//           <div className="fixed inset-0 bg-transperent bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-2xl ">
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
//               >
//                 ✕
//               </button>
//               <img
//                 src={selectedImage.image}
//                 alt={selectedImage.title}
//                 className="w-64 h-80 object-cover rounded-lg shadow "
//               />
//               <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedImage.title}</h2>
//               <p className="text-gray-600">{selectedImage.description}</p>
//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default NutrientBooster;
































import React, { useState } from "react";
import { motion as FramerMotion } from "framer-motion";

const vitalminerals = [
   {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/vital minerals/IMG-20250630-WA0131.jpg",
      title: "VITAL MINERALS",
      description: "Play an important role in maintaining proper photosynthesis and physiology of plants."
    }
];

const Soiladditives = [
 {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/Soil additives/IMG-20250630-WA0125.jpg",
      title: "SOIL ADDITIVES",
      description: "(Boost root, growth of plants, provides nutrients for lenser periods)"
    }
];

const grenoculum = [
 {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/grenoculum/IMG-20250630-WA0126.jpg",
      title: "GREENOCULUM",
      description: "The vitimate sollutants enriched with probiotics and calcium to revoulutionize and your expriences."
    }
];
const Liquid = [
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
];
const Aquatic = [
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
];
const HydrponicNutrition = [
  {
      image: "/Nutrient booster/Hydrponic Nutrition/solution 1 , 2 , 3/IMG-20250630-WA0137.jpg",
      title: "Solutuion 1, 2, 3",
      description: "optimized for hydroponic system including paluderium & vertical planter sets. Our hydrogro nutrients solution delivers a comprehensive spectrum of growth enhancing nutrients, Ensuring flavorishing and plant growth in any hydroponic environments."
    }
];



const GalleryModal = ({ items, onClose }) => (

  
  
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

    
    <div className="bg-white p-6 rounded-xl max-w-3xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
      >
        ✕
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white rounded-md">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2 text-gray-800">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}

        
      </div>
    </div>
  </div>
);



const NutrientBooster = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  const cards = [
    { title: "vital minerals", image: vitalminerals[0].image, data: vitalminerals },
    { title: "Soil additives", image: Soiladditives[0].image, data: Soiladditives },
    { title: "grenoculum", image: grenoculum[0].image, data: grenoculum },
    { title: "Liquid fertilizer & water conditioner", image: Liquid[0].image, data: Liquid },
    { title: "Hydrponic Nutrition", image: HydrponicNutrition[0].image, data: HydrponicNutrition },
    { title: "Aquatic plant nutrition", image: Aquatic[0].image, data: Aquatic },
  ];

  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">


<div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Nutrient Booster</h1>
          
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src="/Product4.avif"
            alt="Featured Nature Aquarium"
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Nutrient Booster</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Space Optimization", "Improved Air Quality", "Aesthetic Appeal"].map((title, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2E442F] mb-3">{title}</h3>
                <p className="text-[#2E442F]/70">
                  {title === "Space Optimization" && "Perfect for urban environments where ground space is limited. Grow upward instead of outward."}
                  {title === "Improved Air Quality" && "Plants naturally filter air pollutants, creating healthier indoor and outdoor environments."}
                  {title === "Aesthetic Appeal" && "Create stunning visual focal points that transform ordinary walls into living art installations."}
                </p>
              </div>
            ))}
          </div>
        </div>


    
      </div>


      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">
            Nutrient Booster
          </h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Lab-grown, disease-free aquatic plants for your aquarium.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveGallery(card.data)}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#2E442F] mb-2">{card.title}</h3>
              <p className="text-[#2E442F]/70">Click to view plant varieties</p>
            </div>
          ))}
        </div>

        {activeGallery && (
          <GalleryModal items={activeGallery} onClose={() => setActiveGallery(null)} />
        )}
      </div>

      {/* Features Section */}
        <div className="mb-16 mt-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["Custom Design", "Each vertical garden is custom designed to fit your space and aesthetic preferences."],
              ["Integrated Irrigation", "Built-in irrigation systems ensure plants receive optimal water with minimal maintenance."],
              ["Plant Selection", "Carefully selected plants that thrive in vertical environments and complement each other."],
              ["Maintenance Support", "Professional maintenance services available to ensure your vertical garden thrives year-round."]
            ].map(([title, desc], i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-[#2E442F] text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E442F] mb-2">{title}</h3>
                  <p className="text-[#2E442F]/70">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2E442F] text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your vertical garden project. Our experts will help you create a stunning living wall tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-[#2E442F] px-6 py-3 rounded-full font-semibold hover:bg-[#90A48B] hover:text-white transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="/products"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#2E442F] transition duration-300"
            >
              View All Products
            </a>
          </div>
        </div>
    </section>
    
  );
  
};
export default NutrientBooster;
