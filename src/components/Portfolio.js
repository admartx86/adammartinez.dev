import React from 'react';

const Portfolio = () => {
    return(
        <div className='flex flex-col lg:text-xl'>
             <h2 className='text-2xl md:text-3xl lg:text-4xl p-5 self-center'>Portfolio</h2>
             <div className='md:w-2/3 self-center'>
            <p className='font-bold px-5 py-2'>Summit Styles</p>
            <p className='px-5 py-2'>A simple full-stack e-commerce storefront built with React, Linode, Node.js, Express, MongoDB, and Amazon S3</p>
            
            <a href="https://www.summitstyles.dev"
    target="_blank"
    className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        Visit Summit Styles website
    </a>

    <a href="https://github.com/admart128/summit-styles-client"
    target="_blank"
    className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        View front-end source code
    </a>
    
    <a href="https://github.com/admart128/summit-styles-server"
    target="_blank"
    className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        View back-end source code
    </a>

</div>

             <video className='md:w-3/4 p-5 self-center shadow-lg' controls>
      <source src={'https://s3.us-east-2.amazonaws.com/adammartinez.dev/summit-styles-demo-1.mkv'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className='md:w-2/3 self-center'>
    <p className='font-bold px-5 py-2'>Catbook</p>
    <p className='px-5 py-2'>A simple full-stack Twitter clone built with React, Redux, Tailwind CSS, Linode, Node.js, Express, MongoDB, and Amazon S3</p>
    
    <a href="https://www.catbook.dev"
    target="_blank"
    className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        Visit Catbook website
    </a>

    <a href="https://github.com/admart128/catbook-client"
    target="_blank"
    className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        View front-end source code
    </a>
    
    <a href="https://github.com/admart128/catbook-server"
    target="_blank"
    className="block px-5 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        View back-end source code
    </a>
    </div>
    <video className='md:w-3/4 p-5 self-center shadow-lg' controls>
      <source src={'https://s3.us-east-2.amazonaws.com/adammartinez.dev/catbook-demo-1.mkv'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
    )
}

export default Portfolio;