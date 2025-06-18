import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-white text-sm absolute top-0 left-0 w-full z-30">
      {/* Top Bar */}
      <div className="w-full bg-[#374C37]">
        <div className="hidden md:flex justify-between items-center px-6 py-2 max-w-7xl mx-auto">
          <div className="flex space-x-6">
            <span>🕒 Mon - Fri 08.00 - 18.00</span>
            <span>📍 100 S Main St, New York, NY</span>
            <span>📧 contact@tici.com</span>
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-[#E87722] cursor-pointer"><FaFacebookF size={18} /></span>
            <span className="hover:text-[#E87722] cursor-pointer"><FaTwitter size={18} /></span>
            <span className="hover:text-[#E87722] cursor-pointer"><FaYoutube size={18} /></span>
            <span className="hover:text-[#E87722] cursor-pointer"><FaInstagram size={18} /></span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-black/30 backdrop-blur-sm shadow-md">
        <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="h-6" />
            <span>Tici</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <Link to="/" className="block hover:text-[#E87722] text-base font-medium">HOME</Link>
            <Link to="/services" className="block hover:text-[#E87722] text-base font-medium">SERVICES</Link>
            <Link to="/projects" className="block hover:text-[#E87722] text-base font-medium">PROJECTS</Link>
            <Link to="/pages" className="block hover:text-[#E87722] text-base font-medium">PAGES</Link>
            <Link to="/shop" className="block hover:text-[#E87722] text-base font-medium">SHOP</Link>
            <Link to="/blog" className="block hover:text-[#E87722] text-base font-medium">BLOG</Link>
            <Link to="/contact" className="block hover:text-[#E87722] text-base font-medium">CONTACT</Link>

          </ul>

          {/* Button */}
          <div className="hidden md:block">
            <button className="border px-5 py-2 rounded-full bg-[#374C37] hover:bg-white hover:text-[#3B6029] transition font-semibold">
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] px-6 py-4 space-y-4 transition-all duration-300 ease-in-out">
         
            <Link to="/" className="block hover:text-[#E87722] text-base font-medium">HOME</Link>
            <Link to="/services" className="block hover:text-[#E87722] text-base font-medium">SERVICES</Link>
            <Link to="/projects" className="block hover:text-[#E87722] text-base font-medium">PROJECTS</Link>
            <Link to="/pages" className="block hover:text-[#E87722] text-base font-medium">PAGES</Link>
            <Link to="/shop" className="block hover:text-[#E87722] text-base font-medium">SHOP</Link>
            <Link to="/blog" className="block hover:text-[#E87722] text-base font-medium">BLOG</Link>
            <Link to="/contact" className="block hover:text-[#E87722] text-base font-medium">CONTACT</Link>
            <button className="w-full mt-4 border px-4 py-2 rounded-full bg-[#E87722] hover:bg-white hover:text-[#3B6029] transition font-semibold">
              GET IN TOUCH
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
