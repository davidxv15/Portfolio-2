import * as React from "react";
import { useState, useEffect } from "react";

const softSkills = [
  { name: "1 Leadership", description: "Motivating teams to achieve goals." },
  {
    name: "2 Collaboration",
    description: "Working together to deliver results.",
  },
  { name: "3 Problem-Solving", description: "Finding creative solutions." },
  { name: "4 Adaptability", description: "Thriving in changing environments." },
  { name: "5 Communication", description: "Sharing ideas clearly." },
  { name: "6 Problem-Solving", description: "Finding creative solutions." },
  { name: "7 Communication", description: "Sharing ideas clearly." },
  { name: "8 Problem-Solving", description: "Finding creative solutions." },
  { name: "9 Communication", description: "Sharing ideas clearly." },
  { name: "10 Problem-Solving", description: "Finding creative solutions." },
];

const SoftSkillsCarousel: React.FC = () => {
  const [currentAngle, setCurrentAngle] = useState(0);

  useEffect(() => {
    const angleStep = 180 / softSkills.length; //even spacing based on # of skill cards
    const interval = setInterval(() => {
      setCurrentAngle((prev) => prev - angleStep); // Rotate by the calculated step
    }, 800); //interval time
    return () => clearInterval(interval);
  }, [softSkills.length]);

  return (
    <div>
    <section className="relative mx-auto w-80 h-60 bg-gradient-to-b from-sky-600 to-gray-600">
      <h2 className="text-center text-3xl text-white font-poppins mb-8">
        Soft Skills
      </h2>
      <div
        className="relative w-full h-full perspective"
        style={{
          perspective: "1000px",
          // overflow: "hidden",
        }}
      >
        <div
          className="carousel-3d mx-auto"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${currentAngle}deg)`,
            transition: "transform 3s ease-in-out",
            transformOrigin: "center",
          }}
        >
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="absolute w-44 h-32 bg-gradient-to-r from-red-500 to-sky-300 shadow-lg text-white text-center p-4 rounded-lg"
              style={{
                transform: `rotateY(${
                  index * (360 / softSkills.length)
                }deg) translateZ(350px)`,
                backfaceVisibility: "visible",
              }}
            >
              <h3 className="text-xl text-blue-100 font-bold">{skill.name}</h3>
              <p className="mt-1 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default SoftSkillsCarousel;
