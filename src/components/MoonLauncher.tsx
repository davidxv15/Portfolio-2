import * as React from "react";
import { useEffect, useRef, useState } from "react";

const MoonLauncher: React.FC = () => {
  const [position, setPosition] = useState(50); // Rocket position (percentage from left)
  const [velocity, setVelocity] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFlying) {
      const interval = setInterval(() => {
        setVelocity((v) => Math.max(v - 0.1, 0)); // Simulate gravity
        setPosition((p) => Math.min(p + velocity, 100)); // Move rocket up
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isFlying, velocity]);

  const launchRocket = () => {
    if (!isFlying) {
      setIsFlying(true);
      setVelocity(2); // Initial launch speed
    }
  };

  return (
    <div ref={gameRef} className="relative w-full h-64 bg-black rounded-lg flex flex-col items-center justify-center mt-8">
      <div className="text-white mb-2">Click the button to launch the rocket!</div>
      <div
        className="absolute w-10 h-16 bg-gray-400 rounded-lg"
        style={{
          bottom: `${position}%`,
          left: "50%",
          transform: "translateX(-50%)",
          transition: "bottom 0.05s linear",
        }}
      >
        🚀
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={launchRocket}
      >
        Launch Rocket
      </button>
    </div>
  );
};

export default MoonLauncher;
