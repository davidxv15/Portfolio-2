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
    name: "Tailwind",
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
  ></div>
);

const SkillsCarousel: React.FC = () => {
  const settings = {
    infinite: true,
    adaptiveHeight: true,
    arrows: false,
    // autoplay: true,
    autoPlaySpeed: 0,
    speed: 20000,
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
    <section className="relative w-auto max-w-sm h-[40vh] lg:max-w-4xl mx-auto py-8">
      <h1
        className="scroll-mt-20 text-center p-8 md:p-2 md:pb-8 md:-mt-28 font-poppins"
        id="skills"
      >
        Skills
      </h1>
      <div className="bg-gradient-to-r from-sky-600 from-20% via-sky-900 via-50% to-sky-600 to-80% rounded-3xl shadow-none p-1">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center m-1 transform transition-transform duration-500 ${
                logo.rounded ? "rounded-full" : ""
              }`}
              style={{
                borderRadius: logo.border,
                // fade or full
                width: "60rem",
              }}
            >
              <div
                className="imgAndH3 smallCard"
                style={{
                  border: "2px solid #64748b",
                  backgroundColor: "#0f172a",
                  transition: "transform .5s ease-in-out",
                  borderRadius: ".75rem",
                  padding: ".5rem .4rem",
                  width: "11rem",
                  height: "8.6rem",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="smallCard w-28 h-28 sm:w-28 sm:h-24 lg:w-20 lg:h-20 mx-auto"
                  style={
                    {
                      // border: "1px solid black",
                      // // backgroundColor: "navy",
                      // transition: "transform .5s ease-in-out",
                      // borderRadius: "4%",
                      // padding: "1rem 2.47rem"
                    }
                  }
                />
                <h3 className="text-center mt-2 text-2xl mx-36 lg:mx-0 font-outfit text-sky-300 font-medium tracking-wide">
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
