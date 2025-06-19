import React from "react";
import { FaStar, FaLeaf, FaSmile, FaSeedling } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const Crafting = () => {
  return (
    <section
      className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat px-6 flex items-center"
      style={{ backgroundImage: "url('/leaves.webp')" }} // replace with your leaf image
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6 max-w-2xl">
          <button className="bg-white/10 border border-white rounded-full px-4 py-1 text-sm font-semibold">
            OUR STORY
          </button>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            CRAFTING BEAUTIFUL <br />
            GARDENS <span className="text-[#90A48B]">SINCE '99</span>
          </h1>
          <p className="text-gray-200 text-lg">
            Established in 1999, our garden service has been transforming
            outdoor spaces into thriving, beautiful landscapes for over two
            decades. With a commitment to quality and personalized care, our
            experienced team offers a full range of services, from design to
            maintenance, ensuring your garden flourishes in every season.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-[#2E442F] px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
              OUR PROJECTS
            </button>
           
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
          {/* Trustpilot */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Excellent</h3>
            <div className="flex text-yellow-400 mb-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="mr-1" />
                ))}
            </div>
            <p className="text-sm mb-2">Based on 185 reviews</p>
            <div className="flex items-center gap-2 text-sm">
              <SiTrustpilot className="text-teal-400 text-xl" />
              <span>Trustpilot</span>
            </div>
          </div>

          {/* Happy Customers */}
          <div className="bg-[#2E442F] text-white rounded-xl p-5 shadow-lg flex flex-col justify-between">
            <FaSmile className="text-3xl mb-3" />
            <h3 className="text-2xl font-bold">850+</h3>
            <p className="text-sm mt-1">Happy Customers</p>
          </div>

          {/* Gardens Designed */}
          <div className="bg-[#3D5734] text-white rounded-xl p-5 shadow-lg flex flex-col justify-between">
            <FaSeedling className="text-3xl mb-3" />
            <h3 className="text-2xl font-bold">550+</h3>
            <p className="text-sm mt-1">Garden Designed</p>
          </div>

          {/* Google Rating */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-2">4.8 out of 5</h3>
            <div className="flex text-yellow-400 mb-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="mr-1" />
                ))}
            </div>
            <p className="text-sm mb-2">Based on 200 reviews</p>
            <div className="flex items-center gap-2 text-sm">
              <FcGoogle className="text-2xl" />
              <span>Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crafting;
