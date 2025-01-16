import * as React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-t from-slate-900 from-5% via-slate-900 via-95% to-slate-400 to-99% text-zinc-200 tracking-tight py-12 h-screen px-4 sm:px-8"
      id="about"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="scroll-mt-4 text-5xl font-poppins mb-4 mt-12">
          About Me
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          {/* Hello,👋🏼 I'm David Velasquez, a versatile professional with a diverse
          background. As a Full Stack Web Developer, I specialize in creating
          engaging and effective user experiences with a strong emphasis on
          authentic design and brand recognition. I am also passionate about
          promoting differently-abled accessibility in my work. In addition to
          my technical skills, I have a rich array of interests and experiences.
          As a musician, I am a multi-instrumentalist who enjoys singing and
          recording music. I am also a former EMT and chef, and I continue to
          contribute to my community as a volunteer. This broad range of
          interests has helped me identify new opportunities for technology to
          make a positive impact. */}
          Software Developer with hands on problem solving, creativity,
          collaboration experience on a variety of technical teams. I bring
          previous experience building responsive web applications with React
          and TypeScript, often delivering high-quality solutions under tight
          deadlines. I bring a laser sharp eye for creating clean, maintainable
          code and enjoy driving projects from conception to deployment.
        </p>
        <p className="text-md sm:text-xl leading-relaxed">
          Outside of coding, I love music and model building. I’m always eager to learn and take on
          new challenges.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
