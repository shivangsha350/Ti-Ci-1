// import { useParams, Link } from "react-router-dom";
// import React, { useState } from "react";
// import { motion as FramerMotion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function PlantCategoryPage() {
//   const { sectionId } = useParams();
//   const decodedSection = decodeURIComponent(sectionId);

//   // Your existing imagesByCategory object (unchanged)
//   const imagesByCategory = {
   
//     "Aglonema sp": [
//     {
//       image: "/Terrestrial plants/Aglonema sp/_DSC5963.JPG",
//       title: "Aglonema sp",
//       description: "Beautiful Aglonema with variegated leaves, perfect for indoor spaces.",
//     },
//   ],
//   Alocasia: [
//     {
//       image: "/Terrestrial plants/Alocasia/_DSC5806.JPG",
//       title: "Alocasia",
//       description: "Large and striking Alocasia leaves add tropical flair to any space.",
//     },
//   ],
//   Anthurium: [
//     {
//       image: "/Terrestrial plants/Anthurium/IMG_0413.JPG",
//       title: "Anthurium",
//       description: "Elegant Anthurium with glossy leaves and vibrant red flowers.",
//     },
//   ],
//   Bigonia: [
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC5808.JPG",
//       title: "Bigonia 1",
//       description: "Bigonia climbing plant with lush green foliage.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC5809.JPG",
//       title: "Bigonia 2",
//       description: "Beautiful Bigonia flowers blooming in sunlight.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC5814.JPG",
//       title: "Bigonia 3",
//       description: "Bigonia vines in full growth on garden trellis.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6039.JPG",
//       title: "Bigonia 4",
//       description: "Close-up of Bigonia flowers with rich colors.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6044.JPG",
//       title: "Bigonia 5",
//       description: "Bigonia's dense foliage creating natural shade.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6045.JPG",
//       title: "Bigonia 6",
//       description: "Bigonia flowers attract pollinators with vibrant colors.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6047.JPG",
//       title: "Bigonia 7",
//       description: "Bigonia plant wrapping around fence posts.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6052.JPG",
//       title: "Bigonia 8",
//       description: "Garden with flourishing Bigonia vines in summer.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6054.JPG",
//       title: "Bigonia 9",
//       description: "Bigonia flowers close-up with dew drops.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6056.JPG",
//       title: "Bigonia 10",
//       description: "Bigonia plant thriving in natural light.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6057.JPG",
//       title: "Bigonia 11",
//       description: "Lush green Bigonia leaves providing ground cover.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6058.JPG",
//       title: "Bigonia 12",
//       description: "Bigonia's bright flowers brighten any garden corner.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6059.JPG",
//       title: "Bigonia 13",
//       description: "Bigonia vines climbing upwards towards sunlight.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6064.JPG",
//       title: "Bigonia 14",
//       description: "Bigonia in full bloom surrounded by greenery.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6066.JPG",
//       title: "Bigonia 15",
//       description: "Bigonia's dense foliage offers natural privacy.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6071.JPG",
//       title: "Bigonia 16",
//       description: "Vibrant Bigonia flowers with sunlight shining through.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6072.JPG",
//       title: "Bigonia 17",
//       description: "Bigonia growing along garden pathway.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6073.JPG",
//       title: "Bigonia 18",
//       description: "Bigonia's colorful blooms attract butterflies.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6095.JPG",
//       title: "Bigonia 19",
//       description: "Bigonia vines wrapping a trellis in the morning light.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6097.JPG",
//       title: "Bigonia 20",
//       description: "Close-up of Bigonia flowers' intricate patterns.",
//     },
//     {
//       image: "/Terrestrial plants/Bigonia/_DSC6098.JPG",
//       title: "Bigonia 21",
//       description: "Bigonia leaves catching soft rain droplets.",
//     },
//   ],
//   Bromelliad: [
//     {
//       image: "/Terrestrial plants/Bromelliad/_DSC5898.JPG",
//       title: "Bromelliad 1",
//       description: "Tropical Bromelliad with vibrant colors and unique shape.",
//     },
//     {
//       image: "/Terrestrial plants/Bromelliad/_DSC5901.JPG",
//       title: "Bromelliad 2",
//       description: "Bromelliad thriving in moist, shaded environments.",
//     },
//     {
//       image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0005.jpg",
//       title: "Bromelliad 3",
//       description: "Close-up of bromelliad flowers with striking colors.",
//     },
//     {
//       image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0006.jpg",
//       title: "Bromelliad 4",
//       description: "Bromelliad leaves forming a natural water reservoir.",
//     },
//     {
//       image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0008.jpg",
//       title: "Bromelliad 5",
//       description: "Bromelliad displaying its unique rosette leaf arrangement.",
//     },
//     {
//       image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0010.jpg",
//       title: "Bromelliad 6",
//       description: "Colorful bromelliad flower blooming vibrantly.",
//     },
//     {
//       image: "/Terrestrial plants/Bromelliad/WhatsApp Image 2025-07-01 at 16.17.00_7456e296.jpg",
//       title: "Bromelliad 7",
//       description: "Bromelliad adding exotic flair to the garden.",
//     },
//   ],
//   "Coin plant": [
//     {
//       image: "/Terrestrial plants/Coin plant/_DSC6010.JPG",
//       title: "Coin plant",
//       description: "Compact coin plant with round shiny leaves, great for terrariums.",
//     },
//   ],
//   Coleus: [
//     {
//       image: "/Terrestrial plants/Coleus/_DSC5840.JPG",
//       title: "Coleus 1",
//       description: "Coleus with colorful variegated leaves in shades of green and red.",
//     },
//     {
//       image: "/Terrestrial plants/Coleus/_DSC5849.JPG",
//       title: "Coleus 2",
//       description: "Vibrant coleus leaves adding brightness to shaded garden spots.",
//     },
//     {
//       image: "/Terrestrial plants/Coleus/_DSC5854.JPG",
//       title: "Coleus 3",
//       description: "Coleus foliage showing intricate leaf patterns.",
//     },
//     {
//       image: "/Terrestrial plants/Coleus/_DSC5857.JPG",
//       title: "Coleus 4",
//       description: "Bright coleus leaves contrasted against dark soil.",
//     },
//     {
//       image: "/Terrestrial plants/Coleus/_DSC5859.JPG",
//       title: "Coleus 5",
//       description: "Colorful coleus plants grouped in a garden bed.",
//     },
//     {
//       image: "/Terrestrial plants/Coleus/IMG_0311.JPG",
//       title: "Coleus 6",
//       description: "Close-up on coleus leaf texture and colors.",
//     },
//     {
//       image: "/Terrestrial plants/Coleus/IMG_0314.JPG",
//       title: "Coleus 7",
//       description: "Coleus thriving in partial shade with vivid hues.",
//     },
//   ],
//   "Dieffenbachia sterling": [
//     {
//       image: "/Terrestrial plants/Dieffenbachia sterling/_DSC5915.JPG",
//       title: "Dieffenbachia sterling",
//       description: "Popular Dieffenbachia with silver variegation and large leaves.",
//     },
//   ],
//   "Dracaena reflexa": [
//     {
//       image: "/Terrestrial plants/Dracaena reflexa/_DSC6006.JPG",
//       title: "Dracaena reflexa",
//       description: "Dracaena with narrow, reflexed leaves and striking colors.",
//     },
//   ],
//   "Drimiopsis kirkii": [
//     {
//       image: "/Terrestrial plants/Drimiopsis kirkii/_DSC.JPG6018", // double check if correct
//       title: "Drimiopsis kirkii",
//       description: "Small Drimiopsis with variegated green and white striped leaves.",
//     },
//   ],
//   "Fern (4 type)": [
//     {
//       image: "/Terrestrial plants/Fern (4 type)/bird nest fern.JPG",
//       title: "Bird Nest Fern",
//       description: "Bird Nest Fern with broad, wavy leaves growing in rosettes.",
//     },
//     {
//       image: "/Terrestrial plants/Fern (4 type)/stag horn fern.JPG",
//       title: "Stag Horn Fern",
//       description: "Unique Stag Horn Fern with antler-like foliage.",
//     },
//     {
//       image: "/Terrestrial plants/Fern (4 type)/tree fern.JPG",
//       title: "Tree Fern",
//       description: "Majestic Tree Fern with tall trunk and feathery leaves.",
//     },
//     {
//       image: "/Terrestrial plants/Fern (4 type)/wood fern2.JPG",
//       title: "Wood Fern",
//       description: "Wood Fern thriving in shaded forest floors.",
//     },
//   ],
//   "Haworthia sp": [
//     {
//       image: "/Terrestrial plants/Haworthia sp/_DSC5997.JPG",
//       title: "Haworthia sp",
//       description: "Compact succulent with thick, spiky leaves, perfect for indoor pots.",
//     },
//   ],
//   "Lonantha rubra": [
//     {
//       image: "/Terrestrial plants/Lonantha rubra/_DSC5971.JPG",
//       title: "Lonantha rubra",
//       description: "Lonantha with rich red leaves adding color to shaded gardens.",
//     },
//   ],
//   "Monstera deliciosa": [
//     {
//       image: "/Terrestrial plants/Monstera deliciosa/_DSC5888.JPG",
//       title: "Monstera deliciosa",
//       description: "Popular Monstera with large, fenestrated leaves, ideal for indoors.",
//     },
//   ],
//   "Orchid (2 type)": [
//     {
//       image: "/Terrestrial plants/Orchid (2 type)/jewel orchid 1.JPG",
//       title: "Jewel Orchid 1",
//       description: "Elegant Jewel Orchid with deep green leaves and subtle flowers.",
//     },
//     {
//       image: "/Terrestrial plants/Orchid (2 type)/jewel orchid 2.JPG",
//       title: "Jewel Orchid 2",
//       description: "Close-up of Jewel Orchid's unique leaf patterns.",
//     },
//     {
//       image: "/Terrestrial plants/Orchid (2 type)/moth orchid 1.jpg",
//       title: "Moth Orchid 1",
//       description: "Classic white moth orchid with delicate petals.",
//     },
//     {
//       image: "/Terrestrial plants/Orchid (2 type)/moth orchid 2.jpg",
//       title: "Moth Orchid 2",
//       description: "Moth orchid flowers blooming vibrantly indoors.",
//     },
//     {
//       image: "/Terrestrial plants/Orchid (2 type)/moth orchid 3.jpg",
//       title: "Moth Orchid 3",
//       description: "Moth orchid with pink flowers and elegant stems.",
//     },
//     {
//       image: "/Terrestrial plants/Orchid (2 type)/moth orchid 4.jpg",
//       title: "Moth Orchid 4",
//       description: "Close-up of moth orchid flower petals.",
//     },
//   ],
//   "Peace lily": [
//     {
//       image: "/Terrestrial plants/Peace lily/peace lily.jpg",
//       title: "Peace lily",
//       description: "Peace Lily with graceful white blooms and lush green leaves.",
//     },
//   ],
//   "Philodendron( 6 type)": [
//     {
//       image: "/Terrestrial plants/Philodendron( 6 type)/broken heart.JPG",
//       title: "Philodendron Broken Heart",
//       description: "Philodendron variety with distinctively shaped leaves.",
//     },
//     {
//       image: "/Terrestrial plants/Philodendron( 6 type)/florida green.JPG",
//       title: "Philodendron Florida Green",
//       description: "Vibrant green Philodendron known for lush foliage.",
//     },
//     {
//       image: "/Terrestrial plants/Philodendron( 6 type)/lemon lime.JPG",
//       title: "Philodendron Lemon Lime",
//       description: "Bright yellow-green Philodendron variety, perfect as indoor accent.",
//     },
//     {
//       image: "/Terrestrial plants/Philodendron( 6 type)/paraiso verde.JPG",
//       title: "Philodendron Paraiso Verde",
//       description: "Philodendron with dark green leaves and elegant form.",
//     },
//     {
//       image: "/Terrestrial plants/Philodendron( 6 type)/rojo congo.JPG",
//       title: "Philodendron Rojo Congo",
//       description: "Deep red-leaf Philodendron adding rich color indoors.",
//     },
//     {
//       image: "/Terrestrial plants/Philodendron( 6 type)/rugosum.JPG",
//       title: "Philodendron Rugosum",
//       description: "Textured Philodendron variety with ruffled leaves.",
//     },
//   ],
//   "Remusatia sp": [
//     {
//       image: "/Terrestrial plants/Remusatia sp/remusatia.JPG",
//       title: "Remusatia sp",
//       description: "Unique Remusatia plant with interesting leaf shapes.",
//     },
//   ],
//   "Rhoeo discolor": [
//     {
//       image: "/Terrestrial plants/Rhoeo discolor/_DSC5928.JPG",
//       title: "Rhoeo discolor",
//       description: "Colorful Rhoeo discolor with purple and green leaves.",
//     },
//   ],
//   "Ruellia simplex": [
//     {
//       image: "/Terrestrial plants/Ruellia simplex/_DSC5880.JPG",
//       title: "Ruellia simplex",
//       description: "Hardy Ruellia simplex with vibrant purple flowers.",
//     },
//   ],
//   "Sanchezia nobilis": [
//     {
//       image: "/Terrestrial plants/Sanchezia nobilis/_DSC5940.JPG",
//       title: "Sanchezia nobilis",
//       description: "Bright green Sanchezia with yellow variegation.",
//     },
//   ],
//   Selaginella: [
//     {
//       image: "/Terrestrial plants/Selaginella/IMG-20250611-WA0007.jpg",
//       title: "Selaginella",
//       description: "Moss-like Selaginella with soft, lush foliage.",
//     },
//   ],

  
//     "Thaumatophyllum (2 type)": [
//       "/Terrestrial plants/Thaumatophyllum (2 type)/spruceanum.JPG",
//       "/Terrestrial plants/Thaumatophyllum (2 type)/xanadu.JPG",
//     ],
//     "Turtle vine": ["/Terrestrial plants/Turtle vine/_DSC6028.JPG"],
//     "Variegated canna": ["/Terrestrial plants/Variegated canna/_DSC59.JPG"],
//   };

