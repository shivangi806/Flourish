import React, { useState } from 'react';
import FlourishLogo from './Flourish_logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={{ backgroundColor: '#EF5473', borderRadius: '900px'}} className="shadow-lg text-xl mx-4 my-3">
      <div className="max-w-7xl mx-auto px-12 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-blue-950 font-bold text-3xl flex items-center">
            <h1>𝐟𝐥𝐨𝐮𝐫𝐢𝐬𝐡</h1>
            <img src={FlourishLogo} alt="Flourish Logo" className="h-10 w-auto ml-2" />
          </div>
          {/* Mobile Menu Button (Hidden on Medium and above screens) */}
          <div className="md:hidden">
            <button className="text-black focus:outline-none" onClick={toggleMenu}>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
        {/* Navigation Links (Hidden by default on small screens) */}
        <div className={`md:flex md:justify-end md:space-x-5 ${menuOpen ? 'block' : 'hidden'}`}>
          <hr />
          <div>
          <a href="#" className="text-blgrayack hover:text-gray-300">Home</a>
          </div>
          <div>
          <a href="#" className="text-gray hover:text-gray-300">Explore Plans</a>
          </div>
          <div>
          <a href="#" className="text-gray hover:text-gray-300">Lab test</a>
          </div>
          <div>
          <a href="#" className="text-gray hover:text-gray-300">Resources</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
