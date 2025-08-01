// // VerticalGarden.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion as FramerMotion } from "framer-motion";

// const VerticalGarden = () => {
//   // Array of all vertical garden images including the new ones shared by the user
//   const verticalGardenImages = [
//     "/Vertical garden/(1).jpg",
//     "/Vertical garden/(3).jpg",
//     "/Vertical garden/(4).jpg",
//     "/Vertical garden/(5).jpg",
//     "/Vertical garden/(6).jpg",
//     "/Vertical garden/(7).jpg",
//     "/Vertical garden/(8).jpg",
//     "/Vertical garden/(9).jpg",
//     "/Vertical garden/(10).jpg",
//     "/Vertical garden/(11).jpg",
//     "/Vertical garden/(12).jpg",
//   ];

//   // Animation variants
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
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Vertical Garden</h1>
//           <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
//             Transform any space with our stunning vertical gardens. These living walls bring nature indoors or enhance outdoor areas with lush, vibrant plant life arranged in beautiful, space-efficient designs.
//           </p>
//         </div>

//         {/* Featured Image */}
//         <div className="mb-12">
//           <img 
//             src="/Vertical garden/(1).jpg" 
//             alt="Featured Vertical Garden" 
//             className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
//           />
//         </div>

//         {/* Benefits Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Benefits of Vertical Gardens</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-[#2E442F] mb-3">Space Optimization</h3>
//               <p className="text-[#2E442F]/70">Perfect for urban environments where ground space is limited. Grow upward instead of outward.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-[#2E442F] mb-3">Improved Air Quality</h3>
//               <p className="text-[#2E442F]/70">Plants naturally filter air pollutants, creating healthier indoor and outdoor environments.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-[#2E442F] mb-3">Aesthetic Appeal</h3>
//               <p className="text-[#2E442F]/70">Create stunning visual focal points that transform ordinary walls into living art installations.</p>
//             </div>
//           </div>
//         </div>

//         {/* Gallery Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Gallery</h2>
//           <FramerMotion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {verticalGardenImages.map((image, index) => (
//               <FramerMotion.div 
//                 key={index} 
//                 className="overflow-hidden rounded-lg shadow-md h-64 bg-white"
//                 variants={itemVariants}
//               >
//                 <img 
//                   src={image} 
//                   alt={`Vertical Garden ${index + 1}`} 
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                 />
//               </FramerMotion.div>
//             ))}
//           </FramerMotion.div>
//         </div>

//         {/* Features Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Features</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="flex items-start gap-4">
//               <div className="bg-[#2E442F] text-white p-3 rounded-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Custom Design</h3>
//                 <p className="text-[#2E442F]/70">Each vertical garden is custom designed to fit your space and aesthetic preferences.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="bg-[#2E442F] text-white p-3 rounded-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Integrated Irrigation</h3>
//                 <p className="text-[#2E442F]/70">Built-in irrigation systems ensure plants receive optimal water with minimal maintenance.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="bg-[#2E442F] text-white p-3 rounded-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Plant Selection</h3>
//                 <p className="text-[#2E442F]/70">Carefully selected plants that thrive in vertical environments and complement each other.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="bg-[#2E442F] text-white p-3 rounded-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Maintenance Support</h3>
//                 <p className="text-[#2E442F]/70">Professional maintenance services available to ensure your vertical garden thrives year-round.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="bg-[#2E442F] text-white p-8 rounded-xl text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
//           <p className="mb-6 max-w-2xl mx-auto">Contact us today to discuss your vertical garden project. Our experts will help you create a stunning living wall tailored to your needs.</p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link to="/contact" className="bg-white text-[#2E442F] px-6 py-3 rounded-full font-semibold hover:bg-[#90A48B] hover:text-white transition duration-300">
//               Contact Us
//             </Link>
//             <Link to="/products" className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#2E442F] transition duration-300">
//               View All Products
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VerticalGarden;











import React, { useState } from "react";
import { motion as FramerMotion } from "framer-motion";

const VerticalGarden = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const verticalGardenData = [
    {
      id: 1,
      image: "/Vertical garden/(1).jpg",
      title: "Living Wall Beauty",
      description: "A moss-filled vertical garden perfect for maintaining cool, humid spaces.",
    },
    {
      id: 2,
      image: "/Vertical garden/(3).jpg",
      title: "Tropical Texture",
      description: "A burst of tropical colors and textures for modern exterior walls.",
    },
    {
      id: 3,
      image: "/Vertical garden/(4).jpg",
      title: "Red Leaf Arch",
      description: "Creates a beautiful garden archway full of red-green contrast.",
    },
    {
      id: 4,
      image: "/Vertical garden/(5).jpg",
      title: "Urban Greenscape",
      description: "A stylish, clean vertical wall for apartment or office exteriors.",
    },
    {
      id: 5,
      image: "/Vertical garden/(6).jpg",
      title: "Eco Wall",
      description: "A refreshing green wall ideal for environmentally conscious homes.",
    },
    {
      id: 6,
      image: "/Vertical garden/(7).jpg",
      title: "Colorful Planting",
      description: "Mix of plant species arranged in vertical harmony for visual impact.",
    },
    {
      id: 7,
      image: "/Vertical garden/(8).jpg",
      title: "Courtyard Freshness",
      description: "Greens that blend well with rustic courtyards or cozy patios.",
    },
    {
      id: 8,
      image: "/Vertical garden/(9).jpg",
      title: "Wall of Wellness",
      description: "An elegant garden to purify air and enhance well-being indoors.",
    },
    {
      id: 9,
      image: "/Vertical garden/(10).jpg",
      title: "Residential Green",
      description: "A vibrant option for small balconies or side walls.",
    },
    {
      id: 10,
      image: "/Vertical garden/(11).jpg",
      title: "Floral Frame",
      description: "A green wall with seasonal flowering plants, perfect for entryways.",
    },
    {
      id: 11,
      image: "/Vertical garden/(12).jpg",
      title: "Symmetry Wall",
      description: "Perfect symmetry in planting design, ideal for architectural gardens.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Vertical Garden</h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Transform any space with our stunning vertical gardens. These living walls bring nature indoors or enhance outdoor areas with lush, vibrant plant life arranged in beautiful, space-efficient designs.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src="/Vertical garden/(1).jpg"
            alt="Featured Vertical Garden"
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Benefits of Vertical Gardens</h2>
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

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Varieties</h2>
          <FramerMotion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {verticalGardenData.map((item, index) => (
              <FramerMotion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-md h-64 bg-white cursor-pointer"
                variants={itemVariants}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </FramerMotion.div>
            ))}
          </FramerMotion.div>
        </div>

        {/* Popup Modal */}
     {selectedImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-transperent bg-opacity-40 backdrop-blur-sm">
    <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-2xl">
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
      >
        ✕
      </button>
      <img
        src={selectedImage.image}
        alt={selectedImage.title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedImage.title}</h2>
      <p className="text-gray-600">{selectedImage.description}</p>
    </div>
  </div>
)}


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
      </div>
    </section>
  );
};

export default VerticalGarden;
