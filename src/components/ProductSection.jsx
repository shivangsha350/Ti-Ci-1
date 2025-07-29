// ProductSection.jsx
import React from "react";
import { motion as FramerMotion } from "framer-motion";
import { Link } from "react-router-dom";

// Define animation variants for product cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const products = [
  {
    title: "Vertical Garden",
    image: "/Vertical garden/(1).jpg",
    description: "Beautiful living walls to transform any space with greenery."
  },
  {
    title: "Tissue Cultured Aquatic Plants",
    image: "/Ammania-Senegalensia.jpg",
    description: "Lab-grown, disease-free aquatic plants for your aquarium."
  },
  {
    title: "Nature Aquarium",
    image: "/Nature aquarium/(1).jpg",
    description: "Complete aquascaping solutions for stunning underwater landscapes."
  },
  {
    title: "Nature Pond",
    image: "/Nature-pond/IMG_0451.JPG",
    description: "Create your own natural water feature with our pond solutions."
  },
  {
    title: "Terrarium",
    image: "/Terrarium/1.jpg",
    description: "Self-contained miniature ecosystems in beautiful glass containers."
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
          <FramerMotion.div
            key={i}
            className="bg-white border border-[#2E442F]/10 rounded-xl overflow-hidden shadow-lg group"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
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
              {product.title === "Vertical Garden" ? (
                <Link
                  to="/products/vertical-garden"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  View Gallery
                </Link>
              ) : product.title === "Nature Aquarium" ? (
                <Link
                  to="/products/nature-aquarium"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  View Gallery
                </Link>
              ) : product.title === "Nature Pond" ? (
                <Link
                  to="/products/natural-pond"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  View Gallery
                </Link>
              ) : product.title === "Terrarium" ? (
                <Link
                  to="/products/terrarium"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  View Gallery
                </Link>
              ) : (
                <Link
                  to="/products"
                  className="inline-block bg-[#2E442F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#90A48B] transition"
                >
                  See Products
                </Link>
              )}
            </div>
          </FramerMotion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
