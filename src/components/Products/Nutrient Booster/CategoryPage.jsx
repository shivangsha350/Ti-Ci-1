import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Data for subcategories grouped by main category slug
const subcategoriesData = {
  "aquatic-plant-nutrition": [
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/Iron & trace element/Iron_and_trace_element.JPEG.jpg",
      title: "Iron & Trace Element",
      description:
        "Essential for DNA synthesis, respiration, photosynthesis, boosts chlorophyll production, maintains healthy chloroplast structure and function.",
    },
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/nitrogen & Phosphorus/Nitrogen_and_phosphorus.JPEG.jpg",
      title: "Nitrogen & Phosphorus",
      description:
        "Building blocks for plants. Enzymes related to photosynthesis and metabolism need nitrogen; phosphorus is crucial for growth.",
    },
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/Phytamin/phytamins.JPEG.jpg",
      title: "Phytamine",
      description:
        "Boosts metabolism, cell growth, fatty acid synthesis, tissue regulation, improves microbial activities, promotes fish health and immunity.",
    },
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/Phytohormone/phytophormone.JPEG.jpg",
      title: "Phytohormones",
      description:
        "Induces and controls cellular metabolism. Proper concentration induces rooting and shoot formation.",
    },
    {
      image: "/Nutrient booster/Aquatic plant nutrition/pro series/potassium/potassium.JPEG.jpg",
      title: "Potassium",
      description:
        "Supports photosynthesis, oxygen production, leaf development; mobile ion quickly depleted from water column; regular dosing ensures healthy growth.",
    },
  ],

  "hydroponic-nutrition": [
    {
      image: "/Nutrient booster/Hydrponic Nutrition/Solution1/Solution1.JPEG.jpg",
      title: "Solution 1",
      description:
        "Optimized for hydroponic systems including paludarium & vertical planter sets. Provides comprehensive growth-enhancing nutrients.",
    },
    {
      image: "/Nutrient booster/Hydrponic Nutrition/Solution2/Solution2.JPEG.jpg",
      title: "Solution 2",
      description:
        "Optimized for hydroponic systems including paludarium & vertical planter sets. Provides comprehensive growth-enhancing nutrients.",
    },
    {
      image: "/Nutrient booster/Hydrponic Nutrition/Solution3/Solution3.JPEG.jpg",
      title: "Solution 3",
      description:
        "Optimized for hydroponic systems including paludarium & vertical planter sets. Provides comprehensive growth-enhancing nutrients.",
    },
  ],

  "liquid-fertilizer-water-conditioner": [
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Advance/All_in_one_Advancee.JPEG.jpg",
      title: "All in one advance",
      description:
        "Play an important role in maintaining proper photosynthesis and physiology of plants.",
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one basic/All_in_one_basic.JPEG.jpg",
      title: "All in one basic",
      description: "(Boost root growth of plants, provides nutrients for longer periods)",
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Non CO2/All_in_one_Non_CO2.JPEG.jpg",
      title: "All in one Non CO2",
      description:
        "The vitamin solutions enriched with probiotics and calcium to revolutionize your experiences.",
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Organics/All_in_one_organics.JPEG.jpg",
      title: "All In One Organics (Booster for microbial and plants)",
      description:
        "Organics contain nutrients in organic format easily used by microfloral community, supporting micronutrient uptake and stabilization.",
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/grenoculum/grenoculum.JPEG.jpg",
      title: "Greenoculum",
<<<<<<< HEAD
      description: "GreenOculum – Cultivating Nature’s Finest",
=======
      description: "The vitimate sollutants enriched with probiotics and calcium to revoulutionize and your experinces",
>>>>>>> f25a7f7d41bc0c3ecfe507ec40c1fbb23cbac72d
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/Soil additives/Soil_Addictives.JPEG.jpg",
      title: "Soil additives",
      description:
        "Balanced nutrients promote plant health and coloration without algae problems. Contains all micro and macro nutrients.",
    },
    {
      image: "/Nutrient booster/Liquid fertilizer & water conditioner/vital minerals/Vital_minerals.JPEG.jpg",
      title: "vital minerals",
      description:
        "A harmonious blend of essential nutrients, minerals, and trace elements for thriving aquatic plants.",
    },
  ],
};

