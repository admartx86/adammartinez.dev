import React from 'react';
import Skills from './Skills';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import SocialMediaLinks from './SocialMediaLinks';

const Home = () => {
  return (
    <div>
      <header className="pt-5 flex flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center p-5">
          Adam Martinez
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center p-5">
          JUNIOR WEB DEVELOPER
        </h2>
      </header>
      <main>
        <section>
          <Skills />
        </section>
        <section>
          <Portfolio />
        </section>
        <section>
          <AboutMe />
        </section>
        <section>
          <Resume />
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
