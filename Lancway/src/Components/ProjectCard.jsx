import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-xs bg-black text-white rounded-2xl shadow-lg p-4 relative">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover rounded-xl"
      />
      <span className="absolute top-4 right-4 bg-blue-500 px-3 py-1 rounded-lg text-sm font-bold">
        Rs {project.price}
      </span>
      <h3 className="mt-4 text-lg font-bold">{project.name}</h3>
      <p className="text-gray-400 text-sm mt-1">{project.description}</p>
      <div className="mt-2 flex items-center">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
};

export default ProjectCard;