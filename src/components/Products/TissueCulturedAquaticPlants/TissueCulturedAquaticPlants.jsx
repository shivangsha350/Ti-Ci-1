// import React, { useState } from "react";
// import { motion as FramerMotion } from "framer-motion";

// const imageData = [
//   {
//     image: "/Tissue cultured aquatic plants/carpet/Eleocharis parvula (Dwarf hair grass)/eleocharis-sp-mini.jpg",
//     title: "Eleocharis parvula (Dwarf hair grass)",
//     description: "Widely distributed across North America, Europe, and parts of Asia.Eleocharis parvula, commonly known as Dwarf Hairgrass, is a fine-leaved carpeting plant. It forms dense, grass-like mats and is often used in nature-style aquascapes. It’s appreciated for its flowing appearance and ease of maintenance compared to other carpet plants."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/carpet/Hemianthus Callitrichoides _Cuba/hc cuba.jpg",
//     title: "Hemianthus Callitrichoides 'Cuba'",
//     description: "Native to Cuba, specifically discovered west of Havana. Hemianthus callitrichoides 'Cuba', commonly known as HC Cuba or Dwarf Baby Tears, is one of the smallest aquarium plants. It features tiny, round, bright green leaves and grows as a lush, dense carpet under the right conditions. It's a favorite in aquascaping due to its compact and decorative appearance."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/carpet/Monte Carlo (Micranthemum tweediei)/monte carlo.jpg",
//     title: "Monte Carlo (Micranthemum Tweediei)",
//     description: "Native to Argentina, specifically the Río Paraná region. Monte Carlo (Micranthemum tweediei) is a popular carpeting plant in the aquarium hobby. It features small, round, light green leaves, and spreads quickly across the substrate under good conditions. It's often compared to HC Cuba but is slightly easier to grow and maintain"
//   },
//   {
//     image: "/Tissue cultured aquatic plants/carpet/UTRICULARIA GRAMMINIFOLIA/utricularia-graminifolia.jpg",
//     title: "Hemianthus Callitrichoides 'Cuba'",
//     description: "Native to Cuba, specifically discovered west of Havana. Hemianthus callitrichoides 'Cuba', commonly known as HC Cuba or Dwarf Baby Tears, is one of the smallest aquarium plants. It features tiny, round, bright green leaves and grows as a lush, dense carpet under the right conditions. It's a favorite in aquascaping due to its compact and decorative appearance."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/Midground/ALTERNANTHERA REINECKII ‘MINI’/ALTERNANTHERAREINECKII_MINI_TISSUECULTURE_eecb3040-e846-4a03-b44c-a212cd4c4740.jpg",
//     title: "Alternanthera Reineckii 'Mini'",
//     description: "Alternanthera reineckii ‘Mini’ is native to South America, primarily found in Brazil and surrounding tropical regions. It naturally grows in wet, marshy areas and shallow freshwater environments. Alternanthera reineckii ‘Mini’ is a small, vibrant red aquatic plant used for colorful foregrounds in freshwater aquariums. Vibrant red to pinkish with green undertones leaves."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/Midground/Cryptocoryne Axelrodi/Cryptocoryne Axelrodi.jpg",
//     title: "Cryptocoryne Axelrodi",
//     description: "Cryptocoryne axelrodi is a species of aquatic plant native to Sri Lanka, particularly found in slow-moving streams and shaded freshwater habitats. This plant is known for its striking reddish-brown to olive-green leaves, often with attractive patterns or wavy margins. It is popular in aquascaping for its subtle coloration and adaptability."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/Midground/Cryptocoryne Pink/Cryptocoryne Pink.jpg",
//     title: "Cryptocoryne Pink",
//     description: "Cryptocoryne Pink is a cultivated variety of the Cryptocoryne genus, which originates from Southeast Asia—primarily found in regions like Sri Lanka, India, and Malaysia. This particular variety is prized for its attractive pink to reddish hues on its leaves, making it a popular choice for aquascaping and freshwater planted tanks. Its slow-growing nature and compact size make it suitable for nano and mid-sized aquariums."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/Midground/Cryptocoryne Wendtii _Green_/Cryptocoryne Wendtii _Green_.jpg",
//     title: "Cryptocoryne Wendtii 'Green'",
//     description: "Cryptocoryne wendtii 'Green' is a popular and versatile aquatic plant, native to Sri Lanka, known for its hardy nature and ease of care. It's a common choice for both beginner and experienced aquarists due to its broad, lance-shaped leaves, which can range in shade from light to dark green, adding depth and texture to aquarium layouts. It typically grows in a rosette form."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/Midground/Cryptocoryne Wendtti _Brown_/Cryptocoryne Wendtti _Brown_.jpg",
//     title: "Cryptocoryne Wendtii 'Brown'",
//     description: "Cryptocoryne wendtti 'brown'. Sri Lanka. This variety is known for it’s rich brown to bronze-colored, crinkled leaves. It is a hardy and adaptable aquarium plant. A hardy, low-maintenance plant with crinkled, brown to bronze leaves. Great for beginners."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/Midground/Lobelia Cardinalis/Lobelia Cardinalis.jpg",
//     title: "Lobelia Cardinalis",
//     description: "Lobelia cardinalis, commonly known as Cardinal Flower. Native to North America. A popular aquarium plant with bright green to reddish-purple leaves, used for its bold, structured look. Light requires medium to high – Brings out vibrant color and compact growth. Grows without co2 it but thrives better with CO₂. Can be use as mid-ground or background – Great for adding contrast and structure."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/Midground/Pogostemon helferi/Pogostemon helferi.jpg",
//     title: "Pogostemon helferi",
//     description: "Origin: Pogostemon helferi is a unique aquatic plant native to Thailand, particularly found in fast-flowing rivers and streams. Discovered by aquarists exploring the wild flora of Southeast Asia, this plant quickly gained popularity for its compact size and curly, decorative leaves. About the Plant: Commonly referred to as “Downoi” (meaning “little star” in Thai), Pogostemon helferi is prized for its vibrant green color and dense, ruffled foliage. It's a foreground or midground plant ideal for aquascaping due to its striking texture and compact growth habit."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/Midground/Staurogyne repens/Staurogyne repens.jpg",
//     title: "Staurogyne repens ",
//     description: "Origin: Pogostemon helferi is a unique aquatic plant native to Thailand, particularly found in fast-flowing rivers and streams. Discovered by aquarists exploring the wild flora of Southeast Asia, this plant quickly gained popularity for its compact size and curly, decorative leaves. About the Plant: Commonly referred to as “Downoi” (meaning “little star” in Thai), Pogostemon helferi is prized for its vibrant green color and dense, ruffled foliage. It's a foreground or midground plant ideal for aquascaping due to its striking texture and compact growth habit."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/stem plant/Ammania-Senegalensia/Ammania-Senegalensia.jpg",
//     title: "Ammania Senegalensia",
//     description: "Ammannia senegalensis is a colorful aquatic stem plant native to West Africa, especially Senegal. It is admired in aquascaping for its rich red to bronze leaves, which become more vivid under ideal conditions. The plant grows upright with lance-shaped leaves and thrives in nutrient-rich, high-tech aquariums."
//   },
//   {
//   image: "/Tissue cultured aquatic plants/stem plant/LIMNOPHILA AROMATICA PURPLE/LIMNOPHILA AROMATICA PURPLE.jpg",
//     title: "LIMNOPHILA AROMATICA PURPLE",
//     description: "Originating from Southeast Asia, Limnophila Aromatica Purple is a beautiful aromatic aquatic plant known for its attractive, purple-tinted leaves and pleasant fragrance. Requires high light to bring out the deep purple coloration. CO2 injection is highly beneficial for lush growth . Suitable for the mid-ground or background in aquascapes."
//   },
//   {
//     image: "/Tissue cultured aquatic plants/stem plant/MYRIOPHYLLUM  mattogrossense/MYRIOPHYLLUM mattogrossense.jpg",
//     title: "MYRIOPHYLLUM",
//     description: "Myriophyllum, commonly known as Water Milfoil, is a genus of aquatic plants found worldwide. Known for its feather-like leaves and rapid growth, it adds a soft texture to planted tanks. Prefers moderate to high lighting. CO2 addition enhances growth and coloration. Best used as a background plant due to its tall growth."
//   },
//    {
//     image: "/Tissue cultured aquatic plants/stem plant/Rotala Blood Red/Rotala Blood Red.jpeg",
//     title: "Rotala Blood Red ",
//     description: "Rotala 'Blood Red' is a striking aquatic stem plant known for its vibrant deep red coloration. Native to Southeast Asia, it is a variant of the Rotala rotundifolia species. This plant is prized in aquascaping for its bold appearance and dense, upright growth, especially when grown under optimal conditions. The intense red hue is best achieved with strong lighting and proper nutrition."
//   },
//    {
//     image: "/Tissue cultured aquatic plants/stem plant/ROTALA H’RA/ROTALA H’RA.jpg",
//     title: "ROTALA H’RA",
//     description: "Rotala H’ra is a variant of Rotala rotundifolia, originating from Southeast Asia. It is admired for its vivid reddish-orange hue and delicate, arching stems, making it a popular choice in aquascaping. "
//   },
//   {
//     image: "/Tissue cultured aquatic plants/stem plant/Rotala sp. Bangladesh/Rotala sp. Bangladesh.jpg",
//     title: "Rotala sp. Bangladesh",
//     description: "Rotala sp. 'Bangladesh' is a lesser known but visually striking stem plant believed to originate from Bangladesh. It features narrow, delicate leaves that range from green to pinkish red depending on lighting and nutrient conditions. The plant is ideal for aquascaping due to its refined texture and graceful, upright growth. It closely resembles other Rotala species, but it noted for its elegant appearance and subtle color transition."
//   }
  
