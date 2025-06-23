// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="text-white text-sm absolute top-0 left-0 w-full z-30">
//       {/* Top Bar */}
//       <div className="w-full bg-[#374C37]">
//         <div className="hidden md:flex justify-between items-center px-6 py-2 max-w-7xl mx-auto">
//           <div className="flex space-x-6">
//             <span>🕒 Mon - Fri 08.00 - 18.00</span>
//             <span>📍 100 S Main St, New York, NY</span>
//             <span>📧 contact@tici.com</span>
//           </div>
//           <div className="flex space-x-4">
//             <span className="hover:text-[#E87722] cursor-pointer"><FaFacebookF size={18} /></span>
//             <span className="hover:text-[#E87722] cursor-pointer"><FaTwitter size={18} /></span>
//             <span className="hover:text-[#E87722] cursor-pointer"><FaYoutube size={18} /></span>
//             <span className="hover:text-[#E87722] cursor-pointer"><FaInstagram size={18} /></span>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="w-full bg-black/30 backdrop-blur-sm shadow-md">
//         <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
//           {/* Logo */}
//           <div className="text-2xl font-bold flex items-center space-x-2">
//             <img src="/logo.png" alt="logo" className="h-6" />
//             <span>Tici</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 font-medium">
//             <Link to="/" className="block hover:text-[#E87722] text-base font-medium">HOME</Link>
//             <Link to="/services" className="block hover:text-[#E87722] text-base font-medium">SERVICES</Link>
//             <Link to="/projects" className="block hover:text-[#E87722] text-base font-medium">PROJECTS</Link>
//             <Link to="/aboutus" className="block hover:text-[#E87722] text-base font-medium">ABOUT US</Link>
//             <Link to="/contact" className="block hover:text-[#E87722] text-base font-medium">CONTACT</Link>

//           </ul>

//           {/* Button */}
//           <div className="hidden md:block">
//             <button className="border px-5 py-2 rounded-full bg-[#374C37] hover:bg-white hover:text-[#3B6029] transition font-semibold">
//               GET IN TOUCH
//             </button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu}>
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-[#1a1a1a] px-6 py-4 space-y-4 transition-all duration-300 ease-in-out">
         
//             <Link to="/" className="block hover:text-[#E87722] text-base font-medium">HOME</Link>
//             <Link to="/services" className="block hover:text-[#E87722] text-base font-medium">SERVICES</Link>
//             <Link to="/projects" className="block hover:text-[#E87722] text-base font-medium">PROJECTS</Link>
//             <Link to="/aboutus" className="block hover:text-[#E87722] text-base font-medium">ABOUT US</Link>
//             <Link to="/contact" className="block hover:text-[#E87722] text-base font-medium">CONTACT</Link>
//             <button className="w-full mt-4 border px-4 py-2 rounded-full bg-[#E87722] hover:bg-white hover:text-[#3B6029] transition font-semibold">
//               GET IN TOUCH
//             </button>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;





































































import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Watch scroll position for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-black/40"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#374C37] text-white text-sm">
        <div className="hidden md:flex justify-between items-center px-6 py-2 max-w-7xl mx-auto">
          <div className="flex space-x-6">
            <span>🕒 Mon - Fri 08.00 - 18.00</span>
            <span>📍 100 S Main St, NY</span>
            <span>📧 contact@tici.com</span>
          </div>
          <div className="flex space-x-4">
            {[<FaFacebookF />, <FaTwitter />, <FaYoutube />, <FaInstagram />].map(
              (Icon, idx) => (
                <span
                  key={idx}
                  className="hover:text-[#E87722] cursor-pointer transition-colors"
                >
                  {Icon}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full ">
        <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-2xl font-bold text-white">
            <img src="/logo.png" alt="logo" className="h-7 w-7" />
            <span>Tici</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            {[
              { name: "HOME", to: "/" },
              { name: "SERVICES", to: "/services" },
              { name: "PROJECTS", to: "/projects" },
              { name: "ABOUT US", to: "/aboutus" },
              { name: "CONTACT", to: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-[#E87722] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </ul>

          {/* Get In Touch Button */}
          <div className="hidden md:block">
            <button className="border border-white px-5 py-2 rounded-full bg-[#374C37] text-white hover:bg-[#E87722] hover:border-[#E87722] transition-colors font-semibold">
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-4 transition-all duration-300 ease-in-out">
            {["HOME", "SERVICES", "PROJECTS", "ABOUT US", "CONTACT"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="block text-white hover:text-[#E87722] text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            <button className="w-full mt-4 border border-[#E87722] px-4 py-2 rounded-full text-[#E87722] hover:bg-[#E87722] hover:text-white transition font-semibold">
              GET IN TOUCH
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
