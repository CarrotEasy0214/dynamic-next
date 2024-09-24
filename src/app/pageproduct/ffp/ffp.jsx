"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import { Pagination, Parallax, FreeMode } from "swiper/modules";

const FFP = () => {
  return (
    <div className="pl-5">
      <Swiper
        modules={[Pagination, Parallax, FreeMode]}
        parallax={true}
        spaceBetween={10}
        className="w-full flex space-x-5"
        slidesPerView={1.2} //한 슬라이드에 보여줄 갯수
      >
        <SwiperSlide className=" flex text-center ">
          <div className="text-gray-700 pb-3 ">Free Shipping</div>
          <div className="font-extralight ">
            Free ground shipping on orders of €99 or more.
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex text-center ">
          <div className="text-gray-700 pb-3">Free Returns</div>
          <div className="font-extralight">
            We offer a 14-day return policy, allowing you to shop with
            confidence.
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex text-center pr-5">
          <div className="text-gray-700 pb-3">Product Protection</div>
          <div className="font-extralight">
            Rest easy with our{" "}
            <div className="after:contents-'' after:w-[1px] after:bg-black">
              manufacturer warranty,
            </div>{" "}
            ensuring that your product is protected against any manufacturing
            defects or issues.
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FFP;
