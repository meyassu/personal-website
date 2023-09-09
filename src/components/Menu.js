import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  const handleResize = () => {
    setMenuOpen(false); // close the hamburger menu when window resizes
  };

  useEffect(() => {
    // Attach the event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // The empty dependency array ensures this effect runs once when the component mounts, and cleanup runs when it unmounts.


  return (
    <div className="absolute top-4 right-4">
      {/* Horizontal Menu for large screens */}
      <div className="hidden md:hidden lg:flex items-center text-sm mt-5">
        <MenuItem number="01." label="About" />
        <MenuItem number="02." label="Experience" />
        <MenuItem number="03." label="Work" />
        <MenuItem number="04." label="Contact" />
        <ResumeLink />
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:flex lg:hidden">
        <div onClick={toggleMenu}>
          <div className="h-1 w-6 bg-orange-500 mb-1"></div>
          <div className="h-1 w-6 bg-orange-500 mb-1"></div>
          <div className="h-1 w-6 bg-orange-500"></div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 right-0 mt-12 bg-light-orange p-5 rounded shadow-lg">
            <MenuItem number="01." label="About" />
            <MenuItem number="02." label="Experience" />
            <MenuItem number="03." label="Work" />
            <MenuItem number="04." label="Contact" />
            <ResumeLink />
          </div>
        )}
      </div>
    </div>
  );
};


const MenuItem = ({ number, label }) => (
  <div className="text-white mb-4 lg:mb-0 lg:mr-6">
    <span className="text-orange-500">{number}</span>
    <span className="text-white cursor-pointer hover:text-orange-500 ml-2">{label}</span>
  </div>
);

const ResumeLink = () => (
  <a 
    href="res/docs/Eyassu_Matthias_Resume_.pdf" 
    target="_blank"
    rel="noopener noreferrer"
    className="border border-orange-500 text-orange-500 mt-4 lg:mt-0 lg:ml-4 px-3 py-2 hover:bg-orange-500 hover:text-white transition duration-300 rounded-md"
  >
    Resume
  </a>
);

export default Menu;
