import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PLAYER_SPEED = 10;
const BULLET_SPEED = 20;
const BULLET_LIFETIME = 8000; // 3 second
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;

interface Bullet {
  x: number;
  y: number;
  angle: number;
}

const TrailShootin: React.FC = () => {
  const [playerX, setPlayerX] = useState(SCREEN_WIDTH / 2);
  const [playerY, setPlayerY] = useState(SCREEN_HEIGHT / 2);
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const playerRef = useRef<HTMLDivElement>(null);

  // Movement keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPlayerX((prev) =>
        e.key === "a" ? Math.max(0, prev - PLAYER_SPEED) : e.key === "d" ? Math.min(SCREEN_WIDTH, prev + PLAYER_SPEED) : prev
      );
      setPlayerY((prev) =>
        e.key === "w" ? Math.max(0, prev - PLAYER_SPEED) : e.key === "s" ? Math.min(SCREEN_HEIGHT, prev + PLAYER_SPEED) : prev
      );
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Shooting bullets
  const handleShoot = (e: React.MouseEvent) => {
    const rect = (playerRef.current as HTMLDivElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    setBullets((prev) => [...prev, { x: playerX, y: playerY, angle }]);
  };

  // Move bullets
  useEffect(() => {
    const interval = setInterval(() => {
      setBullets((prev) =>
        prev
          .map((b) => ({
            ...b,
            x: b.x + Math.cos(b.angle) * BULLET_SPEED,
            y: b.y + Math.sin(b.angle) * BULLET_SPEED,
          }))
          .filter((b) => b.x > 0 && b.x < SCREEN_WIDTH && b.y > 0 && b.y < SCREEN_HEIGHT) // Remove bullets outside screen
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-[800px] h-[600px] bg-gray-900 border-4 border-gray-700 flex items-center justify-center"
      onClick={handleShoot}
    >
      {/* Player */}
      <motion.div
        ref={playerRef}
        animate={{ x: playerX, y: playerY }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
      >
        🧑‍🌾
      </motion.div>

      {/* Bullets */}
      {bullets.map((b, index) => (
        <motion.div
          key={index}
          animate={{ x: b.x, y: b.y }}
          transition={{ ease: "linear", duration: 0.1 }}
          className="absolute w-2 h-2 bg-zinc-500 rounded-full"
        />
      ))}

      {/* Obstacles */}
      <div className="absolute left-40 top-40 w-20 h-20 bg-green-800 rounded-lg"></div>
      <div className="absolute right-60 bottom-60 w-24 h-24 bg-brown-500 rounded-md"></div>
    </div>
  );
};

export default TrailShootin;