//   const images = imagesByCategory[decodedSection] || [];

//    const featuredImageByCategory = {
//     "Aglonema sp": "/Terrestrial plants/Aglonema sp/_DSC5963.JPG",
//     "Alocasia": "/Terrestrial plants/Alocasia/_DSC5806.JPG",
//     "Anthurium": "/Terrestrial plants/Anthurium/IMG_0413.JPG",
//     "Bigonia": "/Terrestrial plants/Bigonia/_DSC5808.JPG", // or pick your preferred featured image
//     "Bromelliad": "/Terrestrial plants/Bromelliad/_DSC5898.JPG",
//     "Coin plant": "/Terrestrial plants/Coin plant/_DSC6010.JPG",
//   "Coleus": "/Terrestrial plants/Coleus/_DSC5840.JPG",
//   "Dieffenbachia sterling": "/Terrestrial plants/Dieffenbachia sterling/_DSC5915.JPG",
//   "Dracaena reflexa": "/Terrestrial plants/Dracaena reflexa/_DSC6006.JPG",
//   "Drimiopsis kirkii": "/Terrestrial plants/Drimiopsis kirkii/_DSC.JPG6018",  // double check path typo
//   "Fern (4 type)": "/Terrestrial plants/Fern (4 type)/bird nest fern.JPG",
//   "Haworthia sp": "/Terrestrial plants/Haworthia sp/_DSC5997.JPG",
//   "Lonantha rubra": "/Terrestrial plants/Lonantha rubra/_DSC5971.JPG",
//   "Monstera deliciosa": "/Terrestrial plants/Monstera deliciosa/_DSC5888.JPG",
//   "Orchid (2 type)": "/Terrestrial plants/Orchid (2 type)/jewel orchid 1.JPG",
//   "Peace lily": "/Terrestrial plants/Peace lily/peace lily.jpg",
//   "Philodendron( 6 type)": "/Terrestrial plants/Philodendron( 6 type)/broken heart.JPG",
//   "Remusatia sp": "/Terrestrial plants/Remusatia sp/remusatia.JPG",
//   "Rhoeo discolor": "/Terrestrial plants/Rhoeo discolor/_DSC5928.JPG",
//   "Ruellia simplex": "/Terrestrial plants/Ruellia simplex/_DSC5880.JPG",
//   "Sanchezia nobilis": "/Terrestrial plants/Sanchezia nobilis/_DSC5940.JPG",
//   "Selaginella": "/Terrestrial plants/Selaginella/_DSC5979.JPG",
//   "Thaumatophyllum (2 type)": "/Terrestrial plants/Thaumatophyllum (2 type)/spruceanum.JPG",
//   "Turtle vine": "/Terrestrial plants/Turtle vine/_DSC6028.JPG",
//   "Variegated canna": "/Terrestrial plants/Variegated canna/_DSC59.JPG",
//   };

