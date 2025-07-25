// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const images = ["/Hero.webp", "/2.webp", "/Hero3.webp"];

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
//       className="relative h-screen w-full flex items-center bg-center bg-cover px-6 md:px-10 mt-8"
//       style={{ backgroundImage: `url(${images[currentImage]})` }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40 z-0"></div>

//       {/* Text Content */}
//       <div className="relative z-10 text-white max-w-3xl space-y-6 mt-16 md:mt-0">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//           Welcome to TiCi
//         </h1>
//         <p className="text-base md:text-lg max-w-xl opacity-90">
//            At TiCi, we blend science and nature to redefine how people engage with plants, aquascapes, and sustainable ecosystems
//         </p>

//         {/* Project Card */}
//         <div className="bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 max-w-xl">
//           <span className="text-lg font-semibold">Nature's Palette</span>
//           <Link to="/projects" className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-5 py-2 rounded-full font-medium transition">
//             VIEW PROJECT
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;















import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = ["/balcony-vertical-garden.jpg", "/vertical-garden.jpg", "/indoor-rainforest.jpg"];

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
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text Content */}
      <div className="relative z-10 text-white max-w-3xl space-y-6 mt-16 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Welcome to TiCi Nature Lab
        </h1>
        <p className="text-base md:text-lg max-w-xl opacity-90">
          TiCi transforms everyday spaces into immersive ecosystems by blending biology, design, and care to reshape how we live with nature. 
        </p>

        {/* Action Buttons Block */}
        <div className="bg-black/40 backdrop-blur-md p-5 rounded-xl flex flex-col sm:flex-row sm:items-center gap-4 w-full max-w-xl">
          <span className="text-lg font-semibold">Explore Our Offerings</span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-5 py-2 rounded-full font-medium transition"
            >
              Projects
            </Link>
            <Link
              to="/products"
              className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-5 py-2 rounded-full font-medium transition"
            >
              Products
            </Link>
            <Link
              to="/training-program"
              className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-5 py-2 rounded-full font-medium transition"
            >
              Training
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
