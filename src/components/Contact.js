import React from 'react';

const Contact = () => {
  const images = ["res/images/calvin-hobbes-darts.jpeg", "res/images/calvin-hobbes-tree.jpeg", "res/images/calvin-hobbes-hunting.jpeg", "res/images/calvin-hobbes-exploring.jpeg", "res/images/calvin-hobbes-thinking.jpeg"]
    return (
    <div id="contact" className="bg-black text-gray-200 min-h-screen flex flex-col justify-between p-8">
      
      {/* Existing content */}
      <div className="w-3/5 ml-8">
          <Header number="03." text="Contact me"/>
          <div className="text-left mt-10">
            <p className="text-gray-500 font-light w-4/5 md:text-lg" style={{ lineHeight: '1.4' }}>
                Feel free to connect with me on <Hyperlink text="LinkedIn" link="https://www.linkedin.com/in/matthias-eyassu/"/>, 
                send me a message via email at <Hyperlink text="matthiaseyassu@gmail.com" link="mailto:matthiaseyassu@gmail.com"/>, or
                follow me on <Hyperlink text="Github" link="https://github.com/meyassu"/>!
            </p>
        </div>
      </div>

      {/* New Image div */}
      <div className="self-center">
        <img src={images[2]} alt="Calvin/Hobbes" />
      </div>

    </div>
  );
};

export default Contact;

const Header = ({ number, text }) => (
    <div className="mb-12 mt-8">
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
