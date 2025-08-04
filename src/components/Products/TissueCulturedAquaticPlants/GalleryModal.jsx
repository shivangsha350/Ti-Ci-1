import React from "react";

const GalleryModal = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-4xl w-full overflow-y-auto max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl"
        >
          ✕
        </button>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {images.map((item, i) => (
            <div key={i}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg text-[#2E442F]">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
