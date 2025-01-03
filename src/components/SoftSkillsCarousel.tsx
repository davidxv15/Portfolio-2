import * as React from "react";
import { useState, useEffect } from "react";

const softSkills = [
  { name: "Leadership", description: "Motivating teams to achieve goals." },
  { name: "Collaboration", description: "Working together to deliver results." },
  { name: "Problem-Solving", description: "Finding creative solutions." },
  { name: "Adaptability", description: "Thriving in changing environments." },
  { name: "Communication", description: "Sharing ideas clearly." },
  { name: "Problem-Solving", description: "Finding creative solutions." },
  { name: "Communication", description: "Sharing ideas clearly." },
  { name: "Problem-Solving", description: "Finding creative solutions." },
  { name: "Communication", description: "Sharing ideas clearly." },
  { name: "Problem-Solving", description: "Finding creative solutions." },
];

const SoftSkillsCarousel: React.FC = () => {
  const [currentAngle, setCurrentAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAngle((prev) => prev - 18); //rotate 30 degrees every 2 seconds
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-60% h-96 overflow-hidden bg-gradient-to-b from-sky-600 to-gray-600">
      <h2 className="text-center text-3xl text-white font-poppins mb-8">
        Soft Skills
      </h2>
      <div
        className="relative w-full h-72 perspective"
        style={{
          perspective: "800px",
        }}
      >
        <div
          className="carousel-3d"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${currentAngle}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="absolute w-30 h-20 bg-gradient-to-r from-red-500 to-sky-300 shadow-lg text-white text-center p-4 rounded-lg"
              style={{
                transform: `rotateY(${index * 72}deg) translateZ(300px)`,
                backfaceVisibility: "hidden",
              }}
            >
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <p className="mt-2 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsCarousel;