// ];

// const Terrarium = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

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
//           <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Tissue Cultured Aquatic Plants</h1>
//           <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
//             Lab-grown, disease-free aquatic plants for your aquarium.
//           </p>
//         </div>

//         <div className="mb-12">
//           <img
//             src="/Tissue cultured aquatic plants/Midground/Staurogyne repens/Staurogyne repens.jpg"
//             alt="Featured Terrarium"
//             className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
//           />
//         </div>

//         {/* Benefits Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Benefits of Tissue Cultured Aquatic Plants</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {["Space Optimization", "Improved Air Quality", "Aesthetic Appeal"].map((title, i) => (
//               <div key={i} className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-[#2E442F] mb-3">{title}</h3>
//                 <p className="text-[#2E442F]/70">
//                   {title === "Space Optimization" && "Perfect for urban environments where ground space is limited. Grow upward instead of outward."}
//                   {title === "Improved Air Quality" && "Plants naturally filter air pollutants, creating healthier indoor and outdoor environments."}
//                   {title === "Aesthetic Appeal" && "Create stunning visual focal points that transform ordinary walls into living art installations."}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>


//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Varieties</h2>
          
//           <div className="grid md:grid-cols-3 gap-6 mb-5">
//   {[
//     {
//       title: "Carpet",
//       image:
//         "/Tissue cultured aquatic plants/carpet/Eleocharis parvula (Dwarf hair grass)/eleocharis-sp-mini.jpg",
//     },
//     {
//       title: "Midground",
//       image:
//         "/Tissue cultured aquatic plants/Midground/ALTERNANTHERA REINECKII ‘MINI’/ALTERNANTHERAREINECKII_MINI_TISSUECULTURE_eecb3040-e846-4a03-b44c-a212cd4c4740.jpg",
//     },
//     {
//       title: "Stem Plant",
//       image:
//         "/Tissue cultured aquatic plants/stem plant/Ammania-Senegalensia/Ammania-Senegalensia.jpg",
//     },
//   ].map((item, i) => (
//     <div key={i} className="bg-white p-6 rounded-lg shadow-md">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="w-full h-50 object-cover rounded-md mb-4"
//       />
//       <h3 className="text-xl font-semibold text-black mb-3 ml-30">{item.title}</h3>
//       <p className="text-[#2E442F]/70">{item.description}</p>
//     </div>
//   ))}
// </div>

