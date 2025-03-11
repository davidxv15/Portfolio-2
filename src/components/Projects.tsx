import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Chat App",
      image: "ChatApp-chatbox.png",
      image2: "ChatApp-chatbox.png",
      liveDemo: "https://chat-department.netlify.app/login",
      github: "https://github.com/davidxv15/Chat-App",
      description:
        "A real-time chat app featuring authentication, custom chat rooms, and live user presence.",
    },
    {
      title: "Weather Getter",
      image: "/WeatherGetterPic.png",
      liveDemo: "https://weathergetterapp.netlify.app/",
      github: "https://github.com/davidxv15/Weather-app-frontend",
      description:
        "A sleek weather app providing real-time forecasts and location-based data for your favorite cities.",
    },
    {
      title: "Nutrition Calendar",
      image: "NutritionCalendarClear2.png",
      liveDemo: "https://nutrition-calendar.netlify.app/",
      github: "https://github.com/davidxv15/Nutrition-Calendar2.0",
      description:
        "A calendar app for tracking daily food intake and building long-term healthy eating habits.",
    },
    {
      title: "Research: Ascensia Effect",
      image: "/#.png",
      liveDemo: "https://doi.org/10.5281/zenodo.14920556",
      github: "https://github.com/davidxv15",
      description:
        "A study on the temporary surge in performance before stabilization in AI and cognition.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-gradient-to-t from-slate-400 from-10% via-slate-100 via-50% to-sky-600 to-98% py-20 px-2"
      id="projects"
    >
      <h2 className="-scroll-mt-20 text-5xl tracking-tight font-poppins text-slate-100 text-center mb-10 mt-5 drop-shadow-lg text-shadow-subtle">
        PROJECTS
      </h2>
      <hr className="w-32 mx-auto -translate-y-8 shadow-lg"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-fit mx-auto translate-y-2">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-slate-100 via-slate-100 to-slate-500 shadow-lg shadow-gray-600 rounded-xl border border-slate-500 border-2 overflow-hidden transform transition duration-500 hover:justify-items-center hover:z-40"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4} // bounce back fx
            whileTap={{ scale: 1.15 }} // zoom onClick
            dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
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
      className="p-2 focus:outline-none text-gray-800 hover:text-gray-100 transition"
    >
      ☰
    </button>
  </div>

  {/* Collapsible Description (Appears Below Info Button) */}
  {openIndex === index && (
    <p className="mt-2 p-2 text-md text-slate-900 bg-slate-100 rounded-lg shadow-inner shadow-gray-500">
      {project.description}
    </p>
  )}

  {/* Buttons Row */}
  <div className="flex justify-start space-x-28 mt-2">
    {/* Live Demo Button */}
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-b from-slate-400 to-slate-200 text-slate-800 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-stone-400 shadow shadow-inner shadow-slate-700"
    >
      {project.title === "Research: Ascensia Effect" ? "Read" : "Visit Site"}
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

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
