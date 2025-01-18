import * as React from "react";
import Slider from "react-slick";
import IconCarousel from "./IconCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

// const CustomArrow = ({ className, style, onClick }: any) => (
//   <div
//     className={`${className} custom-arrow`}
//     style={{
//       ...style,
//       color: "red",
//       fontSize: "32px",
//       // zIndex: 40,
//       // fade: true,
//     }}
//     onClick={onClick}
//   ></div>
// );

const SkillsCarousel: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
  const settings = {
    adaptiveHeight: true,
    speed: 6000,
    arrows: false,
    autoplay: true,
    autoPlaySpeed: 1,
    centerMode: true,
    centerPadding: "1rem",
    cssEase: "linear",
    cursor: "pointer",
    swipe: false,
    // draggable: true,
    infinite: true,
    // rewind: false,
    rtl: reverse,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: false,
    pauseOnHover: false,
    // prevArrow: <CustomArrow />,
    // nextArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          cssEase: "linear",
          autoplay: true,
          autoPlaySpeed: 1000,
          speed: 1000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          cssEase: "linear",
          autoplay: true,
          autoPlaySpeed: 0,
          speed: 6000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          cssEase: "linear",
          autoplay: true,
          autoPlaySpeed: 100,
          speed: 1000,
        },
      },
    ],
  };

  return (
    <section className="relative w-auto h-[40vh] mx-auto py-12 h-screen bg-sky-600 z-0">
      <h1
        className="scroll-mt-20 text-center w-screen md:p-2 md:pb-8 md:-mt-28 font-poppins bg-gradient-to-t from-sky-600 via-sky-600 z-0"
        id="skills"
      >
        Skills
      </h1>
      <div></div>
      <div className=" rounded-3xl shadow-none w-screen z-10">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center m-1 z-10 transform transition-transform duration-500 ${
                logo.rounded ? "rounded-full" : ""
              }`}
              style={{
                borderRadius: logo.border,
                transform: "translateX(1rem)",
                zIndex: "1",
                // fade or full
                // width: "fade",
              }}
            >
              <div
                className="imgAndH3 smallCard bg-gradient-to-b from-slate-400 via-slate-300 to-slate-600 shadow-md shadow-gray-700 m-1 sm:w-24 sm:h-44 md:h-44 md:w-40 lg:w-48 lg:h-44"
                style={{
                  border: "2px solid #64748b",
                  // backgroundColor: "#0f172a",
                  transition: "transform .5s ease-in-out",
                  borderRadius: ".75rem",
                  padding: "1rem .8rem",
                  // width: "16rem",
                  // height: "14rem",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="smallCard w-32 h-32 sm:w-28 sm:h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 lg:mt-1 mx-auto border-black"
                  style={{
                    border: "1.5px solid #64748b",
                    // // backgroundColor: "navy",
                    // transition: "transform .5s ease-in-out",
                    // borderRadius: "4%",
                    // padding: "1rem"
                  }}
                />
                <h3 className="text-center mt-4 text-2xl lg:mx-0 lg: font-outfit bg-transparent text-slate-900 font-medium tracking-wide">
                  {logo.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <IconCarousel reverse={true} />
    </section>
  );
};

export default SkillsCarousel;
