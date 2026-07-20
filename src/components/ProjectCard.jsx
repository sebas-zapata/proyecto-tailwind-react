import React from "react";

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
      <div className="bg-indigo-500 p-6 rounded-xl border-1 border-solid hover:cursor-pointer border-gray-900 shadow-md transition-transform hover:scale-105 hover:shadow-xl duration-300 w-70 md:w-80 flex flex-col justify-between">
        <div>
          <h1 className="text-xl text-center font-bold text-white mb-2">
          {title}</h1>
          <p className="text-white mb-3">{description}</p>
          <span className="text-sm text-white">{technologies}</span>
        </div>
        <div>
          <hr className="my-4 border-slate-300" />
          <div className="flex justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium text-sm rounded-xl shadow-md shadow-blue-500/20 transform transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0 w-full text-center"
            >
              <span>Visitar Proyecto</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;
