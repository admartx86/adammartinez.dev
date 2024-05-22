import React from 'react';
import Portfolio from './Portfolio';
import Contact from './Contact';
import SocialMediaLinks from './SocialMediaLinks';

const Home = () => {
  return (
    <div>
      <header className="p-24 flex flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center p-10">
          Adam Martinez
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center p-10">
          WEB DEVELOPER
        </h2>
        <div className="p-10 flex justify-center">
          <img
            src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/keyboard.png"
            alt="keyboard emoji"
            title="keyboard-emoji"
            className="w-14 md:w-16 lg:w-20 animate-oscillate-keyboard"
          />
          <img
            src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/computer-mouse.png"
            alt="computer mouse"
            title="computer-mouse"
            className="w-14 md:w-16 lg:w-20 circle animate-circular"
          />
          <img
            src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/paintbrush.png"
            alt="paintbrush emoji"
            title="paintbrush-emoji"
            className="w-14 md:w-16 lg:w-20 animate-oscillate-x"
          />
        </div>
        <div className="p-5 flex justify-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-regular text-center p-10">
            I'm a junior developer from Minnesota. I design and develop my own software, especially
            for the web.
          </h3>
        </div>
      </header>
      <main>
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
