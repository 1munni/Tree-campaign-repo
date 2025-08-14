import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaSeedling } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa'; // Using a leaf icon for the logo

const Footer = () => {
  return (
   <footer className="bg-white dark:bg-gray-200 text-gray-700 dark:text-gray-300 transition-colors duration-300 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200 dark:border-gray-700">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <FaSeedling className="text-green-600 dark:text-green-400 text-3xl" />
              <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Planty</span>
            </div>
            <p className="text-sm">
              Nurturing a greener planet, one tree at a time.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-300">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-300">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Navigation Links - Company */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold uppercase text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Our Mission</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Team</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          
          {/* Navigation Links - Resources */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold uppercase text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Events</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors duration-300">Support</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold uppercase text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@planty.com" className="hover:text-green-500 transition-colors duration-300">info@planty.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-green-500 transition-colors duration-300">+1 (234) 567-890</a></li>
              <li>
                <address className="not-italic">
                  123 Green Street, Suite 400<br/>
                  Planta City, PC 54321
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Planty. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;