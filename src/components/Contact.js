import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="flex flex-col p-5">
      <header className="flex justify-center items-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl p-5 self-center">Contact</h3>
      </header>

      <article className="lg:text-xl md:w-2/3 self-center">
        <p className="p-2">
          Employers and recruiters, reach out to me by phone or email and I will respond as
          soon as possible.
        </p>
        <p className="p-2">
          Thank you for your time and consideration. I look forward to hearing from you!
        </p>

        <div className="p-5">
          <div className="p-5 flex flex-col items-center">
            <p className="font-bold">phone (Google Voice)</p>{' '}
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
