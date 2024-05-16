import React from 'react';

const Portfolio = () => {
  return (
    <div id="Portfolio" className="flex flex-col lg:text-xl">
      {/* <header className="flex justify-center items-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl p-5 self-center">Portfolio</h3>
      </header> */}

      <section className="md:w-2/3 self-center">
        <h4 className="font-bold px-5 py-2 text-center">Summit Styles</h4>
        <p className="px-5 py-2">
          An e-commerce storefront built with HTML/CSS/JavaScript, React, Tailwind CSS, Node.js/Express, MongoDB and AWS.
        </p>
        <a
          href="https://www.summitstyles.dev"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://www.summitstyles.dev
        </a>
        <a
          href="https://github.com/admartx86/summit-styles-client"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://github.com/admartx86/summit-styles-client
        </a>
        <a
          href="https://github.com/admartx86/summit-styles-server"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://github.com/admartx86/summit-styles-server
        </a>
        <figure className="flex justify-center">
          <video className="md:w-3/4 p-5 self-center" controls autoPlay muted>
            <source
              src={'https://s3.us-east-2.amazonaws.com/adammartinez.dev/summit-styles-demo-1.mp4'}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </figure>
      </section>

      <section className="md:w-2/3 self-center">
        <h4 className="font-bold px-5 py-2 text-center">Catbook</h4>
        <p className="px-5 py-2">
          A Twitter clone built with HTML/CSS/JavaScript, React, Redux, Tailwind CSS, Node.js/Express, MongoDB and AWS.
        </p>
        <a
          href="https://www.catbook.dev"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://www.catbook.dev
        </a>
        <a
          href="https://github.com/admartx86/catbook-client"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://github.com/admartx86/catbook-client
        </a>
        <a
          href="https://github.com/admartx86/catbook-server"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://github.com/admartx86/catbook-server
        </a>
        <figure className="flex justify-center">
          <video className="md:w-3/4 p-5 self-center" controls autoPlay muted>
            <source
              src={'https://s3.us-east-2.amazonaws.com/adammartinez.dev/catbook-demo-1.mp4'}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </figure>
      </section>

      <section className="md:w-2/3 self-center">
        <h4 className="font-bold px-5 py-2 text-center">Vuetube</h4>
        <p className="px-5 py-2">
          A YouTube clone built with HTML/CSS/JavaScript, Vue.js, Bootstrap, PHP/Laravel, MySQL and AWS.
        </p>
        <a
          href="https://www.vuetube.dev"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://www.vuetube.dev
        </a>
        <a
          href="https://github.com/admartx86/vuetube-client"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://github.com/admartx86/vuetube-client
        </a>
        <a
          href="https://github.com/admartx86/vuetube-server"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://github.com/admartx86/vuetube-server
        </a>
        <figure className="flex justify-center">
          <video className="md:w-3/4 p-5 self-center" controls autoPlay muted>
            <source
              src={'https://s3.us-east-2.amazonaws.com/adammartinez.dev/vuetube-demo-1.mp4'}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </figure>
      </section>

      <section className="md:w-2/3 self-center">
        <h4 className="font-bold px-5 py-2 text-center">Grab & Grow ABC Garden</h4>
        <p className="px-5 py-2">
          An original "alphabet-gardening" Windows desktop game, made in GameMaker Studio with GML scripting language.
          Played at school and home by more than 1,000 students in grades 3 and 4 in Sejong City, South Korea. 
        </p>
        <a
          href="https://wordbirdkids.com"
          target="_blank"
          className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://www.wordbirdkids.com
        </a>
      
        <figure className="flex justify-center">
          <video className="md:w-3/4 p-5 self-center" controls autoPlay muted>
            <source
              src={"https://word-bird-kids.s3.ap-northeast-2.amazonaws.com/Grab+%26+Grow+ABC+Garden+Game+Trailer.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </figure>
      </section>

    </div>
  );
};

export default Portfolio;
