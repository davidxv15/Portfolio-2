import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_SIZE = 40;
const BULLET_SPEED = 15;
const BULLET_LIFETIME = 100;
const PLAYER_SPEED = 4;
const NUM_TARGETS = 10;
const TARGET_RADIUS = 15;
const BULLET_RADIUS = 5;

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
  y: -TARGET_RADIUS * 2,
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
    y: SCREEN_HEIGHT - PLAYER_SIZE,
  });

  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [targets, setTargets] = useState<Target[]>(
    Array.from({ length: NUM_TARGETS }, getRandomTarget)
  );

  const keysPressed = useRef<{ [key: string]: boolean }>({});

  //  **Handle Player Movement**
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
          newY = Math.max(0, prev.y - PLAYER_SPEED);
        if (keysPressed.current["s"])
          newY = Math.min(SCREEN_HEIGHT - PLAYER_SIZE, prev.y + PLAYER_SPEED);
        if (keysPressed.current["a"])
          newX = Math.max(0, prev.x - PLAYER_SPEED);
        if (keysPressed.current["d"])
          newX = Math.min(SCREEN_WIDTH - PLAYER_SIZE, prev.x + PLAYER_SPEED);

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

  // **Handle Shooting**
  const handleShoot = () => {
    setBullets((prev) => [
      ...prev,
      {
        x: player.x,
        y: player.y - PLAYER_SIZE / 2 - 5, // 🚀 Exact tip of ship
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
            y: b.y + b.velocityY, // 🔥 Moves straight up, no drift
            lifetime: b.lifetime - 1,
          }))
          .filter((b) => b.lifetime > 0)
      );
    }, 16); // 60 FPS update

    return () => clearInterval(bulletLoop);
  }, []);

  //  **Check for Bullet Collision with Targets**
  // 🔥 Bullet Collision Detection & Target Destruction
useEffect(() => {
  setTargets((prevTargets) =>
    prevTargets.map((target) => {
      if (!target.alive) return target; // Skip already destroyed targets
      const hit = bullets.some((b) => checkCollision(b, target));
      return hit ? { ...target, alive: false } : target;
    })
  );

  // Remove bullets that hit a target
  setBullets((prevBullets) =>
    prevBullets.filter((b) => !targets.some((t) => t.alive && checkCollision(b, t)))
  );
}, [bullets]); // Runs every time bullets are updated


  return (
    <div
      className="relative w-[800px] h-[600px] bg-black border-4 border-gray-700 overflow-hidden"
      onClick={handleShoot}
    >
      {/*  Ship */}
      <motion.div
        animate={{
          x: player.x - PLAYER_SIZE / 2,
          y: player.y - PLAYER_SIZE / 2,
        }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-blue-500"
      />

      {/*  Bullets (Now Perfectly Aligned) */}
      {bullets.map((b, index) => (
        <motion.div
          key={index}
          initial={{ y: b.y }}
          animate={{ y: b.y + b.velocityY }} // 🔥 Strictly up, no offset
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

      {/*  Targets */}
      {targets.map((target, index) =>
        target.alive ? (
          <motion.div
            key={index}
            animate={{ x: target.x, y: target.y }}
            transition={{ ease: "linear", duration: 0.1 }}
            className="absolute w-[30px] h-[30px] bg-red-500 rounded-full"
          />
        ) : null
      )}
    </div>
  );
};

export default ZBlaster;
