import React from "react";

const TerrestrialPlantsDetails = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-transperent bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <img
          src={image.image}
          alt={image.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
        <p>{image.description}</p>
      </div>
    </div>
  );
};

export default TerrestrialPlantsDetails;