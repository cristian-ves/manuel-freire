"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Card from "../card/Card";
import { opiniones } from "@/app/helpers/opiniones";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Styles from "./_Slides.module.sass";

const Slides = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className={Styles.swiper}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: true,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
    >
      {opiniones.map((opinion, i) => (
        <SwiperSlide className={Styles.swiperSlide} key={i}>
          {({ isActive }) => (
            <Card
              isActive={isActive}
              author={opinion.author}
              opinion={opinion.opinion}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slides;
