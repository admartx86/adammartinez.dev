import React from 'react';
import Skills from './Skills';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Resume from './Resume';

const Home = () => {
    return (
        <div>
            <div className='pt-5 flex flex-col'>
                <h1 className='text-2xl text-center p-5'>Adam Martinez</h1>
                <h1 className='text-4xl font-bold text-center p-5'>JUNIOR WEB DEVELOPER</h1>
            </div>
            <Skills />
            <Portfolio />
            <AboutMe />
            <Resume />
        </div>
    )
}

export default Home;