import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 🎮 Game Mechanics Constants
const ACCELERATION = 0.2; // Speed increase per frame
const FRICTION = 0.05; // Gradual slow-down
const TURN_SPEED = 6; // How fast the car turns
const MAX_SPEED = 5; // Maximum forward speed
const REVERSE_SPEED = -2; // Maximum reverse speed
const BOUNDARIES = { left: 20, right: window.innerWidth - 100 }; // Keeps car on screen

const Remote: React.FC = () => {
  // 🚗 Car State
  const [x, setX] = useState(100); // Horizontal position
  const [y, setY] = useState(500); // Vertical position
  const [rotation, setRotation] = useState(0); // Angle of the car
  const [velocity, setVelocity] = useState(0); // Speed

  // ⌨️ Handle Key Presses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        // 🚀 Accelerate forward
        setVelocity((prev) => Math.min(prev + ACCELERATION, MAX_SPEED));
      } else if (e.code === "ArrowLeft") {
        // 🔄 Turn left
        setRotation((prev) => prev - TURN_SPEED);
      } else if (e.code === "ArrowRight") {
        // 🔄 Turn right
        setRotation((prev) => prev + TURN_SPEED);
      } else if (e.code === "ArrowDown") {
        // 🚗 Reverse
        setVelocity((prev) => Math.max(prev - ACCELERATION, REVERSE_SPEED));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowDown") {
        setVelocity((prev) => Math.max(prev - FRICTION, 0)); // Slow down gradually
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // 🏁 Update Car Position
  useEffect(() => {
    const gameLoop = setInterval(() => {
      setX((prevX) => {
        // Calculate next position based on angle and velocity
        let nextX = prevX + Math.cos((rotation * Math.PI) / 180) * velocity;

        // 🚧 Keep car inside screen boundaries
        return Math.min(Math.max(nextX, BOUNDARIES.left), BOUNDARIES.right);
      });

      setY((prevY) => {
        let nextY = prevY + Math.sin((rotation * Math.PI) / 180) * velocity;
        return nextY; // Allow movement in any direction
      });

      // 🏎️ Slowly decrease speed if no acceleration
      setVelocity((prevVel) => Math.max(prevVel - FRICTION, 0));
    }, 16); // ~60 FPS

    return () => clearInterval(gameLoop);
  }, [rotation, velocity]);

  return (
    <div className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* 🏎️ Car */}
      <motion.div
        animate={{ x, y, rotate: rotation }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-24 h-12 bg-red-600 rounded-md flex items-center justify-center"
      >
        {/* 🚗 Wheels */}
        <div className="w-4 h-4 bg-black rounded-full absolute -left-3 top-2"></div>
        <div className="w-4 h-4 bg-black rounded-full absolute -left-3 bottom-2"></div>
        <div className="w-4 h-4 bg-black rounded-full absolute -right-3 top-2"></div>
        <div className="w-4 h-4 bg-black rounded-full absolute -right-3 bottom-2"></div>
      </motion.div>

      {/* 🎮 Controls */}
      <div className="absolute bottom-4 flex flex-col items-center text-lg">
        <p>Press <span className="text-yellow-400">Space</span> to accelerate</p>
        <p><span className="text-green-400">◀ Steer ▶</span> with Arrow Keys</p>
        <p className="text-blue-300">▼ Reverse</p>
      </div>
    </div>
  );
};

export default Remote;
