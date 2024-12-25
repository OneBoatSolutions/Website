import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineFileText, AiOutlineLock } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-blue-500">OneBoat Solutions</h2>
            <p className="mt-2 text-lg text-gray-400 max-w-md text-center md:text-left">
              Providing innovative tech solutions in EdTech, product development,
              and consultancy services. We are here to help you grow!
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-lg text-gray-300">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
                <li><a href="#about" className="hover:text-blue-500 transition">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-300">Follow Us</h3>
              <div className="flex gap-4 mt-2 justify-center md:justify-start">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                  <FaLinkedinIn size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; 2024 OneBoat Solutions. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition flex items-center gap-1">
                <AiOutlineLock size={16} /> Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition flex items-center gap-1">
                <AiOutlineFileText size={16} /> Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
