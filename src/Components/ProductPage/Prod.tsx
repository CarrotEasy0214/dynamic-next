import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import product1 from "../../img/feature/MW09.png";
import product2 from "../../img/feature/MW75.png";
import product3 from "../../img/feature/MH401.webp";
import product4 from "../../img/feature/MG20.png";

import products1 from "../../img/product/MW09/MW09_Side.png";
import products2 from "../../img/product/MW75/MW75_Side.png";
import products3 from "../../img/product/MH40/MH40_Side.png";
import products4 from "../../img/product/MW75/MW75_Side.png";

import MW09Black from "../../img/color/MW09BK1-Swatch_V2.png";
import MW09Blue from "../../img/color/MW09BL4-Swatch_V2.png";
import MW09G3 from "../../img/color/MW09G3-Swatch_V2.png";
import MW09GD from "../../img/color/MW09GD10-Swatch_V2.png";
import MW09GR from "../../img/color/MW09GR9-Swatch_V2.png";
import MW09S5 from "../../img/color/MW09S5-Swatch_V2.png";

import MW75First from "../../img/color/MW75/MW75_first_color.jpg";
import MW752nd from "../../img/color/MW75/MW75_second_color.jpg";
import MW753rd from "../../img/color/MW75/MW75_third_color.jpg";
import MW754th from "../../img/color/MW75/MW75_ fourth_color.jpg";
import MW755th from "../../img/color/MW75/MW75_fifth_color.jpg";
import MW756th from "../../img/color/MW75/MW75_sixth_color.jpg";
import MW757th from "../../img/color/MW75/MW75_seventh_color.jpg";

import MH40blackMetal from "../../img/color/MH40/MH40_blackMetal.jpg";
import MH40gunMetalNavy from "../../img/color/MH40/MH40_gunMetalNavy.jpg";
import MH40blackSilver from "../../img/color/MH40/MH40_blackSilver.jpg";
import MH40gunMetalBlack from "../../img/color/MH40/MH40_ gunMetalBlack.jpg";
import MH40navySilver from "../../img/color/MH40/MH40_navySilver.jpg";
import MH40gbrownSilver from "../../img/color/MH40/MH40_brownSilver.jpg";
import MH40silver from "../../img/color/MH40/MH40_silver.jpg";

import MG20first from "../../img/color/MG20/MG20_first_color.jpg";
import MG20second from "../../img/color/MG20/MG20_second_color.jpg";
import MG20third from "../../img/color/MG20/MG20_third_color.jpg";
import MG20fourth from "../../img/color/MG20/MG20_ fourth._color.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
  {
    id: 1,
    img: product1,
    hImg: products1,
    name: "MW09 Black",
    description: "Active Noise-Cancelling True Wireless Earphones",
    price: "$349.00",
    colors: [
      { index: 1, src: MW09Black },
      { index: 2, src: MW09Blue },
      { index: 3, src: MW09G3 },
      { index: 4, src: MW09GD },
      { index: 5, src: MW09GR },
      { index: 6, src: MW09S5 },
    ],
  },
  {
    id: 2,
    img: product2,
    hImg: products2,
    name: "MW75",
    description: "Active Noise-Cancelling Wireless Headphones",
    price: "$599.00",
    colors: [
      { index: 1, src: MW75First },
      { index: 2, src: MW752nd },
      { index: 3, src: MW753rd },
      { index: 4, src: MW754th },
      { index: 5, src: MW755th },
      { index: 6, src: MW756th },
      { index: 7, src: MW757th },
    ],
  },
  {
    id: 3,
    img: product3,
    hImg: products3,
    name: "MH40 Wireless",
    description: "Wireless Over-Ear Headphones",
    price: "$399.00",
    colors: [
      { index: 1, src: MH40blackMetal },
      { index: 2, src: MH40gunMetalNavy },
      { index: 3, src: MH40blackSilver },
      { index: 4, src: MH40gunMetalBlack },
      { index: 5, src: MH40navySilver },
      { index: 6, src: MH40gbrownSilver },
      { index: 7, src: MH40silver },
    ],
  },
  {
    id: 4,
    img: product4,
    hImg: products4,
    name: "MG20",
    description: "Wireless Gaming Headphones",
    price: "$449.00",
    colors: [
      { index: 1, src: MG20first },
      { index: 2, src: MG20second },
      { index: 3, src: MG20third },
      { index: 4, src: MG20fourth },
    ],
  },
];

const Prod = (): // { img, hImg }: { img: StaticImageData | undefined; hImg: StaticImageData | undefined }
JSX.Element => {
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: number | null }>({});

  const handleColorClick = (slideId: number, colorIndex: number) => {
    setSelectedColors((prev) => ({
      ...prev,
      [slideId]: colorIndex,
    }));
  };

  const [isListHover, setIsListHover] = useState(false);

  return (
    <div className="w-full">
      <div className="text-slate-600 text-2xl ml-5">Featured Products</div>
      <div className="flex left-10 w-full">
        <Swiper spaceBetween={20} slidesPerView={1.4} className="flex justify-center">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col justify-center">
                <Image
                  src={isListHover ? slide.hImg ?? "" : slide.img ?? ""}
                  alt=""
                  onMouseOver={() => setIsListHover(true)}
                  onMouseOut={() => setIsListHover(false)}
                  className="w-full"
                />
                <div className="pl-5 flex flex-col gap-2">
                  <div className="text-sm font-bold">{slide.name}</div>
                  <div className="text-sm">{slide.description}</div>
                  <div className="text-sm font-bold">From {slide.price}</div>
                  <div className="flex">
                    {slide.colors.map((color) => (
                      <div
                        key={color.index}
                        onClick={() => handleColorClick(slide.id, color.index)}
                        className={`w-7 h-7 flex items-center justify-center cursor-pointer rounded-full ${
                          selectedColors[slide.id] === color.index ? "border-2 border-black" : ""
                        }`}
                      >
                        <Image
                          src={color.src}
                          alt={`Color ${color.index}`}
                          className="w-5 h-5 rounded-full border border-gray-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Prod;
