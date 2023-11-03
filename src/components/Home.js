import React from 'react';
import Skills from './Skills';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <div className='pt-5 flex flex-col'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center p-5'>Adam Martinez</h1>
                <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center p-5'>JUNIOR WEB DEVELOPER</h1>
            </div>
            <Skills />
            <Portfolio />
            <AboutMe />
            <Resume />
            <Contact />
        </div>
    )
}

export default Home;