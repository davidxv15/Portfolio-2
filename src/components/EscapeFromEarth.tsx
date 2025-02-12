import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 🔧 Game Constants (Physics & Gameplay)
const GRAVITY = 0.15; // Downward force
const THRUST = -1.5; // Upward force
const SIDE_THRUST = 1.2; // Left/Right force
const FUEL_CONSUMPTION = 0.5; // Fuel usage per thrust
const INITIAL_POSITION = { x: 200, y: 200 }; // Starting position
const GROUND_LEVEL = 500; // Where the rocket must land
const CEILING = 100; // Top boundary

// 🚀 Landing Pad Mechanics
const LANDING_PAD_X = 200; // Landing pad start position
const LANDING_PAD_WIDTH = 150; // Width of landing area
const SAFE_LANDING_SPEED = 5; // Max speed allowed for safe landing
const SAFE_HORIZONTAL_SPEED = 1.5; // Max horizontal drift for safe landing

// 💨 Environmental Factors
const WIND_FORCE = 0.02; // Wind adds slight horizontal movement
const DRAG = 0.98; // Slows horizontal velocity over time
const ROTATION_SPEED = 2; // Rotation when moving left/right
const ROTATION_RESET_SPEED = 1; // Returns to upright when idle

// 🎮 Game Mechanics
const MAX_FUEL = 100; // Maximum fuel capacity
const LANDING_BONUS = 100; // Score for a safe landing
const CRASH_PENALTY = 50; // Deducted points for a crash
const GAME_OVER_DELAY = 2000; // Delay before resetting game after crash

const EscapeFromEarth: React.FC = () => {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [fuel, setFuel] = useState(MAX_FUEL);
  const [rotation, setRotation] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const rocketRef = useRef<HTMLDivElement>(null);

  // 🚀 Handle Key Press for Movement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver || fuel <= 0) return;

      if (e.code === "Space" || e.code === "ArrowUp") {
        setVelocity((prev) => ({ ...prev, y: prev.y + THRUST }));
        setFuel((prev) => Math.max(0, prev - FUEL_CONSUMPTION));
        setGameStarted(true);
      }
      if (e.code === "ArrowLeft") {
        setVelocity((prev) => ({ ...prev, x: prev.x - SIDE_THRUST }));
        setRotation((prev) => Math.max(-15, prev - ROTATION_SPEED)); // Tilt left
      }
      if (e.code === "ArrowRight") {
        setVelocity((prev) => ({ ...prev, x: prev.x + SIDE_THRUST }));
        setRotation((prev) => Math.min(15, prev + ROTATION_SPEED)); // Tilt right
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
        setRotation((prev) => (prev < 0 ? prev + ROTATION_RESET_SPEED : prev - ROTATION_RESET_SPEED));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [fuel, gameOver]);

  // 🌍 Game Loop (Physics Engine)
  useEffect(() => {
    if (gameOver || !gameStarted) return;

    const gameLoop = setInterval(() => {
      setVelocity((prev) => ({
        x: prev.x * DRAG + WIND_FORCE * (Math.random() - 0.5), // Wind & drag
        y: prev.y + GRAVITY, // Gravity pulls down
      }));

      setPosition((prev) => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;

        // Prevent exceeding ceiling
        if (newY < CEILING) {
          newY = CEILING;
          setVelocity((v) => ({ ...v, y: 0 }));
        }

        // Prevent moving off-screen horizontally
        if (newX < 0) newX = 0;
        if (newX > window.innerWidth - 40) newX = window.innerWidth - 40;

        // 🛬 Landing Logic
        if (newY >= GROUND_LEVEL) {
          setGameOver(true);
          setVelocity({ x: 0, y: 0 });

          // Check if landed on the pad & within safe speed limits
          if (
            newX >= LANDING_PAD_X &&
            newX <= LANDING_PAD_X + LANDING_PAD_WIDTH &&
            Math.abs(velocity.x) < SAFE_HORIZONTAL_SPEED &&
            velocity.y < SAFE_LANDING_SPEED
          ) {
            setScore((prev) => prev + LANDING_BONUS);
          } else {
            setScore((prev) => Math.max(0, prev - CRASH_PENALTY));
          }

          return { x: newX, y: GROUND_LEVEL };
        }

        return { x: newX, y: newY };
      });
    }, 16);

    return () => clearInterval(gameLoop);
  }, [velocity, gameOver, gameStarted]);

  // 🔄 Restart Game
  const restartGame = () => {
    setPosition(INITIAL_POSITION);
    setVelocity({ x: 0, y: 0 });
    setFuel(MAX_FUEL);
    setRotation(0);
    setGameOver(false);
    setGameStarted(false);
  };

  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* 🌎 Ground */}
      <div className="absolute bottom-0 w-full h-20 bg-green-600"></div>

      {/* 🏁 Landing Pad */}
      <div
        className="absolute bottom-20 h-3 bg-zinc-500"
        style={{ left: `${LANDING_PAD_X}px`, width: `${LANDING_PAD_WIDTH}px` }}
      ></div>

      {/*  Rocket */}
      <motion.div
        ref={rocketRef}
        animate={{ x: position.x, y: position.y, rotate: rotation }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-16 h-24 bg-slate-500 rounded-lg flex items-center justify-center"
      >
        {/*  Thruster Effect */}
        {velocity.y < 0 && (
          <div className="absolute bottom-[-12px] w-6 h-8 bg-orange-500 rounded-md animate-pulse"></div>
        )}
      </motion.div>

      {/*  Score & Game Over */}
      <div className="absolute top-5 left-5 text-white text-lg">🔥 Fuel: {fuel.toFixed(1)}%</div>
      <div className="absolute top-5 right-5 text-white text-lg">🏆 Score: {score}</div>

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
    </div>
  );
};

export default EscapeFromEarth;