//    const featuredImage = featuredImageByCategory[decodedSection] || [];

//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!images.length) {
//     return (
//       <div className="text-center py-20 text-red-500">
//         Category not found.
//       </div>
//     );
//   }

//   // Benefits data (example, you can customize per category if needed)
//   const benefits = [
//     {
//       title: "Space Optimization",
//       description:
//         "Perfect for urban environments where ground space is limited. Grow upward instead of outward.",
//     },
//     {
//       title: "Improved Air Quality",
//       description:
//         "Plants naturally filter air pollutants, creating healthier indoor and outdoor environments.",
//     },
//     {
//       title: "Aesthetic Appeal",
//       description:
//         "Create stunning visual focal points that transform ordinary walls into living art installations.",
//     },
//   ];

//   // Features data (example, customize if you want)
//   const features = [
//     [
//       "Custom Design",
//       "Each vertical garden is custom designed to fit your space and aesthetic preferences.",
//     ],
//     [
//       "Integrated Irrigation",
//       "Built-in irrigation systems ensure plants receive optimal water with minimal maintenance.",
//     ],
//     [
//       "Plant Selection",
//       "Carefully selected plants that thrive in vertical environments and complement each other.",
//     ],
//     [
//       "Maintenance Support",
//       "Professional maintenance services available to ensure your vertical garden thrives year-round.",
//     ],
//   ];

//   // CTA data
//   const cta = {
//     title: "Ready to Transform Your Space?",
//     description:
//       "Contact us today to discuss your vertical garden project. Our experts will help you create a stunning living wall tailored to your needs.",
//     buttons: [
//       { text: "Contact Us", href: "/contact", isPrimary: true },
//       { text: "View All Products", href: "/products", isPrimary: false },
//     ],
//   };

