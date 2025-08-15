// src/components/Products/TissueCulturedAquaticPlants/MidgroundPlants.jsx
import React, { useState } from "react";
import { motion as FramerMotion } from "framer-motion";
import { Link } from "react-router-dom";

const MidgroundPlants = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const midgroundPlants = [
    { id: 5, image: "/Tissue%20cultured%20aquatic%20plants/Midground/ALTERNANTHERA%20REINECKII%20%E2%80%98MINI%E2%80%99/ALTERNANTHERAREINECKII_MINI_TISSUECULTURE_eecb3040-e846-4a03-b44c-a212cd4c4740.jpg",
 title: "Alternanthera Reineckii ‘Mini’", description: "Compact red plant ideal for aquascapes." },
  { id: 6, image: "/Tissue%20cultured%20aquatic%20plants/Midground/Cryptocoryne%20Axelrodi/Cryptocoryne%20Axelrodi.jpg", title: "Cryptocoryne Axelrodi", description: "Attractive Cryptocoryne with green-brown tones." },
  { id: 7, image: "/Tissue%20cultured%20aquatic%20plants/Midground/Cryptocoryne%20Pink/Cryptocoryne%20Pink.jpg", title: "Cryptocoryne Pink", description: "Rare Cryptocoryne with pink leaf centers." },
  { id: 8, image: "/Tissue%20cultured%20aquatic%20plants/Midground/Cryptocoryne%20Wendtii%20_Green_/Cryptocoryne%20Wendtii%20_Green_.jpg", title: "Cryptocoryne Wendtii Green", description: "Green variant of popular Wendtii species." },
  { id: 9, image: "/Tissue%20cultured%20aquatic%20plants/Midground/Cryptocoryne%20Wendtti%20_Brown_/Cryptocoryne%20Wendtti%20_Brown_.jpg",
 title: "Cryptocoryne Wendtii Brown", description: "Brown variant for natural-looking aquascapes." },
  { id: 10, image: "/Tissue%20cultured%20aquatic%20plants/Midground/Lobelia%20Cardinalis/Lobelia%20Cardinalis.jpg", title: "Lobelia Cardinalis", description: "Bright green leaves with compact growth habit." },
  { id: 11, image: "/Tissue%20cultured%20aquatic%20plants/Midground/Pogostemon%20helferi/Pogostemon%20helferi.jpg", title: "Pogostemon Helferi", description: "Unique curly leaves, adds texture to aquascapes." },
  { id: 12, image: "/Tissue%20cultured%20aquatic%20plants/Midground/Staurogyne%20repens/Staurogyne%20repens.jpg", title: "Staurogyne Repens", description: "Low-growing, bushy plant for the front to midground." },
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">
            Tissue Cultured Midground Plants
          </h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Our midground tissue cultured plants are perfect for creating natural transitions in your aquascape. Carefully grown in sterile conditions, these plants ensure algae- and pest-free additions to your aquarium.
          </p>
        </div>
         

         {/* Featured Image */}
        <div className="mb-12">
          <img
            src="/Tissue%20cultured%20aquatic%20plants/Midground/ALTERNANTHERA%20REINECKII%20%E2%80%98MINI%E2%80%99/ALTERNANTHERAREINECKII_MINI_TISSUECULTURE_eecb3040-e846-4a03-b44c-a212cd4c4740.jpg"
            alt="Featured Carpet Plant"
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Tissue Cultured Midground Plants</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Pest-Free & Algae-Free", "Long Shelf Life", "Safe for Sensitive Species"].map(
              (title, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#2E442F] mb-3">{title}</h3>
                  <p className="text-[#2E442F]/70">
                    {title === "Pest-Free & Algae-Free" &&
                      "Grown in sterile labs to eliminate unwanted snails, algae, and pathogens."}
                    {title === "Long Shelf Life" &&
                      "Sealed packaging preserves freshness for extended periods before planting."}
                    {title === "Safe for Sensitive Species" &&
                      "Ideal for shrimp tanks and delicate aquatic ecosystems."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Grid Gallery */}
        <FramerMotion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {midgroundPlants.map((item, index) => (
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
              ["Balanced Design", "Perfect for filling the space between foreground and background plants."],
  ["Varied Heights", "Offers diverse leaf shapes and sizes to create natural layers."],
  ["Hardy Growth", "Adaptable to a range of water conditions for long-lasting beauty."],
  ["Visual Transition", "Smoothly blends the carpet and tall plants for a harmonious aquascape."]
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

export default MidgroundPlants;
