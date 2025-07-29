// NatureAquarium.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion as FramerMotion } from "framer-motion";

const NatureAquarium = () => {
  // Array of all nature aquarium images including the new ones shared by the user
  const natureAquariumImages = [
    "/Nature aquarium/(1).jpg",
    "/Nature aquarium/(2).jpg",
    "/Nature aquarium/(3).jpg",
    "/Nature aquarium/(4).jpg",
    "/Nature aquarium/(5).jpg",
    "/Nature aquarium/(6).jpg",
    "/Nature aquarium/(7).jpg",
    "/Nature aquarium/(8)a.jpg",
    "/Nature aquarium/IMG_2387.JPG",
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4">Nature Aquarium</h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Experience the beauty of underwater landscapes with our Nature Aquarium designs. These carefully crafted aquascapes combine aquatic plants, hardscape materials, and balanced ecosystems to create living art in your home or office.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="/Nature aquarium/(1).jpg" 
            alt="Featured Nature Aquarium" 
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Benefits of Nature Aquariums</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2E442F] mb-3">Living Art</h3>
              <p className="text-[#2E442F]/70">Create a dynamic, ever-changing piece of living art that brings natural beauty to any space.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2E442F] mb-3">Stress Reduction</h3>
              <p className="text-[#2E442F]/70">Studies show that watching aquariums reduces stress and anxiety, creating a calming atmosphere.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2E442F] mb-3">Educational Value</h3>
              <p className="text-[#2E442F]/70">Learn about aquatic ecosystems, plant biology, and the delicate balance of underwater environments.</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Gallery</h2>
          <FramerMotion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {natureAquariumImages.map((image, index) => (
              <FramerMotion.div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-md h-64 bg-white"
                variants={itemVariants}
              >
                <img 
                  src={image} 
                  alt={`Nature Aquarium ${index + 1}`} 
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
                <p className="text-[#2E442F]/70">Each nature aquarium is custom designed to match your space and personal aesthetic preferences.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#2E442F] text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Balanced Ecosystem</h3>
                <p className="text-[#2E442F]/70">Carefully balanced systems that maintain water quality and promote healthy plant and fish life.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#2E442F] text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E442F] mb-2">Premium Plants</h3>
                <p className="text-[#2E442F]/70">High-quality tissue cultured aquatic plants that are disease-free and ready to thrive in your aquarium.</p>
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
                <p className="text-[#2E442F]/70">Professional maintenance services available to ensure your nature aquarium remains beautiful and healthy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2E442F] text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Underwater Paradise?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Contact us today to discuss your nature aquarium project. Our experts will help you design a stunning aquascape tailored to your space and preferences.</p>
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

export default NatureAquarium;