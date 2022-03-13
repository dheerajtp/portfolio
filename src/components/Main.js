import React from "react";
import profile from "../media/profile-pic.png";

function Main() {
  return (
    <div className="pt-10 pl-10 pr-10 mt-10 ml-10 mr-10 bg-background">
      <div className="max-w-screen-xl lg:h-screen">
        <div className="flex flex-wrap px-4 py-32 flex-col-reverse mx-auto md:flex-row flex-1">
          <div>
            <p className="max-w-xl mt-4 sm:leading-relaxed font-bold sm:text-xl text-text">
              Hi,I'm Dheeraj, A Self Taught Fullstack developer from India,
              Kerala. Currently working as a MERN Stack Developer at XL
              Technologies. Beside code and work, I'm a film buff , an indoor
              cat. And, I love black and white a bit too much.
            </p>
            <div className="flex flex-row flex-1 gap-x-2 mt-2">
              <a
                href="https://www.github.com/dheerajtp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
                  width="32"
                  height="32"
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
              <a
                href="https://www.facebook.com/medheerajtp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg"
                  width="32"
                  height="32"
                  alt="facebook"
                />
              </a>
            </div>
          </div>
          <img
            src={profile}
            className="w-44 md:ml-40 md:mt-2"
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
