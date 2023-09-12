/* Scrapped */

import React, { useState } from 'react';

const Experience = () => {
  const experiences = [
    { id: 0, company: 'Methuselah Foundation', role: 'Consulting Software Engineer', description: '... content ...' },
    { id: 1, company: 'IDEMIA', role: 'Software Engineer', description: '... content ...' },
    { id: 2, company: 'National Science Foundation REU Program', role: 'Research Intern', description: '... content ...' },
    { id: 3, company: '', role: 'Software Engineer', description: '... content ...' },
  ];

  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const CompanyItem = ({ experience }) => (
    <button
      onClick={() => setSelectedExperience(experience)}
      className={`
        w-full text-center py-3 my-0 text-sm
        bg-transparent hover:bg-gray-900 hover:text-orange-500
        ${selectedExperience?.id === experience.id ? 'text-orange-500 border-orange-500' : 'text-gray-200'} 
        border-l-2 focus:outline-none
      `}
    >
      {experience.company}
    </button>
  );
  


  return (
    <div id="experience" className="bg-black text-gray-200 h-screen flex flex-col items-center justify-start p-8">
      <div className="w-4/5">
        <Header number="0.2." text="Experience"/>

        <div className="flex w-full">
          <div className="w-1/5">
            {experiences.map(exp => (
              <CompanyItem key={exp.id} experience={exp} />
            ))}
          </div>
          <div className="w-3/5 bg-transparent p-4 rounded overflow-y-auto border-0 flex items-start">
            <div className="mt-[-0.6rem]">
              <h2 className="text-xl mb-2 mt-0 leading-tight">{selectedExperience?.role}</h2>
              <p className="mt-0 leading-tight">{selectedExperience?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;


const Header = ({ number, text}) => (
  <div className="mb-12">
    <span className="text-orange-500 text-2xl">{number}</span>
    <a className="text-gray-200 text-3xl ml-2">{text}</a>
  </div>
);
