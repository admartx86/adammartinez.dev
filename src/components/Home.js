import React from 'react';
import Skills from './Skills';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import SocialMediaLinks from './SocialMediaLinks';
import References from './References';

const Home = () => {
  return (
    <div>
      <header className="pt-5 flex flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center p-5">
          Adam Martinez
        </h1>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center p-5">
          WEB DEVELOPER
        </h2>
        <div className='p-5 flex justify-center'>
        <img
              src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/magic-wand.png"
              alt="magic wand emoji"
              title="magic-wand-emoji"
              className="w-14 md:w-16 lg:w-20"
            />
             <img
              src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/top-hat.png"
              alt="top hat emoji"
              title="top-hat-emoji"
              className="w-14 md:w-16 lg:w-20"
            />
             <img
              src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/rabbit.png"
              alt="rabbit emoji"
              title="rabbit-emoji"
              className="w-14 md:w-16 lg:w-20"
            />
            </div>
        <div className='p-5 flex justify-center'>
     
        
        
        <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-regular text-center p-5">
       
            I make beautiful, user-friendly <br></br>web applications. 
        </h3>
        </div>
      </header>
      <main>
        <section>
          <Skills />
        </section>
        <section>
          <Portfolio />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <footer>
        <SocialMediaLinks />
      </footer>
    </div>
  );
};

export default Home;
