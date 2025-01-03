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
    const angleStep = 360 / softSkills.length; // Ensure even spacing
    const interval = setInterval(() => {
      setCurrentAngle((prev) => prev - angleStep); // Rotate by the calculated step
    }, 2000); // Adjust the interval time as needed
    return () => clearInterval(interval);
  }, [softSkills.length]);
  

  return (
    <section className="relative w-50% h-96 overflow-hidden bg-gradient-to-b from-sky-600 to-gray-600">
      <h2 className="text-center text-3xl text-white font-poppins mb-8">
        Soft Skills
      </h2>
      <div
        className="relative w-72 h-72 perspective"
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
