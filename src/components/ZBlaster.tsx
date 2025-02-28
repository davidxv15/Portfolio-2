import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_SIZE = 40;
const BULLET_SPEED = 20;
const BULLET_LIFETIME = 100;
const PLAYER_SPEED = 6;
const TARGET_RADIUS = 15;
const BULLET_RADIUS = 5;
const MAX_TARGETS = 5;
const TARGET_SPAWN_INTERVAL = 1500;
const GAME_TIME = 60;

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
    Math.hypot(bullet.x - target.x, bullet.y - target.y) < TARGET_RADIUS + BULLET_RADIUS
  );
};

const checkPlayerCollision = (player: { x: number; y: number }, target: Target) => {
  return (
    Math.hypot(player.x - target.x, player.y - target.y) < TARGET_RADIUS + PLAYER_SIZE / 2
  );
};

const ZBlaster: React.FC = () => {
  const [player, setPlayer] = useState({ x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT - PLAYER_SIZE - 10 });
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [targets, setTargets] = useState<Target[]>(Array.from({ length: MAX_TARGETS }, getRandomTarget));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [gameOver, setGameOver] = useState(false);
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (timeLeft <= 0) setGameOver(true);
    const timer = setInterval(() => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { keysPressed.current[e.key.toLowerCase()] = true; };
    const handleKeyUp = (e: KeyboardEvent) => { keysPressed.current[e.key.toLowerCase()] = false; };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const gameLoop = () => {
      setPlayer((prev) => {
        let newX = prev.x;
        let newY = prev.y;
        if (keysPressed.current["w"]) newY = Math.max(PLAYER_SIZE / 2, prev.y - PLAYER_SPEED);
        if (keysPressed.current["s"]) newY = Math.min(SCREEN_HEIGHT - PLAYER_SIZE * 0.75, prev.y + PLAYER_SPEED);
        if (keysPressed.current["a"]) newX = Math.max(PLAYER_SIZE / 2, prev.x - PLAYER_SPEED);
        if (keysPressed.current["d"]) newX = Math.min(SCREEN_WIDTH - PLAYER_SIZE * 0.75, prev.x + PLAYER_SPEED);
        return { x: newX, y: newY };
      });
      requestAnimationFrame(gameLoop);
    };
    requestAnimationFrame(gameLoop);
  }, [gameOver]);

  const handleShoot = () => {
    if (gameOver) return;
    setBullets((prev) => [...prev, { x: player.x, y: player.y - PLAYER_SIZE / 2 - 5, velocityY: -BULLET_SPEED, lifetime: BULLET_LIFETIME }]);
  };

  useEffect(() => {
    const bulletLoop = setInterval(() => {
      setBullets((prev) => prev.map((b) => ({ ...b, y: b.y + b.velocityY, lifetime: b.lifetime - 1 })).filter((b) => b.lifetime > 0));
    }, 16);
    return () => clearInterval(bulletLoop);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    setTargets((prevTargets) => prevTargets.map((target) => {
      if (!target.alive) return target;
      const hit = bullets.some((b) => checkCollision(b, target));
      if (hit) {
        setScore((prevScore) => prevScore + 1);
        return getRandomTarget();
      }
      return { ...target, y: target.y + 3 };
    }));
  }, [bullets]);

  return (
    <div className="relative w-[800px] h-[600px] bg-black border-4 border-gray-700 overflow-hidden" onClick={handleShoot}>
      <div className="absolute top-2 left-2 text-white text-lg font-bold">Score: {score}</div>
      <div className="absolute top-2 right-2 text-white text-lg font-bold">Time: {timeLeft}s</div>
      {!gameOver && (
        <motion.div animate={{ x: player.x - PLAYER_SIZE / 2, y: player.y - PLAYER_SIZE / 2 }} transition={{ ease: "linear", duration: 0.1 }} className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-blue-500" />
      )}
      {bullets.map((b, index) => (
        <motion.div key={index} animate={{ y: b.y + b.velocityY }} transition={{ ease: "linear", duration: 0.016 }} style={{ position: "absolute", left: `${b.x}px`, width: "4px", height: "15px", backgroundColor: "cyan", transformOrigin: "center" }} />
      ))}
      {gameOver && <button className="absolute inset-0 bg-gray-900 text-white p-4" onClick={() => window.location.reload()}>Restart</button>}
    </div>
  );
};

export default ZBlaster;
