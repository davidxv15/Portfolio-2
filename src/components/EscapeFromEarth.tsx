import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const GRAVITY = 0.15;
const THRUST = -3.5;
const SIDE_THRUST = 1.2;
const FUEL_CONSUMPTION = 0.5;
const INITIAL_POSITION = 200; // Start above the ground
const GROUND_LEVEL = 500;
const CEILING = 50;
const LANDING_PAD_X = 50;
const LANDING_PAD_WIDTH = 100;
const SAFE_LANDING_SPEED = 2;

const EscapeFromEarth: React.FC = () => {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [velocity, setVelocity] = useState(0);
  const [x, setX] = useState(0);
  const [xVelocity, setXVelocity] = useState(0);
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
      if (e.code === "ArrowLeft") setXVelocity(-SIDE_THRUST);
      if (e.code === "ArrowRight") setXVelocity(SIDE_THRUST);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") setThrusterActive(false);
      if (e.code === "ArrowLeft" || e.code === "ArrowRight") setXVelocity(0);
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
        if (newPos < CEILING) newPos = CEILING;
        if (newPos >= GROUND_LEVEL) {
          setGameOver(true);
          setThrusterActive(false);
          return GROUND_LEVEL;
        }
        return newPos;
      });

      setX((prev) => {
        let newX = prev + xVelocity;
        return Math.max(-150, Math.min(150, newX));
      });
    }, 16);

    return () => clearInterval(gameLoop);
  }, [velocity, gameOver, gameStarted, xVelocity]);

  useEffect(() => {
    if (gameOver || !gameStarted) return;

    if (
      position >= GROUND_LEVEL &&
      x > LANDING_PAD_X &&
      x < LANDING_PAD_X + LANDING_PAD_WIDTH &&
      velocity < SAFE_LANDING_SPEED
    ) {
      alert("🎉 Safe Landing! You win!");
    }
  }, [position, x, velocity, gameOver, gameStarted]);

  const restartGame = () => {
    setPosition(INITIAL_POSITION);
    setVelocity(0);
    setX(0);
    setFuel(100);
    setGameOver(false);
    setGameStarted(false);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Earth (ground) */}
      <div className="absolute bottom-0 w-full h-20 bg-green-600"></div>

      {/* Landing Pad */}
      <div className="absolute bottom-0 left-[150px] w-[100px] h-5 bg-gray-700">
        <span className="text-white text-xs block text-center">Landing</span>
      </div>

      {/* Rocket */}
      <motion.div
        ref={rocketRef}
        animate={{ x, y: position - 250 }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute bottom-0 w-16 h-24 bg-red-500 rounded-lg flex items-center justify-center"
      >
        {thrusterActive && (
          <div className="absolute bottom-[-10px] w-6 h-8 bg-orange-500 rounded-md animate-pulse"></div>
        )}
      </motion.div>

      {/* Ceiling (Top boundary) */}
      <div className="absolute top-[50px] w-full h-1 bg-white opacity-40"></div>

      {/* Game Over Message */}
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

      {/* Fuel Indicator */}
      <div className="absolute top-5 left-5 text-white text-lg">
        🔥 Fuel: {fuel.toFixed(1)}%
      </div>
    </div>
  );
};

export default EscapeFromEarth;
