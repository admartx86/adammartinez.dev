import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="flex flex-col p-5">
      <article className="lg:text-xl md:w-2/3 self-center">
        <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-regular text-center p-10">
          Do you have an opportunity for a junior developer? Get in touch with me.
        </h3>
        <div className="p-5">
          <div className="flex flex-col items-center">
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
