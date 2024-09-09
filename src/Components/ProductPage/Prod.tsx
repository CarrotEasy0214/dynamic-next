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

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Prod = () => {
  return (
    <div className="w-full">
      <div>Featured Products</div>
      <div className="flex">
        <Swiper spaceBetween={50} slidesPerView={1.8}>
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
            {" "}
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
            {" "}
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
            {" "}
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