//           <FramerMotion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {imageData.map((data, index) => (
//               <FramerMotion.div
//                 key={index}
//                 className="overflow-hidden rounded-lg shadow-md h-64 bg-white cursor-pointer"
//                 variants={itemVariants}
//                 onClick={() => setSelectedImage(data)}
//               >
//                 <img
//                   src={data.image}
//                   alt={data.title}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                 />
//               </FramerMotion.div>
//             ))}
//           </FramerMotion.div>
//         </div>

//         {/* Modal */}
//         {selectedImage && (
//           <div className="fixed inset-0 bg-transperent bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-2xl">
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
//               >
//                 ✕
//               </button>
//               <img
//                 src={selectedImage.image}
//                 alt={selectedImage.title}
//                 className="w-full h-60 object-cover rounded mb-4"
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

// export default Terrarium;































import React, { useState } from "react";
import { motion as FramerMotion } from "framer-motion";

const carpetImages = [
  {
    image: "/Tissue cultured aquatic plants/carpet/Eleocharis parvula (Dwarf hair grass)/eleocharis-sp-mini.jpg",
    title: "Eleocharis parvula (Dwarf hair grass)",
    description:
      "Widely distributed across North America, Europe, and parts of Asia. Forms dense, grass-like mats and is often used in aquascapes."
  },
  {
    image: "/Tissue cultured aquatic plants/carpet/Hemianthus Callitrichoides _Cuba/hc cuba.jpg",
    title: "Hemianthus Callitrichoides 'Cuba'",
    description:
      "Native to Cuba. Tiny, bright green leaves grow as a lush carpet."
  },
  {
    image: "/Tissue cultured aquatic plants/carpet/Monte Carlo (Micranthemum tweediei)/monte carlo.jpg",
    title: "Monte Carlo (Micranthemum Tweediei)",
    description:
      "Native to Argentina. Small round leaves and fast-spreading."
  },
  {
    image: "/Tissue cultured aquatic plants/carpet/UTRICULARIA GRAMMINIFOLIA/utricularia-graminifolia.jpg",
    title: "Utricularia Graminifolia",
    description:
      "Delicate carpeting plant with grass-like appearance."
  }
];

