import Test from "./Test";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductPage = () => {
  return (
    <div className="px-28 mb-5">
      <div className="px-10">
        <div className="text-4xl text-slate-600 font-bold">
          Featured Products
        </div>
        <div className="flex">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            className="w-full"
          >
            <SwiperSlide>
              <Test></Test>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
