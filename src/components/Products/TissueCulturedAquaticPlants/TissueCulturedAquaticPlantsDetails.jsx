import React from "react";

const TissueCulturedAquaticPlantsDetails = ({ plant }) => {
  if (!plant) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <img
        src={plant.image}
        alt={plant.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{plant.title}</h2>
      <p className="text-gray-600">{plant.description}</p>
    </div>
  );
};

export default TissueCulturedAquaticPlantsDetails;
