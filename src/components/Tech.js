import React from 'react';

const Tech = () => {
    return (
      <div id="about" className="bg-black text-gray-200 min-h-screen flex flex-col items-start justify-start p-8">
        <div className="flex space-x-5">
        <ul className="list-decimal list-inside">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <ul className="list-decimal list-inside">
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
        </ul>
        </div>
      </div>
    );
  };

export default Tech;