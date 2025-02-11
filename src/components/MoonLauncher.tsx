import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const GRAVITY = 0.2;
const THRUST = -0.6;
const FUEL_CONSUMPTION = 0.01;

const EscapeFromEarth: React.FC = () => {
  const [position, setPosition] = useState(500);
  const [velocity, setVelocity] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        if (fuel > 0) {
          setVelocity((prev) => prev + THRUST);
          setFuel((prev) => Math.max(0, prev - FUEL_CONSUMPTION));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fuel]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setVelocity((prev) => prev + GRAVITY);
      setPosition((prev) => {
        const newPos = prev + velocity;
        if (newPos > 500) {
          setGameOver(true);
          clearInterval(gameLoop);
          return 500;
        }
        return newPos;
      });
    }, 16);
    return () => clearInterval(gameLoop);
  }, [velocity]);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <motion.div
        ref={rocketRef}
        animate={{ y: position }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute bottom-0 w-16 h-24 bg-red-500 rounded-lg"
      ></motion.div>
      {gameOver && <h2 className="text-white text-xl absolute top-10">Game Over!</h2>}
      <div className="absolute top-5 left-5 text-white">Fuel: {fuel.toFixed(1)}%</div>
    </div>
  );
};

export default EscapeFromEarth;
