import * as React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Chat App",
      image: "ChatApp-chatbox.png", //  image paths
      liveDemo: "https://capable-selkie-5113d6.netlify.app/", // live project URL
      github: "https://github.com/davidxv15/Chat-App", // git repo
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
      className="bg-gradient-to-t from-slate-400 from-10% via-slate-100 via-50% to-sky-600 to-98% py-20 px-2"
      id="projects"
    >
      <h2 className="-scroll-mt-20 text-5xl tracking-tight font-poppins text-slate-200 text-center mb-10 mt-5 drop-shadow-lg">
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
            dragElastic={0.2} // bounce back fx
            whileTap={{ scale: 1.05 }} // zoom onClick
            dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover transform transition duration-500 hover:justify-items-center hover:z-50 object-[80%_3%]"
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
                  className="bg-gradient-to-b from-slate-400 to-slate-200 text-slate-800 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-stone-400 shadow shadow-inner shadow-slate-700"
                >
                  Visit
                </a>
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
