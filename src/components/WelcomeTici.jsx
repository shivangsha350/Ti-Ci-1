import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WelcomeTici = () => {
    return (
        <section className="mt-0 min-h-screen bg-white flex items-center justify-center px-6 py-5 overflow-hidden">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">

                {/* Left Side Images */}
                <motion.div
                    className="relative w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/nature-aquarium.jpg"
                        alt="Plants top view"
                        className="rounded-xl shadow-xl w-[90%] h-auto object-cover mx-auto transition-transform duration-300 hover:scale-105"
                    />

                    <motion.img
                        src="/plant2.jpeg"
                        alt="Plants close"
                        className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 md:bottom-[-30px] md:left-[47%] md:translate-x-0 w-1/2 h-40 md:h-60 object-cover rounded-lg shadow-lg border-4 border-[#374C37] transition-transform duration-300 hover:scale-105 z-10"
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>

                {/* Right Side Text */}
                <motion.div
                    className="w-full md:w-1/2 text-[#374C37] space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* <motion.span
                        className="bg-[#526650] text-white px-4 py-2 rounded-full inline-block text-sm font-semibold uppercase tracking-wider shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Welcome to Tici
                    </motion.span> */}

                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                        Pioneering Tissue Culture & Aquascaping in India
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed text-[#526650]">At TiCi, we don’t just create green spaces—we craft living ecosystems. From lush vertical gardens and serene planted aquariums to sustainable insect farms and immersive natural enclosures, every project we touch is rooted in biology, built through design, and nurtured with a deep respect for life.
We are a bio-design studio based in Howrah, West Bengal, transforming homes, offices, schools, and public spaces into vibrant ecological environments. Our mission is simple: to bring nature back into everyday life—ethically, artistically, and intelligently.

                        {/* At TiCi, we blend science and nature to redefine how people engage with plants, aquascapes, and sustainable ecosystems. Established in 2012 (originally as Aquasphere), TiCi has evolved into a cutting-edge organization specializing in tissue culture, aquascaping, terrariums, hydroponics, aquaponics, and urban rainforest designs. With a unique fusion of biotechnology and artistic vision, we offer innovative solutions for hobbyists, greenpreneurs, and urban spaces. */}
                    </p>

                    {/* Optional Button */}
                    {/* <motion.button
                        className="bg-[#526650] hover:bg-[#678065] transition px-6 py-3 rounded-full text-white text-sm font-semibold shadow-lg flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        OUR SERVICES <ArrowRight size={18} />
                    </motion.button> */}
                </motion.div>
            </div>
        </section>
    );
};

export default WelcomeTici;
