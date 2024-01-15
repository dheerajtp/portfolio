import React from "react";

function About() {
  return (
    <div className="lg:max-w-screen-md mx-auto p-2">
      <h1 className="text-center tracking-tighter text-4xl">
        <span className="text-pink">/</span>about
      </h1>
      <div className="md:w-2/3 mx-auto mb-2">
        <div className="relative mt-5 text-left">
          <div className="flex items-center relative">
            <div className="hidden md:block w-20">
              <div className="font-bold italic">2024</div>
              <div className="md:flex space-x-0 text-xs">
                <div>June 2022</div>
                <div>-</div>
                <div>Ongoing</div>
              </div>
            </div>

            <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
              <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
            </div>

            <div className="ml-10">
              <div className="font-bold">
                Tech Lead | MERN Stack Developer at Infinite Open Source
                Solutions
              </div>
              <div className="mb-4 mt-2 md:hidden">
                <div className="font-bold">2024</div>
                <div className="text-xs">June -2022 - Ongoing</div>
              </div>
              <div className="mb-10">
                Successfully managing a team of 4 developers consisting of
                Python, Laravel, React and Node to deliver assigned projects on
                time.Communicating with Business Analyst and Project Manager to
                successfully understand the client requirements.Delegating
                different tasks/sprints to team members effectively
              </div>
            </div>
          </div>

          <div className="flex items-center relative">
            <div className="hidden md:block w-20">
              <div className="font-bold italic">2022</div>
              <div className="md:flex space-x-0 text-xs">
                <div>April 2021</div>
                <div>-</div>
                <div>May 2022</div>
              </div>
            </div>

            <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
              <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
            </div>

            <div className="ml-10">
              <div className="font-bold">
                Junior Web Developer at XL Texhnologies
              </div>
              <div className="mb-4 mt-2 md:hidden">
                <div className="font-bold">2022</div>
                <div className="text-xs">April -2021 - May 2022</div>
              </div>
              <div className="mb-10">
                My role at XL Technologies began on April 27th 2021 as a Junior
                Web Developer. I created two web applications, Federal Exchange
                (Money Exchange) and Veta CPA (Tax Management), using the MERN
                stack. I also developed REST API's for mobile and web
                applications.
              </div>
            </div>
          </div>

          <div className="flex items-center relative">
            <div className="hidden md:block w-20">
              <div className="font-bold italic">2020</div>
              <div className="md:flex space-x-1 text-xs">
                <div>2017</div>
                <div>-</div>
                <div>2020</div>
              </div>
            </div>

            <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
              <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
            </div>

            <div className="ml-10">
              <div className="font-bold">Master Of Computer Application</div>
              <div className="italic md:mb-4">Calicut University</div>
              <div className="mb-4 mt-2 md:hidden">
                <div className="font-bold">2020</div>
                <div className="text-xs">2017 - 2020</div>
              </div>
              <div className="mb-10">
                Completed my Post Graduation In MCA from CCSIT Manjeri ( A
                Centre of Calicut University).
              </div>
            </div>
          </div>

          <div className="flex items-center relative">
            <div className="hidden md:block w-20">
              <div className="font-bold italic">2017</div>
              <div className="md:flex space-x-1 text-xs">
                <div>2014</div>
                <div>-</div>
                <div>2017</div>
              </div>
            </div>

            <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
              <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
            </div>

            <div className="ml-10">
              <div className="font-bold">Bachelor Of Computer Science</div>
              <div className="italic md:mb-4">MG University</div>
              <div className="mb-4 mt-2 md:hidden">
                <div className="font-bold">2020</div>
                <div className="text-xs">2014 - 2017</div>
              </div>
              <div className="mb-10">
                Completed my Graduation In BSc CS from Global College Calicut.
              </div>
            </div>
          </div>

          <div className="flex items-center relative">
            <div className="hidden md:block w-20">
              <div className="font-bold italic">2014</div>
              <div className="md:flex space-x-1 text-xs">
                <div>2012</div>
                <div>-</div>
                <div>2014</div>
              </div>
            </div>

            <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
              <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
            </div>

            <div className="ml-10">
              <div className="font-bold">Higher Secondary School</div>
              <div className="italic md:mb-4">Science</div>
              <div className="mb-4 mt-2 md:hidden">
                <div className="font-bold">2014</div>
                <div className="text-xs">2012 - 2014</div>
              </div>
            </div>
          </div>

          <div className="flex items-center relative">
            <div className="hidden md:block w-20">
              <div className="font-bold italic">2012</div>
              <div className="md:flex space-x-1 text-xs">
                <div>2012</div>
              </div>
            </div>

            <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
              <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
            </div>

            <div className="ml-10">
              <div className="font-bold">SSLC</div>
              <div className="mb-4 mt-2 md:hidden">
                <div className="font-bold">2012</div>
                <div className="text-xs">2012</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
