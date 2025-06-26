// import React, { useEffect, useState } from 'react';

// const images = [
//   '/Hero.webp',
//   '/bg.webp',
//   '/Hero3.webp' 
// ];

// const Hero = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000); 

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative h-[100vh] w-full flex items-center justify-between bg-cover bg-center px-6 transition-all duration-1000 mt-10"
//       style={{ backgroundImage: `url(${images[currentImage]})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-0"></div>

//       {/* Left Text */}
//       <div className="relative z-10 text-white max-w-xl space-y-4">
//         <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
//           Tici
//         </h1>
//         <p className='text-2xl'>
//           Specializing in nature aquariums, vertical gardens, and hydroponics for stunning indoor and outdoor projects.
//         </p>
//         <button className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-6 py-3 rounded-full font-semibold">
//           OUR SERVICES
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;













































import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = ["/Hero.webp", "/bg.webp", "/Hero3.webp"];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen w-full flex items-center bg-center bg-cover px-6 md:px-10 mt-8"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white max-w-3xl space-y-6 mt-16 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to TiCi
        </h1>
        <p className="text-base md:text-lg max-w-xl opacity-90">
           At TiCi, we blend science and nature to redefine how people engage with plants, aquascapes, and sustainable ecosystems
        </p>

        {/* Project Card */}
        <div className="bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 max-w-xl">
          <span className="text-lg font-semibold">Nature's Palette</span>
          <Link to="/projects" className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-5 py-2 rounded-full font-medium transition">
            VIEW PROJECT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
