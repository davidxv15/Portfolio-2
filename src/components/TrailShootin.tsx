import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 🎯 GAME SETTINGS
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_SPEED = 3;
const BULLET_SPEED = 8; // Slow down a bit for better visibility
const BULLET_LIFETIME = 60;
const ANIMAL_SPEED = 1;
const NUM_ANIMALS = 3;
const SAFE_SPAWN_DISTANCE = 100;
const PLAYER_SIZE = 50;
const ANIMAL_SIZE = 40;
const BULLET_SIZE = 8;

interface Bullet {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  lifetime: number;
}

interface Animal {
  x: number;
  y: number;
  alive: boolean;
}

// 🦌 **Ensure Animals Spawn Away from Player**
const getSafeSpawnPosition = () => {
  let x, y;
  do {
    x = Math.random() * (SCREEN_WIDTH - ANIMAL_SIZE);
    y = Math.random() * (SCREEN_HEIGHT - ANIMAL_SIZE);
  } while (Math.hypot(x - 50, y - 50) < SAFE_SPAWN_DISTANCE);
  return { x, y };
};

const TrailShootin: React.FC = () => {
  const [player, setPlayer] = useState({ x: 50, y: 50 });
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [animals, setAnimals] = useState<Animal[]>(
    Array.from({ length: NUM_ANIMALS }, () => ({ ...getSafeSpawnPosition(), alive: true }))
  );

  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // 🎮 **Handles Player Movement**
  const updatePlayerPosition = () => {
    setPlayer((prev) => {
      let newX = prev.x;
      let newY = prev.y;

      if (keysPressed.current["w"]) newY = Math.max(0, prev.y - PLAYER_SPEED);
      if (keysPressed.current["s"]) newY = Math.min(SCREEN_HEIGHT - PLAYER_SIZE, prev.y + PLAYER_SPEED);
      if (keysPressed.current["a"]) newX = Math.max(0, prev.x - PLAYER_SPEED);
      if (keysPressed.current["d"]) newX = Math.min(SCREEN_WIDTH - PLAYER_SIZE, prev.x + PLAYER_SPEED);

      return { x: newX, y: newY };
    });
  };

  // 🎮 **Handles Movement Keys**
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
    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleShoot = (e: React.MouseEvent) => {
    const gameRect = e.currentTarget.getBoundingClientRect(); // Get game container bounds
    const mouseX = e.clientX - gameRect.left; // Convert to game space
    const mouseY = e.clientY - gameRect.top;
  
    // ✅ Bullet spawns at player's center
    const playerCenterX = player.x + PLAYER_SIZE / 2;
    const playerCenterY = player.y + PLAYER_SIZE / 2;
  
    // ✅ Correct angle calculation
    const angle = Math.atan2(mouseY - playerCenterY, mouseX - playerCenterX);
  
    // ✅ Proper velocity calculation
    const velocityX = Math.cos(angle) * BULLET_SPEED;
    const velocityY = Math.sin(angle) * BULLET_SPEED;
  
    // ✅ Bullets now spawn directly at player's position
    setBullets((prev) => [
      ...prev,
      { x: playerCenterX, y: playerCenterY, velocityX, velocityY, lifetime: BULLET_LIFETIME },
    ]);
  };
  

  useEffect(() => {
    const bulletLoop = setInterval(() => {
      setBullets((prev) =>
        prev
          .map((b) => ({
            ...b,
            x: b.x + b.velocityX,
            y: b.y + b.velocityY,
            lifetime: b.lifetime - 1,
          }))
          .filter((b) => b.lifetime > 0) // Remove bullets when lifetime expires
      );
    }, 16); // ~60 FPS
  
    return () => clearInterval(bulletLoop);
  }, []);
  

  // 🦌 **Moves Animals Randomly**
  useEffect(() => {
    const moveAnimals = setInterval(() => {
      setAnimals((prev) =>
        prev.map((a) => ({
          ...a,
          x: a.alive ? Math.min(SCREEN_WIDTH - ANIMAL_SIZE, Math.max(0, a.x + (Math.random() - 0.5) * ANIMAL_SPEED * 10)) : a.x,
          y: a.alive ? Math.min(SCREEN_HEIGHT - ANIMAL_SIZE, Math.max(0, a.y + (Math.random() - 0.5) * ANIMAL_SPEED * 10)) : a.y,
        }))
      );
    }, 1000);
    return () => clearInterval(moveAnimals);
  }, []);

  return (
    <div
      className="relative w-[800px] h-[600px] bg-gray-900 border-4 border-gray-700"
      style={{ position: "relative", overflow: "hidden" }}
      onClick={handleShoot}
    >
      {/* 🎮 **Player** */}
      <motion.div
        animate={{ x: player.x, y: player.y }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-[50px] h-[50px] bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
      >
        🧑‍🌾
      </motion.div>

      {/* 🔫 **Bullets (Now Work Correctly!)** */}
      {bullets.map((b, index) => (
        <motion.div
          key={index}
          animate={{ x: b.x, y: b.y }}
          transition={{ ease: "linear", duration: 0.05 }}
          className="absolute w-[8px] h-[8px] bg-yellow-500 rounded-full"
        />
      ))}

      {/* 🦌 **Animals** */}
      {animals.map((animal, index) =>
        animal.alive ? (
          <motion.div
            key={index}
            animate={{ x: animal.x, y: animal.y }}
            transition={{ ease: "linear", duration: 0.1 }}
            className="absolute w-[40px] h-[40px] bg-green-600 rounded-full"
          >
            🦌
          </motion.div>
        ) : null
      )}

      {/* 📜 **Game Instructions** */}
      <div className="absolute top-4 left-4 text-white">
        <p>🔫 Click to Shoot</p>
        <p>🎮 WASD to Move</p>
      </div>
    </div>
  );
};

export default TrailShootin;
