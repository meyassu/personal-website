import React from 'react';

// If you want to use a custom font like Urbanist, make sure to import it in your global CSS
// import './path/to/urbanist.css'; style={{ fontFamily: 'Urbanist' }}

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center">
      {/* Title */}
      <div className="text-left pl-16 pt-10">
        <p className="text-4xl font-bold mb-3">Hi, I'm</p> {/* Added margin-bottom */}
        <p className="text-7xl font-extrabold inline">Matthias</p>
        <span className="text-7xl text-orange-500" style={{ fontSize: '85px', fontWeight: '900' }}>.</span> {/* Added inline styles */}
      </div>

      {/* Overview */}
      <div className="font-cedarville-cursive text-left pl-16 mt-5">
        <p className="text-xl font-light w-3/5" style={{ fontSize: '25px' }}> {/* Added font-light and custom font */}
          A software engineer with a passion for reducing complex problems to their essence
          and writing efficient and robust code to solve them.
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


