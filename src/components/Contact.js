import React from 'react';

const Contact = ()  => {
    return(
        <div className='flex flex-col p-5'>

<h2 className='text-2xl md:text-3xl lg:text-4xl p-5 self-center'>Contact</h2>
       
       <div className='lg:text-xl md:w-2/3 self-center'>
        <p className='pt-5 pb-2 px-2'><span className='font-bold'>I'm seeking a full-time junior web developer position in Colorado.</span></p>

        <p className='p-2'>Employers and recruiters, please reach out to me by email or phone and I will respond as soon as possible.</p>

        <p className='p-2'>Feel free to ask me many questions!</p>

        <p className='p-2'>Thank you for your time and I look forward to hearing from you.</p>

       <div className='p-5'>
        <div className='flex flex-col items-center'>
      <p className='font-bold'>email</p> 
      <a href={`mailto:adammartinez6166@gmail.com`}
      className='py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
      >adammartinez6166@gmail.com</a>
        </div>
      
      <div className='p-5 flex flex-col items-center'>
      <p className='font-bold'>phone (Google Voice)</p> <a href={`tel:6125676166`}
      className='py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
      >(612) 567-6166</a>
      </div>

      </div>
    </div>
         
         <div className='flex justify-center'>
         <div className='flex flex-col items-center p-5'>
                    <a href="https://github.com/admartx86"
                    target="_blank">
                    <img
                    src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/GitHub.png"
                    alt="GitHub"
                    title="GitHub"
                    className='w-20 hover:scale-110 transition-all ease-in-out duration-200'
                    />
                    </a>
                </div>

                <div className='flex flex-col items-center p-5'>
                    <a href="https://www.twitter.com/admartx86"
                    target="_blank">
                    <img
                    src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/Twitter.png"
                    alt="Twitter"
                    title="Twitter"
                    className='w-20 hover:scale-110 transition-all ease-in-out duration-200'
                    />
                    </a>
                </div>

                <div className='flex flex-col items-center p-5'>
                    <a href="https://www.linkedin.com/in/admartx86"
                    target="_blank">
                    <img
                    src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/LinkedIn.png"
                    alt="LinkedIn"
                    title="LinkedIn"
                    className='w-20 hover:scale-110 transition-all ease-in-out duration-200'
                    />
                    </a>
                </div>
         </div>
    </div>
    )
}

export default Contact;