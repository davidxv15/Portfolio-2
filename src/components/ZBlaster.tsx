import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_SIZE = 40;
const BULLET_SPEED = 40; 
const BULLET_LIFETIME = 100;
const PLAYER_SPEED = 7; 
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
  const [gameStarted, setGameStarted] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

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
        y: player.y - PLAYER_SIZE / 2 - 5, // Starts at the tip
        velocityY: -BULLET_SPEED,
        lifetime: BULLET_LIFETIME,
      },
    ]);
  };

  // **Move Bullets**
  useEffect(() => {
    if (!gameStarted) return; 

    const bulletLoop = setInterval(() => {
      setBullets((prev) =>
        prev
          .map((b) => ({
            ...b,
            y: b.y + b.velocityY,
            lifetime: b.lifetime - 1,
          }))
          .filter((b) => b.lifetime > 0) 
      );
    }, 16);

    return () => clearInterval(bulletLoop);
  }, [gameStarted]);

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

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTargets(Array.from({ length: MAX_TARGETS }, getRandomTarget)); // Reset targets
    setBullets([]); // Clear bullets
  
    const audio = document.getElementById("takeFiveAudio") as HTMLAudioElement;
    
    if (audio) {
      audio.currentTime = 0; // Restart from the beginning
      audio.play().catch((error) => console.log("Audio play failed:", error));
      setIsPlaying(true); // Mark as playing
    }
  };
  
  const toggleMusic = () => {
    const audio = document.getElementById("takeFiveAudio") as HTMLAudioElement;
  
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => console.log("Audio play failed:", error));
      }
      setIsPlaying(!isPlaying); // Toggle state
    }
  };
  

  useEffect(() => {
    if (gameStarted && targets.length === 0) {
      setGameStarted(false); // Re-show start button when all balloons fall
    }
  }, [targets, gameStarted]);
  

  return (
    <div
      className="relative w-[800px] h-[600px] bg-gradient-to-b from-blue-900 via-blue-700 to-sky-500
      border-4 border-gray-400 rounded overflow-hidden"
      onClick={handleShoot}
    >
      {/* Game Banner */}
    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-gray-200 text-xl font-bold no-select">
      Keep the Balloons in the Air!
    </div>
      {/* Score Counter */}
      <div className="absolute top-2 left-2 text-gray-200 text-xl font-bold no-select">
        Score: {score}
      </div>
      {/* Movement Instructions */}
    <div className="absolute top-12 left-2 text-gray-200 text-sm no-select font-bold">
      Move: W A S D <br />
       Air 💨  : Click
    </div>
    {/* Start Game Button */}
{!gameStarted && (
  <div className="absolute inset-0 flex items-center justify-center">
    <button
      className="bg-blue-500 text-gray-100 px-12 py-6 text-2xl font-bold rounded-lg hover:bg-blue-700 transition no-select"
      onClick={startGame}
    >
      Start Game
    </button>

  </div>
)}

{gameStarted && (
  <button
    className="absolute top-6 right-6 text-5xl px-2 py-2 rounded-lg hover:bg-sky-600 transition no-select focus:outline-none"
    onClick={toggleMusic}
  >
    {isPlaying ? "⏸️" : "▶️"}
  </button>
)}


    {/* Audio Element  */}
<audio id="takeFiveAudio" src="/audio/take-five.mp3" preload="auto"></audio>


      {/* craft */}
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
            className="absolute flex items-center justify-center text-4xl no-select"
          >🎈</motion.div>
        ) : null
      )}
    </div>
  );
};

export default ZBlaster;
