import * as React from "react";
import { useEffect, useRef, useState } from "react";

const MoonLauncher: React.FC = () => {
  const [position, setPosition] = useState(50); // Rocket position (percentage from left)
  const [velocity, setVelocity] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFlying) {
      const interval = setInterval(() => {
        setVelocity((v) => Math.max(v - 0.1, 0)); // Simulate gravity
        setPosition((p) => Math.min(p + velocity, 100)); // Move rocket up
      }, 30);

      return () => clearInterval(interval);

const MoonLauncher: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Moon Escape</h2>
      <canvas id="moonCanvas" className="w-full h-64 bg-black"></canvas>
    </div>
  );
};

export default MoonLauncher;
