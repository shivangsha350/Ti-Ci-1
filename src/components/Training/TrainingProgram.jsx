// // TrainingProgram.jsx
// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const TrainingProgram = () => {
//   return (
//     <section className="bg-[#EEF3EC] py-16 px-6 min-h-screen mt-10">
//       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-[#2E442F]/10">
//         {/* Heading */}
//         <h1 className="text-3xl md:text-4xl font-bold text-[#2E442F] text-center mb-4">
//           TiCi’s 3-Month Intensive Training Program
//         </h1>
//         <p className="text-center text-[#2E442F]/70 mb-8 max-w-2xl mx-auto">
//           Launch your career in plant tissue culture, aquascaping, greenhouse management and more.
//         </p>

//         {/* Curriculum */}
//         <h2 className="text-2xl font-semibold text-[#2E442F] mb-3">Curriculum Covers:</h2>
//         <ul className="space-y-2 mb-8 text-[#2E442F]/80 grid md:grid-cols-2 gap-4">
//           {[
//             "Tissue Culture & Greenhouse Maintenance",
//             "Lab Operations, Sterilization, Media Prep",
//             "Greenhouse Climate & Pest Control",
//             "Irrigation & Organic Plant Care",
//             "Aquascaping & Terrarium Design",
//             "Hardscaping, Lighting & Filtration",
//             "Terrarium Setup, Design & Plant Selection",
//             "Natural Display Techniques",
//             "Tissue Culture Applications & Business Skills",
//             "Marketing for Plant Products",
//             "Nursery Operations & Product Branding",
//             "Project Management & Client Handling",
//           ].map((item, i) => (
//             <li key={i} className="flex items-center gap-2">
//               <FaCheckCircle className="text-[#2E442F]" /> {item}
//             </li>
//           ))}
//         </ul>

//         {/* Eligibility */}
//         <h2 className="text-2xl font-semibold text-[#2E442F] mb-3">Eligibility</h2>
//         <ul className="list-disc list-inside mb-8 text-[#2E442F]/80 space-y-2">
//           <li>Science Background (Biology/Botany/Biotech) for Lab Roles</li>
//           <li>Creativity & Design Interest for Aquascaping</li>
//           <li>10+2 or above with hands-on interest in gardening, fishkeeping, or decor</li>
//         </ul>

//         {/* Benefits */}
//         <h2 className="text-2xl font-semibold text-[#2E442F] mb-3">Training Benefits</h2>
//         <ul className="space-y-2 text-[#2E442F]/80 mb-8 list-disc list-inside">
//           <li>Stipend of ₹5,000 (on successful completion)</li>
//           <li>Free Meals & Accommodation</li>
//           <li>Certification & Placement Assistance</li>
//           <li>Career Pathways in Labs, Nurseries, Retail, or Design Studios</li>
//         </ul>

//         {/* Back to Home */}
//         <div className="text-center mt-8">
//           <a
//             href="/"
//             className="inline-block bg-[#2E442F] text-white px-6 py-3 rounded-full hover:bg-[#90A48B] transition"
//           >
//             ← Back to Home
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrainingProgram;





































import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const TrainingProgram = () => {
  return (
    <section className="relative min-h-screen bg-[#EEF3EC] py-16 px-6 bg-cover bg-center mt-10"
      style={{ backgroundImage: "url('/images/leaf-bg.webp')" }} // Optional subtle leaf pattern
    >
      <div className="absolute inset-0 bg-[#2E442F]/70" />

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          TiCi’s 3-Month Intensive Training Program
        </motion.h1>
        <motion.p
          className="text-[#EEF3EC]/90 max-w-2xl mx-auto mb-12 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Build a green career with hands-on training in tissue culture, aquascaping, greenhouse management, and more.
        </motion.p>

        {/* Three main content sections */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Curriculum */}
          <motion.div
            className="bg-white text-[#2E442F] p-6 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-3">Curriculum Covers:</h2>
            <ul className="space-y-2 text-sm">
              {[
                "Tissue Culture & Greenhouse Maintenance",
                "Lab Operations, Sterilization, Media Prep",
                "Greenhouse Climate & Pest Control",
                "Irrigation & Organic Plant Care",
                "Aquascaping & Terrarium Design",
                "Hardscaping, Lighting & Filtration",
                "Terrarium Setup & Plant Selection",
                "Natural Display Techniques",
                "Tissue Culture Business Skills",
                "Marketing for Plant Products",
                "Nursery Operations & Branding",
                "Project Management & Client Handling",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#90A48B]" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Eligibility */}
          <motion.div
            className="bg-white text-[#2E442F] p-6 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-3">Eligibility</h2>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Biology/Botany/Biotech background for lab roles</li>
              <li>Design interest for aquascaping</li>
              <li>10+2 or above for gardening, fishkeeping, or decor</li>
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="bg-white text-[#2E442F] p-6 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-3">Training Benefits</h2>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Stipend of ₹5,000 (on completion)</li>
              <li>Free Meals & Accommodation</li>
              <li>Certification & Placement Support</li>
              <li>Career pathways in labs, nurseries, retail, or design studios</li>
            </ul>
          </motion.div>
        </div>

        {/* Back to Home */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="/"
            className="inline-block bg-[#90A48B] text-[#2E442F] font-semibold px-8 py-3 rounded-full hover:bg-white transition shadow-xl"
          >
            ← Back to Home
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingProgram;
