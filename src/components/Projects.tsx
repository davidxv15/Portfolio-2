import * as React from "react";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Chat App",
      image: "/project1.png", // Replace with your actual image paths
      liveDemo: "#", // Replace with your live project URL
      github: "#", // Replace with your GitHub repository URL
    },
    {
      title: "Weather Getter",
      image: "/WeatherGetterPic.png",
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Nutrition Calendar",
      image: "/project3.png",
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Project 4",
      image: "/project4.png",
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section
      className="bg-gradient-to-t from-blue-100 to-blue-200 py-12 px-4"
      id="projects"
    >
      <h2 className="text-5xl font-league text-slate-900 text-center mb-8 mt-4">
        badges
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-emerald-400 shadow-lg shadow-gray-600 rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:justify-items-center hover:z-50 hover:place-content-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {project.title}
              </h3>
              <div className="flex justify-between">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white shadow-inner shadow shadow-gray-200 shadow"
                >
                  Visit {project.title}
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-blue-700 px-4 py-2 rounded-full hover:bg-gray-300 shadow shadow-md shadow-gray-600"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
