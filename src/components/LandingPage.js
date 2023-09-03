import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center">
      {/* Title */}
      <div className="text-left pl-16 pt-10"> {/* Adjusted padding here */}
        <p className="text-4xl font-bold">Hi I'm</p>
        <p className="text-7xl font-extrabold inline">Matthias</p>
        <span className="text-7xl text-orange-500">.</span>
      </div>

      {/* Overview */}
      <div className="text-left pl-16 mt-5"> {/* Adjusted padding here */}
        <p className="text-xl">
          I am a software engineer specialized in full-stack development, machine learning, and more.
        </p>
      </div>

      {/* Placeholder for animated typing of interests */}
      <div className="text-left pl-16 mt-5"> {/* Adjusted padding here */}
        {/* We'll add the animated typing here later */}
      </div>
    </div>
  );
};

export default LandingPage;