// Benefits and features can be shared or customized per category
const benefitsByCategory = {
  "aquatic-plant-nutrition": [
    {
      title: "Promotes Growth",
      description: "Provides essential nutrients to boost healthy aquatic plant growth.",
    },
    {
      title: "Enhances Photosynthesis",
      description: "Improves chlorophyll production and energy conversion in plants.",
    },
    {
      title: "Supports Immunity",
      description: "Strengthens plant resistance to diseases and stress.",
    },
  ],
  "hydroponic-nutrition": [
    {
      title: "Optimized Formulation",
      description: "Specifically designed for hydroponic environments for maximum absorption.",
    },
    {
      title: "Improves Yield",
      description: "Supports fast and robust plant development in soilless systems.",
    },
    {
      title: "Environment Friendly",
      description: "Reduces waste and optimizes resource use in hydroponics.",
    },
  ],
  "liquid-fertilizer-water-conditioner": [
    {
      title: "Convenient Application",
      description: "Easy to apply liquid nutrients for consistent feeding.",
    },
    {
      title: "Improves Water Quality",
      description: "Helps maintain water parameters for optimal plant and fish health.",
    },
    {
      title: "Boosts Microbial Life",
      description: "Supports beneficial microbes in aquatic environments.",
    },
  ],
};

const features = [
  [
    "Custom Formulations",
    "Each product is formulated to meet specific needs of aquatic plants and systems.",
  ],
  [
    "Easy Integration",
    "Compatible with various setups including tanks, paludariums, and hydroponics.",
  ],
  [
    "Sustainable Ingredients",
    "Focus on eco-friendly and biodegradable nutrient sources.",
  ],
  [
    "Expert Support",
    "Access to technical assistance and guidance for optimal results.",
  ],
];

const cta = {
  title: "Ready to Boost Your Aquatic Plants?",
  description:
    "Contact us now to find the perfect nutrient solution for your plants and setup.",
  buttons: [
    { text: "Contact Us", href: "/contact", isPrimary: true },
    { text: "View Products", href: "/nutrient-booster", isPrimary: false },
  ],
};

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


const featuredImages = {
  "aquatic-plant-nutrition": "/Nutrient booster/Aquatic plant nutrition/pro series/Phytohormone/phytophormone.JPEG.jpg",
  "hydroponic-nutrition": "/Nutrient booster/Hydrponic Nutrition/Solution1/Solution1.JPEG.jpg",
  "liquid-fertilizer-water-conditioner": "/Nutrient booster/Liquid fertilizer & water conditioner/All in one Advance/All_in_one_Advancee.JPEG.jpg",
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const items = subcategoriesData[categoryId];
  const benefits = benefitsByCategory[categoryId] || [];
  const [selectedItem, setSelectedItem] = useState(null);

  if (!items) {
    return (
      <div className="text-center py-20 text-red-500">
        Category not found.
        <br />
        <Link to="/nutrient-booster" className="text-blue-500 underline mt-4 inline-block">
          Back to Nutrient Booster Categories
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-12 text-center">
          {categoryId
            .split("-")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ")}
        </h1>

        {/* Featured Image Section */}
         
<div className="mb-12">
  <img
    src={featuredImages[categoryId]}
    alt={`Featured ${categoryId.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}`}
    className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
    loading="lazy"
  />
</div>


        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map(({ title, description }, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2E442F] mb-3">{title}</h3>
                <p className="text-[#2E442F]/70">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
  <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Varieties</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    {items.map(({ image, title, description }, idx) => (
      <div
  key={idx}
  className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden"
  onClick={() => setSelectedItem({ image, title, description })}
  style={{ aspectRatio: "4 / 4" }}
>
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
    loading="lazy"
  />
</div>

    ))}
  </div>
</div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/Products/nutrient-booster"
            className="inline-block bg-[#2E442F] text-white px-6 py-3 rounded-full hover:bg-[#90A48B] transition"
          >
            ← Back to Categories
          </Link>
        </div>

        {/* Modal Popup */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
            <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-2xl">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedItem.title}</h2>
              <p className="text-gray-600">{selectedItem.description}</p>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map(([title, desc], i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-[#2E442F] text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
          <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
          <p className="mb-6 max-w-2xl mx-auto">{cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {cta.buttons.map(({ text, href, isPrimary }, i) => (
              <a
                key={i}
                href={href}
                className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                  isPrimary
                    ? "bg-white text-[#2E442F] hover:bg-[#90A48B] hover:text-white"
                    : "border border-white text-white hover:bg-white hover:text-[#2E442F]"
                }`}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
