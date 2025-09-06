import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TrainingProgram = () => {
  const curriculum = [
    {
      title: "1. Tissue Culture & Greenhouse Maintenance",
      points: [
        "Sterile lab techniques, media preparation, and micropropagation",
        "Climate control, organic plant care, and integrated pest management",
        "Drip irrigation, misting systems, and sustainable nursery practices",
      ],
    },
    {
      title: "2. Aquascaping & Terrarium Design",
      points: [
        "Hardscaping, lighting, and aquatic filtration techniques",
        "Tropical plant selection for terrariums and nature aquariums",
        "Display aesthetics and ecosystem-building for living art installations",
      ],
    },
    {
      title: "3. Tissue Culture Applications & Business Skills",
      points: [
        "Branding and marketing eco-products (plants, setups, décor)",
        "Nursery setup, customer handling, and project management",
        "Building a sustainable career in horticulture, bio-design, or urban farming",
      ],
    },
  ];

  const eligibility = [
    "Students or graduates in Biology, Botany, Biotechnology (for lab roles)",
    "Creative minds interested in aquascaping, eco-decor, or nature-inspired design",
    "Anyone (10+2 or above) with a hands-on passion for gardening, fishkeeping, or green living",
  ];

  const benefits = [
    "₹5,000 stipend on successful completion",
    "Free meals and accommodation during the program",
    "Certification plus career support in labs, nurseries, design studios & more",
  ];

  return (
    <section
      className="relative min-h-screen bg-[#EEF3EC] py-20 px-6 bg-cover bg-center mt-8"
      style={{ backgroundImage: "url('/images/leaf-bg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2E442F]/80 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-12 w-full h-[60vh] rounded-xl shadow-lg bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/NATURE EDUCATION PROGRAM.png')" }}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#EEF3EC]/90 text-base sm:text-lg max-w-3xl mx-auto"
          >
            Turn Your Passion for Plants into a Green Career
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[ 
            { title: "Curriculum Covers", content: curriculum },
            { title: "Eligibility", content: eligibility },
            { title: "Training Benefits", content: benefits },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
              className="bg-[#c6d4c6] text-[#2E442F] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <ul className="pl-5 list-disc space-y-2 text-sm text-[#2E442F]/90">
                {Array.isArray(section.content)
                  ? section.content.map((item, idx) =>
                      typeof item === "string" ? (
                        <li key={idx}>{item}</li>
                      ) : (
                        <li key={idx}>
                          <strong>{item.title}</strong>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            {item.points.map((p, j) => (
                              <li key={j}>{p}</li>
                            ))}
                          </ul>
                        </li>
                      )
                    )
                  : null}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a
            href="https://forms.gle/JW3R5DR6azrp57da6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#90A48B] text-[#2E442F] font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors shadow-lg"
          >
            Apply Now
          </a>
          <Link
            to="/"
            className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#2E442F] transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingProgram;
