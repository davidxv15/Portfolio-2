import * as React from "react";
import Slider from "react-slick";
import IconCarousel from "./IconCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";

const logos = [
  {
    name: "Accountability",
    src: "Accountability.webp", alt: "icon of checklist",
    rounded: true,
    border: "50%",
  },
  {
    name: "Adaptability",
    src: "adaptability.webp", alt: "icon of morphing shapes",
    rounded: true,
    border: "50%",
  },
  { name: "Coachability", src: "Coachability.webp", alt: "icon of whistle", rounded: true, border: "50%" },
  {
    name: "Collaboration",
    src: "Collaborative.webp",
    alt: "icon of handshake",
    rounded: true,
    border: "50%",
  },
  {
    name: "Communication",
    src: "Communication.webp",
    alt: "icon of conversation",
    rounded: true,
    border: "20%",
  },
  { name: "Consistency", src: "Target.webp", alt:"icon of archery target", rounded: true, border: "50%" },
  { name: "Creativity", src: "Creativity.webp", alt: "icon of brain & light bulb",  },
  { name: "Discipline", src: "Discipline.webp", alt: "icon of stopwatch & chart", rounded: true, border: "50%" },
  { name: "Imaginative", src: "Nebula.webp", alt: "icon of spiral nebula", rounded: true, border: "50%" },
  { name: "Integrity", src: "Integrity.webp", alt: "icon of justice scale", rounded: true, border: "50%" },
  { name: "Intention", src: "intention.webp", alt: "icon of infinity symbol in a heart", },
  { name: "Leadership", src: "Leadership.webp", alt: "icon of leader guiding another", },
  { name: "Preparedness", src: "Preparedness.webp", alt: "icon of checkmark", },
  { name: "Problem-Solving", src: "ProblemSolving.webp", alt: "icon of gear in a head", marginTop: "1px" },
  { name: "Research", src: "Research.webp", alt: "icon of magnifying glass on data", },
  { name: "Resiliency", src: "Resiliency.webp", alt: "icon of Bonsai tree", },
  { name: "Strategic", src: "Strategy.webp", alt: "icon of clipboard plan", },
  { name: "Supportive", src: "Supportive.webp", alt: "icon of 4 hands converged", rounded: true, border: "50%" },
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

const SkillsCarousel: React.FC<{ tooltipText: string; reverse?: boolean }> = ({
  tooltipText,
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
    centerMode: true,
    centerPadding: "1rem",
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
          slidesToScroll: 0,
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
    <section className="relative w-auto h-screen mx-auto py-4 h-screen bg-gradient-to-b from-sky-600 via-sky-300 to-sky-600 z-0">
      <h1
        className="scroll-mt-24 text-center text-5xl w-screen md:p-1 md:pb-1 font-poppins z-0 mt-24 mb-10 tracking-wider translate-y-3 text-shadow-subtle shadow-black text-white no-select"
        id="skills"
      >
        SKILLS
      </h1>
      <hr className="w-32 mx-auto -translate-y-6"></hr>

      {/* tooltip */}
      
      <div className="relative group w-screen">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-28 bg-slate-800 text-gray-300 text-lg px-4 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          <h3 className="text-lg font-bold underline mt-1 mb-1 text-center no-select">
            Skills
          </h3>
          <ul className="list-none text-left">
            {logos.map((logo, index) => (
              <li key={index}>{logo.name}</li>
            ))}
          </ul>
        </div>
        <div className=" rounded-3xl shadow-none w-screen z-10 pt-1 mb-4">
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
                  className="imgAndH3 smallCard bg-gradient-to-b from-slate-400 via-slate-300 to-slate-600 shadow-md shadow-gray-700 m-1 sm:w-44 sm:h-52 md:h-40 md:w-40 lg:w-48 lg:h-48"
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
                    className="smallCard w-32 h-32 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 lg:mt-1 mx-auto border-black"
                    style={{
                      border: "1.5px solid black",
                      // border: "1.5px solid #64748b",

                      // // backgroundColor: "navy",
                      // transition: "transform .5s ease-in-out",
                      // borderRadius: "4%",
                      // padding: "1rem"
                    }}
                  />
                  <h3 className="text-center mt-6 text-2xl lg:mx-0 lg: font-outfit bg-transparent text-slate-900 font-medium tracking-tight">
                    {logo.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <IconCarousel reverse={true} />
    </section>
  );
};

export default SkillsCarousel;
