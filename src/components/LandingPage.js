import React, { useEffect, useState, useRef } from 'react';
import Portfolio from './Portfolio';

const LandingPage = () => {
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

  const portfolioRef = useRef(null);
  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <div className="bg-black text-white min-h-screen flex flex-col justify-center relative">
        <div className="absolute top-4 right-4">
          <span>Gotta go? Grab my </span>
          <a 
            href="./res/docs/Eyassu_Matthias_Resume_.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-orange-500">
            resume
          </a>
          <span> on your way out!</span>
        </div>
        <div className={`text-left pl-16 pt-10 ${showIntro ? 'fade-in' : 'opacity-0'}`}>
          <p className="text-4xl font-bold mb-3">Hi, I'm</p>
        </div>
        <div className={`text-left pl-16 pt-0 ${showName ? 'fade-in' : 'opacity-0'}`}>
          <p className="text-7xl font-extrabold inline">Matthias</p>
          <span className="text-7xl text-orange-500" style={{ fontSize: '75px', fontWeight: '900' }}>.</span>
        </div>
        <div className={`font-urbanist-thin text-left px-16 mt-5 ${showDescription ? 'fade-in' : 'opacity-0'}`}>
          <p className="text-xl w-3/5 leading-relaxed" style={{ fontSize: '25px', lineHeight: '1.4' }}>
            A software engineer with a passion for writing powerful
            and innovative applications to solve complex problems.
          </p>
        </div>

        <div className="flex justify-center items-center cursor-pointer fixed bottom-8 inset-x-0" onClick={scrollToPortfolio}>
          <p className="text-white mr-2">Portfolio</p>
          <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl leading-none">&darr;</span>
          </div>
        </div>
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
    </div>
  );
};

export default LandingPage;