// ProductsPage.jsx
import React from "react";

const allProducts = [
  {
    title: "Terrarium Kits",
    image: "/Product1.avif",
    description: "A complete kit for creating your own beautiful terrarium."
  },
  {
    title: "Tissue Culture Plants",
    image: "/Product2.avif",
    description: "Lab-grown healthy, vibrant tissue culture plants."
  },
  {
    title: "Hydroponic Systems",
    image: "/Product3.avif",
    description: "Eco-friendly hydroponic setups that save water & space."
  },
  {
    title: "Fertilizer Packs",
    image: "/Product4.avif",
    description: "Balanced organic fertilizers to boost plant health."
  }
];

const ProductsPage = () => {
  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#2E442F]">Our Products</h1>
        <p className="text-[#2E442F]/70 mt-2 max-w-xl mx-auto">
          Browse our carefully curated gardening & aquascaping products — crafted for beauty and sustainability.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
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
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/"
          className="inline-block bg-[#2E442F] text-white px-6 py-3 rounded-full hover:bg-[#90A48B] transition"
        >
          ← Back to Home
        </a>
      </div>
    </section>
  );
};

export default ProductsPage;
