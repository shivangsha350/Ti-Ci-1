





// src/pages/TissueCulturedAquaticPlants.jsx
import React from "react";
import { Link } from "react-router-dom";

const TissueCulturedAquaticPlants = () => {
  const categories = [
    {
      title: "Carpet Plants",
      image:
        "/Tissue cultured aquatic plants/carpet/Eleocharis parvula (Dwarf hair grass)/eleocharis-sp-mini.jpg",
      path: "/products/tissue-cultured-aquatic-plants/carpet"
    },
    {
      title: "Midground Plants",
      image:
        "/Tissue cultured aquatic plants/Midground/Staurogyne repens/Staurogyne repens.jpg",
      path: "/products/tissue-cultured-aquatic-plants/midground"
    },
    {
      title: "Stem Plants",
      image:
        "/Tissue%20cultured%20aquatic%20plants/stem%20plant/Ammania-Senegalensia/Ammania-Senegalensia.jpg",
      path: "/products/tissue-cultured-aquatic-plants/stem"
    }
  ];

  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">
            Tissue Cultured Aquatic Plants
          </h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Lab-grown, disease-free aquatic plants for your aquarium.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((card, index) => (
            <Link
              key={index}
              to={card.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#2E442F] mb-2">
                {card.title}
              </h3>
              <p className="text-[#2E442F]/70">Click to view plant varieties</p>
            </Link>
          ))}
        </div>
      </div>


      {/* back button */}
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-block bg-[#2E442F] text-white px-6 py-3 rounded-full hover:bg-[#90A48B] transition"
              >
                ← Back to Products
              </Link>
            </div>
    </section>
  );
};

export default TissueCulturedAquaticPlants;
