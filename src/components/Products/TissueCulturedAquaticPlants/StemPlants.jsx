import React, { useState } from "react";
import { motion as FramerMotion } from "framer-motion";
import { Link } from "react-router-dom";

const StemPlants = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const stemPlantImages = [
   


    { id: 13, image: "/Tissue%20cultured%20aquatic%20plants/stem%20plant/Ammania-Senegalensia/Ammania-Senegalensia.jpg", title: "Ammania Senegalensia", description: "Reddish stem plant, thrives in high light conditions." },
    { id: 14, image: "/Tissue%20cultured%20aquatic%20plants/stem%20plant/LIMNOPHILA%20AROMATICA%20PURPLE/LIMNOPHILA%20AROMATICA%20PURPLE.jpg", title: "Limnophila Aromatica Purple", description: "Fragrant stem plant with purple hues under strong light." },
    { id: 15, image: "/Tissue%20cultured%20aquatic%20plants/stem%20plant/MYRIOPHYLLUM%20%20mattogrossense/MYRIOPHYLLUM%20mattogrossense.jpg", title: "Myriophyllum Mattogrossense", description: "Fine, feathery leaves create a soft background effect." },
    { id: 16, image: "/Tissue%20cultured%20aquatic%20plants/stem%20plant/Rotala%20Blood%20Red/Rotala%20Blood%20Red.jpeg", title: "Rotala Blood Red", description: "Deep red foliage for striking aquascapes." },
    { id: 17, image: "/Tissue%20cultured%20aquatic%20plants/stem%20plant/ROTALA%20H’RA/ROTALA%20H’RA.jpg", title: "Rotala H’RA", description: "Orange-red stem plant with delicate leaves." },
    { id: 18, image: "/Tissue%20cultured%20aquatic%20plants/stem%20plant/Rotala%20sp.%20Bangladesh/Rotala%20sp.%20Bangladesh.jpg", title: "Rotala sp. Bangladesh", description: "Fast-growing green stem plant for background." }
  
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Tissue Cultured Stem Plants</h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Stem plants grown in sterile conditions ensure a healthy start for your aquascape. These fast-growing plants provide vibrant colors and help balance aquarium ecosystems.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src="/Tissue%20cultured%20aquatic%20plants/stem%20plant/Ammania-Senegalensia/Ammania-Senegalensia.jpg"
            alt="Featured Stem Plant"
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Benefits of Tissue Cultured Stem Plants</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Fast-Growing", "Natural Algae Control", "Vibrant Colors"].map((title, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2E442F] mb-3">{title}</h3>
                <p className="text-[#2E442F]/70">
                  {title === "Fast-Growing" &&
                    "Ideal for quick aquascape establishment and nutrient uptake."}
                  {title === "Natural Algae Control" &&
                    "Stem plants help suppress algae by absorbing excess nutrients rapidly."}
                  {title === "Vibrant Colors" &&
                    "Adds eye-catching reds, oranges, and greens to your tank."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Gallery */}
        <FramerMotion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stemPlantImages.map((item, index) => (
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

        {/* Popup Modal with Title + Description */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm">
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

        {/* back button */}
      <div className="text-center mt-12">
              <Link
                to="/products/tissue-cultured-aquatic-plants/tissue-cultured-aquatic-plants"
                className="inline-block bg-[#2E442F] text-white px-6 py-3 rounded-full hover:bg-[#90A48B] transition"
              >
                ← Back to Categories
              </Link>
            </div>

        {/* Features Section */}
        <div className="mb-16 mt-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
            ["Vibrant Colors", "Adds striking reds, greens, and pinks to enhance visual appeal."],
            ["Fast Growth", "Grows quickly to fill background spaces and provide shelter for fish."],
            ["Shape Variety", "Offers diverse leaf patterns for creative aquascaping designs."],
            ["Dynamic Layouts", "Easily trimmed and replanted to change the aquascape as desired."]
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

export default StemPlants;
