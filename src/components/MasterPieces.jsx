import React from "react";

const Masterpieces = () => {
    return (
        <section className="bg-[#374C37] min-h-screen flex items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">

                {/* Left Side Images */}
                <div className="relative w-full md:w-1/2">
                    {/* Top Image */}
                    <img
                        src="/plant3.webp"
                        alt="Plants top view"
                        className="rounded-xl shadow-md w-[90%] h-auto object-cover mx-auto transition-transform duration-300 hover:scale-105"
                    />

                    {/* Bottom Overlapping Image */}
                    <img
                        src="/plant2.jpeg"
                        alt="Plants close"
                        className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 md:bottom-[-30px] md:left-[47%] md:translate-x-0 w-1/2 h-40 md:h-60 object-cover rounded-lg shadow-md border-4 border-[#374C37] transition-transform duration-300 hover:scale-105"
                    />


                </div>


                {/* Right Side Text */}
                <div className="w-full md:w-1/2 text-white space-y-6">
                    <span className="bg-[#526650] px-4 py-2 rounded-full inline-block text-sm font-semibold uppercase tracking-wide">
                        Welcome to Tici
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Crafting Living
                        <br />
                        <span className="font-normal text-[#A4B0A0]">Masterpieces</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed text-[#CBD5C0]">
                        At Tici, we’re passionate about turning your garden into a true
                        reflection of your personal style and a haven for relaxation and
                        enjoyment. Whether you’re dreaming of a vibrant floral display, a
                        serene outdoor retreat, or a stunning landscape transformation.
                    </p>
                    <button className="bg-[#526650] hover:bg-[#678065] transition px-6 py-3 rounded-full text-white text-sm font-semibold shadow-md">
                        OUR SERVICES
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Masterpieces;
