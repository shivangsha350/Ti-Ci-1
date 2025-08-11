import React, { useState } from "react";
import { motion as FramerMotion } from "framer-motion";
import { Link } from "react-router-dom";

const CarpetPlants = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const carpetPlantImages = [
     {
      image:
        "/Tissue%20cultured%20aquatic%20plants/carpet/Hemianthus%20Callitrichoides%20_Cuba/hc%20cuba.jpg",
      title: "Hemianthus Callitrichoides 'Cuba'",
      description:
        "'HC Cuba' is one of the smallest aquarium plants. It forms dense carpets under high light and CO2. It’s ideal for nano tanks and experienced aquascapers.",
    },
    {
      image:
        "/Tissue%20cultured%20aquatic%20plants/carpet/Monte%20Carlo%20(Micranthemum%20tweediei)/monte%20carlo.jpg",
      title: "Monte Carlo (Micranthemum tweediei)",
      description:
        "Monte Carlo is a popular carpeting plant in aquascaping, known for its compact and lush green growth. It spreads quickly with adequate CO2 and lighting, making it ideal for foreground planting.",
    },
   
    {
      image:
        "/Tissue%20cultured%20aquatic%20plants/carpet/UTRICULARIA%20GRAMMINIFOLIA/utricularia-graminifolia.jpg",
      title: "Utricularia Graminifolia",
      description:
        "UG is a unique carnivorous carpeting plant with grass-like appearance. It requires stable conditions and soft water to thrive.",
    },
    {
      image:
        "/Tissue%20cultured%20aquatic%20plants/carpet/Eleocharis%20parvula%20(Dwarf%20hair%20grass)/eleocharis-sp-mini.jpg",
      title: "Eleocharis Parvula (Dwarf Hair Grass)",
      description:
        "Dwarf Hair Grass is a popular, fast-spreading carpet plant. It creates a natural lawn-like look in the aquarium foreground.",
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
         <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Tissue Cultured Aquatic Plants</h1>
         <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
           Discover the purity and vitality of tissue cultured aquatic plants. Grown in sterile environments, these plants are free from pests, algae, and pathogens—perfect for a healthy, thriving aquascape.
         </p>
        </div>



        {/* Featured Image */}
        <div className="mb-12">
          <img
            src="/Tissue%20cultured%20aquatic%20plants/carpet/Hemianthus%20Callitrichoides%20_Cuba/hc%20cuba.jpg"
            alt="Featured Carpet Plant"
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Benefits Section */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Benefits of Tissue Cultured Carpet Plants</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      "100% Pest & Algae Free",
      "High Survival Rate",
      "Ready-to-Grow"
    ].map((title, i) => (
      <div key={i} className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#2E442F] mb-3">{title}</h3>
        <p className="text-[#2E442F]/70">
          {title === "100% Pest & Algae Free" && "Cultivated in sterile labs, these plants are completely free from snails, algae, and diseases."}
          {title === "High Survival Rate" && "Adapt quickly to aquariums, with strong root systems and minimal melt."}
          {title === "Ready-to-Grow" && "Pre-acclimated and ready for planting—ideal for both beginners and experts."}
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
          {carpetPlantImages.map((item, index) => (
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
      </div>
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

export default CarpetPlants;