//   return (
//     <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Your existing header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">
//             {decodedSection}
//           </h1>
//           <p className="text-[#2E442F]/70">Explore our {decodedSection} collection.</p>
//         </div>


//            {/* Featured Image - dynamically loaded */}
//         <div className="mb-12">
//           <img
//             src={featuredImage}
//             alt={`Featured ${decodedSection}`}
//             className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
//           />
//         </div>


        

//         {/* Existing image grid */}
//         {/* <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {images.map((src, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
//               onClick={() => setSelectedImage({ image: src, title: `${decodedSection} ${i + 1}`, description: "" })}
//             >
//               <img
//                 src={src}
//                 alt={`${decodedSection} ${i + 1}`}
//                 className="w-full h-64 object-cover"
//               />
//             </div>
//           ))}
//         </div> */}

//         {/* Benefits Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Benefits of Vertical Gardens</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {benefits.map(({ title, description }, i) => (
//               <div key={i} className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-[#2E442F] mb-3">{title}</h3>
//                 <p className="text-[#2E442F]/70">{description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Varieties</h2>
//           <FramerMotion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {images.map((src, index) => (
//               <FramerMotion.div
//                 key={index}
//                 className="overflow-hidden rounded-lg shadow-md h-64 bg-white cursor-pointer"
//                 variants={itemVariants}
//                 onClick={() =>
//                   setSelectedImage({
//                     image: src,
//                     title: `${decodedSection} ${index + 1}`,
//                     description: "",
//                   })
//                 }
//               >
//                 <img
//                   src={src}
//                   alt={`${decodedSection} ${index + 1}`}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                 />
//               </FramerMotion.div>
//             ))}
//           </FramerMotion.div>
//         </div>

//         {/* Popup Modal */}
//         {selectedImage && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm">
//             <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-2xl">
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
//                 aria-label="Close modal"
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

//         {/* Back Button */}
//         <div className="text-center mt-12">
//           <Link
//             to="/products"
//             className="inline-block bg-[#2E442F] text-white px-6 py-3 rounded-full hover:bg-[#90A48B] transition"
//           >
//             ← Back to Products
//           </Link>
//         </div>

