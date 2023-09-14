import React, { useEffect, useState, useRef } from 'react';
import Menu from './Menu'

import githubGray from "../../public/res/images/landing/social_logos/github-logo-light-gray.png" 
import githubOrange from "../../public/res/images/landing/social_logos/github-logo-orange.png"
import linkedinGray from "../../public/res/images/landing/social_logos/linkedin-logo-light-gray.jpeg"
import linkedinOrange from "../../public/res/images/landing/social_logos/linkedin-logo-orange.jpeg"

const Landing = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(true), 1200);
    const nameTimer = setTimeout(() => setShowName(true), 2500);
    const descriptionTimer = setTimeout(() => setShowDescription(true), 3800);


    return () => {
      clearTimeout(introTimer);
      clearTimeout(nameTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

  return (
    <div id="landing" className="flex flex-col">
      {/* Init parameters */}
      <div className="bg-black text-white min-h-screen flex flex-col justify-center relative">
        <Menu />

      {/* Social Links */}
      <div className="fixed bottom-0 right-0 pb-8 pr-8">
        <div className="flex flex-col items-end">
          <div className="flex space-x-2 mb-4"> 
            
            {/* Github */}
            <a href="https://github.com/meyassu" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <img 
                src={githubGray} 
                alt="GitHub" 
                className="w-6 h-6 group-hover:hidden" 
              />
              <img 
                src={githubOrange}
                alt="GitHub hover" 
                className="w-6 h-6 hidden group-hover:block" 
              />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/matthias-eyassu/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <img 
                src={linkedinGray}
                alt="LinkedIn" 
                className="w-6 h-6 group-hover:hidden" 
              />
              <img 
                src={linkedinOrange}
                alt="LinkedIn hover" 
                className="w-6 h-6 hidden group-hover:block" 
              />
            </a>
          </div>
          <div className="h-1/2 w-1 bg-orange-500"></div>
        </div>
      </div>

      {/* Title */}
      <div className={`text-left pl-16 pt-10 ${showIntro ? 'fade-in' : 'opacity-0'}`}>
        <p className="text-xl sm:text-2xl mb-3">Hi, I'm</p>
      </div>
        <div className={`text-left pl-16 pt-0 ${showName ? 'fade-in' : 'opacity-0'}`}>
          <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold inline">Matthias</p>
          <span className="text-8xl text-orange-500" style={{ fontSize: '75px', fontWeight: '900' }}>.</span>
        </div>
        {/* Description */}
        <div className={`pl-16 text-left px-16 mt-8 ${showDescription ? 'fade-in' : 'opacity-0'}`}>
        <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-gray-500 font-light w-3/5 leading-relaxed">
            A software engineer with experience in full-stack development and machine learning and a passion for writing
            efficient and powerful code.
        </p>

        </div>
      </div>
    </div>
  );
};



export default Landing;