import Image, { StaticImageData } from "next/image";

import product1 from "../../img/feature/MW09.png";
// import product2 from "../../img/feature/MW75.png";
// import product3 from "../../img/feature/MH401.webp";
// import product4 from "../../img/feature/MG20.png";
// import products1 from "../../img/product/MW09/MW09_Side.png";
// import products2 from "../../img/product/MW75/MW75_Side.png";
// import products3 from "../../img/product/MH40/MH40_Side.png";
// import products4 from "../../img/product/MW75/MW75_Side.png";
import MW09Black from "../../img/color/MW09BK1-Swatch_V2.png";
import MW09Blue from "../../img/color/MW09BL4-Swatch_V2.png";
import MW09G3 from "../../img/color/MW09G3-Swatch_V2.png";
import MW09GD from "../../img/color/MW09GD10-Swatch_V2.png";
import MW09GR from "../../img/color/MW09GR9-Swatch_V2.png";
import MW09S5 from "../../img/color/MW09S5-Swatch_V2.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const Prod = () => {
  const [isOnClick, setIsOnClick] = useState(false);
  return (
    <div className="w-full">
      <div className="text-slate-600 text-2xl ml-5">Featured Products</div>
      <div className="flex left-10 w-full">
        <Swiper spaceBetween={20} slidesPerView={1.4} className="flex justify-center">
          <SwiperSlide>
            <div className="flex flex-col justify-center">
              <Image src={product1} alt="" className="w-full"></Image>
              <div className="pl-5 flex flex-col gap-2">
                <div className="text-sm font-bold">MW09</div>
                <div className="text-sm">Active Noise-Cancelling True Wireless Earphones</div>
                <div className="text-sm font-bold">From $ 349.00</div>
                <div className="flex items-center">
                  <div
                    className={
                      isOnClick
                        ? "border-2 border-black rounded-full p-[0.2rem] flex justify-center"
                        : "w-8 h-8 flex items-center"
                    }
                    onClick={() => setIsOnClick(!isOnClick)}
                  >
                    <Image src={MW09Black ?? ""} alt="" className="w-5 h-5"></Image>
                  </div>
                  <div
                    className={
                      isOnClick
                        ? "border-2 border-black rounded-full p-[0.2rem] flex justify-center"
                        : "w-8 h-8 flex items-center"
                    }
                    onClick={() => setIsOnClick(!isOnClick)}
                  >
                    <Image src={MW09Blue ?? ""} alt="" className="w-5 h-5"></Image>
                  </div>
                  <div
                    className={
                      isOnClick
                        ? "border-2 border-black rounded-full p-[0.2rem] flex justify-center"
                        : "w-8 h-8 flex items-center"
                    }
                    onClick={() => setIsOnClick(!isOnClick)}
                  >
                    <Image src={MW09G3 ?? ""} alt="" className="w-5 h-5"></Image>
                  </div>
                  <div
                    className={
                      isOnClick
                        ? "border-2 border-black rounded-full p-[0.2rem] flex justify-center"
                        : "w-8 h-8 flex items-center"
                    }
                    onClick={() => setIsOnClick(!isOnClick)}
                  >
                    <Image src={MW09GD ?? ""} alt="" className="w-5 h-5"></Image>
                  </div>
                  <div
                    className={
                      isOnClick
                        ? "border-2 border-black rounded-full p-[0.2rem] flex justify-center"
                        : "w-8 h-8 flex items-center"
                    }
                    onClick={() => setIsOnClick(!isOnClick)}
                  >
                    <Image src={MW09GR ?? ""} alt="" className="w-5 h-5"></Image>
                  </div>
                  <div
                    className={
                      isOnClick
                        ? "border-2 border-black rounded-full p-[0.2rem] flex justify-center"
                        : "w-8 h-8 flex items-center"
                    }
                    onClick={() => setIsOnClick(!isOnClick)}
                  >
                    <Image src={MW09S5 ?? ""} alt="" className="w-5 h-5"></Image>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center">
              <Image src={product1} alt="" className="w-full"></Image>
              <div className="pl-5 flex flex-col gap-2">
                <div className="text-sm font-bold">MW09</div>
                <div className="text-sm">Active Noise-Cancelling True Wireless Earphones</div>
                <div className="text-sm font-bold">From $ 349.00</div>
                <div className="flex gap-3">
                  <Image src={MW09Black ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09Blue ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09G3 ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09GD ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09GR ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09S5 ?? ""} alt="" className="w-5 h-5"></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center">
              <Image src={product1} alt="" className="w-full"></Image>
              <div className="pl-5 flex flex-col gap-2">
                <div className="text-sm font-bold">MW09</div>
                <div className="text-sm">Active Noise-Cancelling True Wireless Earphones</div>
                <div className="text-sm font-bold">From $ 349.00</div>
                <div className="flex gap-3">
                  <Image src={MW09Black ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09Blue ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09G3 ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09GD ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09GR ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09S5 ?? ""} alt="" className="w-5 h-5"></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center">
              <Image src={product1} alt="" className="w-full"></Image>
              <div className="pl-5 flex flex-col gap-2">
                <div className="text-sm font-bold">MW09</div>
                <div className="text-sm">Active Noise-Cancelling True Wireless Earphones</div>
                <div className="text-sm font-bold">From $ 349.00</div>
                <div className="flex gap-3">
                  <Image src={MW09Black ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09Blue ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09G3 ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09GD ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09GR ?? ""} alt="" className="w-5 h-5"></Image>
                  <Image src={MW09S5 ?? ""} alt="" className="w-5 h-5"></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
        {/* <Swiper>
          <SwiperSlide>
            <div className="">
              <Image src={product1} alt="" className="w-full"></Image>
              <div>
                <div>이름1</div>
                <div>가격1</div>
              </div>
              <div>설명1</div>
              <div>색상1</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image src={product1} alt="" className="w-full"></Image>
              <div>
                <div>이름2</div>
                <div>가격2</div>
              </div>
              <div>설명2</div>
              <div>색상2</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image src={product1} alt="" className="w-full"></Image>
              <div>
                <div>이름3</div>
                <div>가격3</div>
              </div>
              <div>설명3</div>
              <div>색상3</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image src={product1} alt="" className="w-full"></Image>
              <div>
                <div>이름4</div>
                <div>가격4</div>
              </div>
              <div>설명4</div>
              <div>색상4</div>
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};

export default Prod;
