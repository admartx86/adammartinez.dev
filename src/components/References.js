import React from 'react';

const References = () => {
  return (
    <div className="p-5 ">
      <header className="flex justify-center items-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl p-5 self-center">References</h3>
      </header>

      <div className="flex md:justify-evenly flex-col md:flex-row lg:text-xl">
        <blockquote className="md:w-1/3">
          <header className="font-bold px-5 py-2">변호석 (Hoseok Pyeon)</header>
          <div className="bg-gray-200 rounded-xl p-5">
            "I was Adam's co-teacher at Hansol Elementary School at the start of the COVID-19
            pandemic. During this period, we filmed and edited numerous English class videos and
            conducted online classes. Although the students were not able to attend school, Adam's
            dedicated efforts allowed them to study English steadily, and as a result, their English
            skills improved significantly. Running online classes was a big challenge at the time,
            but Adam's active support allowed us to have a successful semester."
          </div>
        </blockquote>
        <blockquote className="md:w-1/3">
          <header className="font-bold px-5 py-2">Nathan Huff</header>
          <div className="bg-gray-200 rounded-xl p-5">
            "I hired Adam at Qorvo, twice actually. He is passionate about his work, quick to
            respond and adapt to customer needs. In addition he was highly valued among his peers as
            someone enjoyable to work with. Gladly have him back for round 3."
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default References;
