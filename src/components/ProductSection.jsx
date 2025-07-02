// ProductSection.jsx
import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Terrarium Kits",
    image: "/Product1.avif",
    description: "Beautiful DIY terrarium kits for every skill level."
  },
  {
    title: "Tissue Culture Plants",
    image: "/Product2.avif",
    description: "Premium lab-grown tissue culture plants to enhance your garden."
  },
  {
    title: "Hydroponic Systems",
    image: "/Product3.avif",
    description: "Efficient & eco-friendly hydroponic setups for modern spaces."
  }
];

const ProductSection = () => {
  return (
    <section className="bg-[#EEF3EC] py-5 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E442F] py-0">Our Products</h2>
        <p className="text-[#2E442F]/70 mt-2 max-w-xl mx-auto">
          Explore our range of premium gardening and aquascaping products — thoughtfully crafted to inspire green living.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={i}
            className="bg-white border border-[#2E442F]/10 rounded-xl overflow-hidden shadow-lg group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="h-48 bg-center bg-cover"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#2E442F] mb-2">{product.title}</h3>
              <p className="text-[#2E442F]/70 text-sm mb-4">{product.description}</p>
              <a
                href="/products"
                className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
              >
                See Products
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
