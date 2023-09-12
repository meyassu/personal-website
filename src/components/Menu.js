import React, { useState, useEffect } from 'react';


const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  const handleResize = () => {
    if (window.innerWidth > 1024) {
        setMenuOpen(false); // close the hamburger menu when window resizes
    }
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
    <>
        {/* Blur the entire viewport when dropdown is open */}
        {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-20 backdrop-blur-md z-10"></div>
        )}

        <div className="fixed top-0 right-0 w-full bg-gray-900 bg-opacity-20 backdrop-blur-md z-10 flex justify-end items-center">
            {/* Horizontal Menu for large screens */}
            <div className="hidden md:hidden lg:flex items-center text-sm mt-4">
                <MenuItem number="01." label="About" href="#about"/>
                <MenuItem number="02." label="Work" href="#work"/>
                <MenuItem number="03." label="Contact" href="#contact"/>
                <ResumeLink />
            </div>

            <div className="absolute top-4 right-4 z-20">
                {/* Hamburger icon */}
                <div className="md:flex lg:hidden w-6 h-8 cursor-pointer" onClick={toggleMenu}>
                    <div>
                        <div className="h-1 w-6 bg-orange-500 mb-1"></div>
                        <div className="h-1 w-6 bg-orange-500 mb-1"></div>
                        <div className="h-1 w-6 bg-orange-500"></div>
                    </div>
                </div>

                {/* Hamburger dropdown menu */}
                {isMenuOpen && (
                <div className="absolute top-0 right-0 mt-12 p-5 rounded shadow-lg md:flex lg:hidden flex-col z-20">
                    <MenuItem number="01." label="About" href="#about"/>
                    <MenuItem number="02." label="Work" href="#work"/>
                    <MenuItem number="03." label="Contact" href="#contact"/>
                    <ResumeLink />
                </div>
                )}
            </div>
        </div>
    </>
  );
};


const MenuItem = ({ number, label, href }) => (
    <div className="text-white mb-4 lg:mb-0 lg:mr-6">
      <span className="text-orange-500">{number}</span>
      <a href={href} onClick={(e) => handleNavigation(e, href)} className="text-white cursor-pointer hover:text-orange-500 ml-2">{label}</a>
    </div>
  );

const ResumeLink = () => (
  <a 
    href="res/docs/Eyassu_Matthias_Resume_.pdf" 
    target="_blank"
    rel="noopener noreferrer"
    className="border border-orange-500 text-orange-500 mt-4 mr-4 lg:mt-0 lg:ml-4 px-3 py-2 hover:bg-orange-500 hover:text-white transition duration-300 rounded-md"
  >
    Resume
  </a>
);


const handleNavigation = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
};

export default Menu;
