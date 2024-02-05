import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="flex flex-col p-5">

      <article className="lg:text-xl md:w-2/3 self-center">

      <div className='p-5 flex justify-center'>
        <img
              src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/paintbrush.png"
              alt="paintbrush emoji"
              title="paintbrush-emoji"
              className="w-14 md:w-16 lg:w-20 animate-oscillate-x"
            />
             <img
              src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/keyboard.png"
              alt="keyboard emoji"
              title="keyboard-emoji"
              className="w-14 md:w-16 lg:w-20 animate-oscillate-keyboard"
            />
             <img
              src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/computer-mouse.png"
              alt="computer mouse"
              title="computer-mouse"
              className="w-14 md:w-16 lg:w-20 circle animate-circular"
            />
            </div>

      <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-regular text-center p-5">
       
      Tell me what you want to make and I can help you make it. 
   </h3>
        <div className="p-5">
          <div className="p-5 flex flex-col items-center">
            <p className="font-bold">phone</p>{' '}
            <a
              href={`tel:6125676166`}
              className="py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              (612) 567-6166
            </a>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">email</p>
            <a
              href={`mailto:adammartinez6166@gmail.com`}
              className="py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              adammartinez6166@gmail.com
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
