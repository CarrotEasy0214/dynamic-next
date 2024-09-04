import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";

import PlayBtn from "../../img/svg/playbtn.svg";
import PauseBtn from "../../img/svg/pausebtn.svg";

import MobileImg1 from "../../img/slide/MW09_Homepage_Mobile.webp";
import MobileImg2 from "../../img/slide/MG20_Mobile.webp";
import MobileImg3 from "../../img/slide/MG75_Mobile.webp";
import MobileImg4 from "../../img/slide/MH40W_Mobile.webp";

const MySlideMobile = () => {
  const swiperRef = useRef<any>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative mb-8">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay, EffectFade, Parallax]}
        centeredSlides={true}
        loop={true}
        parallax={true}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          bulletClass:
            "w-2 h-2 rounded-lg transition-all bg-slate-300 inline-block relative mr-4 xl:mr-5 cursor-pointer",
          bulletActiveClass: "!bg-white w-5",
          clickable: true,
          el: ".swiper-pagination",
        }}
        className="w-full relative"
      >
        <SwiperSlide>
          <div className="absolute bottom-[8%] left-[4%] ms:bottom-[7%] w-[90%]">
            <div className="text-white xl:text-6xl lg:text-5xl font-bold text-4xl pb-5 text-start w-[90%]">
              MW09 True Wireless Earphones
            </div>
            <div className="text-white text-start pb-5 w-[100%]">Our newest active noise-cancelling earphones</div>
            <div className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center">
              Show Now
            </div>
          </div>
          <Image src={MobileImg1 as unknown as string} alt="" className="block" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bottom-[8%] ms:bottom-[8.5%] left-[2.5%] w-[80%]">
            <div className="text-white xl:text-6xl lg:text-5xl text-4xl font-bold text-start pb-5">
              MG20 Wireless Gaming Headphones
            </div>
            <div className="text-white text-start pb-5 w-[80%]">Never Play the Same</div>
            <div className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center">
              Show Now
            </div>
          </div>
          <Image src={MobileImg2 as unknown as string} alt="" className="block" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bottom-[8%] ms:bottom-[7%] left-[4%] w-[90%]">
            <div className="text-white xl:text-6xl lg:text-5xl text-4xl font-bold text-start pb-5">
              MW75 Active Noise-Cancelling Wireless Headphones
            </div>
            <div className="text-white text-start pb-5 w-[90%]">Perfect silence, perfect sound</div>
            <div className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center">
              Show Now
            </div>
          </div>
          <Image src={MobileImg3 as unknown as string} alt="" className="block" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bottom-[8%] ms:bottom-[7%] left-[5%] w-[100%]">
            <div className="text-white xl:text-6xl lg:text-5xl text-4xl font-bold pb-5 text-start">
              MH40 Wireless Headphones
            </div>
            <div className="text-white text-start pb-5 w-[100%]">Iconic design and brilliant acoustics</div>
            <div className="bg-white w-[8.5rem] h-[3.5rem] flex justify-center text-sm font-bold cursor-pointer text-center items-center">
              Show Now
            </div>
          </div>
          <Image src={MobileImg4 as unknown as string} alt="" className="block" />
        </SwiperSlide>
        <div className="w-8 h-8 xl:w-10 xl:h-10 absolute z-50 bottom-[3%] ms:bottom-[2.5%] xl:bottom-[2%] right-[1.3%] ms:right-[1.5%] xl:right-[2%]">
          <button onClick={toggleAutoplay}>
            {isPlaying ? (
              <Image src={PauseBtn} alt="" className="w-10 h-10" />
            ) : (
              <Image src={PlayBtn} alt="" className="w-10 h-10" />
            )}
          </button>
        </div>
      </Swiper>
      <div className="swiper-pagination !absolute !bottom-[4%] ms:bottom-[6%] xl:bottom-[7.5%] flex justify-end !w-fit right-[9%] ms:right-[6%] xl:right-[5%] !left-auto"></div>
    </div>
  );
};

export default MySlideMobile;
