import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";

const logos = [
  { name: "React", src: "/path-to-logo/react.png" },
  { name: "ypeScript", src: "/path-to-logo/typescript.png" },
  { name: "peScript", src: "/path-to-logo/typescript.png" },
  { name: "eScript", src: "/path-to-logo/typescript.png" },
  { name: "Script", src: "/path-to-logo/typescript.png" },
  { name: "cript", src: "/path-to-logo/typescript.png" },
  { name: "Typet", src: "/path-to-logo/typescript.png" },
  { name: "Type", src: "/path-to-logo/typescript.png" },
  //  logos ...
];

const SkillsCarousel: React.FC = () => {
  return (
    <section className="w-full h-72 bg-gradient-to-b from-blue-600 to-blue-300">
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
        loop
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 transition-transform duration-500"
            />
            <h3 className="text-sm mt-2 font-medium text-gray-800">{logo.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SkillsCarousel;
