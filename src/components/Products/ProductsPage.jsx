// ProductsPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const allProducts = [
  {
    title: "Vertical Garden",
    image: "/vertical-garden.jpg",
    description: "Beautiful living walls to transform any space with greenery."
  },
  {
    title: "Terrarium",
    image: "/Terrarium/1.jpg",
    description: "Self-contained miniature ecosystems in beautiful glass containers."
  },
  {
    title: "Nature Pond",
    image: "/Nature-pond/IMG_0451.JPG",
    description: "Create your own natural water feature with our pond solutions."
  },
  {
    title: "Nature Aquarium",
    image: "nature-aquarium.jpg",
    description: "Complete aquascaping solutions for stunning underwater landscapes."
  },
  {
    title: "Tissue Cultured Aquatic Plants",
    image: "/Ammania-Senegalensia.jpg",
    description: "Lab-grown, disease-free aquatic plants for your aquarium."
  },
  {
    title: "Terrestrial Plants",
    image: "/plant2.jpeg",
    description: "Quality indoor and outdoor plants for your home and garden."
  },
  {
    title: "Nutrient Booster",
    image: "/Product4.avif",
    description: "Specialized fertilizers and supplements for optimal plant growth."
  }
];

const ProductsPage = () => {
  return (
    <section className="bg-[#EEF3EC] min-h-screen py-15 px-6 mt-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#2E442F] mt-4">Our Products</h1>
        <p className="text-[#2E442F]/70 mt-2 max-w-xl mx-auto text-xs">
          Browse our carefully curated gardening & aquascaping products — crafted for beauty and sustainability.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {allProducts.map((product, i) => (
          <div
            key={i}
            className="bg-white border border-[#2E442F]/10 rounded-xl overflow-hidden shadow-lg transition hover:shadow-2xl"
          >
            <div
              className="h-48 bg-center bg-cover"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="p-5 text-center">
              <h2 className="text-lg font-semibold text-[#2E442F] mb-2">{product.title}</h2>
              <p className="text-[#2E442F]/70 text-sm">{product.description}</p>
            </div>
            <div className="flex justify-center">
              {product.title === "Vertical Garden" ? (
                <Link to="/products/vertical-garden" className="bg-[#2E442F] text-white px-3 py-2 mb-5 rounded-full text-sm hover:bg-[#90A48B] transition">See more</Link>
              ) : product.title === "Tissue Cultured Aquatic Plants" ? (
                <Link to="/products/tissue-cultured-aquatic-plants/tissue-cultured-aquatic-plants" className="bg-[#2E442F] text-white px-3 py-2 mb-5 rounded-full text-sm hover:bg-[#90A48B] transition">See more</Link>
              ) : product.title === "Terrestrial Plants" ? (
                <Link to="/products/terrestrialplants" className="bg-[#2E442F] text-white px-3 py-2 mb-5 rounded-full text-sm hover:bg-[#90A48B] transition">See more</Link>
              ) : product.title === "Nutrient Booster" ? (
                <Link to="/products/nutrient-booster" className="bg-[#2E442F] text-white px-3 py-2 mb-5 rounded-full text-sm hover:bg-[#90A48B] transition">See more</Link>
              ) : product.title === "Nature Aquarium" ? (
                <Link to="/products/nature-aquarium" className="bg-[#2E442F] text-white px-3 py-2 mb-5 rounded-full text-sm hover:bg-[#90A48B] transition">See more</Link>
              ) : product.title === "Nature Pond" ? (
                <Link to="/products/natural-pond" className="bg-[#2E442F] text-white px-3 py-2 mb-5 rounded-full text-sm hover:bg-[#90A48B] transition">See more</Link>
              ) : product.title === "Terrarium" ? (
                <Link to="/products/terrarium" className="bg-[#2E442F] text-white px-3 py-2 mb-5 rounded-full text-sm hover:bg-[#90A48B] transition">See more</Link>
              ) : (
                <a href="#" className="bg-[#2E442F] text-white px-3 py-2 mb-5 rounded-full text-sm hover:bg-[#90A48B] transition">See more</a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/"
          className="inline-block bg-[#2E442F] text-white px-6 py-3 rounded-full hover:bg-[#90A48B] transition"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ProductsPage;
