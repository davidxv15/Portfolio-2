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
  {
    name: "Tailwind CSS",
    src: "tailwindLogo.jpg",
    rounded: true,
    border: "20%",
  },
  { name: "TypeScript", src: "typeScriptLogo.png" },
  { name: "Vite", src: "viteLogo.jpg", rounded: true, border: "10%" },
  { name: "WebSocket", src: "webSocketLogo.png", rounded: true, border: "10%" },
];

const CustomArrow = ({ className, style, onClick }: any) => (
  <div
    className={`${className} custom-arrow`}
    style={{
      ...style,
      color: "blue",
      fontSize: "32px",
      zIndex: 10,
      fade: true,
    }}
    onClick={onClick}
    >
  </div>
);

const SkillsCarousel: React.FC = () => {
  const settings = {
    infinite: true,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoPlaySpeed: 0,
    speed: 22000,
    // centerMode: true,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 20,
    centerPadding: "0",
    // dots: true,
    pauseOnHover: true,
    prevArrow: <CustomArrow />,
    nextArrow: <CustomArrow />,
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
      <h1 className="text-center p-8 md:p-2 md:pb-8 md:-mt-28 font-poppins" id="skills">Skills</h1>
      <div className="bg-gradient-to-r from-sky-600 from-20% via-sky-100 via-50% to-sky-600 to-80% rounded-3xl shadow-none p-1">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center m-1 transform transition-transform duration-500 ${
                logo.rounded ? "rounded-full" : ""
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
                    borderRadius: logo.border,
                  }}
                />
                <h3 className="text-center mt-2 text-2xl mx-36 lg:mx-8 font-outfit text-sky-600">
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
