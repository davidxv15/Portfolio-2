import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const GRAVITY = 0.2;
const THRUST = -5;
const FUEL_CONSUMPTION = 1;
const INITIAL_POSITION = 400; // Start higher in the viewport
const GROUND_LEVEL = 500; // Landing pad
const CEILING = 50; // Rocket boundary

const EscapeFromEarth: React.FC = () => {
  const [position, setPosition] = useState(GROUND_LEVEL);
  const [velocity, setVelocity] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [thrusterActive, setThrusterActive] = useState(false);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      if (e.code === "Space" || e.code === "ArrowUp") {
        if (fuel > 0) {
          setVelocity((prev) => prev + THRUST);
          setFuel((prev) => Math.max(0, prev - FUEL_CONSUMPTION));
          setGameStarted(true);
          setThrusterActive(true);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        setThrusterActive(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [fuel, gameOver]);

  useEffect(() => {
    if (gameOver || !gameStarted) return;

    const gameLoop = setInterval(() => {
      setVelocity((prev) => prev + GRAVITY);
      setPosition((prev) => {
        let newPos = prev + velocity;

        // **🚀 Prevent going past the top ceiling**
        if (newPos < CEILING) {
          newPos = CEILING;
          setVelocity(0);
        }

        // **🛑 Prevent falling through the ground**
        if (newPos >= GROUND_LEVEL) {
          setGameOver(true);
          setThrusterActive(false);
          return GROUND_LEVEL;
        }

        return newPos;
      });
    }, 16); // ~60 FPS

    return () => clearInterval(gameLoop);
  }, [velocity, gameOver, gameStarted]);

  const restartGame = () => {
    setPosition(GROUND_LEVEL);
    setVelocity(0);
    setFuel(100);
    setGameOver(false);
    setGameStarted(false);
  };

  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* 🌎 Earth (ground) */}
      <div className="absolute bottom-0 w-full h-20 bg-green-600"></div>

      {/* 🚀 Rocket */}
      <motion.div
        ref={rocketRef}
        animate={{ y: position }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute bottom-0 w-16 h-24 bg-red-500 rounded-lg flex items-center justify-center"
      >
        {/* 🔥 Thruster effect */}
        {thrusterActive && (
          <div className="absolute bottom-[-10px] w-6 h-8 bg-orange-500 rounded-md animate-pulse"></div>
        )}
      </motion.div>

      {/* 🏆 Ceiling (upper limit for gameplay) */}
      <div className="absolute top-[50px] w-full h-1 bg-white opacity-40"></div>

      {/* 🛑 Game Over Message */}
      {gameOver && (
        <div className="absolute top-10 flex flex-col items-center">
          <h2 className="text-white text-xl">🚀 Game Over!</h2>
          <button
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      )}

      {/* 🔥 Fuel Indicator */}
      <div className="absolute top-5 left-5 text-white text-lg">🔥 Fuel: {fuel.toFixed(1)}%</div>
    </div>
  );
};

export default EscapeFromEarth;