//         {/* Features Section */}
//         <div className="mb-16 mt-16">
//           <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Features</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {features.map(([title, desc], i) => (
//               <div key={i} className="flex items-start gap-4">
//                 <div className="bg-[#2E442F] text-white p-3 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#2E442F] mb-2">{title}</h3>
//                   <p className="text-[#2E442F]/70">{desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="bg-[#2E442F] text-white p-8 rounded-xl text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
//           <p className="mb-6 max-w-2xl mx-auto">{cta.description}</p>
//           <div className="flex flex-wrap justify-center gap-4">
//             {cta.buttons.map(({ text, href, isPrimary }, i) => (
//               <a
//                 key={i}
//                 href={href}
//                 className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
//                   isPrimary
//                     ? "bg-white text-[#2E442F] hover:bg-[#90A48B] hover:text-white"
//                     : "border border-white text-white hover:bg-white hover:text-[#2E442F]"
//                 }`}
//               >
//                 {text}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import { motion as FramerMotion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Example data with titles & descriptions added per image
const imagesDataByCategory = {
  "Aglonema sp": [
    {
      image: "/Terrestrial plants/Aglonema sp/_DSC5963.JPG",
      title: "Aglonema sp",
      description: "Beautiful Aglonema with variegated leaves, perfect for indoor spaces.",
    },
  ],
  Alocasia: [
    {
      image: "/Terrestrial plants/Alocasia/_DSC5806.JPG",
      title: "Alocasia",
      description: "Large and striking Alocasia leaves add tropical flair to any space.",
    },
  ],
  Anthurium: [
    {
      image: "/Terrestrial plants/Anthurium/IMG_0413.JPG",
      title: "Anthurium",
      description: "Elegant Anthurium with glossy leaves and vibrant red flowers.",
    },
  ],
  Bigonia: [
    {
      image: "/Terrestrial plants/Bigonia/_DSC5808.JPG",
      title: "Bigonia 1",
      description: "Bigonia climbing plant with lush green foliage.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC5809.JPG",
      title: "Bigonia 2",
      description: "Beautiful Bigonia flowers blooming in sunlight.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC5814.JPG",
      title: "Bigonia 3",
      description: "Bigonia vines in full growth on garden trellis.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6039.JPG",
      title: "Bigonia 4",
      description: "Close-up of Bigonia flowers with rich colors.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6044.JPG",
      title: "Bigonia 5",
      description: "Bigonia's dense foliage creating natural shade.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6045.JPG",
      title: "Bigonia 6",
      description: "Bigonia flowers attract pollinators with vibrant colors.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6047.JPG",
      title: "Bigonia 7",
      description: "Bigonia plant wrapping around fence posts.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6052.JPG",
      title: "Bigonia 8",
      description: "Garden with flourishing Bigonia vines in summer.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6054.JPG",
      title: "Bigonia 9",
      description: "Bigonia flowers close-up with dew drops.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6056.JPG",
      title: "Bigonia 10",
      description: "Bigonia plant thriving in natural light.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6057.JPG",
      title: "Bigonia 11",
      description: "Lush green Bigonia leaves providing ground cover.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6058.JPG",
      title: "Bigonia 12",
      description: "Bigonia's bright flowers brighten any garden corner.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6059.JPG",
      title: "Bigonia 13",
      description: "Bigonia vines climbing upwards towards sunlight.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6064.JPG",
      title: "Bigonia 14",
      description: "Bigonia in full bloom surrounded by greenery.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6066.JPG",
      title: "Bigonia 15",
      description: "Bigonia's dense foliage offers natural privacy.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6071.JPG",
      title: "Bigonia 16",
      description: "Vibrant Bigonia flowers with sunlight shining through.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6072.JPG",
      title: "Bigonia 17",
      description: "Bigonia growing along garden pathway.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6073.JPG",
      title: "Bigonia 18",
      description: "Bigonia's colorful blooms attract butterflies.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6095.JPG",
      title: "Bigonia 19",
      description: "Bigonia vines wrapping a trellis in the morning light.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6097.JPG",
      title: "Bigonia 20",
      description: "Close-up of Bigonia flowers' intricate patterns.",
    },
    {
      image: "/Terrestrial plants/Bigonia/_DSC6098.JPG",
      title: "Bigonia 21",
      description: "Bigonia leaves catching soft rain droplets.",
    },
  ],
  Bromelliad: [
    {
      image: "/Terrestrial plants/Bromelliad/_DSC5898.JPG",
      title: "Bromelliad 1",
      description: "Tropical Bromelliad with vibrant colors and unique shape.",
    },
    {
      image: "/Terrestrial plants/Bromelliad/_DSC5901.JPG",
      title: "Bromelliad 2",
      description: "Bromelliad thriving in moist, shaded environments.",
    },
    {
      image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0005.jpg",
      title: "Bromelliad 3",
      description: "Close-up of bromelliad flowers with striking colors.",
    },
    {
      image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0006.jpg",
      title: "Bromelliad 4",
      description: "Bromelliad leaves forming a natural water reservoir.",
    },
    {
      image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0008.jpg",
      title: "Bromelliad 5",
      description: "Bromelliad displaying its unique rosette leaf arrangement.",
    },
    {
      image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0010.jpg",
      title: "Bromelliad 6",
      description: "Colorful bromelliad flower blooming vibrantly.",
    },
    {
      image: "/Terrestrial plants/Bromelliad/WhatsApp Image 2025-07-01 at 16.17.00_7456e296.jpg",
      title: "Bromelliad 7",
      description: "Bromelliad adding exotic flair to the garden.",
    },
  ],
  "Coin plant": [
    {
      image: "/Terrestrial plants/Coin plant/_DSC6010.JPG",
      title: "Coin plant",
      description: "Compact coin plant with round shiny leaves, great for terrariums.",
    },
  ],
  Coleus: [
    {
      image: "/Terrestrial plants/Coleus/_DSC5840.JPG",
      title: "Coleus 1",
      description: "Coleus with colorful variegated leaves in shades of green and red.",
    },
    {
      image: "/Terrestrial plants/Coleus/_DSC5849.JPG",
      title: "Coleus 2",
      description: "Vibrant coleus leaves adding brightness to shaded garden spots.",
    },
    {
      image: "/Terrestrial plants/Coleus/_DSC5854.JPG",
      title: "Coleus 3",
      description: "Coleus foliage showing intricate leaf patterns.",
    },
    {
      image: "/Terrestrial plants/Coleus/_DSC5857.JPG",
      title: "Coleus 4",
      description: "Bright coleus leaves contrasted against dark soil.",
    },
    {
      image: "/Terrestrial plants/Coleus/_DSC5859.JPG",
      title: "Coleus 5",
      description: "Colorful coleus plants grouped in a garden bed.",
    },
    {
      image: "/Terrestrial plants/Coleus/IMG_0311.JPG",
      title: "Coleus 6",
      description: "Close-up on coleus leaf texture and colors.",
    },
    {
      image: "/Terrestrial plants/Coleus/IMG_0314.JPG",
      title: "Coleus 7",
      description: "Coleus thriving in partial shade with vivid hues.",
    },
  ],
  "Dieffenbachia sterling": [
    {
      image: "/Terrestrial plants/Dieffenbachia sterling/_DSC5915.JPG",
      title: "Dieffenbachia sterling",
      description: "Popular Dieffenbachia with silver variegation and large leaves.",
    },
  ],
  "Dracaena reflexa": [
    {
      image: "/Terrestrial plants/Dracaena reflexa/_DSC6006.JPG",
      title: "Dracaena reflexa",
      description: "Dracaena with narrow, reflexed leaves and striking colors.",
    },
  ],
  "Drimiopsis kirkii": [
    {
      image: "/Terrestrial plants/Drimiopsis kirkii/_DSC.JPG6018", // double check if correct
      title: "Drimiopsis kirkii",
      description: "Small Drimiopsis with variegated green and white striped leaves.",
    },
  ],
  "Fern (4 type)": [
    {
      image: "/Terrestrial plants/Fern (4 type)/bird nest fern.JPG",
      title: "Bird Nest Fern",
      description: "Bird Nest Fern with broad, wavy leaves growing in rosettes.",
    },
    {
      image: "/Terrestrial plants/Fern (4 type)/stag horn fern.JPG",
      title: "Stag Horn Fern",
      description: "Unique Stag Horn Fern with antler-like foliage.",
    },
    {
      image: "/Terrestrial plants/Fern (4 type)/tree fern.JPG",
      title: "Tree Fern",
      description: "Majestic Tree Fern with tall trunk and feathery leaves.",
    },
    {
      image: "/Terrestrial plants/Fern (4 type)/wood fern2.JPG",
      title: "Wood Fern",
      description: "Wood Fern thriving in shaded forest floors.",
    },
  ],
  "Haworthia sp": [
    {
      image: "/Terrestrial plants/Haworthia sp/_DSC5997.JPG",
      title: "Haworthia sp",
      description: "Compact succulent with thick, spiky leaves, perfect for indoor pots.",
    },
  ],
  "Lonantha rubra": [
    {
      image: "/Terrestrial plants/Lonantha rubra/_DSC5971.JPG",
      title: "Lonantha rubra",
      description: "Lonantha with rich red leaves adding color to shaded gardens.",
    },
  ],
  "Monstera deliciosa": [
    {
      image: "/Terrestrial plants/Monstera deliciosa/_DSC5888.JPG",
      title: "Monstera deliciosa",
      description: "Popular Monstera with large, fenestrated leaves, ideal for indoors.",
    },
  ],
  "Orchid (2 type)": [
    {
      image: "/Terrestrial plants/Orchid (2 type)/jewel orchid 1.JPG",
      title: "Jewel Orchid 1",
      description: "Elegant Jewel Orchid with deep green leaves and subtle flowers.",
    },
    {
      image: "/Terrestrial plants/Orchid (2 type)/jewel orchid 2.JPG",
      title: "Jewel Orchid 2",
      description: "Close-up of Jewel Orchid's unique leaf patterns.",
    },
    {
      image: "/Terrestrial plants/Orchid (2 type)/moth orchid 1.jpg",
      title: "Moth Orchid 1",
      description: "Classic white moth orchid with delicate petals.",
    },
    {
      image: "/Terrestrial plants/Orchid (2 type)/moth orchid 2.jpg",
      title: "Moth Orchid 2",
      description: "Moth orchid flowers blooming vibrantly indoors.",
    },
    {
      image: "/Terrestrial plants/Orchid (2 type)/moth orchid 3.jpg",
      title: "Moth Orchid 3",
      description: "Moth orchid with pink flowers and elegant stems.",
    },
    {
      image: "/Terrestrial plants/Orchid (2 type)/moth orchid 4.jpg",
      title: "Moth Orchid 4",
      description: "Close-up of moth orchid flower petals.",
    },
  ],
  "Peace lily": [
    {
      image: "/Terrestrial plants/Peace lily/peace lily.jpg",
      title: "Peace lily",
      description: "Peace Lily with graceful white blooms and lush green leaves.",
    },
  ],
  "Philodendron( 6 type)": [
    {
      image: "/Terrestrial plants/Philodendron( 6 type)/broken heart.JPG",
      title: "Philodendron Broken Heart",
      description: "Philodendron variety with distinctively shaped leaves.",
    },
    {
      image: "/Terrestrial plants/Philodendron( 6 type)/florida green.JPG",
      title: "Philodendron Florida Green",
      description: "Vibrant green Philodendron known for lush foliage.",
    },
    {
      image: "/Terrestrial plants/Philodendron( 6 type)/lemon lime.JPG",
      title: "Philodendron Lemon Lime",
      description: "Bright yellow-green Philodendron variety, perfect as indoor accent.",
    },
    {
      image: "/Terrestrial plants/Philodendron( 6 type)/paraiso verde.JPG",
      title: "Philodendron Paraiso Verde",
      description: "Philodendron with dark green leaves and elegant form.",
    },
    {
      image: "/Terrestrial plants/Philodendron( 6 type)/rojo congo.JPG",
      title: "Philodendron Rojo Congo",
      description: "Deep red-leaf Philodendron adding rich color indoors.",
    },
    {
      image: "/Terrestrial plants/Philodendron( 6 type)/rugosum.JPG",
      title: "Philodendron Rugosum",
      description: "Textured Philodendron variety with ruffled leaves.",
    },
  ],
  "Remusatia sp": [
    {
      image: "/Terrestrial plants/Remusatia sp/remusatia.JPG",
      title: "Remusatia sp",
      description: "Unique Remusatia plant with interesting leaf shapes.",
    },
  ],
  "Rhoeo discolor": [
    {
      image: "/Terrestrial plants/Rhoeo discolor/_DSC5928.JPG",
      title: "Rhoeo discolor",
      description: "Colorful Rhoeo discolor with purple and green leaves.",
    },
  ],
  "Ruellia simplex": [
    {
      image: "/Terrestrial plants/Ruellia simplex/_DSC5880.JPG",
      title: "Ruellia simplex",
      description: "Hardy Ruellia simplex with vibrant purple flowers.",
    },
  ],
  "Sanchezia nobilis": [
    {
      image: "/Terrestrial plants/Sanchezia nobilis/_DSC5940.JPG",
      title: "Sanchezia nobilis",
      description: "Bright green Sanchezia with yellow variegation.",
    },
  ],
  "Selaginella": [
    {
      image: "/Terrestrial plants/Selaginella/_DSC5979.JPG",
      title: "Selaginella",
      description: "Moss-like Selaginella with soft, lush foliage.",
    },
  ],
  "Thaumatophyllum (2 type)": [
    {
      image: "/Terrestrial plants/Thaumatophyllum (2 type)/spruceanum.JPG",
      title: "Spruceanum",
      description: "Moss-like Spruceanum with soft, lush foliage.",
    },
    {
      image: "/Terrestrial plants/Thaumatophyllum (2 type)/xanadu.JPG",
      title: "xanadu",
      description: "Moss-like xanadu with soft, lush foliage.",
    },
  ],
  "Turtle vine": [
    {
      image: "/Terrestrial plants/Turtle vine/_DSC6028.JPG",
      title: "Turtle vine",
      description: "Moss-like Turtle vine with soft, lush foliage.",
    },
  ],
  "Variegated canna": [
    {
      image: "/Terrestrial plants/Variegated canna/_DSC5938.JPG",
      title: "Variegated canna",
      description: "Moss-like Variegated canna with soft, lush foliage.",
    },
  ],
};

