import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 🎯 GAME SETTINGS (Tweak These for Balance!)
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_SPEED = 3;
const BULLET_SPEED = 10;
const BULLET_LIFETIME = 50;
const ANIMAL_SPEED = 1;
const NUM_ANIMALS = 5;
const SAFE_SPAWN_DISTANCE = 100; // Prevents animals from spawning too close
const PLAYER_SIZE = 50;
const ANIMAL_SIZE = 40;
const BULLET_SIZE = 10;

interface Bullet {
  x: number;
  y: number;
  angle: number;
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

  // 🎮 **Handles Movement**
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
    gameLoop(); // Start loop

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // 🔫 **Handles Shooting**
  const handleShoot = (e: React.MouseEvent) => {
    const angle = Math.atan2(e.clientY - player.y, e.clientX - player.x);
    setBullets((prev) => [...prev, { x: player.x, y: player.y, angle, lifetime: BULLET_LIFETIME }]);
  };

  // 💨 **Moves Bullets**
  useEffect(() => {
    const gameLoop = () => {
      setBullets((prev) =>
        prev
          .map((b) => ({
            ...b,
            x: b.x + Math.cos(b.angle) * BULLET_SPEED,
            y: b.y + Math.sin(b.angle) * BULLET_SPEED,
            lifetime: b.lifetime - 1,
          }))
          .filter((b) => b.lifetime > 0)
      );
      requestAnimationFrame(gameLoop);
    };
    gameLoop(); // Start bullet loop

    return () => {};
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

  // 🎯 **Handles Bullet-Animal Collision**
  useEffect(() => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal) => {
        if (!animal.alive) return animal;

        return bullets.some((b) => Math.hypot(b.x - animal.x, b.y - animal.y) < 20)
          ? { ...animal, alive: false }
          : animal;
      })
    );
  }, [bullets]);

  return (
    <div
      className="relative w-[800px] h-[600px] bg-gray-900 border-4 border-gray-700"
      style={{ position: "relative", overflow: "hidden" }}
      onClick={handleShoot}
    >
      {/* 🎮 **Player (Now Properly Positioned!)** */}
      <motion.div
        animate={{ x: player.x, y: player.y }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-[50px] h-[50px] bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
      >
        🧑‍🌾
      </motion.div>

      {/* 🔫 **Bullets** */}
      {bullets.map((b, index) => (
        <motion.div
          key={index}
          animate={{ x: b.x, y: b.y }}
          transition={{ ease: "linear", duration: 0.1 }}
          className="absolute w-[10px] h-[10px] bg-yellow-500 rounded-full"
        />
      ))}

      {/* 🦌 **Animals (Now Stay Inside Boundaries!)** */}
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

      {/* 🌲 **Obstacles Properly Placed** */}
      <div className="absolute left-[200px] top-[150px] w-[50px] h-[50px] bg-green-700 rounded-md"></div>
      <div className="absolute right-[250px] bottom-[200px] w-[50px] h-[50px] bg-brown-700 rounded-md"></div>

      {/* 📜 **Game Instructions (For Better UX!)** */}
      <div className="absolute top-4 left-4 text-white">
        <p>🔫 Click to Shoot</p>
        <p>🎮 WASD to Move</p>
      </div>
    </div>
  );
};

export default TrailShootin;
