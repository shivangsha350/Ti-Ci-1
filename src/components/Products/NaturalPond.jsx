// NaturalPond.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion as FramerMotion } from "framer-motion";

const NaturalPond = () => {
  // Array of all natural pond images
  const naturalPondImages = [
    "/Nature-pond/IMG_0451.JPG",
  ];

  // Animation variants
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Natural Pond</h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Create a serene water feature in your garden with our Natural Pond solutions. These carefully designed ecosystems combine aquatic plants, natural filtration, and balanced habitats to bring the tranquility of nature to your outdoor space.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="/Nature-pond/IMG_0451.JPG" 
            alt="Featured Natural Pond" 
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Benefits of Natural Ponds</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2E442F] mb-3">Biodiversity</h3>
              <p className="text-[#2E442F]/70">Create a thriving ecosystem that attracts wildlife like birds, beneficial insects, and amphibians to your garden.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2E442F] mb-3">Natural Aesthetics</h3>
              <p className="text-[#2E442F]/70">Enhance your outdoor space with the soothing sounds and visual beauty of a natural water feature.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2E442F] mb-3">Sustainable Design</h3>
              <p className="text-[#2E442F]/70">Our ponds use natural filtration systems that require minimal maintenance and energy consumption.</p>
            </div>
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
            {naturalPondImages.map((image, index) => (
              <FramerMotion.div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-md h-64 bg-white"
                variants={itemVariants}
              >
                <img 
                  src={image} 
                  alt={`Natural Pond ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </FramerMotion.div>
            ))}
          </FramerMotion.div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#2E442F] text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Custom Design</h3>
                <p className="text-[#2E442F]/70">Each natural pond is custom designed to match your garden space and personal aesthetic preferences.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#2E442F] text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Natural Filtration</h3>
                <p className="text-[#2E442F]/70">Biological filtration systems that maintain water quality without harsh chemicals or excessive energy use.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#2E442F] text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Aquatic Plants</h3>
                <p className="text-[#2E442F]/70">Carefully selected aquatic plants that help maintain water quality and create a balanced ecosystem.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#2E442F] text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Maintenance Support</h3>
                <p className="text-[#2E442F]/70">Professional maintenance services available to ensure your natural pond remains beautiful and healthy year-round.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2E442F] text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Natural Pond?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Contact us today to discuss your natural pond project. Our experts will help you design a stunning water feature tailored to your garden space and preferences.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-[#2E442F] px-6 py-3 rounded-full font-semibold hover:bg-[#90A48B] hover:text-white transition duration-300">
              Contact Us
            </Link>
            <Link to="/products" className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#2E442F] transition duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalPond;
