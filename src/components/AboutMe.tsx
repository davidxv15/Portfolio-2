import * as React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-t from-slate-900 from-5% via-slate-900 via-95% to-slate-400 to-99% text-zinc-200 tracking-tight py-12 h-screen px-4 sm:px-8"
      id="about"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="scroll-mt-4 text-5xl font-poppins mb-12 mt-12">
          About Me
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
        <span className="font-bold">Software Developer</span> with hands-on problem-solving, creativity, and collaboration experience across diverse technical teams. I bring a strong sense of initiative, consistently transforming vision into action to deliver innovative solutions to complex challenges. My experience includes building responsive web applications with React and TypeScript, where I excel at delivering high-quality results under tight deadlines. With a laser-sharp eye for clean, maintainable code, I enjoy driving projects from conception to deployment, ensuring every detail aligns with the larger picture.

Beyond technical expertise, I excel at building personal connections and fostering professional relationships, creating an environment where collaboration and shared success thrive. Currently, I am charting a path into AI development, integrating machine learning models and exploring the fusion of AI and software engineering to build transformative, intelligent systems.
Driven by the belief that bold ideas deserve decisive action, I thrive on creating impactful solutions that inspire progress.
        </p>
        <p className="text-md sm:text-xl leading-relaxed">
          Outside of coding, I love music, model building, and exploring. I’m
          always eager to learn and take on new challenges.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
