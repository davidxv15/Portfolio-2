import * as React from "react";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Chat App",
      image: "ChatApp-chatbox.png", //  image paths
      liveDemo: "#", // live project URL
      github: "#", // git repo
    },
    {
      title: "Weather Getter",
      image: "/WeatherGetterPic.png",
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Nutrition Calendar",
      image: "NutritionCalPic.png",
      liveDemo: "#",
      github: "#",
    },
    {
      title: "TripCity",
      image: "/#.png",
      liveDemo: "Temporarily Closed",
      github: "#",
    },
  ];

  return (
    <section
      className="bg-gradient-to-t from-blue-500 to-blue-300 py-12 px-2"
      id="projects"
    >
      <h2 className="text-5xl tracking-tight font-league text-slate-900 text-center mb-8 mt-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-fit mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-slate-100 via-slate-100 to-slate-500 shadow-lg shadow-gray-600 rounded-xl border border-slate-500 border-2 overflow-hidden transform transition duration-500 hover:justify-items-center hover:z-40"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover transform transition duration-500 hover:justify-items-center hover:z-50 hover:place-content-center"
            />
            <div className="p-2 bg-transparent">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {project.title}
              </h3>
              <div className="flex justify-between">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-slate-400 to-slate-200 text-slate-800 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white shadow shadow-inner shadow-slate-700"
                >
                  Visit
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-slate-400 via-slate-700 to-slate-500 text-slate-200 px-4 py-2 rounded-full hover:bg-gradient-to-b hover:from-slate-500 hover:to-slate-200 hover:text-slate-600 hover:shadow-inner hover:shadow-slate-700 shadow shadow-md shadow-slate-700"
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
