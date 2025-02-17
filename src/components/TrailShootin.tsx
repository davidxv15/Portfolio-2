import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PLAYER_SPEED = 3;
const BULLET_SPEED = 8;
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;

interface Bullet {
  x: number;
  y: number;
  angle: number;
}

const TrailShootin: React.FC = () => {
  const [player, setPlayer] = useState({ x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 });
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // Handles movement
  const updatePlayerPosition = () => {
    setPlayer((prev) => {
      let newX = prev.x;
      let newY = prev.y;

      if (keysPressed.current["w"]) newY = Math.max(0, prev.y - PLAYER_SPEED);
      if (keysPressed.current["s"]) newY = Math.min(SCREEN_HEIGHT, prev.y + PLAYER_SPEED);
      if (keysPressed.current["a"]) newX = Math.max(0, prev.x - PLAYER_SPEED);
      if (keysPressed.current["d"]) newX = Math.min(SCREEN_WIDTH, prev.x + PLAYER_SPEED);

      return { x: newX, y: newY };
    });
  };

  // Key listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const gameLoop = () => {
      updatePlayerPosition();
      requestAnimationFrame(gameLoop);
    };
    gameLoop(); // Start loop

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Handles shooting
  const handleShoot = (e: React.MouseEvent) => {
    const angle = Math.atan2(e.clientY - player.y, e.clientX - player.x);
    setBullets((prev) => [...prev, { x: player.x, y: player.y, angle }]);
  };

  // Moves bullets
  useEffect(() => {
    const gameLoop = () => {
      setBullets((prev) =>
        prev
          .map((b) => ({
            ...b,
            x: b.x + Math.cos(b.angle) * BULLET_SPEED,
            y: b.y + Math.sin(b.angle) * BULLET_SPEED,
          }))
          .filter((b) => b.x > 0 && b.x < SCREEN_WIDTH && b.y > 0 && b.y < SCREEN_HEIGHT)
      );
      requestAnimationFrame(gameLoop);
    };
    gameLoop(); // Start bullet loop

    return () => {};
  }, []);

  return (
    <div
      className="relative w-[800px] h-[600px] bg-gray-900 border-4 border-gray-700 flex items-center justify-center"
      onClick={handleShoot}
    >
      {/* Player */}
      <motion.div
        animate={{ x: player.x, y: player.y }}
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
          className="absolute w-4 h-4 bg-yellow-500 rounded-full"
        />
      ))}

      {/* Obstacles */}
      <div className="absolute left-40 top-40 w-20 h-20 bg-green-700 rounded-md"></div>
      <div className="absolute right-60 bottom-60 w-24 h-24 bg-brown-700 rounded-md"></div>
    </div>
  );
};

export default TrailShootin;