const featuredImageByCategory = {
  "Aglonema sp": "/Terrestrial plants/Aglonema sp/_DSC5963.JPG",
  Alocasia: "/Terrestrial plants/Alocasia/_DSC5806.JPG",
  Anthurium: "/Terrestrial plants/Anthurium/IMG_0413.JPG",
  Bigonia: "/Terrestrial plants/Bigonia/_DSC5808.JPG",
  Bromelliad: "/Terrestrial plants/Bromelliad/_DSC5898.JPG",
   "Coin plant": "/Terrestrial plants/Coin plant/_DSC6010.JPG",
  Coleus: "/Terrestrial plants/Coleus/_DSC5840.JPG",
  "Dieffenbachia sterling": "/Terrestrial plants/Dieffenbachia sterling/_DSC5915.JPG",
  "Dracaena reflexa": "/Terrestrial plants/Dracaena reflexa/_DSC6006.JPG",
  "Drimiopsis kirkii": "/Terrestrial plants/Drimiopsis kirkii/_DSC.JPG6018",  // check path typo
  "Fern (4 type)": "/Terrestrial plants/Fern (4 type)/bird nest fern.JPG",
  "Haworthia sp": "/Terrestrial plants/Haworthia sp/_DSC5997.JPG",
  "Lonantha rubra": "/Terrestrial plants/Lonantha rubra/_DSC5971.JPG",
  "Monstera deliciosa": "/Terrestrial plants/Monstera deliciosa/_DSC5888.JPG",
  "Orchid (2 type)": "/Terrestrial plants/Orchid (2 type)/jewel orchid 1.JPG",
  "Peace lily": "/Terrestrial plants/Peace lily/peace lily.jpg",
  "Philodendron( 6 type)": "/Terrestrial plants/Philodendron( 6 type)/broken heart.JPG",
  "Remusatia sp": "/Terrestrial plants/Remusatia sp/remusatia.JPG",
  "Rhoeo discolor": "/Terrestrial plants/Rhoeo discolor/_DSC5928.JPG",
  "Ruellia simplex": "/Terrestrial plants/Ruellia simplex/_DSC5880.JPG",
  "Sanchezia nobilis": "/Terrestrial plants/Sanchezia nobilis/_DSC5940.JPG",
  Selaginella: "/Terrestrial plants/Selaginella/_DSC5979.JPG",
  
  "Thaumatophyllum (2 type)": "/Terrestrial plants/Thaumatophyllum (2 type)/spruceanum.JPG",
  
  "Turtle vine": "/Terrestrial plants/Turtle vine/_DSC6028.JPG",
  
  "Variegated canna": "/Terrestrial plants/Variegated canna/_DSC5938.JPG",
};


