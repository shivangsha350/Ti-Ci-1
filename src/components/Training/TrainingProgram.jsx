import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TrainingProgram = () => {
  const curriculum = [
    {
      title: "1. Tissue Culture & Greenhouse Maintenance",
      points: [
        "Lab Operations, Sterilization, Media Prep",
        "Greenhouse Climate & Pest Control",
        "Irrigation & Organic Plant Care",
      ],
    },
    {
      title: "2. Aquascaping & Terrarium Design",
      points: [
        "Hardscaping Principles, Lighting & Filtration",
        "Terrarium Setup, Design & Plant Selection",
        "Natural Display Techniques",
      ],
    },
    {
      title: "3. Tissue Culture Applications & Business Skills",
      points: [
        "Marketing for Plant Products",
        "Nursery Operations & Product Branding",
        "Project Management & Client Handling",
      ],
    },
  ];

  const eligibility = [
    "Science Background (Biology/Botany/Biotech) for Lab Roles",
    "Creativity & Design Interest for Aquascaping",
    "10+2 or above with hands-on interest in gardening, fishkeeping, or decor",
  ];

  const benefits = [
    "Stipend of ₹5,000 (on successful completion)",
    "Free Meals & Accommodation",
    "Certification & Placement Assistance",
    "Career Pathways in Labs, Nurseries, Retail, or Design Studios",
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A8C1A2] to-[#EEF3EC] bg-clip-text text-transparent">
            TiCi’s 3-Month Intensive Training Program
          </h1>
          <p className="text-[#EEF3EC]/90 text-base sm:text-lg max-w-3xl mx-auto">
            Build a Green Career with Us — launch your journey in plant tissue culture, aquascaping, and greenhouse management through our hands-on, industry-backed training.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Curriculum */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#c6d4c6] text-[#2E442F] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4"> Curriculum Covers</h2>
            <ul className="pl-3 space-y-4 text-sm text-[#2E442F]/90">
              {curriculum.map((section, i) => (
                <li key={i}>
                  <strong>{section.title}</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    {section.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#c6d4c6] text-[#2E442F] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4"> Eligibility</h2>
            <ul className="pl-5 list-disc space-y-2 text-sm text-[#2E442F]/90">
              {eligibility.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#c6d4c6] text-[#2E442F] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4"> Training Benefits</h2>
            <ul className="pl-5 list-disc space-y-2 text-sm text-[#2E442F]/90">
              {benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a
            href="/apply"
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
