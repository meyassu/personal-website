import React, { useState, useEffect } from 'react';


const Menu = () => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [isViewportBlurred, setViewportBlurred] = useState(false);

  const toggleHamburgerMenu = (e) => {
    // Stop the event from propagating to the document when opening the menu
    e.stopPropagation();

    if (isHamburgerMenuOpen) {
        // If the menu is currently open, remove the event listener when closing it
        document.removeEventListener('click', closeMenuOnDocumentClick);
    } else {
        // If the menu is currently closed, add the event listener when opening it
        document.addEventListener('click', closeMenuOnDocumentClick);
    }

    setHamburgerMenuOpen(!isHamburgerMenuOpen);
};

    const closeMenuOnDocumentClick = () => {
        setHamburgerMenuOpen(false);
        document.removeEventListener('click', closeMenuOnDocumentClick);
    };


  const handleResize = () => {
    if (window.innerWidth > 1024) {
        setHamburgerMenuOpen(false); // close the hamburger menu when window resizes
    }
  };

  useEffect(() => {
    // Attach the event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', closeMenuOnDocumentClick);
    };
  }, []);  // The empty dependency array ensures this effect runs once when the component mounts, and cleanup runs when it unmounts.

  const MenuItem = ({ number, label, href }) => (
    <div className="text-white cursor-pointer mb-4 lg:mb-0 lg:mr-6"
    onClick={(e) => {
        e.stopPropagation()
        handleNavigation(e, href)} 
    }
    >
        
      <span className="text-orange-500" >{number}</span>
      <a 
        href={href}
            className="text-white hover:text-orange-500 ml-2">{label}</a>
    </div>
  );

    const ResumeLink = () => (
    <a 
        href="res/docs/Eyassu_Matthias_Resume_.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="border border-orange-500 text-orange-500 mt-4 mb-2 mr-4 lg:mt-0 lg:ml-4 px-3 py-2 hover:bg-orange-500 hover:text-white transition duration-300 rounded-md"
    >
        Resume
    </a>
    );

    const handleNavigation = (event, targetId = null) => {
        event.preventDefault();

        if(!targetId) {
            targetId = "#landing"
        }
    
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const targetTop = targetElement.offsetTop;
            const currentTop = window.scrollY;
            const isDifferentSection = Math.abs(targetTop - currentTop) > 10;
    
            if (isDifferentSection) {
                setViewportBlurred(true);
                window.scrollTo({
                    top: targetTop,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    setViewportBlurred(false);
                }, 1000); // Remove blur after 3 seconds
            }
    
            if(isHamburgerMenuOpen) {
                setHamburgerMenuOpen(false);
            }
        }
    };
    
    

  return (
    <>

        {/* Blur the entire viewport when dropdown or isViewportBlurred is true */}
        {(isHamburgerMenuOpen || isViewportBlurred) && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-20 backdrop-blur-md z-10"/>
        )}
                        
        <div className="fixed cursor-pointer top-0 right-0 w-full bg-gray-900 bg-opacity-20 backdrop-blur-md h-16 z-20 flex justify-end items-center" onClick={handleNavigation}> 
            {/* Horizontal Menu for large screens */}
            <div className="hidden md:hidden lg:flex items-center text-sm mt-4">
                <MenuItem number="01." label="About" href="#about"/>
                <MenuItem number="02." label="Work" href="#work"/>
                <MenuItem number="03." label="Contact" href="#contact"/>
                <ResumeLink />
            </div>

            <div className="absolute top-4 right-4 z-30">
                {/* Hamburger icon */}
                <div className="md:flex lg:hidden w-6 h-8 cursor-pointer" onClick={toggleHamburgerMenu}>
                    <div>
                        <div className="h-1 w-6 bg-orange-500 mb-1"></div>
                        <div className="h-1 w-6 bg-orange-500 mb-1"></div>
                        <div className="h-1 w-6 bg-orange-500"></div>
                    </div>
                </div>

                {/* Hamburger dropdown menu */}
                {isHamburgerMenuOpen && (
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


export default Menu;
