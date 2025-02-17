import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 🌌 GAME SETTINGS
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_SIZE = 40;
const BULLET_SPEED = 6;
const BULLET_LIFETIME = 80;
const ROTATION_SPEED = 5; // Degrees per frame
const PLAYER_THRUST = 0.2; // Acceleration per frame
const ASTEROID_SPEED = 2;
const NUM_ASTEROIDS = 5;

interface Bullet {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  lifetime: number;
}

interface Asteroid {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  size: number;
}

const ZBlaster: React.FC = () => {
  const [player, setPlayer] = useState({ x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2, angle: 0, velocityX: 0, velocityY: 0 });
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [asteroids, setAsteroids] = useState<Asteroid[]>(() =>
    Array.from({ length: NUM_ASTEROIDS }, () => ({
      x: Math.random() * SCREEN_WIDTH,
      y: Math.random() * SCREEN_HEIGHT,
      velocityX: (Math.random() - 0.5) * ASTEROID_SPEED,
      velocityY: (Math.random() - 0.5) * ASTEROID_SPEED,
      size: Math.random() * 40 + 20, // Asteroids vary in size
    }))
  );

  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // 🎮 **Handle Player Movement & Rotation**
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
      setPlayer((prev) => {
        let newVelocityX = prev.velocityX;
        let newVelocityY = prev.velocityY;
        let newAngle = prev.angle;

        if (keysPressed.current["ArrowLeft"]) newAngle -= ROTATION_SPEED;
        if (keysPressed.current["ArrowRight"]) newAngle += ROTATION_SPEED;

        if (keysPressed.current["w"]) {
          // 🚀 Apply thrust in the direction of the angle
          newVelocityX += Math.cos((newAngle * Math.PI) / 180) * PLAYER_THRUST;
          newVelocityY += Math.sin((newAngle * Math.PI) / 180) * PLAYER_THRUST;
        }

        // 🌌 Wrap around screen
        let newX = (prev.x + newVelocityX + SCREEN_WIDTH) % SCREEN_WIDTH;
        let newY = (prev.y + newVelocityY + SCREEN_HEIGHT) % SCREEN_HEIGHT;

        return { x: newX, y: newY, angle: newAngle, velocityX: newVelocityX, velocityY: newVelocityY };
      });

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // 🔫 **Handle Shooting (SPACEBAR Fires)**
  useEffect(() => {
    const shootBullet = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setBullets((prev) => [
          ...prev,
          {
            x: player.x + PLAYER_SIZE / 2,
            y: player.y + PLAYER_SIZE / 2,
            velocityX: Math.cos((player.angle * Math.PI) / 180) * BULLET_SPEED,
            velocityY: Math.sin((player.angle * Math.PI) / 180) * BULLET_SPEED,
            lifetime: BULLET_LIFETIME,
          },
        ]);
      }
    };

    window.addEventListener("keydown", shootBullet);
    return () => window.removeEventListener("keydown", shootBullet);
  }, [player]);

  // 💨 **Move Bullets**
  useEffect(() => {
    const bulletLoop = setInterval(() => {
      setBullets((prev) =>
        prev
          .map((b) => ({
            ...b,
            x: (b.x + b.velocityX + SCREEN_WIDTH) % SCREEN_WIDTH,
            y: (b.y + b.velocityY + SCREEN_HEIGHT) % SCREEN_HEIGHT,
            lifetime: b.lifetime - 1,
          }))
          .filter((b) => b.lifetime > 0)
      );
    }, 16);

    return () => clearInterval(bulletLoop);
  }, []);

  // ☄️ **Move Asteroids**
  useEffect(() => {
    const asteroidLoop = setInterval(() => {
      setAsteroids((prev) =>
        prev.map((a) => ({
          ...a,
          x: (a.x + a.velocityX + SCREEN_WIDTH) % SCREEN_WIDTH,
          y: (a.y + a.velocityY + SCREEN_HEIGHT) % SCREEN_HEIGHT,
        }))
      );
    }, 16);

    return () => clearInterval(asteroidLoop);
  }, []);

  return (
    <div
      className="relative w-[800px] h-[600px] bg-black border-4 border-gray-700"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* 🚀 **Player (Now with rotation!)** */}
      <motion.div
        animate={{ x: player.x, y: player.y, rotate: player.angle }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-[40px] h-[40px] text-white text-xl flex items-center justify-center"
        style={{ transformOrigin: "center" }}
      >
        🚀
      </motion.div>

      {/* 🔫 **Bullets (Now Move Straight!)** */}
      {bullets.map((b, index) => (
        <motion.div
          key={index}
          animate={{ x: b.x, y: b.y }}
          transition={{ ease: "linear", duration: 0.05 }}
          className="absolute w-[6px] h-[6px] bg-yellow-500 rounded-full"
        />
      ))}

      {/* ☄️ **Asteroids (Now Move Randomly & Wrap Around!)** */}
      {asteroids.map((a, index) => (
        <motion.div
          key={index}
          animate={{ x: a.x, y: a.y }}
          transition={{ ease: "linear", duration: 0.1 }}
          className="absolute bg-gray-400 rounded-full"
          style={{ width: `${a.size}px`, height: `${a.size}px` }}
        >
          ☄️
        </motion.div>
      ))}

      {/* 📜 **Game Instructions** */}
      <div className="absolute top-4 left-4 text-white">
        <p>⬆️ W - Thrust</p>
        <p>⬅️➡️ Left/Right - Rotate</p>
        <p>🔫 Space - Shoot</p>
      </div>
    </div>
  );
};

export default ZBlaster;
