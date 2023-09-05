import React, { useEffect, useState } from 'react';

/* Landing Page */
const LandingPage = () => {
  // State variables to control when to show the elements
  const [showIntro, setShowIntro] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    // Add a delay before showing each element
    const introTimer = setTimeout(() => setShowIntro(true), 1200);  // after 0.5s
    const nameTimer = setTimeout(() => setShowName(true), 2500);  // after 1s
    const descriptionTimer = setTimeout(() => setShowDescription(true), 3800);  // after 1.5s

    // Clear timers if the component unmounts
    return () => {
      clearTimeout(introTimer);
      clearTimeout(nameTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center">
       {/* Resume link */}
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

      {/* Title */}
      <div className={`text-left pl-16 pt-10 ${showIntro ? 'fade-in' : 'opacity-0'}`}>
        <p className="text-4xl font-bold mb-3">Hi, I'm</p>
      </div>
      
      <div className={`text-left pl-16 pt-0 ${showName ? 'fade-in' : 'opacity-0'}`}>
        <p className="text-7xl font-extrabold inline">Matthias</p>
        <span className="text-7xl text-orange-500" style={{ fontSize: '75px', fontWeight: '900' }}>.</span>
      </div>

      {/* Overview */}
      <div className={`font-urbanist-thin text-left px-16 mt-5 ${showDescription ? 'fade-in' : 'opacity-0'}`}>
        <p className="text-xl w-3/5 leading-relaxed" style={{ fontSize: '25px', lineHeight: '1.4' }}>
          A software engineer with a passion for writing powerful
          and innovative applications to solve complex problems.
        </p>
      </div>

      {/* Placeholder for animated typing of interests */}
      <div className="text-left pl-16 mt-5">
        {/* We'll add the animated typing here later */}
      </div>
    </div>
  );
};

export default LandingPage;

