import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: "React", src: "ReactLogo.png" },
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
    <section className="relative w-auto max-w-sm lg:max-w-4xl mx-auto py-8">
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
                className="w-28 h-28 sm:w-24 sm:h-24 lg:w-24 lg:h-24 mx-auto rounded-full"
                style={{
                  transition: "transform .5s ease-in-out",
                }}
              />
              <h3 className="text-xl mt-2 mx-36 lg:mx-14 font-poppins text-gray-800">{logo.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SkillsCarousel;
