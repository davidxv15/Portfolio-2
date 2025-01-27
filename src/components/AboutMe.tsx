import * as React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-t from-slate-900 from-5% via-slate-900 via-95% to-slate-400 to-99% text-zinc-200 tracking-tight py-12 h-screen px-4 sm:px-8"
      id="about"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="scroll-mt-4 text-5xl font-poppins mb-12 mt-12 translate-y-1">
          ABOUT ME
        </h2>
        <hr className="w-32 mx-auto -translate-y-9"></hr>
        <p className="text-xl leading-relaxed mb-8 indent-4 text-justify font-poppins text-slate-400">
        <span className="font-bold">Software Developer</span> with experience in problem-solving, creativity, and collaboration across diverse technical teams. I excel in building responsive web applications using <span className="font-bold">React</span> and <span className="font-bold">TypeScript</span>, consistently delivering high-quality solutions under tight deadlines. I take pride in driving projects from concept to deployment, ensuring precision and alignment with the bigger picture. 
        <br /><p className="indent-4">
        Beyond technical skills, I bring a positive attitude and a talent for creating meaningful connections between clients and brands, building relationships that inspire trust and mutual success. Currently, I am charting a path into <span className="font-bold">AI development</span>, integrating machine learning models and exploring the fusion of AI and software engineering to build transformative, intelligent systems.
{/* Driven by the belief that bold ideas deserve decisive action, I thrive on creating impactful solutions that inspire our future. */}
        </p></p>
        <p className="text-xl leading-relaxed font-poppins text-slate-400 -translate-y-1">
        Outside of coding, I enjoy creating music, model building, and constantly discovering new ideas that challenge my perspectives and fuel my curiosity.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
