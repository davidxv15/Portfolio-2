import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_SIZE = 40;
const BULLET_SPEED = 8;
const BULLET_LIFETIME = 80;
const ROTATION_SPEED = 4; // Degrees per frame
const THRUST = 0.1; // Acceleration factor
const MAX_SPEED = 5;
const NUM_ASTEROIDS = 5;
const ASTEROID_SPEED = 1;

interface Bullet {
  x: number;
  y: number;
  angle: number;
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

const getRandomAsteroid = (): Asteroid => ({
  x: Math.random() * SCREEN_WIDTH,
  y: Math.random() * SCREEN_HEIGHT,
  velocityX: (Math.random() - 0.5) * ASTEROID_SPEED * 4,
  velocityY: (Math.random() - 0.5) * ASTEROID_SPEED * 4,
  size: Math.random() * 30 + 20,
});

const ZBlaster: React.FC = () => {
  const [player, setPlayer] = useState({
    x: SCREEN_WIDTH / 2,
    y: SCREEN_HEIGHT / 2,
    angle: 0,
    velocityX: 0,
    velocityY: 0,
  });

  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [asteroids, setAsteroids] = useState<Asteroid[]>(
    Array.from({ length: NUM_ASTEROIDS }, getRandomAsteroid)
  );

  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // **Handle Rotation & Movement**
  const updatePlayer = () => {
    setPlayer((prev) => {
      let newVelocityX = prev.velocityX;
      let newVelocityY = prev.velocityY;
      let newAngle = prev.angle;

      if (keysPressed.current["a"]) newAngle -= ROTATION_SPEED; // Rotate Left
      if (keysPressed.current["d"]) newAngle += ROTATION_SPEED; // Rotate Right

      if (keysPressed.current["w"]) {
        // Apply thrust in the direction the player is facing
        newVelocityX += Math.cos((newAngle * Math.PI) / 180) * THRUST;
        newVelocityY += Math.sin((newAngle * Math.PI) / 180) * THRUST;
      }

      // Limit max speed
      newVelocityX = Math.min(Math.max(newVelocityX, -MAX_SPEED), MAX_SPEED);
      newVelocityY = Math.min(Math.max(newVelocityY, -MAX_SPEED), MAX_SPEED);

      // Apply movement
      let newX = prev.x + newVelocityX;
      let newY = prev.y + newVelocityY;

      // Screen Wraparound
      if (newX < 0) newX = SCREEN_WIDTH;
      if (newX > SCREEN_WIDTH) newX = 0;
      if (newY < 0) newY = SCREEN_HEIGHT;
      if (newY > SCREEN_HEIGHT) newY = 0;

      return { x: newX, y: newY, angle: newAngle, velocityX: newVelocityX, velocityY: newVelocityY };
    });
  };

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
      updatePlayer();
      requestAnimationFrame(gameLoop);
    };
    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // **Shooting Mechanic**
  const handleShoot = () => {
    const angleRad = (player.angle * Math.PI) / 180;
    const velocityX = Math.cos(angleRad) * BULLET_SPEED;
    const velocityY = Math.sin(angleRad) * BULLET_SPEED;

    setBullets((prev) => [
      ...prev,
      { x: player.x, y: player.y, angle: player.angle, velocityX, velocityY, lifetime: BULLET_LIFETIME },
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
          .filter((b) => b.lifetime > 0)
      );
    }, 16);

    return () => clearInterval(bulletLoop);
  }, []);

  // **Asteroid Movement**
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
      onClick={handleShoot}
    >
      {/* 🚀 Player */}
      <motion.div
        animate={{ x: player.x, y: player.y, rotate: player.angle }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-[40px] h-[40px] bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
      >
        🚀
      </motion.div>

      {/* 🔫 Bullets */}
      {bullets.map((b, index) => (
        <motion.div
          key={index}
          animate={{ x: b.x, y: b.y }}
          transition={{ ease: "linear", duration: 0.05 }}
          className="absolute w-[5px] h-[5px] bg-yellow-500 rounded-full"
        />
      ))}

      {/* 🌑 Asteroids */}
      {asteroids.map((a, index) => (
        <motion.div
          key={index}
          animate={{ x: a.x, y: a.y }}
          transition={{ ease: "linear", duration: 0.1 }}
          className="absolute bg-gray-500 rounded-full"
          style={{ width: a.size, height: a.size }}
        />
      ))}

      {/* 📜 Instructions */}
      <div className="absolute top-4 left-4 text-white">
        <p>🚀 A/D to Rotate</p>
        <p>⬆ W to Thrust</p>
        <p>🔫 Click to Shoot</p>
      </div>
    </div>
  );
};

export default ZBlaster;
