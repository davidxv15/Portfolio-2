import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 🚗 Car Physics
const ACCELERATION = 0.3;
const TURN_SPEED = 2.5;
const MAX_SPEED = 8;
const BRAKE_FORCE = 0.5;
const FRICTION = 0.1;

const Remote: React.FC = () => {
  const [position, setPosition] = useState({ x: 200, y: 400 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setIsMoving(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setIsMoving(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const handleSteering = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft") {
        setRotation((prev) => prev - TURN_SPEED);
      }
      if (e.code === "ArrowRight") {
        setRotation((prev) => prev + TURN_SPEED);
      }
      if (e.code === "ArrowDown") {
        setVelocity((prev) => ({
          x: prev.x * (1 - BRAKE_FORCE),
          y: prev.y * (1 - BRAKE_FORCE),
        }));
      }
    };

    window.addEventListener("keydown", handleSteering);
    return () => window.removeEventListener("keydown", handleSteering);
  }, []);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setVelocity((prev) => {
        let speed = Math.sqrt(prev.x ** 2 + prev.y ** 2);
        let angleRad = (rotation * Math.PI) / 180;

        if (isMoving && speed < MAX_SPEED) {
          return {
            x: prev.x + ACCELERATION * Math.cos(angleRad),
            y: prev.y + ACCELERATION * Math.sin(angleRad),
          };
        }

        return {
          x: prev.x * (1 - FRICTION),
          y: prev.y * (1 - FRICTION),
        };
      });

      setPosition((prev) => ({
        x: Math.min(Math.max(prev.x + velocity.x, 0), window.innerWidth - 50),
        y: Math.min(Math.max(prev.y + velocity.y, 0), window.innerHeight - 50),
      }));
    }, 16);

    return () => clearInterval(gameLoop);
  }, [isMoving, velocity, rotation]);

  return (
    <div className="relative w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* 🚗 The Car */}
      <motion.div
        ref={carRef}
        animate={{ x: position.x, y: position.y, rotate: rotation }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-16 h-24 bg-blue-500 rounded-md flex items-center justify-center"
      >
        {/* 🛞 Wheels */}
        <div className="absolute bottom-0 w-10 h-2 bg-black left-1 rounded"></div>
        <div className="absolute bottom-0 w-10 h-2 bg-black right-1 rounded"></div>
      </motion.div>

      {/* 🎮 Controls Guide */}
      <div className="absolute top-5 left-5 text-white text-lg">
        <p>Spacebar - Accelerate</p>
        <p>⬅ Steer ▶</p>
        <p>🔻 Brake</p>
      </div>
    </div>
  );
};

export default Remote;
