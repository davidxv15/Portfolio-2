import * as React from "react";
import { useState } from "react";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Chat App",
      images: ["ChatApp-chatbox.png", "ChatApp-chatbox.png"],
      liveDemo: "https://chat-department.netlify.app/login",
      github: "https://github.com/davidxv15/Chat-App",
      description:
        "A real-time chat app featuring authentication, custom chat rooms, and live user presence.",
        add: "",
    },
    {
      title: "Weather Getter",
      images: ["WeatherGetterPic.png", ],
      liveDemo: "https://weathergetterapp.netlify.app/",
      github: "https://github.com/davidxv15/Weather-app-frontend",
      description:
        "A weather app providing real-time forecasts and location-based data for your favorite cities.",
    },
    {
      title: "Nutrition Calendar",
      images: ["NutritionCalendarClear2.png", ],
      liveDemo: "https://nutrition-calendar.netlify.app/",
      github: "https://github.com/davidxv15/Nutrition-Calendar2.0",
      description:
        "A calendar app for tracking daily food intake and building long-term healthy eating habits.",
    },
    {
      title: "Research: Ascensia Effect",
      images: ["AscensiaGraph.png", ],
      liveDemo: "https://doi.org/10.5281/zenodo.14920556",
      github: "https://github.com/davidxv15/Ascensia-Effect-Paper",
      description:
        "A study on the temporary surge in performance before stabilization in AI and cognition.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      className="bg-gradient-to-t from-slate-400 from-10% via-slate-100 via-50% to-sky-600 to-98% py-20 px-2"
      id="projects"
    >
      <h2 className="-scroll-mt-20 text-5xl tracking-tight font-poppins text-slate-100 text-center mb-10 mt-5 drop-shadow-lg text-shadow-subtle no-select">
        PROJECTS
      </h2>
      <hr className="w-32 mx-auto -translate-y-8 shadow-lg"></hr>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-8 max-w-screen-lg mx-auto
translate-y-2"
      >
        {projectData.map((project, index) => (
          <div
            key={index}
            className="w-[90%] space-x-4 translate-x-4 bg-gradient-to-b from-slate-100 via-slate-100 to-slate-500 shadow-lg shadow-gray-600 rounded-xl border border-slate-500 border-2 overflow-hidden transform transition duration-500 hover:justify-items-center hover:z-40"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover transform transition duration-500 hover:justify-items-center hover:z-50 object-[80%_3%]"
            />
            <div className="p-2 bg-transparent">
              {/* Project Title & Info Button */}
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <button
                  onClick={() => toggleDescription(index)}
                  className="p-2 focus:outline-none text-black hover:text-blue-500 sm:hover:text-blue-500 transition"
                >
                  ☰
                </button>
              </div>

              {/* Collapsible Description (Below Info Button) */}
              <div
                className={`mt-2 p-2 text-md text-slate-900 bg-slate-100 rounded-lg shadow-inner shadow-gray-600 transition-all duration-300 ${
                  openIndex === index
                    ? "h-auto w-[97%] opacity-100"
                    : "h-0 opacity-0 overflow-hidden"
                }`}
              >
                {project.description}
              </div>

              {/* Buttons Row */}
              <div className="flex justify-start space-x-28 mt-2">
                {/* Live Demo Button */}
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-slate-400 to-slate-200 text-slate-800 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-stone-400 shadow shadow-inner shadow-slate-700"
                >
                  {project.title === "Research: Ascensia Effect"
                    ? "Read Paper"
                    : "Visit Site"}
                </a>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 text-slate-900 px-4 py-2 rounded-xl hover:bg-gradient-to-b hover:from-slate-500 hover:to-slate-200 hover:text-slate-600 hover:shadow-inner hover:shadow-slate-700 shadow shadow-md shadow-slate-700"
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
