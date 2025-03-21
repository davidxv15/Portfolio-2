import * as React from "react";
import { useState, useEffect } from "react";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import SkillsCarousel from "./components/SkillsCarousel";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ZBlaster from "./components/ZBlaster";

const App: React.FC = () => {
  const [theme, setTheme] = useState("default");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Default check for desktop

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.className = "";
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div>
      <div className="sticky top-0 z-50 justify-between bg-opacity-0">
        <Navbar />
      </div>

     {/* Conditionally Render ThemeToggle ONLY on Desktop (md: 768px+) */}
      {isDesktop && (
        <div className="mr-auto flex justify-end font-outfit bg-blue-100 animate-fade">
          <ThemeToggle
            themes={["default", "grayscale", "sepia", "locked"]}
            onThemeChange={(theme) => handleThemeChange(theme)}
          />
        </div>
      )}

      <HeroSection />
      <SkillsCarousel tooltipText="Skills" />
      {/* <SoftSkillsCarousel /> */}
      <Projects />
      <AboutMe />
      <Contact theme={theme} />
      {/* 🛸 Conditionally Render the Game When 'default' Theme is Active */}
      {theme === "locked" && (
        <div className="mt-12 flex justify-center scale-75 md:scale-80 lg:scale-90">
          {/* <EscapeFromEarth /> */}
          <div className="w-full flex justify-center scale-75 md:scale-80 lg:scale-90">
            {/* <Remote /> */}
            {/* <TrailShootin /> */}
            <ZBlaster />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
