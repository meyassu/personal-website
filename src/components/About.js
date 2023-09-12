import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-black text-gray-200 min-h-screen flex flex-col items-start justify-start p-8">
        <div className="w-3/5 ml-6">
            <Header number="01." text="About me"/>
            <div className="text-left mt-8">

                <p className="text-gray-500 font-light w-4/5 md:text-lg" style={{ lineHeight: '1.4' }}>
                Hi! My name is Matthias Eyassu and I enjoy building software with a clear and positive societal impact. 
                I recently graduated from <Hyperlink text="George Mason University" link="https://www.gmu.edu/"/> with a 
                degree in computer science where I worked as a research assistant in the <Hyperlink text="Biomedical Imaging Laboratory" 
                link="https://bmil.bioengineering.gmu.edu/"/> on applications of deep learning to histologic disease modeling and photoacoustic 
                tomography (PAT) reconstruction under <Hyperlink text="Parag Chitnis, Ph.D" link="https://www.gmu.edu/profiles/pchitnis-0"/>. 
                In the past few years, I have also worked at various companies and organizations such as <Hyperlink text="IDEMIA" link="https://www.idemia.com/"/>, <Hyperlink text="Methuselah Foundation" link="https://www.mfoundation.org/"/>, and <Hyperlink text="AUS" link="https://www.aus.edu/"/> on 
                projects ranging from device driver development for the TSA CAT-2 system to supply chain optimization and automatic ASL translation.
                </p>

                <br/>

                <p className="text-gray-500 font-light w-4/5 md:text-lg" style={{ lineHeight: '1.4' }}>
                In my free time, I play soccer for <Hyperlink text="Marauders FC" link="https://www.vamfc.org/"/> in the <Hyperlink text="EPSL" link="https://epslsoccer.com/"/>, 
                a sprawling east-coast amateur league, read old science-fiction, and hang out with my friends. 
                I also like making toy programs on a small scale; I’m currently making a tiny neural-network-based self-modifying firewall for 
                my home network called <Hyperlink text="Kirby" link="https://github.com/meyassu/kirby"/> and a pseudo-RNG whose 
                entropy is derived from videos of fire called <Hyperlink text="Ember" link="https://github.com/meyassu/ember"/>. <Hyperlink text="Quantized Llamas" link="https://huggingface.co/TheBloke"/> are also 
                shaping up to be a really exciting substrate for building cool things, so maybe this is a good direction to go in next!
                </p>

                <br/>




            </div>
        </div>

    </div>
  );
};


  
const Header = ({ number, text }) => (
    <div className="mb-12 mt-4">
      <span className="text-xl sm:text-2xl text-orange-500">{number}</span>
      <a className="text-2xl sm:text-3xl text-gray-200 ml-2">{text}</a>
    </div>
  );
  

const Hyperlink = ({text, link}) => (
     <a
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-orange-500 no-underline hover:no-underline visited:text-orange-500"
    >
        {text}
    </a>
);

const BulletPoint = ({ children }) => (
    <li className="bullet-point">
      {children}
    </li>
);


export default About;