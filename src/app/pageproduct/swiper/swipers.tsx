"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import MW75S1 from "../../../img/hamburger/MW75S1-PDP_1350x1350_Hero_V2_1a4bd298-a68f-47ca-b050-b3cc3f47283e.webp";

import { Pagination, Parallax, FreeMode, Navigation, Thumbs, Scrollbar } from "swiper/modules";
import Image from "next/image";

const Swipers = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        modules={[Pagination, Parallax, FreeMode, Navigation, Thumbs, Scrollbar]}
        parallax={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full relative"
        scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide className=" flex relative">
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <div className="swiper-button-next after:text-slate-700 rounded-full"></div>
        <div className="swiper-button-prev after:text-slate-700 rounded-full"></div>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        // spaceBetween={10}
        slidesPerView={6}
        // freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
        // scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MW75S1} alt=""></Image>
        </SwiperSlide>
        <div className="swiper-scrollbar bg-white"></div>
      </Swiper>
    </div>
  );
};

export default Swipers;
