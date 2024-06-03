import React from 'react';
import Portfolio from './Portfolio';
import Contact from './Contact';
import SocialMediaLinks from './SocialMediaLinks';

const Home = () => {
  return (
    <div>
      <header className="p-32 flex flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center p-10">
          Adam Martinez
        </h1>
        </div>
        <div className="flex justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center p-10">
          JUNIOR DEVELOPER
        </h2>
        </div>
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
