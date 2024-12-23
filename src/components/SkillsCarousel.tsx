import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: "CSS", src: "CSS3Logo.png" },
  { name: "Django", src: "djangoLogo.png", rounded: true, border: "50%" },
  { name: "Express.js", src: "expressJSLogo.webp" },
  { name: "Figma", src: "figmaLogo.png", rounded: true, border: "50%" },
  { name: "Git", src: "gitLogo.png", rounded: true, border: "20%" },
  { name: "GitHub", src: "GitHubLogo.png", rounded: true, border: "50%"},
  { name: "HTML5", src: "html5Logo5.webp" },
  { name: "JavaScript", src: "javascriptLogo.png" },
  { name: "MongoDB", src: "mongoDBLogo.png", rounded: true, border: "50%" },
  { name: "Netlify", src: "netlifyLogo.png", rounded: true, border: "50%" },
  { name: "Node.js", src: "nodeJSLogo.png", rounded: true, border: "50%" },
  { name: "Photoshop", src: "ReactLogo.png" },
  { name: "Postman", src: "ReactLogo.png" },
  { name: "React", src: "ReactLogo.png", rounded: true,  border: "50%" },
  { name: "Socket.io", src: "ReactLogo.png" },
  { name: "SQL", src: "ReactLogo.png" },
  { name: "Tailwind CSS", src: "tailwindLogo.jpg", rounded: true, border: "20%" },
  { name: "TypeScript", src: "typeScriptLogo.png" },
  { name: "Vite", src: "viteLogo.jpg", rounded: true,  border: "10%" },
  { name: "WebSocket", src: "webSocketLogo.png", rounded: true,  border: "10%"},
];

const SkillsCarousel: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 200,
    // autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
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
      <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-600 rounded-3xl shadow-none p-1">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center transform transition-transform duration-500 ${
                logo.rounded ? 'rounded-full' : ''
              }`}
              style={{ borderRadius: logo.border }}
            >
              <div className="imgAndH3">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-28 h-28 sm:w-24 sm:h-24 lg:w-24 lg:h-24 mx-auto"
                  style={{
                    transition: "transform .5s ease-in-out",
                    borderRadius: logo.border
                  }}
                />
                <h3 className="text-center mt-2 text-sm text-xl mt-2 mx-36 lg:mx-16 font-outfit text-gray-100">
                  {logo.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SkillsCarousel;
