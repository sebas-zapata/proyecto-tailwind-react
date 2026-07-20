import React from "react";

const SkillCard = ({ title, description }) => {
  return (
    <article className="bg-gradient-to-r from-blue-400 to-purple-600 p-6 rounded-2xl shadow-lg w-70 lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-white mb-4">{description}</p>
    </article>
  );
};

export default SkillCard;
