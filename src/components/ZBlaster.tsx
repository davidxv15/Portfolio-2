import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_SIZE = 40;
const BULLET_SPEED = 8;
const BULLET_LIFETIME = 80;
const ROTATION_SPEED = 4;
const THRUST = 0.1;
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

  const updatePlayer = () => {
    setPlayer((prev) => {
      let newVelocityX = prev.velocityX;
      let newVelocityY = prev.velocityY;
      let newAngle = prev.angle;

      if (keysPressed.current["a"]) newAngle -= ROTATION_SPEED;
      if (keysPressed.current["d"]) newAngle += ROTATION_SPEED;

      if (keysPressed.current["w"]) {
        newVelocityX += Math.cos((newAngle * Math.PI) / 180) * THRUST;
        newVelocityY += Math.sin((newAngle * Math.PI) / 180) * THRUST;
      }

      newVelocityX = Math.min(Math.max(newVelocityX, -MAX_SPEED), MAX_SPEED);
      newVelocityY = Math.min(Math.max(newVelocityY, -MAX_SPEED), MAX_SPEED);

      let newX = prev.x + newVelocityX;
      let newY = prev.y + newVelocityY;

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

  return (
    <div className="relative w-full h-[600px] bg-black border-4 border-gray-700 flex items-center justify-center" onClick={handleShoot}>
      <motion.div animate={{ x: player.x, y: player.y, rotate: player.angle }} transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-[40px] h-[40px] bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
        🚀
      </motion.div>

      {bullets.map((b, index) => (
        <motion.div key={index} animate={{ x: b.x, y: b.y }} transition={{ ease: "linear", duration: 0.05 }}
          className="absolute w-[5px] h-[5px] bg-yellow-500 rounded-full" />
      ))}
    </div>
  );
};

export default ZBlaster;
