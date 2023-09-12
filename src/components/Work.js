/*
- align text with left side just like landing page
*/

import React from 'react';

const Work = () => {
  return (
    <div id="work" className="bg-black text-gray-200 min-h-screen flex flex-col items-start justify-start p-8">
      <div className="w-full md:w-3/5 ml-6">
          <Header number="02." text="Featured Work"/>
          <div className="flex flex-wrap justify-between">
            <ProjectIcon 
              imageUrl="/res/images/uav.png" 
              projectName="Ahab" 
              description="Deep-learning-based object recognition and segmentation system built for an aquatic Unmanned Autonomous Vehicle (UAV). The inference model is a YOLOv5 neural network trained on images of a static obstacle course in an aquatic environment, namely the Potomac River."
            />
            <ProjectIcon 
              imageUrl="/res/images/rocket_b.png" 
              projectName="Douglas" 
              description="Fine-tuned GPT-2 and old-fashioned text-generating RNN trained on classic science-fiction stories for the purpose of providing the community with extremely low-resource models to experiment with in a fun context."
            />
            <ProjectIcon />
          </div>
      </div>
    </div>
  );
};


export default Work;


const Header = ({ number, text}) => (
  <div className="mb-12 mt-4 ml-5">
    <span className="text-orange-500 text-2xl">{number}</span>
    <a className="text-gray-200 text-3xl ml-2">{text}</a>
  </div>
);


const ProjectIcon = ({ imageUrl, projectName, description }) => (
  <div className="rounded-xl border border-gray-700 border-none hover:border-orange-500 w-1/4 p-4 m-2 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
    {/* Top half for the project image */}
    <div className="flex-1 bg-gray-800 rounded-t-xl overflow-hidden">
      <img src={imageUrl} alt={projectName} className="object-cover w-full h-full"/>
    </div>

    {/* Bottom half for the text description */}
    <div className="flex-1 p-2 bg-gray-900 rounded-b-xl">
      <h3 className="text-white text-lg mb-2">{projectName}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);


