import React from 'react';

const Work = () => {
  return (
    <div id="work" className="bg-black text-gray-200 min-h-screen flex flex-col items-start justify-start p-8">
      <div className="w-full ml-8">
          <Header number="02." text="Featured Work"/>
          <div className="flex flex-wrap -ml-8 -mt-10"> {/* justify-between */}
            <ProjectIcon 
              imageUrl="/res/images/work/project_logos/ahab.png" 
              projectName="Ahab" 
              description="Deep-learning-based object recognition and segmentation system built for an aquatic Unmanned Autonomous Vehicle (UAV). The inference model is a YOLOv5 neural network trained on images of a static obstacle course in an aquatic environment, namely the Potomac River."
              githubLink="https://github.com/meyassu/uav"
            />
            <ProjectIcon 
              imageUrl="/res/images/work/project_logos/douglas.png" 
              projectName="Douglas" 
              description="Fine-tuned GPT-2 and old-fashioned text-generating RNN trained on classic science-fiction stories for the purpose of providing the community with extremely low-resource models to experiment with in a fun context."
              githubLink="https://github.com/meyassu/douglas"
            />
            <ProjectIcon />
          </div>
      </div>
      <p className=" ml-8 text-base text-gray-300 overflow-ellipsis overflow-hidden">Note: many repositories on my Github are private due to ongoing NDAs</p>
    </div>
  );
};


export default Work;


const Header = ({ number, text }) => (
  <div className="mb-12 mt-8">
    <span className="text-xl sm:text-2xl text-orange-500">{number}</span>
    <a className="text-2xl sm:text-3xl text-gray-200 ml-2">{text}</a>
  </div>
);

const ProjectIcon = ({ imageUrl, projectName, description, githubLink }) => (
  <div className="rounded-xl border-none w-1/4 p-4 m-2 flex flex-col items-stretch">
    {/* Top half for the project image */}
    <div className="bg-gray-800 rounded-t-xl overflow-hidden flex-shrink-0">
      <img src={imageUrl} alt={projectName} className="object-cover w-full" style={{height: '200px'}}/>
    </div>

    {/* Bottom half for the text description */}
    <div className="flex-grow p-2 bg-gray-900 rounded-b-xl flex flex-col justify-between">
      <div className="mb-2">
        <h3 className="text-base text-center lg:text-left sm:text-lg text-white">{projectName}</h3>
        <p className="text-xs sm:text-sm text-gray-300 overflow-ellipsis overflow-hidden hidden lg:block">{description}</p>
      </div>

      {githubLink && 
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="self-center mt-2 group">
          {/* Regular GitHub logo */}
          <img 
            src="res/images/work/social_logos/github-logo-light-gray.png" 
            alt="GitHub" 
            className="w-6 h-6 group-hover:hidden" 
          />
          {/* GitHub logo on hover */}
          <img 
            src="res/images/work/social_logos/github-logo-orange.png" 
            alt="GitHub hover" 
            className="w-6 h-6 hidden group-hover:block" 
          />
        </a>
      }
    </div>
  </div>
);

