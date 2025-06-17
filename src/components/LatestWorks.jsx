import React from "react";
import { FiArrowRight } from "react-icons/fi";

const cardData = [
  {
    id: 1,
    name: "Garden Beauty",
    location: "California",
    image: "https://media.istockphoto.com/id/1283568024/photo/traditional-chinese-garden.jpg",
    description:
      "A beautiful garden is more than just a space—it's a living, breathing part of your home. But maintaining that beauty takes time and expertise.",
  },
  {
    id: 2,
    name: "Garden Beauty",
    location: "California",
    image: "https://media.istockphoto.com/id/1309617947/photo/modern-garden.jpg",
    description:
      "Discover serenity with elegant landscaping that connects nature and architecture seamlessly.",
  },
  {
    id: 3,
    name: "Zen Backyard",
    location: "Oregon",
    image: "https://media.istockphoto.com/id/1318575552/photo/zen-garden.jpg",
    description:
      "A calming Zen-themed backyard layout perfect for modern homes and relaxation.",
  },
  {
    id: 4,
    name: "Modern Lawn",
    location: "Texas",
    image: "https://media.istockphoto.com/id/1423660903/photo/modern-lawn.jpg",
    description:
      "A clean and well-maintained lawn space to complement contemporary living.",
  },
];

const LatestWorks = () => {
  return (
    <div className="bg-green-900 min-h-screen px-6 py-16 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        LATEST <span className="font-light">WORKS</span>
      </h2>

      {/* Horizontal scroll container */}
      <div className="overflow-x-scroll no-scrollbar">
        <div className="flex gap-6 w-fit px-1">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="relative w-[45vw] min-w-[45vw] rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 transform hover:scale-[1.01] h-[320px]"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
              />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-4 flex justify-between items-center text-white z-10">
                <div>
                  <p className="text-sm">Name</p>
                  <p className="font-semibold">{card.name}</p>
                </div>
                <div>
                  <p className="text-sm">Location</p>
                  <p className="font-semibold">{card.location}</p>
                </div>
                <FiArrowRight className="text-2xl" />
              </div>

              {/* Hover Description Overlay */}
              <div className="absolute inset-0 bg-green-800/90 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center justify-center text-sm leading-relaxed text-center z-20">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestWorks;
