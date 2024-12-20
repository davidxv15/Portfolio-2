import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: "React", src: "/path-to-logo/react.png" },
  { name: "TypeScript", src: "/path-to-logo/typescript.png" },
  { name: "TailwindCSS", src: "/path-to-logo/tailwind.png" },
  { name: "Node.js", src: "/path-to-logo/nodejs.png" },
  { name: "MongoDB", src: "/path-to-logo/mongodb.png" },
  { name: "Express.js", src: "/path-to-logo/express.png" },
  { name: "JavaScript", src: "/path-to-logo/javascript.png" },
  // Add more logos as needed
];

const SkillsCarousel: React.FC = () => {
  const settings = {
    infinite: true, // Loop the carousel
    speed: 500, // Animation speed
    slidesToShow: 7, // Number of items visible
    slidesToScroll: 1, // Number of items scrolled per click
    centerMode: true, // Center the items
    centerPadding: "0", // Padding around the centered item
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full py-8 bg-gradient-to-b from-blue-500 to-blue-300">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transform transition-transform duration-500"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto"
              style={{
                transition: "transform 0.3s ease-in-out",
              }}
            />
            <h3 className="text-sm mt-2 font-medium text-gray-800">{logo.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsCarousel;
