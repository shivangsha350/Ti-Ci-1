// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="relative h-[90vh] w-full flex items-center justify-between bg-cover bg-center px-6"
//       style={{ backgroundImage: "url('/nature.jpeg')" }}> 
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-0"></div>

//       {/* Left Text */}
//       <div className="relative z-10 text-white max-w-xl space-y-4">
//         <button className="bg-white text-gray-900 px-4 py-1 text-xs font-bold rounded-full shadow-md">OUTDOOR ELEGANCE</button>
//         <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
//           Transforming your yard<br />into a beautiful oasis
//         </h1>
//         <button className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-6 py-3 rounded-full font-semibold">
//           OUR SERVICES
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;











































import React, { useEffect, useState } from 'react';

const images = [
  '/nature.jpeg',
  '/nature1.jpeg',
  '/nature2.jpeg' // Add more image paths if needed
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[90vh] w-full flex items-center justify-between bg-cover bg-center px-6 transition-all duration-1000 mt-10"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Left Text */}
      <div className="relative z-10 text-white max-w-xl space-y-4">
        <button className="bg-white text-gray-900 px-4 py-1 mt-15 text-xs font-bold rounded-full shadow-md">
          OUTDOOR ELEGANCE
        </button>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Transforming your yard<br />into a beautiful oasis
        </h1>
        <button className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-6 py-3 rounded-full font-semibold">
          OUR SERVICES
        </button>
      </div>
    </section>
  );
};

export default Hero;
