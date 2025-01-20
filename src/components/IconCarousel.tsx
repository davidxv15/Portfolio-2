import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: "CSS", src: "CSS3Logo.png" },
  { name: "Django", src: "djangoLogo1.png", rounded: true, border: "50%" },
  { name: "Express.js", src: "expressJSLogo.webp" },
  { name: "Figma", src: "figmaLogo.png", rounded: true, border: "50%" },
  { name: "Git", src: "gitLogo.png", rounded: true, border: "20%" },
  { name: "GitHub", src: "GitHubLogo.png", rounded: true, border: "50%" },
  { name: "HTML5", src: "html5Logo5.webp" },
  { name: "JavaScript", src: "javascriptLogo.png" },
  { name: "MongoDB", src: "mongoDBLogo.png", rounded: true, border: "50%" },
  { name: "Netlify", src: "netlifyLogo.png", rounded: true, border: "50%" },
  { name: "Node.js", src: "nodeJSLogo.png", rounded: true, border: "50%" },
  { name: "Photoshop", src: "psLogo.jpg", rounded: true, border: "50%" },
  { name: "Postman", src: "postmanLogo.png", rounded: true, border: "50%" },
  { name: "React", src: "ReactLogo.png", rounded: true, border: "50%" },
  { name: "Socket.io", src: "socketIOLogo.png", rounded: true, border: "50%" },
  { name: "SQL", src: "sqlLogo.png" },
  { name: "Tailwind", src: "tailwindLogo.jpg", rounded: true, border: "20%" },
  { name: "TypeScript", src: "typeScriptLogo.png" },
  { name: "Vite", src: "viteLogo.jpg", rounded: true, border: "10%" },
  { name: "WebSocket", src: "webSocketLogo.png", rounded: true, border: "10%" },
];

interface IconCarouselProps {
  reverse?: boolean;
}

const IconCarousel: React.FC<IconCarouselProps> = ({ reverse = false }) => {
  const settings = {
    infinite: true,
    speed: 2000, // Continuous motion speed
    autoplay: true,
    autoplaySpeed: 0, // No pauses
    cssEase: "linear", // Seamless motion
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    swipe: false, // Prevent swipe interruptions
    rtl: reverse, // Reverse direction when true
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
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
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="rounded-3xl shadow-none w-screen z-10">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center m-1 z-10 transform ${
              logo.rounded ? "rounded-full" : ""
            }`}
            style={{
              borderRadius: logo.border,
              zIndex: "1",
            }}
          >
            <div
              className="imgAndH3 smallCard bg-gradient-to-b from-slate-400 via-slate-300 to-slate-600 shadow-md shadow-gray-700 m-1 sm:w-24 sm:h-44 md:h-44 md:w-40 lg:w-48 lg:h-44"
              style={{
                border: "2px solid #64748b",
                borderRadius: ".75rem",
                padding: "1rem .8rem",
              }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="smallCard w-32 h-32 sm:w-28 sm:h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 lg:mt-1 mx-auto border-black"
                style={{
                  border: "1.5px solid #64748b",
                }}
              />
              <h3 className="text-center mt-4 text-2xl lg:mx-0 lg:font-outfit bg-transparent text-slate-900 font-medium tracking-wide">
                {logo.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IconCarousel;