const benefitsByCategory = {
  "Aglonema sp": [
    {
      title: "Low Maintenance",
      description: "Aglonema plants require minimal care and thrive indoors.",
    },
    {
      title: "Air Purifying",
      description: "Known for filtering indoor air pollutants effectively.",
    },
    {
      title: "Attractive Foliage",
      description: "Beautiful variegated leaves brighten up any room.",
    },
  ],
  Alocasia: [
    {
      title: "Tropical Appeal",
      description: "Large, striking leaves bring an exotic vibe to interiors.",
    },
    {
      title: "Shade Tolerant",
      description: "Thrives well in indirect light and shady spots.",
    },
    {
      title: "Air Purifying",
      description: "Improves indoor air quality naturally.",
    },
  ],
  Anthurium: [
    {
      title: "Long-lasting Flowers",
      description: "Produces beautiful, lasting blooms throughout the year.",
    },
    {
      title: "Compact Growth",
      description: "Perfect for tabletops and small spaces.",
    },
    {
      title: "Easy Care",
      description: "Requires moderate watering and indirect sunlight.",
    },
  ],
  Bigonia: [
    {
      title: "Fast Growing",
      description: "Bigonia grows quickly, perfect for fast landscaping.",
    },
    {
      title: "Vibrant Flowers",
      description: "Adds stunning colors with its bright flowers.",
    },
    {
      title: "Climbing Habit",
      description: "Great for trellises and vertical garden designs.",
    },
  ],
  Bromelliad: [
    {
      title: "Unique Appearance",
      description: "Striking foliage and bright inflorescences create eye-catching displays.",
    },
    {
      title: "Low Water Needs",
      description: "Stores water in leaves making it drought tolerant.",
    },
    {
      title: "Indoor & Outdoor",
      description: "Suitable for bright indoor areas or shaded outdoor spots.",
    },
  ],
  "Coin plant": [
    {
      title: "Compact Size",
      description: "Great for small planters and desks.",
    },
    {
      title: "Easy to Propagate",
      description: "Grows new plants quickly from cuttings.",
    },
    {
      title: "Air Cleaner",
      description: "Helps reduce airborne toxins indoors.",
    },
  ],
  Coleus: [
    {
      title: "Colorful Foliage",
      description: "Wide variety of leaf colors and patterns brighten gardens.",
    },
    {
      title: "Shade Tolerant",
      description: "Grows well in partial to full shade.",
    },
    {
      title: "Fast Growing",
      description: "Quick to fill in garden beds and pots.",
    },
  ],
  "Dieffenbachia sterling": [
    {
      title: "Elegant Leaves",
      description: "Large, patterned leaves add sophistication to interiors.",
    },
    {
      title: "Low Light Tolerant",
      description: "Can thrive in low to medium indoor lighting.",
    },
    {
      title: "Air Purifier",
      description: "Helps filter indoor air pollutants.",
    },
  ],
  "Dracaena reflexa": [
    {
      title: "Architectural Form",
      description: "Striking leaf shapes create strong visual interest.",
    },
    {
      title: "Easy Care",
      description: "Tolerates a range of indoor conditions.",
    },
    {
      title: "Air Cleaner",
      description: "Known for removing toxins from indoor air.",
    },
  ],
  "Drimiopsis kirkii": [
    {
      title: "Attractive Patterning",
      description: "Leaves feature eye-catching variegation and spots.",
    },
    {
      title: "Low Maintenance",
      description: "Thrives in moderate light and watering.",
    },
    {
      title: "Compact Growth",
      description: "Suitable for small pots and terrariums.",
    },
  ],
  "Fern (4 type)": [
    {
      title: "Lush Greenery",
      description: "Provides rich texture and greenery indoors.",
    },
    {
      title: "Humidity Lovers",
      description: "Thrives in humid environments, perfect for bathrooms.",
    },
    {
      title: "Air Purifying",
      description: "Helps improve indoor air quality.",
    },
  ],
  "Haworthia sp": [
    {
      title: "Succulent Beauty",
      description: "Compact rosettes with unique markings.",
    },
    {
      title: "Drought Tolerant",
      description: "Stores water, needs infrequent watering.",
    },
    {
      title: "Indoor Friendly",
      description: "Perfect for sunny windowsills.",
    },
  ],
  "Lonantha rubra": [
    {
      title: "Bold Red Leaves",
      description: "Adds a splash of color with striking foliage.",
    },
    {
      title: "Easy to Grow",
      description: "Adapts well to indoor conditions.",
    },
    {
      title: "Air Purifying",
      description: "Contributes to cleaner indoor air.",
    },
  ],
  "Monstera deliciosa": [
    {
      title: "Iconic Look",
      description: "Large, fenestrated leaves popular for decor.",
    },
    {
      title: "Easy to Train",
      description: "Can be grown as climbing or bushy plant.",
    },
    {
      title: "Air Cleaner",
      description: "Removes toxins from indoor air.",
    },
  ],
  "Orchid (2 type)": [
    {
      title: "Elegant Blooms",
      description: "Exotic flowers that last for weeks.",
    },
    {
      title: "Compact Size",
      description: "Great for tabletops and shelves.",
    },
    {
      title: "Indoor Air Quality",
      description: "Contributes positively to indoor environment.",
    },
  ],
  "Peace lily": [
    {
      title: "Air Purifier",
      description: "Excellent at removing airborne toxins.",
    },
    {
      title: "Low Light Tolerant",
      description: "Thrives in shaded areas.",
    },
    {
      title: "Elegant White Flowers",
      description: "Adds peaceful beauty indoors.",
    },
  ],
  "Philodendron( 6 type)": [
    {
      title: "Varied Leaf Shapes",
      description: "Diverse forms suitable for many decor styles.",
    },
    {
      title: "Low Maintenance",
      description: "Requires minimal care indoors.",
    },
    {
      title: "Air Purifying",
      description: "Filters common indoor pollutants.",
    },
  ],
  "Remusatia sp": [
    {
      title: "Unique Foliage",
      description: "Interesting leaf shape and texture.",
    },
    {
      title: "Easy to Care",
      description: "Thrives indoors with moderate light.",
    },
    {
      title: "Air Cleaner",
      description: "Contributes to better indoor air quality.",
    },
  ],
  "Rhoeo discolor": [
    {
      title: "Colorful Leaves",
      description: "Variegated purple and green foliage adds vibrancy.",
    },
    {
      title: "Low Maintenance",
      description: "Grows well in indoor and shaded outdoor spots.",
    },
    {
      title: "Versatile",
      description: "Suitable for pots, borders, and groundcover.",
    },
  ],
  "Ruellia simplex": [
    {
      title: "Bright Flowers",
      description: "Produces vivid purple flowers.",
    },
    {
      title: "Tolerant to Heat",
      description: "Performs well in warm climates.",
    },
    {
      title: "Low Care",
      description: "Needs minimal maintenance.",
    },
  ],
  "Sanchezia nobilis": [
    {
      title: "Tropical Appearance",
      description: "Bold leaves add exotic appeal.",
    },
    {
      title: "Attracts Pollinators",
      description: "Flowers attract butterflies and bees.",
    },
    {
      title: "Moderate Care",
      description: "Prefers bright, indirect light.",
    },
  ],
  Selaginella: [
    {
      title: "Moss-like Texture",
      description: "Soft, lush foliage resembling moss.",
    },
    {
      title: "Humidity Lover",
      description: "Thrives in moist environments.",
    },
    {
      title: "Ground Cover",
      description: "Great as a living carpet in terrariums.",
    },
  ],
  "Thaumatophyllum (2 type)": [
    {
      title: "Large Leaves",
      description: "Bold and lush foliage for statement plants.",
    },
    {
      title: "Easy to Maintain",
      description: "Thrives with basic care routines.",
    },
    {
      title: "Air Purifying",
      description: "Improves indoor air quality.",
    },
  ],
  "Turtle vine": [
    {
      title: "Climbing Vine",
      description: "Great for vertical gardening and trellises.",
    },
    {
      title: "Hardy Plant",
      description: "Tolerates a range of growing conditions.",
    },
    {
      title: "Fast Growth",
      description: "Quickly covers surfaces with attractive foliage.",
    },
  ],
  "Variegated canna": [
    {
      title: "Striking Foliage",
      description: "Variegated leaves add visual interest.",
    },
    {
      title: "Bright Flowers",
      description: "Produces colorful blooms.",
    },
    {
      title: "Easy to Grow",
      description: "Adapts well to many garden conditions.",
    },
  ],
};

