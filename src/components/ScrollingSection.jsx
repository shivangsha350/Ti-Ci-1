import React from "react";

const ScrollingSection = () => {
  return (
    <div className="w-full overflow-hidden relative">
      
      {/* First row - dark green background */}
      <div className="bg-[#3b5d3d] text-white py-4">
        <div className="flex whitespace-nowrap animate-scrollLeft">
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={`left-${index}`}>
              <span className="mx-8 text-2xl">01. GARDEN DESIGN</span>
              <span className="mx-8 text-2xl">02. GARDEN MAINTENANCE</span>
              <span className="mx-8 text-2xl">03. DECKING AND FENCING</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Second row - lighter green background */}
      <div className="bg-[#2c4430] text-white py-4">
        <div className="flex whitespace-nowrap animate-scrollRight">
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={`right-${index}`}>
              <span className="mx-8 text-2xl">01. GARDEN DESIGN</span>
              <span className="mx-8 text-2xl">02. GARDEN MAINTENANCE</span>
              <span className="mx-8 text-2xl">03. DECKING AND FENCING</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ScrollingSection;
