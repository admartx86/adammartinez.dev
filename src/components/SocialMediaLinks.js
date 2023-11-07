import React from 'react';

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col items-center p-5">
        <a href="https://github.com/admartx86" target="_blank">
          <img
            src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/GitHub.png"
            alt="GitHub"
            title="GitHub"
            className="w-20 hover:scale-110 transition-all ease-in-out duration-200"
          />
        </a>
      </div>

      <div className="flex flex-col items-center p-5">
        <a href="https://www.twitter.com/admartx86" target="_blank">
          <img
            src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/Twitter.png"
            alt="Twitter"
            title="Twitter"
            className="w-20 hover:scale-110 transition-all ease-in-out duration-200"
          />
        </a>
      </div>

      <div className="flex flex-col items-center p-5">
        <a href="https://www.linkedin.com/in/admartx86" target="_blank">
          <img
            src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/LinkedIn.png"
            alt="LinkedIn"
            title="LinkedIn"
            className="w-20 hover:scale-110 transition-all ease-in-out duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
