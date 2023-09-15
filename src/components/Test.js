import React, { useState, useEffect } from 'react';

function Test() {
  const [isSmallViewport, setIsSmallViewport] = useState(window.innerWidth <= 400);

  useEffect(() => {
    function handleResize() {
      setIsSmallViewport(window.innerWidth <= 600);
    }
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`h-screen ${isSmallViewport ? 'bg-green-500' : 'bg-blue-500'}`}>
      Test Page
    </div>
  );
}

export default Test;


<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
