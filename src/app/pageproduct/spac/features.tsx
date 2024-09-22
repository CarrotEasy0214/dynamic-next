"use client";

import EarPads from "../modal/earpads";
import HeadBand from "../modal/headband";
import IntuitiveControls from "../modal/intuitivecontrols";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import {
  Pagination,
  Parallax,
  Navigation,
  FreeMode,
  EffectFade,
} from "swiper/modules";

function Features() {
  return (
    <div>
      <div className="p-5">
        <div className="">
          <img src="img/page-product/features/MW75_ANC_1600x1600_V1.webp"></img>
          <div className="py-10">
            <div className="text-2xl text-gray-700 pb-3">Intuitive ANC</div>
            <div className="font-extralight font-sans pb-3">
              Adaptive Active Noise Cancellation automatically adjusts the level
              of noise cancellation to match your surroundings, leaving behind
              nothing but the sound you want.
            </div>
            <div className="font-extralight font-sans">
              Now you can choose to listen in Adaptive, MAX, or All Day ANC
              modes for more tailored listening.
            </div>
          </div>
        </div>
        <div>
          <img src="img/page-product/features/MW75_Crafted-for-All-Day-Wear_1600x1600_V1.webp"></img>
          <div className="py-5">
            <div className="text-2xl text-gray-700 pb-3">
              Crafted for All-Day Wear
            </div>
            <div className="font-extralight font-sans pb-3">
              Lightweight anodized aluminum, durable tempered glass, and soft
              lambskin leather promote longer wear in a sleek, luxurious finish,
              while replaceable memory foam ear pads and a felted hard shell
              travel case provide additional comfort and protection on-the-go.
            </div>
          </div>
        </div>
        <div>
          <img src="img/page-product/features/MW75_Tuned-to-Perfection_1600x1600_V1.webp"></img>
          <div className="pt-5 pb-12">
            <div className="text-2xl text-gray-700 pb-3">
              Tuned to Perfection
            </div>
            <div className="font-extralight font-sans">
              With angled ear cups fine-tuned for an even wider soundstage, our
              custom 40mm Beryllium coated drivers evenly distribute our
              expansive, signature sound in the form of warmer lows and richer
              highs.
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img src="img/page-product/features/MW75_Full-Width-Image_3200x1600_V1.webp"></img>
        <div className="px-5 py-20">
          <div className="flex justify-center items-baseline space-x-2">
            <div className="flex justify-center text-2xl text-gray-700">
              Up to{" "}
            </div>
            <div className="flex justify-center font-light text-gray-700 text-3xl">
              {" "}
              32{" "}
            </div>
            <div className="flex justify-center text-2xl text-gray-700">
              {" "}
              hrs
            </div>
          </div>
          <p className="flex justify-center text-2xl text-gray-700 pb-3">
            {" "}
            of playtime
          </p>

          <div className="flex text-center font-thin font-sans">
            Enjoy up to 32 hours of total battery life or up to 28 hours with
            ANC enabled. For optimal battery usage, proximity sensors allow for
            on-head detection to auto-pause your MW75 Wireless Headphones so you
            get the most out of your listening time.
          </div>
        </div>
      </div>
      <div className="p-5">
        <div>
          <img src="img/page-product/features/MW75_Best-in-Class-Talk_1600x1600_V1.webp"></img>
          <div className="text-2xl text-gray-700 pb-3 pt-5">
            Best-In-Class Talk
          </div>
          <div className="font-extralight font-sans pb-12">
            The MW75 Wireless Headphones feature 4 beamforming microphones and
            acoustically-tuned mesh that reject wind sounds and filter out
            environmental noise for dependable talk clarity when you need it
            most.
          </div>
        </div>
        <div>
          <img src="img/page-product/features/MW75_Connect-Effortlessly_1600x1600_V1.webp"></img>
          <div className="text-2xl text-gray-700 pt-5 pb-2">
            Connect Effortlessly
          </div>
          <div className="font-extralight font-sans pb-12">
            Bluetooth® 5.1 connectivity partnered with aptX™ Adaptive technology
            provides a secure wireless connection for hi-res Bluetooth audio up
            to a range of 100ft/30m. Plus, don't miss a thing and switch
            seamlessly between two devices with convenient multipoint
            connection.
          </div>
        </div>
        <div>
          <img src="img/page-product/features/MW75_Anywhere-Protection_1600x1600_V1.webp"></img>
          <div className="text-2xl text-gray-700">Anywhere Protection</div>
          <div className="font-light text-gray-800 text-xs font-mono pb-3">
            For added protection while traveling, the MW75 comes with a durable
            hard shell case that surrounds your headphones with a soft felted
            material, keeping them safe and sound between each use. Additional
            built-in storage eliminates tangled cords, so your headphone cables
            stay in perfect order.
          </div>
        </div>
        <div>
          <img src="img/page-product/features/MW75_App-Image_1600x1600_V1.webp"></img>
          <div className="text-2xl text-gray-700 pt-5 pb-2">
            Personalize Your Sound
          </div>
          <div className="font-extralight font-sans pb-7">
            Get the most out of your sound tool with the M&D Connect app. Adjust
            your EQ with in-app sound profiles, access additional ANC modes, and
            download updates for your MW75 Wireless Headphones all from your
            mobile device with M&D Connect.
          </div>
          <button className="cursor-pointer bg-zinc-700 text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          className=" relative"
          src="img/page-product/features/MW75_ADD_somthing.webp"
        ></img>
        <div className=" absolute top-52 left-52 p-2 bg-white rounded-full">
          <div className="flex justify-center items-center w-5 h-5">
            <HeadBand />
          </div>
        </div>
        <div className=" absolute bottom-64 right-52 p-2 bg-white rounded-full">
          <div className="flex justify-center items-center w-5 h-5">
            <IntuitiveControls />
          </div>
        </div>
        <div className=" absolute bottom-64 right-20 p-2 bg-white rounded-full">
          <div className="flex justify-center items-center w-5 h-5">
            <EarPads />
          </div>
        </div>
        <div className=" text-3xl font-light bottom-5 text-white text-center absolute">
          Intuitive Controls and Refined Design
        </div>
      </div>
      <div className="p-5 pb-0">
        <div className="px-7">
          <div className="flex text-center text-gray-800 text-xl pb-3">
            Ambient Listening + Voice Assistance
          </div>
          <div className="flex text-center text-sm font-light text-gray-800 pb-24">
            Fit the MW75 Active Noise-Cancelling Wireless Headphones seamlessly
            into your everyday with 2 modes of ambient listening for improved
            outdoor awareness and convenient voice assistant compatibility.
          </div>
        </div>
        <div className="space-y-4">
          <img src="img/page-product/MW75_Gallery-Image_1.webp"></img>
          <img src="img/page-product/MW75_Gallery-Image_2.webp"></img>
          <img src="img/page-product/MW75_Gallery-Image_3.webp"></img>
          <img src="img/page-product/MW75_Gallery-Image_4.webp"></img>
          <img src="img/page-product/MW75_Gallery-Image_5.webp"></img>
        </div>
        <div className="flex justify-center text-xs text-gray-700 py-10">
          What The Experts are Saying
        </div>
        <div className="pl-5">
          <Swiper
            modules={[Pagination, Parallax, FreeMode, Navigation, EffectFade]}
            parallax={true}
            spaceBetween={10}
            className="w-full flex space-x-5"
            slidesPerView={1} //한 슬라이드에 보여줄 갯수
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            effect={"fade"}
          >
            <SwiperSlide className=" flex text-center ">
              <div className="text-gray-700 pb-3 ">
                The MW75 delivers one of the best audio experiences now
                available.
              </div>
              <div className="text-gray-600 text-xs  ">
                - Gizmodo on Master & Dynamic MW75
              </div>
            </SwiperSlide>
            <SwiperSlide className=" flex text-center ">
              <div className="text-gray-700 pb-3">
                The MW75’s are an exercise in high-quality craftsmanship.
              </div>
              <div className="text-gray-600 text-xs  ">
                - Pocket-lint on Master & Dynamic MW75
              </div>
            </SwiperSlide>
            <SwiperSlide className=" flex text-center pr-5">
              <div className="text-gray-700 pb-3">
                The MW75’s are an exercise in high-quality craftsmanship.
              </div>
              <div className="text-gray-600 text-xs  ">
                - Pocket-lint on Master & Dynamic MW75
              </div>
            </SwiperSlide>
            <SwiperSlide className=" flex text-center pr-5">
              <div className="text-gray-700 pb-3">
                Comfort reigns supreme with the MW75 headphones. I can wear
                these for hours at a time with minimal effort.
              </div>
              <div className="text-gray-600 text-xs  ">
                - Newsweek on Master & Dynamic MW75
              </div>
            </SwiperSlide>
            <div className="p-20">
              <div className="swiper-button-next relative after:text-slate-700  after:left-12 rounded-full"></div>
              <div className="swiper-button-prev after:text-slate-700 rounded-full"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Features;
