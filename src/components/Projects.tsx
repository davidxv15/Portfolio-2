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
      image: "/project2.png",
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
    <section className="bg-gradient-to-t from-blue-100 to-blue-200 py-12 px-4" id="projects">
      <h2 className="text-4xl font-league text-slate-900 text-center mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {project.title}
              </h3>
              <div className="flex justify-between">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700"
                >
                  Project Website
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700"
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
