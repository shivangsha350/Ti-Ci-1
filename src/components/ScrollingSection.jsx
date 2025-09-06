import React from "react";
import { motion } from "framer-motion";

const images = [
  "/logo_TICI.jpg",
  "/logo2_TICI.jpg",
  "/logo_TICI.jpg",
  "/logo2_TICI.jpg",
];


const scrollingImages = [...images, ...images];

const ScrollingSection = () => {
  return (
    <section
      className="w-full py-16 px-6 bg-[#EEF3EC] bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('/pattern-bg.png')",
      }}
    >
    

      {/* Scrolling Images Row */}
      <motion.div
        className="flex w-max space-x-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 15, // adjust speed here
          ease: "linear",
        }}
      >
        {scrollingImages.map((src, index) => (
          // <div
          //   key={index}
          //   className="overflow-hidden rounded-2xl shadow-md shrink-0 w-[300px] h-[200px]"
          // >
          //   <img
          //     src={src}
          //     alt={`Gallery ${index + 1}`}
          //     className="w-full h-full object-cover"
          //   />
          // </div>


<div
  key={index}
  
>
  <img
    src={src}
    alt={`Gallery ${index + 1}`}
    className="h-50 w-full object-cover overflow-hidden rounded-2xl shadow-md shrink-0"
  />
</div>
        ))}
      </motion.div>
    </section>
  );
};

export default ScrollingSection;
