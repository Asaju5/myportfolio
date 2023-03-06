import React from "react";

const Services = () => {
  return (
    <div className="py-16 lg:section lg:mb-16" id="services">
      <div className="container mx-auto">
        <div className="flex items-center justify-between space-x-3">
          <div className="font-bold text-xl mr-5 md:mr-0">
            <ul>
              <li>Tailwindcss</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="font-bold text-xl ">
            <ul>
              <li>HTML</li>
              <li>Vanilla Javascript</li>
              <li>React</li>
              <li>Nextjs</li>
            </ul>
          </div>

          <div className="font-bold text-xl">
            <ul>
              <li>Nodejs</li>
              <li>Express js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
