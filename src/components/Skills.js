import React from 'react'

const Skills = () => {
    return (
        <div className='flex flex-col p-5'>
            
            <h2 className='text-2xl py-4 px-4'>Skills</h2>

            <div className='flex justify-evenly py-2'>
                <div className='flex flex-col items-center'>
                    <img
                    src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/HTML5.png"
                    alt="HTML"
                    title="HTML"
                    className='w-14'
                    />
                    <span>HTML</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img
                    src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/CSS3.png" 
                    alt="CSS"
                    title="CSS"
                    className='w-14'
                    />
                    <span>CSS</span>
                </div>
                <div className='flex flex-col items-center overflow-visible relative'>
                    <img 
                    src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/JavaScript.png"
                    alt="JavaScript"
                    title="JavaScript"
                    className='w-14'
                    />
                    <span className='text-center absolute bottom-0'>JavaScript</span>
                </div>
            </div>
            <div className='flex justify-evenly py-4'>
                <div className='flex flex-col items-center'>
                    <img
                    src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/React.png"
                    alt="React"
                    title="React"
                    className='w-14'
                    />
                    <span>React</span>
                </div>
                <div className='flex flex-col items-center overflow-visible relative'>
                    <img src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/Tailwind CSS.png"
                    alt="Tailwind CSS"
                    title="Tailwind CSS"
                    className='w-14'
                    />
                    <span className='text-center absolute bottom-0 whitespace-nowrap'>Tailwind CSS</span>
                </div>
            </div>

            <div className='flex justify-evenly py-4'>
                <div className='flex flex-col items-center'>
                    <img src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/Node.js.png"
                    alt="Node.js" 
                    title="Node.js"
                    className='w-14'
                    />
                    <span>Node.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/Express.png"
                    alt="Express"
                    title="Express"
                    className='w-14'
                    />
                    <span>Express.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/MongoDB.png"
                    alt="MongoDB"
                    title="MongoDB"
                    className='w-14'
                    />
                    <span>MongoDB</span>
                </div>
            </div>

            <div className='flex justify-evenly py-4'>
                <div className='flex flex-col items-center'>
                    <img src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/Linux.png"
                    alt="Linux"
                    title="Linux"
                    className='w-14'
                    />
                    <span>Linux</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/Git.png"
                    alt="Git"
                    title="Git"
                    className='w-14'
                    />
                    <span>Git</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/Webpack.png"
                    alt="Webpack"
                    title="Webpack"
                    className='w-14'
                    />
                    <span>Webpack</span>
                </div>
            </div>
        </div>
    );
};


export default Skills;