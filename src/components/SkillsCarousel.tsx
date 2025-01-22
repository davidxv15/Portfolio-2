import * as React from "react";
import Slider from "react-slick";
import IconCarousel from "./IconCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const logos = [
  {
    name: "Accountability",
    src: "Accountability.webp",
    rounded: true,
    border: "50%",
  },
  {
    name: "Adaptability",
    src: "adaptability.webp",
    rounded: true,
    border: "50%",
  },
  {
    name: "Collaboration",
    src: "Collaborative.webp",
    rounded: true,
    border: "50%",
  },
  {
    name: "Communication",
    src: "Communication.webp",
    rounded: true,
    border: "20%",
  },
  { name: "Consistency", src: "Target.webp", rounded: true, border: "50%" },
  { name: "Creativity", src: "Creativity.webp" },
  { name: "Discipline", src: "Discipline.webp", rounded: true, border: "50%" },
  { name: "Imaginative", src: "Nebula.webp", rounded: true, border: "50%" },
  { name: "Integrity", src: "Integrity.webp", rounded: true, border: "50%" },
  { name: "Leadership", src: "Leadership.webp" },
  { name: "Preparedness", src: "Preparedness.webp" },
  { name: "Problem-Solving", src: "ProblemSolving.webp", marginTop: "1px" },
  { name: "Resiliency", src: "Resiliency.webp" },
  { name: "Supportive", src: "Supportive.webp", rounded: true, border: "50%" },
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

const SkillsCarousel: React.FC<{ reverse?: boolean }> = ({
  reverse = false,
}) => {
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoPlaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    // adaptiveHeight: true,
    // centerMode: true,
    // centerPadding: "1rem",
    // cursor: "pointer",
    // draggable: true,
    // rewind: false,
    // rtl: reverse,
    // swipeToSlide: true,
    // dots: false,
    // prevArrow: <CustomArrow />,
    // nextArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 0,
          // infinite: true,
          // cssEase: "linear",
          // autoplay: true,
          // autoPlaySpeed: 1000,
          // speed: 1000,
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
          // autoPlaySpeed: 0,
          // speed: 6000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          cssEase: "linear",
          // autoplay: true,
          // autoPlaySpeed: 100,
          // speed: 1000,
        },
      },
    ],
  };

  return (
    <section className="relative w-auto h-screen mx-auto py-4 h-screen bg-sky-600 z-0 pt-24">
      <h1
        className="scroll-mt-20 text-center w-screen md:p-1 md:pb-1  font-poppins bg-gradient-to-t from-sky-600 via-sky-600 z-0 mb-12 mt-12"
        id="skills"
      >
        Skills
      </h1>
      <div></div>
      <div className=" rounded-3xl shadow-none w-screen z-10 mb-8">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center m-1 z-10 transform transition-transform duration-500 ${
                logo.rounded ? "rounded-full" : ""
              }`}
              style={{
                borderRadius: logo.border,
                // transform: "translateX(1rem)",
                zIndex: "1",
                // fade or full
                // width: "fade",
              }}
            >
              <div
                className="imgAndH3 smallCard bg-gradient-to-b from-slate-400 via-slate-300 to-slate-600 shadow-md shadow-gray-700 m-1 sm:w-44 sm:h-48 md:h-48 md:w-40 lg:w-48 lg:h-48"
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
                <h3 className="text-center mt-5 text-2xl lg:mx-0 lg: font-outfit bg-transparent text-slate-900 font-medium tracking-tight">
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
