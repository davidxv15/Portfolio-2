import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: "React", src: "React.png" },
  { name: "TypeScript", src: "/path-to-logo/typescript.png" },
  { name: "TailwindCSS", src: "/path-to-logo/tailwind.png" },
  { name: "Node.js", src: "/path-to-logo/nodejs.png" },
  { name: "MongoDB", src: "/path-to-logo/mongodb.png" },
  { name: "Express.js", src: "/path-to-logo/express.png" },
  { name: "JavaScript", src: "/path-to-logo/javascript.png" },
];

const SkillsCarousel: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
    <section className="relative w-full max-w-5xl mx-auto py-8">
      <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-lg shadow-md p-4">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center transform transition-transform duration-500"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
                style={{
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              <h3 className="text-sm mt-2 font-medium text-gray-800">{logo.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SkillsCarousel;
