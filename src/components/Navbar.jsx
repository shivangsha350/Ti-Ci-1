import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="text-white text-sm absolute top-0 left-0 w-full z-20">
      <div className="flex justify-between items-center px-6 py-2 max-w-7xl mx-auto bg-[#374C37]">
        <div className="flex space-x-6">
          <span>🕒 Monday - Friday 08.00 - 18.00</span>
          <span>📍 100 S Main St, New York, NY</span>
          <span>📧 contact@tici.com</span>
        </div>
        <div className="flex space-x-4 md:block">
          <span className="inline-flex hover:cursor-pointer"><FaFacebookF size={20}/></span>
          <span className="inline-flex hover:cursor-pointer"><FaTwitter size={20}/></span>
          <span className="inline-flex hover:cursor-pointer"><FaYoutube size={20}/></span>
          <span className="inline-flex hover:cursor-pointer"><FaInstagram size={20}/></span>
        </div>
      </div>

      <nav className="bg-black/30">
        <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
          <div className="text-2xl font-bold flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="h-6" />
            <span>Tici</span>
          </div>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li className="hover:text-[#E87722] cursor-pointer">HOME</li>
            <li className="hover:text-[#E87722] cursor-pointer">SERVICES</li>
            <li className="hover:text-[#E87722] cursor-pointer">PROJECTS</li>
            <li className="hover:text-[#E87722] cursor-pointer">PAGES</li>
            <li className="hover:text-[#E87722] cursor-pointer">SHOP</li>
            <li className="hover:text-[#E87722] cursor-pointer">BLOG</li>
            <li className="hover:text-[#E87722] cursor-pointer">CONTACT</li>
          </ul>
          <div className="hidden md:block">
            <button className="border px-4 py-2 rounded-full hover:bg-white hover:text-[#3B6029] transition">GET IN TOUCH</button>
          </div>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
