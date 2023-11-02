import React from 'react';
import Skills from './Skills'

const Home = () => {
    return (
        <div>
            <div className='p-5 flex flex-col'>
                <h1 className='text-2xl text-center p-1'>Adam Martinez</h1>
                <h1 className='text-4xl font-bold text-center p-1'>JUNIOR WEB DEVELOPER</h1>
            </div>
            <Skills />    
        </div>
    )
}

export default Home;