import React from "react";

function SinglePet({ name, description, homepage, topics }) {
  let topic = topics.toString();
  return (
    <div className="relative w-full p-12 block border border-gray-100 shadow-xl rounded-xl">
      {topics.length > 0 && (
        <span className="absolute tracking-normal right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
          {topic}
        </span>
      )}
      <div className="mt-4 text-gray-500 sm:pr-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>

        <h5 className="mt-4 text-xl font-bold text-gray-900 tracking-normal">
          {name}
        </h5>

        <p className="mt-2 text-sm tracking-normal">{description}</p>
        {homepage && (
          <div className="flex flex-row justify-between absolute bottom-2 right-3">
            <div>
              <a href={homepage} target="_blank" rel="noreferrer">
                <p className="relative inline-block mt-6 text-sm font-bold text-indigo-600">
                  <span className="absolute inset-x-0 bottom-0 transition-transform transform bg-indigo-100 h-2/3 group-hover:scale-110"></span>
                  <span className="relative tracking-normal">Open Project</span>
                </p>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePet;
