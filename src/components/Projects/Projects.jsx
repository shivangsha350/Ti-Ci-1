// import React from 'react'
// import { FaArrowRight } from 'react-icons/fa';

// const project = [
//   {
//     name: 'Serenity Grove',
//     location: 'North Carolina',
//     image:
//       '/projects/1.jpeg',
//   },
//   {
//     name: 'Nature’s Palette',
//     location: 'California',
//     image:
//       '/projects/2.jpg',
//   },
//   {
//     name: 'Eco Retreat',
//     location: 'Texas',
//     image:
//       '/projects/3.webp',
//   },
//   {
//     name: 'Botanic Bliss',
//     location: 'Oregon',
//     image:
//       '/projects/4.jpg',
//   },
// ];

// const Projects = () => {
//   return (
//     <div>

//     <section
//   className="relative h-[80vh] w-full flex items-center justify-start bg-cover bg-center bg-no-repeat px-6 mt-10"
//   style={{ backgroundImage: `url('/projects/2.jpg')` }}
// >
//   {/* Gradient Overlay for clarity and contrast */}
//   <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-0"></div>

//   {/* Text Content */}
//   <div className="relative z-10 text-white max-w-2xl space-y-6">
//     <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow-lg">
//       About Tici
//     </h1>
//     <p className='text-xl sm:text-2xl leading-relaxed drop-shadow'>
//       Specializing in nature aquariums, vertical gardens, and hydroponics for stunning indoor and outdoor projects.
//     </p>
//     <button className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-6 py-3 rounded-full font-semibold transition-colors">
//       OUR SERVICES
//     </button>
//   </div>
// </section>


//     <section className="bg-[#f6fbf4] py-16 px-4 md:px-20">
//       <div className="grid md:grid-cols-2 gap-6">
//         {project.map(({ name, location, image }, idx) => (
//           <div
//             key={idx}
//             className="relative overflow-hidden rounded-xl group shadow-lg"
//           >
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-[#3d5a3d]/80 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-6 text-white">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-sm">Name</p>
//                   <p className="font-bold text-lg">{name}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm">Location</p>
//                   <p className="font-bold text-lg">{location}</p>
//                 </div>
//                 <FaArrowRight className="text-xl ml-4" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//     </div>
//   )
// }

// export default Projects




































import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Consultation from './Consultation';

const project = [
  {
    name: 'Serenity Grove',
    location: 'North Carolina',
    image: '/projects/1.jpeg',
  },
  {
    name: 'Nature’s Palette',
    location: 'California',
    image: '/projects/2.jpg',
  },
  {
    name: 'Eco Retreat',
    location: 'Texas',
    image: '/projects/3.webp',
  },
  {
    name: 'Botanic Bliss',
    location: 'Oregon',
    image: '/projects/4.jpg',
  },
];

const Projects = () => {
  return (
    <div className='bg-[#2E442F]'>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] w-full flex items-center justify-start bg-cover bg-center bg-no-repeat px-6 mt-10"
        style={{ backgroundImage: `url('/projects/2.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-0"></div>

        <div className="relative z-10 text-white max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow-lg">
            Projects
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed drop-shadow">
           Transform Your Garden into a Personal Paradise!
          </p>
          <button className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-6 py-3 rounded-full font-semibold transition-colors">
            OUR SERVICES
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#2E442F] py-16 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-6">
          {project.map(({ name, location, image }, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#3d5a3d]/80 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="text-sm">Name</p>
                  <p className="font-bold text-lg">{name}</p>
                </div>
                <div>
                  <p className="text-sm">Location</p>
                  <p className="font-bold text-lg">{location}</p>
                </div>
                <FaArrowRight className="text-xl ml-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation section */}
      <Consultation/>
    </div>
  );
};

export default Projects;
