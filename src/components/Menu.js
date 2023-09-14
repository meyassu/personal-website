import React, { useState, useEffect } from 'react';


const Menu = () => {
    const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    // This function is responsible for toggling the hamburger menu state.
    const toggleHamburgerMenu = (e) => {
        e.stopPropagation();
        setHamburgerMenuOpen(!isHamburgerMenuOpen);
    };

    // If you click outside the menu, it will close.
    const closeMenuOnDocumentClick = () => {
        setHamburgerMenuOpen(false);
        document.removeEventListener('click', closeMenuOnDocumentClick);
    };

    // Handle window resizing.
    const handleResize = () => {
        if (window.innerWidth > 1024) {
            setHamburgerMenuOpen(false);
        }
    };

    useEffect(() => {
        // Attach event listeners when the component mounts.
        window.addEventListener('resize', handleResize);
        if (isHamburgerMenuOpen) {
            document.addEventListener('click', closeMenuOnDocumentClick);
        }

        // Clean up the event listeners when the component unmounts.
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', closeMenuOnDocumentClick);
        };
    }, [isHamburgerMenuOpen]);

    const MenuItem = ({ number, label, href }) => (
        <div 
            className="text-white cursor-pointer mb-4 lg:mb-0 lg:mr-6"
            onClick={(e) => {
                // Stop the propagation to ensure that clicking a menu item 
                // doesn't trigger other onClick handlers up the chain.
                e.stopPropagation();

                // We'll handle the navigation within the app here.
                handleNavigation(e, href);
            }}
        >
            <span className="text-orange-500">{number}</span>
            <a href={href} className="text-white hover:text-orange-500 ml-2">{label}</a>
        </div>
    );

    const ResumeLink = () => (
        <a 
            href="res/docs/Eyassu_Matthias_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-orange-500 text-orange-500 mt-4 mb-2 mr-4 lg:mt-0 lg:ml-4 px-3 py-2 hover:bg-orange-500 hover:text-white transition duration-300 rounded-md"
            onClick={(e) => e.stopPropagation()}
        >
            Resume
        </a>
    );

    const handleNavigation = (event, targetId = null) => {
        event.preventDefault();

        if (!targetId) {
            targetId = "#landing"
        }

        // If the targetId is null or the resume link, return early.
        if (targetId.includes('res/docs')) return;



        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            if (isHamburgerMenuOpen) {
                setHamburgerMenuOpen(false);
            }
        }
    };

    return (
        <>
            {(isHamburgerMenuOpen) && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-20 backdrop-blur-md z-10"/>
            )}

            <div className="fixed cursor-pointer top-0 right-0 w-full bg-gray-900 bg-opacity-20 backdrop-blur-md h-16 z-20 flex justify-end items-center xs:bg-green-500" onClick={handleNavigation}> 
                <div className="hidden md:hidden lg:flex items-center text-sm mt-4">
                    <MenuItem number="01." label="About" href="#about" />
                    <MenuItem number="02." label="Work" href="#work" />
                    <MenuItem number="03." label="Contact" href="#contact" />
                    <ResumeLink />
                </div>

                <div className="absolute top-4 right-4 z-30">
                    <div className="md:flex lg:hidden w-6 h-8 cursor-pointer p-1">
                        <div>
                            <div className="h-1 w-6 bg-orange-500 mb-1"/>
                            <div className="h-1 w-6 bg-orange-500 mb-1"/>
                            <div className="h-1 w-6 bg-orange-500"/>
                         </div>
                    </div>

                    {isHamburgerMenuOpen && (
                    <div className="absolute top-0 right-0 mt-12 p-5 rounded shadow-lg md:flex lg:hidden flex-col z-20">
                        <MenuItem number="01." label="About" href="#about" />
                        <MenuItem number="02." label="Work" href="#work" />
                        <MenuItem number="03." label="Contact" href="#contact" />
                        <ResumeLink />
                    </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Menu;