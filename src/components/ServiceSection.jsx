import React from "react";

const services = [
  {
    title: "Garden Design",
    description:
      "Imagine stepping into your own private oasis—a garden designed perfectly to your needs and style.",
    image: "/garden.jpeg", // Replace with actual path
    readMore: true,
  },
  {
    title: "Garden Maintenance",
    description:
      "A beautiful garden is more than just a space—it’s a living, breathing part of your home. But maintaining that beauty takes time and expertise.",
    image: "/maintainance.jpeg", // Replace with actual path
    readMore: true,
  },
  {
    title: "Decking and Patio",
    description:
      "Create an inviting space for entertaining, or a functional extension of your home’s interior.",
    image: "/decking.jpeg", // Replace with actual path
    readMore: true,
  },
];

const ServiceSection = () => {
  return (
    // <section className="bg-[#374C37] text-white px-4 py-16">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    //     {services.map((service, idx) => (
    //       <div key={idx} className="relative group overflow-hidden rounded">
    //         {/* Image Block */}
    //         <div
    //           className={`h-[350px] bg-cover bg-center flex items-center justify-center relative`}
    //           style={{ backgroundImage: `url(${service.image})` }}
    //         >
    //           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>
    //           <img
    //             src="/leaf2.png" // Replace with white SVG icon
    //             alt="leaf icon"
    //             className="z-10 h-10"
    //           />
    //         </div>

    //         {/* Text Block */}
    //         <div className="bg-[#2E422D] p-6 min-h-[160px] flex flex-col justify-between">
    //           <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
    //           <p className="text-sm text-gray-300 mb-4">{service.description}</p>

    //           {service.readMore ? (
    //             <button className="self-start border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#2E422D] transition">
    //               READ MORE
    //             </button>
    //           ) : null}
    //         </div>
    //       </div>
    //     ))}
    //   </div>

     
    // </section>


//     <section className="bg-[#374C37] text-white px-4 py-16">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//     {services.map((service, idx) => (
//       <div key={idx} className="flex flex-col rounded overflow-hidden group bg-[#2E422D] h-full">
//         {/* Image Block */}
//         <div
//           className="h-[250px] bg-cover bg-center flex items-center justify-center relative"
//           style={{ backgroundImage: `url(${service.image})` }}
//         >
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>
//           <img
//             src="/leaf2.png"
//             alt="leaf icon"
//             className="z-10 h-10"
//           />
//         </div>

//         {/* Text Block */}
//         <div className="flex flex-col justify-between flex-grow p-6">
//           <div>
//             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//             <p className="text-sm text-gray-300 mb-4">{service.description}</p>
//           </div>

//           {service.readMore && (
//             <button className="self-start border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#2E422D] transition">
//               READ MORE
//             </button>
//           )}
//         </div>
//       </div>
//     ))}
//   </div>
// </section>





<section className="bg-[#374C37] text-white px-4 py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {services.map((service, idx) => (
      <div key={idx} className="flex flex-col rounded overflow-hidden group bg-[#2E422D] h-full">
        {/* Image Block */}
        <div
          className="h-[320px] bg-cover bg-center flex items-center justify-center relative"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>
          <img
            src="/leaf2.png"
            alt="leaf icon"
            className="z-10 h-10"
          />
        </div>

        {/* Text Block */}
        <div className="flex flex-col justify-between flex-grow p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{service.description}</p>
          </div>

          {service.readMore && (
            <button className="self-start border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#2E422D] transition">
              READ MORE
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
</section>


  );
};

export default ServiceSection;
