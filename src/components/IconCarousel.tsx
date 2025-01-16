import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import SwiperCore, { EffectCoverflow } from "swiper";

SwiperCore.use([EffectCoverflow]);

const softSkills = [
  { name: "Leadership", description: "Motivating teams" },
  { name: "Collaboration", description: "Teamwork focus" },
  { name: "Adaptability", description: "Embracing change" },
];

const SoftSkillsCarousel: React.FC = () => (
  <section className="w-full h-[50vh] bg-gradient-to-b from-gray-800 to-slate-600">
    <h2 className="text-center text-white text-3xl mb-6">Soft Skills</h2>
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      loop
    >
      {softSkills.map((skill, index) => (
        <SwiperSlide
          key={index}
          className="bg-gradient-to-t from-blue-700 to-sky-400 rounded-lg shadow-md p-4 text-center"
        >
          <h3 className="text-white text-xl">{skill.name}</h3>
          <p className="text-gray-300 mt-2">{skill.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default SoftSkillsCarousel;