export default function PlantCategoryPage() {
  const { sectionId } = useParams();
  const decodedSection = decodeURIComponent(sectionId);

  const imagesData = imagesDataByCategory[decodedSection] || [];
  const featuredImage = featuredImageByCategory[decodedSection] || "";
  


  const [selectedImage, setSelectedImage] = useState(null);

  if (!imagesData.length) {
    return (
      <div className="text-center py-20 text-red-500">Category not found.</div>
    );
  }

  

  const benefits =
    benefitsByCategory[decodedSection] || [
      {
        title: "Space Optimization",
        description:
          "Perfect for urban environments where ground space is limited. Grow upward instead of outward.",
      },
      {
        title: "Improved Air Quality",
        description:
          "Plants naturally filter air pollutants, creating healthier indoor and outdoor environments.",
      },
      {
        title: "Aesthetic Appeal",
        description:
          "Create stunning visual focal points that transform ordinary walls into living art installations.",
      },
    ];

  const features = [
    [
      "Custom Design",
      "Each vertical garden is custom designed to fit your space and aesthetic preferences.",
    ],
    [
      "Integrated Irrigation",
      "Built-in irrigation systems ensure plants receive optimal water with minimal maintenance.",
    ],
    [
      "Plant Selection",
      "Carefully selected plants that thrive in vertical environments and complement each other.",
    ],
    [
      "Maintenance Support",
      "Professional maintenance services available to ensure your vertical garden thrives year-round.",
    ],
  ];

  const cta = {
    title: "Ready to Transform Your Space?",
    description:
      "Contact us today to discuss your vertical garden project. Our experts will help you create a stunning living wall tailored to your needs.",
    buttons: [
      { text: "Contact Us", href: "/contact", isPrimary: true },
      { text: "View All Products", href: "/products", isPrimary: false },
    ],
  };

  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">
            {decodedSection}
          </h1>
          <p className="text-[#2E442F]/70">Explore our {decodedSection} collection.</p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={featuredImage}
            alt={`Featured ${decodedSection}`}
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Benefits Section */}
            <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">
            Benefits of {decodedSection}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map(({ title, description }, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2E442F] mb-3">
                  {title}
                </h3>
                <p className="text-[#2E442F]/70">{description}</p>
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
            {imagesData.map(({ image, title, description }, index) => (
              <FramerMotion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-md h-64 bg-white cursor-pointer"
                variants={itemVariants}
                onClick={() =>
                  setSelectedImage({ image, title, description })
                }
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </FramerMotion.div>
            ))}
          </FramerMotion.div>
        </div>

        {/* Popup Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
                aria-label="Close modal"
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

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/products/terrestrialplants"
            className="inline-block bg-[#2E442F] text-white px-6 py-3 rounded-full hover:bg-[#90A48B] transition"
          >
            ← Back to Categories
          </Link>
        </div>

        {/* Features Section */}
        <div className="mb-16 mt-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map(([title, desc], i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-[#2E442F] text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
          <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
          <p className="mb-6 max-w-2xl mx-auto">{cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {cta.buttons.map(({ text, href, isPrimary }, i) => (
              <a
                key={i}
                href={href}
                className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                  isPrimary
                    ? "bg-white text-[#2E442F] hover:bg-[#90A48B] hover:text-white"
                    : "border border-white text-white hover:bg-white hover:text-[#2E442F]"
                }`}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
