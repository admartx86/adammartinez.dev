import React from 'react';

const Contact = ()  => {
    return(
        <div className='flex flex-col p-5'>

        <h2 className='text-2xl p-5 self-center'>Contact</h2>
       
        <p className='pt-5 pb-2 px-2'>I'm located in Minnesota now but <span className='font-bold'>I'm seeking a full-time on-site or hybrid junior web development position in Colorado.</span></p>

        <p className='p-2'>Employers and recruiters, please reach out to me by email or phone and I will respond
        as soon as possible during daytime buisness hours.</p>

        <p className='p-2'>Please feel free to ask me many questions!</p>

        <p className='p-2'>Thank you for your time. I look forward to hearing from you.</p>

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
    )
}

export default Contact;