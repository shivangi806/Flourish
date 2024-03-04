import React, { useState } from 'react';
import DrShivangi from './DrShivangi.jpeg';
const SlidingCards = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className={`w-64 h-80 bg-gray-200 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform ${isCardOpen ? '-translate-y-36' : 'translate-y-0'}`}>
          <div className="bg-gray-600 text-white py-2 px-4 cursor-pointer" onClick={toggleCard}>
            <h2>Dr. Shivangi Chandra</h2>
          </div>
          <div className="py-4 px-4">
            <img src={DrShivangi} alt="Dr. Shivangi Chandra" className="w-full h-auto" />
            <p>Clinical Physocologist</p>
          </div>
        </div>
        <div className={`w-64 h-80 bg-gray-200 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform ${isCardOpen ? '-translate-y-36' : 'translate-y-0'}`}>
          <div className="bg-gray-600 text-white py-2 px-4 cursor-pointer" onClick={toggleCard}>
            <h2>Dr. Shivangi Chandra</h2>
          </div>
          <div className="py-4 px-4">
            <img src={DrShivangi} alt="Dr. Shivangi Chandra" className="w-full h-auto" />
            <p>Clinical Physocologist</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SlidingCards;
