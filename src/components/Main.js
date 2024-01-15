import React from "react";
import profile from "../media/profile-pic.png";

function Main() {
  return (
    <div className="pl-10 pr-10 mt-10 ml-10 mr-10 bg-background">
      <div className="max-w-screen-xl lg:h-screen">
        <div className="flex flex-wrap px-4 py-32 flex-col-reverse mx-auto lg:flex-row flex-1">
          <div>
            <p className="max-w-xl mt-4 sm:leading-relaxed font-bold sm:text-xl text-text">
              Greetings! I'm Dheeraj, a self-taught Fullstack developer
              from Kerala, India. Presently, I work as a
              Tech Lead and MERN Stack developer at Infinite Open Source
              Solutions.
              Beyond coding, I'm an avid film enthusiast and an indoor cat.
              Plus, I love black and white a bit too much.
            </p>
            <div className="flex flex-row flex-1 gap-x-2 justify-evenly mt-4">
              <a
                href="https://www.github.com/dheerajtp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
                  width="32"
                  height="42"
                  alt="github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/dheerajtp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
                  width="32"
                  height="32"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://www.twitter.com/dheerajtp3"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
                  width="32"
                  height="32"
                  alt="twitter"
                />
              </a>
              <a
                href="http://www.instagram.com/dheerajtp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
                  width="32"
                  height="32"
                  alt="instagram"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/dheerajtp/portfolio/raw/main/src/media/Dheeraj's%20Resume.pdf"
                className="mt-2 bg-white rounded-lg p-4 shadow-lg font-medium text-grey-lightest"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
          <img
            src={profile}
            className="w-60 md:ml-40 md:mt-2"
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
