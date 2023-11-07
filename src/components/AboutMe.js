import React, { useState, useEffect, useRef } from 'react';

const AboutMe = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);
  const aboutMeRef = useRef(null);

  const handleIntersection = (entries) => {
    const isAboutMeVisible = entries[0].isIntersecting;
    setIsImage1Visible(isAboutMeVisible);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // The viewport
      threshold: 1.0
    });

    // Observe the aboutMeRef
    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-col p-5">
      <div className="relative">
        <div className="absolute -mt-32" ref={aboutMeRef}></div>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl p-5 self-center">About Me</h2>

      <div className="relative w-48 h-48 md:w-64 md:h-64  bg-gray-800">
        <img
          src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/adam-1.png"
          alt="Adam 1"
          className={`w-48 h-48 md:w-64 md:h-64 transition-opacity duration-1200 ease-in-out absolute top-0 ${
            isImage1Visible ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <img
          src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/adam-2.png"
          alt="Adam 2"
          className={`w-48 h-48 md:w-64 md:h-64 transition-opacity duration-1200 ease-in-out absolute top-0 ${
            isImage1Visible ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      <div className="flex flex-col lg:text-xl md:w-2/3">
        <p className="pt-5 pb-2 px-2 flex-start">
          Hi, I'm Adam. I'm a junior web developer from the Twin Cities (Minnesota), where I'm
          currently located.{' '}
          <span className="font-bold">
            I'm seeking a full-time junior web developer position in Colorado
          </span>
          , so if you're hiring in Colorado, read on! 🙂
        </p>
        <p className="p-2">
          I graduated from the University of Minnesota - Twin Cities in 2014 with a B.A. History.
          Although I majored in history, I sampled as broadly as possible during college, studying
          mostly physical and biological sciences. I also studied Japanese language and culture for
          one semester in Chiba, Japan, in 2013.
        </p>
        <p className="p-2">
          After college, I moved to Sejong City, South Korea, where I taught elementary school
          English in Korean public schools for six years. During that time, I developed an original
          "alphabet-gardening" Windows desktop game,{' '}
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:scale-110 transition-all ease-in-out duration-200"
            href="http://www.wordbirdkids.com"
            target="_blank"
          >
            Grab & Grow ABC Garden
          </a>
          , which has been played at school and home by more than 1,000 of my students in grades 3
          and 4. I also responded to the many COVID-19 school closures, immediately and
          continuously, by developing online and hybrid lessons alongside my Korean colleagues. It
          was during this quiet period of social distancing that I began to engage in intensive,
          self-directed language learning (Korean and Japanese in parallel). As a result, I was able
          to pass TOPIK Level 2 (Test of Proficiency in Korean) and use what I learned as a language
          learner to develop improved lessons and materials—using emoji and translation directly in
          the text—to help my students use English with greater ease and confidence.
        </p>
        <p className="p-2">
          I returned home in October 2022, and by December, I began learning web development using
          free, open-source coursework, docs, articles, YouTube videos, etc. Now, I'm refactoring
          and continuing to learn on top of the small codebase that I've built while I seek a
          position that will allow me to continue doing my best work, this time, in the field of web
          development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