const midgroundImages = [
  {
    image: "/Tissue cultured aquatic plants/Midground/ALTERNANTHERA REINECKII ‘MINI’/ALTERNANTHERAREINECKII_MINI_TISSUECULTURE_eecb3040-e846-4a03-b44c-a212cd4c4740.jpg",
    title: "Alternanthera Reineckii 'Mini'",
    description: "Small, vibrant red plant perfect for midgrounds."
  },
  {
    image: "/Tissue cultured aquatic plants/Midground/Cryptocoryne Axelrodi/Cryptocoryne Axelrodi.jpg",
    title: "Cryptocoryne Axelrodi",
    description: "Striking reddish-green leaves from Sri Lanka."
  },
  {
    image: "/Tissue cultured aquatic plants/Midground/Cryptocoryne Pink/Cryptocoryne Pink.jpg",
    title: "Cryptocoryne Pink",
    description: "Attractive pinkish hue, great for contrast."
  },
  {
    image: "/Tissue cultured aquatic plants/Midground/Cryptocoryne Wendtii _Green_/Cryptocoryne Wendtii _Green_.jpg",
    title: "Cryptocoryne Wendtii 'Green'",
    description: "Hardy green rosette plant."
  },
  {
    image: "/Tissue cultured aquatic plants/Midground/Cryptocoryne Wendtti _Brown_/Cryptocoryne Wendtti _Brown_.jpg",
    title: "Cryptocoryne Wendtii 'Brown'",
    description: "Brown crinkled leaves for earthy tone."
  },
  {
    image: "/Tissue cultured aquatic plants/Midground/Lobelia Cardinalis/Lobelia Cardinalis.jpg",
    title: "Lobelia Cardinalis",
    description: "Bright green to reddish plant with bold shape."
  },
  {
    image: "/Tissue cultured aquatic plants/Midground/Pogostemon helferi/Pogostemon helferi.jpg",
    title: "Pogostemon helferi",
    description: "Unique curly leaf plant from Thailand."
  },
  {
    image: "/Tissue cultured aquatic plants/Midground/Staurogyne repens/Staurogyne repens.jpg",
    title: "Staurogyne repens",
    description: "Compact, green foliage, easy to maintain."
  }
];

const stemImages = [
  {
    image: "/Tissue cultured aquatic plants/stem plant/Ammania-Senegalensia/Ammania-Senegalensia.jpg",
    title: "Ammania Senegalensia",
    description: "West African red to bronze stem plant."
  },
  {
    image: "/Tissue cultured aquatic plants/stem plant/LIMNOPHILA AROMATICA PURPLE/LIMNOPHILA AROMATICA PURPLE.jpg",
    title: "Limnophila Aromatica Purple",
    description: "Purple-tinted aromatic plant from SE Asia."
  },
  {
    image: "/Tissue cultured aquatic plants/stem plant/MYRIOPHYLLUM  mattogrossense/MYRIOPHYLLUM mattogrossense.jpg",
    title: "Myriophyllum",
    description: "Feathery textured fast grower."
  },
  {
    image: "/Tissue cultured aquatic plants/stem plant/Rotala Blood Red/Rotala Blood Red.jpeg",
    title: "Rotala Blood Red",
    description: "Intensely red stem plant with upright growth."
  },
  {
    image: "/Tissue cultured aquatic plants/stem plant/ROTALA H’RA/ROTALA H’RA.jpg",
    title: "Rotala H’ra",
    description: "Reddish-orange arching stem plant."
  },
  {
    image: "/Tissue cultured aquatic plants/stem plant/Rotala sp. Bangladesh/Rotala sp. Bangladesh.jpg",
    title: "Rotala sp. Bangladesh",
    description: "Delicate leaves with green-pink transition."
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



const TissueCulturedAquaticPlants = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  const cards = [
    { title: "Carpet", image: carpetImages[0].image, data: carpetImages },
    { title: "Midground", image: midgroundImages[0].image, data: midgroundImages },
    { title: "Stem Plant", image: stemImages[0].image, data: stemImages }
  ];

  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">


      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Tissue Cultured Aquatic Plants</h1>
          
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src="/Tissue cultured aquatic plants/Midground/Staurogyne repens/Staurogyne repens.jpg"
            alt="Featured Tissue Cultured Aquatic Plants"
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Tissue Cultured Aquatic Plants</h2>
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
            Tissue Cultured Aquatic Plants
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



export default TissueCulturedAquaticPlants;


