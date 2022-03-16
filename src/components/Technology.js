import React from "react";
import technologies from "../technologies.json";

function Technology() {
  return (
    <section className="mt-6 mx-auto">
      <h1 className="text-center tracking-tighter text-4xl">
        <span className="text-pink">/</span>tech-stack
      </h1>
      <p className="text-center tracking-tighter text-xl mt-2">
        Below are technologies that I have even used once.
      </p>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => {
            return (
              <div
                class="rounded-md focus-ring overflow-x-hidden transition-colors p-4 hover:bg-gray-100 items-center justify-between flex space-x-2"
                key={tech.id}
              >
                <div>
                  <h2 class="font-medium text-text truncate">{tech.name}</h2>
                </div>
                <div class="flex-shrink-0">
                  <a href={tech.link} target="_blank" rel="noreferrer">
                    <img
                      src={tech.src}
                      width="36"
                      height="36"
                      alt={tech.name}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Technology;
