import React from 'react';

const Consultation = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full flex items-center justify-start bg-center bg-no-repeat px-6 pt-24 pb-20"
        style={{
          backgroundImage: "url('/projects/bg.avif')",
          backgroundSize: 'cover', 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-0"></div>

        <div className="relative z-10 text-white max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-lg">
            Partner With Us for Your Next Green Project
          </h1>

          <button className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-6 py-3 rounded-full font-semibold transition-colors">
            Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
