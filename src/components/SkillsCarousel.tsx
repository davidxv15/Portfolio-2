import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: "CSS", src: "ReactLogo.png" },
  { name: "Django", src: "ReactLogo.png" },
  { name: "Express.js", src: "/path-to-logo/express.png" },
  { name: "Figma", src: "/path-to-logo/typescript.png" },
  { name: "Git", src: "/path-to-logo/tailwind.png" },
  { name: "GitHub", src: "/path-to-logo/nodejs.png" },
  { name: "HTML5", src: "/path-to-logo/mongodb.png" },
  { name: "JavaScript", src: "/path-to-logo/javascript.png" },
  { name: "MongoDB", src: "ReactLogo.png" },
  { name: "Netlify", src: "ReactLogo.png" },
  { name: "Node.js", src: "ReactLogo.png" },
  { name: "Photoshop", src: "ReactLogo.png" },
  { name: "Postman", src: "ReactLogo.png" },
  { name: "React", src: "ReactLogo.png" },
  { name: "Socket.io", src: "ReactLogo.png" },
  { name: "SQL", src: "ReactLogo.png" },
  { name: "Tailwind CSS", src: "ReactLogo.png" },
  { name: "TypeScript", src: "ReactLogo.png" },
  { name: "Vite", src: "ReactLogo.png" },
  { name: "WebSocket", src: "ReactLogo.png" },
];

const SkillsCarousel: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative w-auto max-w-sm lg:max-w-4xl mx-auto py-8">
      <h1 className="text-center p-8 md:p-2 md:pb-8 md:-mt-28">Skills</h1>
      <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 rounded-3xl shadow-none p-1">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center transform transition-transform duration-500"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-28 h-28 sm:w-24 sm:h-24 lg:w-24 lg:h-24 mx-auto rounded-full"
                style={{
                  transition: "transform .5s ease-in-out",
                }}
              />
              <h3 className="text-center mt-2 text-sm text-xl mt-2 mx-36 lg:mx-16 font-outfit text-gray-800">
                {logo.name}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SkillsCarousel;
