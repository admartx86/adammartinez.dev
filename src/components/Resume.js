import React from 'react';

const Resume = () => {

    return(
        <div className='flex flex-col'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl p-5 self-center'>Resume</h2>
            <a 
            href="https://s3.us-east-2.amazonaws.com/adammartinez.dev/Adam+Martinez+Resume.pdf"
            className="lg:text-xl self-center p-5 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            target="_blank">
      View Resume (PDF)
            </a>
        </div>
    )
}

export default Resume