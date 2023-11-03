import React, { useState, useEffect } from 'react';

const AboutMe = () => {
    const [isImage1Visible, setIsImage1Visible] = useState(true);
    
    const handleScroll = () => {
        const threshold = 1600;
        const position = window.scrollY;
        const shouldShowImage1 = position <= threshold;
        
        // This will update the state only if the condition changes.
        if (shouldShowImage1 !== isImage1Visible) {
            setIsImage1Visible(shouldShowImage1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isImage1Visible]);

    return (
        <div className="flex justify-center items-center flex-col p-5">
            
            <h2 className='text-2xl p-5'>About Me</h2>

            <div className="relative w-48 h-48 bg-gray-800">
                <img
                    src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/adam-1.png"
                    alt="Adam 1"
                    className={`w-48 h-48 transition-opacity duration-1200 ease-in-out absolute top-0 ${isImage1Visible ? 'opacity-100' : 'opacity-0'}`}
                />
                <img
                    src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/adam-2.png"
                    alt="Adam 2"
                    className={`w-48 h-48 transition-opacity duration-1200 ease-in-out absolute top-0 ${isImage1Visible ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>
            
            
            <div className='flex flex-col'>
                <p className='pt-5 pb-2 px-2 flex-start'>Hi, I'm Adam. I'm a junior web developer currently located in my home state of Minnesota.</p>
                <p className='p-2'>I graduated from the University of Minnesota - Twin Cities in 2014 with a B.A. History. 
                Although I majored in history, I sampled as widely as possible during college, studying mostly biological and physical sciences. I also studied
                Japanese language and culture for one semester in Chiba, Japan, in 2013.
                </p>
                <p className='p-2'>
                After college, I taught elementary school English in Sejong City, South Korea, for six years, 
                where I developed an original "alphabet-gardening" Windows desktop game, <a 
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="http://www.wordbirdkids.com" target="_blank">Grab & Grow ABC Garden</a>,
                played at school and home by over 1,000 of my students in grades 3 and 4. I also responded to the COVID-19 school closures by developing fully-online and
                hybrid classroom lessons alongside my Korean colleagues. (See my resume for more.)
                </p>
                <p className='p-2'>
                    I returned home in October 2022, and by December, I began learning web development using free, 
                    open-source coursework, docs, articles, YouTube videos, etc. Now, I'm refactoring and learning on top of my 
                    existing codebase while I actively seek a matching opportunity for employment.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
