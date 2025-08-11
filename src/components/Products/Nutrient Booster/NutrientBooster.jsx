import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "aquatic-plant-nutrition",
    title: "Aquatic Plant Nutrition",
    image: "/Nutrient booster/Aquatic plant nutrition/pro series/Iron & trace element/Iron_and_trace_element.JPEG.jpg",
  },
  {
    id: "hydroponic-nutrition",
    title: "Hydroponic Nutrition",
    image: "/Nutrient booster/Hydrponic Nutrition/Solution1/Solution1.JPEG.jpg",
  },
  {
    id: "liquid-fertilizer-water-conditioner",
    title: "Liquid Fertilizer & Water Conditioner",
    image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Advance/All_in_one_Advancee.JPEG.jpg",
  },
];

const NutrientBooster = () => {
  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">
            Nutrient Booster Categories
          </h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Select a category to explore subcategories and products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map(({ id, title, image }) => (
            <Link
              key={id}
              to={`/nutrient-booster/${id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow block"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md mb-4"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#2E442F] mb-2">{title}</h3>
                <p className="text-[#2E442F]/70">Click to view subcategories</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutrientBooster;
