import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";

const logos = [
  { name: "React", src: "linkedin.jpg" },
  { name: "TypeScript", src: "inLinked.png" },
  { name: "Script", src: "linkedin.jpg" },
  { name: "Script", src: "GitHubLogo.png" },
  { name: "Script", src: "linkedin.jpg" },
  { name: "Script", src: "GitHubLogo.png" },
  { name: "TypeScript", src: "inLinked.png" },
  //  logos ...
];

const SkillsCarousel: React.FC = () => {
  return (
    <section className="w-32 h-32 bg-gradient-to-b from-blue-500 to-blue-300">
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
