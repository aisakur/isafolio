"use client";
import { useState } from 'react';
import Link from 'next/link'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-6">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-white text-2xl font-bold transition-transform transform hover:scale-110">
          Aisyah Kurniati
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 text-lg hover:text-white transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 text-lg hover:text-white transition duration-300 ease-in-out">
            About
          </Link>
          <Link href="#experience" className="text-gray-300 text-lg hover:text-white transition duration-300 ease-in-out">
            Experience
          </Link>
          <Link href="#footer" className="text-gray-300 text-lg hover:text-white transition duration-300 ease-in-out">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900 text-white`}>
        <Link href="#home" className="block px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out">
          Home
        </Link>
        <Link href="#about" className="block px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out">
          About
        </Link>
        <Link href="#experience" className="block px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out">
          Experience
        </Link>
        <Link href="#footer" className="block px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
