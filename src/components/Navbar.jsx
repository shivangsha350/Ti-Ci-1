import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", to: "/" },
    // { name: "SERVICES", to: "/services" },
    { name: "PROJECTS", to: "/projects" },
    { name: "PRODUCT", to: "/products" },
    { name: "TRAINING", to: "/training-program" },
    { name: "CONTACT", to: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-black/40"
        }`}
      >
        {/* === Top Info Bar === */}
        <div className="bg-[#374C37] text-white text-sm">
          <div className="hidden md:flex justify-end items-centre px-6 py-2 max-w-7xl mx-auto">
            {/* <div className="flex space-x-6">
              <span>🕒 Mon - Fri 08.00 - 18.00</span>
              <span>📍 100 S Main St, NY</span>
              <span>📧 contact@tici.com</span>
            </div> */}
            <div className=" flex space-x-4">
              {[<FaFacebookF size={20} />,<FaWhatsapp size={20}/>, <FaInstagram size={20} />].map((Icon, idx) => (
                <span key={idx} className="hover:text-[#E87722] cursor-pointer transition-colors">
                  {Icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* === Navigation Bar === */}
        <nav className="w-full">
          <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
              <img src="/TiCi.jpeg" alt="TiCi" className="h-11 w-12 m-0" />
              {/* <span>TiCi</span> */}
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-white font-medium">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.to} className="hover:text-[#596e54] transition-colors">
                  {link.name}
                </Link>
              ))}
            </ul>

            {/* Get In Touch + Menu Icons */}
            <div className="flex items-center space-x-3 md:space-x-2">
              {/* Get In Touch */}
              <button className="hidden md:block border px-4 py-2 rounded-full text-white hover:bg-[#4e5a49] transition-colors font-semibold">
                GET IN TOUCH
              </button>

              {/* Menu Icon — shown on all screen sizes */}
              <button onClick={() => setIsSidebarOpen(true)} className="text-white">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* === Sidebar === */}
      <aside
        className={`fixed top-0 right-0 h-screen w-80 bg-[#2A3B2A] text-white p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
          <div className="flex items-center space-x-2 text-xl font-bold">
            <img src="/TiCi.jpeg" alt="TiCi" className="h-7 w-7" />
            <span>TiCi</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X size={28} className="hover:text-[#E87722]" />
          </button>
        </div>

        {/* Show main navbar links on mobile */}
        <nav className="mb-8 md:hidden">
          <h2 className="font-semibold text-lg mb-2">Navigation</h2>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  onClick={() => setIsSidebarOpen(false)}
                  className="block hover:text-[#E87722] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="border-white/20 mb-8" />

        <nav className="space-y-3 mb-8">
          <h2 className="font-semibold text-lg mb-2">Our Services</h2>
          {[
            "Garden Design",
            "Garden Maintenance",
            "Planting Services",
            "Tree Care",
            "Irrigation Services",
            "Specialty Services",
          ].map((service) => (
            <p key={service} className="hover:text-[#E87722] cursor-pointer transition-colors">
              {service}
            </p>
          ))}
        </nav>

        <hr className="border-white/20 mb-8" />
      </aside>

      {/* === Sidebar Overlay === */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-40"></div>
      )}
    </>
  );
};

export default Navbar;







