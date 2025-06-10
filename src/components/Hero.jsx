import React, { useEffect, useState } from 'react';

const images = [
  '/nature.jpeg',
  '/nature1.jpeg',
  '/nature2.jpeg' 
];

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
      className="relative h-[90vh] w-full flex items-center justify-between bg-cover bg-center px-6 transition-all duration-1000 mt-10"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Left Text */}
      <div className="relative z-10 text-white max-w-xl space-y-4">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          About Tici
        </h1>
        <p className='text-2xl'>
          Specializing in nature aquariums, vertical gardens, and hydroponics for stunning indoor and outdoor projects.
        </p>
        <button className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-6 py-3 rounded-full font-semibold">
          OUR SERVICES
        </button>
      </div>
    </section>
  );
};

export default Hero;
