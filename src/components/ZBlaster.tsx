import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_SIZE = 40;
const BULLET_SPEED = 40; 
const BULLET_LIFETIME = 100;
const PLAYER_SPEED = 6; 
const TARGET_RADIUS = 15;
const BULLET_RADIUS = 5;
const MAX_TARGETS = 8; 
const TARGET_SPAWN_INTERVAL = 1500; 

interface Bullet {
  x: number;
  y: number;
  velocityY: number;
  lifetime: number;
}

interface Target {
  x: number;
  y: number;
  alive: boolean;
}

const getRandomTarget = (): Target => ({
  x: Math.random() * (SCREEN_WIDTH - TARGET_RADIUS * 2) + TARGET_RADIUS,
  y: -TARGET_RADIUS * 2, // Start just off-screen
  alive: true,
});

const checkCollision = (bullet: Bullet, target: Target) => {
  return (
    Math.hypot(bullet.x - target.x, bullet.y - target.y) <
    TARGET_RADIUS + BULLET_RADIUS
  );
};

const ZBlaster: React.FC = () => {
  const [player, setPlayer] = useState({
    x: SCREEN_WIDTH / 2,
    y: SCREEN_HEIGHT - PLAYER_SIZE - 10,
  });

  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [targets, setTargets] = useState<Target[]>(Array.from({ length: MAX_TARGETS }, getRandomTarget));
  const [score, setScore] = useState(0);
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // **Player Movement**
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const gameLoop = () => {
      setPlayer((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (keysPressed.current["w"])
          newY = Math.max(PLAYER_SIZE / 2, prev.y - PLAYER_SPEED);
        if (keysPressed.current["s"])
          newY = Math.min(SCREEN_HEIGHT - PLAYER_SIZE * 0.75, prev.y + PLAYER_SPEED);
        if (keysPressed.current["a"])
          newX = Math.max(PLAYER_SIZE / 2, prev.x - PLAYER_SPEED);
        if (keysPressed.current["d"])
          newX = Math.min(SCREEN_WIDTH - PLAYER_SIZE * 0.75, prev.x + PLAYER_SPEED);

        return { x: newX, y: newY };
      });
      requestAnimationFrame(gameLoop);
    };

    requestAnimationFrame(gameLoop);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // **Shooting Mechanic**
  const handleShoot = () => {
    setBullets((prev) => [
      ...prev,
      {
        x: player.x,
        y: player.y - PLAYER_SIZE / 2 - 5, // Starts at the ship tip
        velocityY: -BULLET_SPEED,
        lifetime: BULLET_LIFETIME,
      },
    ]);
  };

  // **Move Bullets**
  useEffect(() => {
    const bulletLoop = setInterval(() => {
      setBullets((prev) =>
        prev
          .map((b) => ({
            ...b,
            y: b.y + b.velocityY,
            lifetime: b.lifetime - 1,
          }))
          .filter((b) => b.lifetime > 0) // Remove expired bullets
      );
    }, 16);

    return () => clearInterval(bulletLoop);
  }, []);

  // **Move Targets & Respawn When Destroyed**
  useEffect(() => {
    const targetLoop = setInterval(() => {
      setTargets((prevTargets) =>
        prevTargets
          .map((target) => ({
            ...target,
            y: target.y + 3, // Fall speed
            x: target.x + (Math.random() - 0.5) * 2, // Slight drift
          }))
          .filter((target) => target.y < SCREEN_HEIGHT + TARGET_RADIUS) // Remove if off-screen
      );
    }, 30);

    return () => clearInterval(targetLoop);
  }, []);

  // **Spawn New Targets at Random Times**
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      if (targets.length < MAX_TARGETS) {
        setTargets((prev) => [...prev, getRandomTarget()]);
      }
    }, TARGET_SPAWN_INTERVAL + Math.random() * 1000); // Randomized spawn delay

    return () => clearInterval(spawnInterval);
  }, [targets]);

  // **Check for Bullet-Target Collisions**
  useEffect(() => {
    setTargets((prevTargets) =>
      prevTargets.map((target) => {
        if (!target.alive) return target;

        const hit = bullets.some((b) => checkCollision(b, target));

        if (hit) {
          setScore((prevScore) => prevScore + 1); // Increase score
          return getRandomTarget(); // Respawn
        }

        return target;
      })
    );
  }, [bullets]);

  return (
    <div
      className="relative w-[800px] h-[600px] bg-black border-4 border-gray-700 overflow-hidden"
      onClick={handleShoot}
    >
      {/* Game Banner */}
    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold no-select">
      Keep the Balloon in the Air! 🎈
    </div>
      {/* Score Counter */}
      <div className="absolute top-2 left-2 text-white text-lg font-bold no-select">
        Score: {score}
      </div>
      {/* Movement Instructions */}
    <div className="absolute top-12 left-2 text-white text-sm no-select">
      Move: W A S D <br />
       Air 💨 💨 : Click
    </div>


      {/* Ship */}
      <motion.div
  animate={{
    x: player.x - PLAYER_SIZE / 2,
    y: player.y - PLAYER_SIZE / 2,
  }}
  transition={{ ease: "linear", duration: 0.1 }}
  className="absolute flex items-center justify-center text-[40px] player-container"
  style={{
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
  }}
>
<div className="player-wind no-select">🌬️</div>
</motion.div>


      {/* Bullets */}
      {bullets.map((b, index) => (
        <motion.div
          key={index}
          animate={{ y: b.y + b.velocityY }}
          transition={{ ease: "linear", duration: 0.016 }}
          style={{
            position: "absolute",
            left: `${b.x}px`,
            width: "4px",
            height: "15px",
            backgroundColor: "cyan",
            transformOrigin: "center",
          }}
        />
      ))}

      {/* Targets */}
      {targets.map((target, index) =>
        target.alive ? (
          <motion.div
            key={index}
            animate={{ x: target.x, y: target.y }}
            transition={{ ease: "linear", duration: 0.1 }}
            className="absolute flex items-center justify-center text-4xl"
          >🎈</motion.div>
        ) : null
      )}
    </div>
  );
};

export default ZBlaster;
