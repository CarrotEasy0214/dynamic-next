import Image from "next/image";
import { useCallback, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../img/svg/logo.svg";
import Search from "../../img/svg/search-outline.svg";
import useIsMd from "@/Hook/MediaMd";
import useIsMs from "@/Hook/MediaMs";
import Modal from "@/Hook/Modal";
import Info from "../../img/svg/person-outline.svg";
import DropArrow from "../../img/svg/dropDown.svg";

import product1 from "../../img/feature/MW09.png";
import product2 from "../../img/feature/MW75.png";
import product3 from "../../img/feature/MH401.webp";
import product4 from "../../img/feature/MG20.png";

import products1 from "../../img/product/MW09/MW09_Side.png";
import products2 from "../../img/product/MW75/MW75_Side.png";
import products3 from "../../img/product/MH40/MH40_Side.png";
import products4 from "../../img/product/MW75/MW75_Side.png";

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
  },
  {
    id: 2,
    img: product2,
    hImg: products2,
    name: "MW75",
    description: "Active Noise-Cancelling Wireless Headphones",
    price: "$599.00",
  },
  {
    id: 3,
    img: product3,
    hImg: products3,
    name: "MH40 Wireless",
    description: "Wireless Over-Ear Headphones",
    price: "$399.00",
  },
  {
    id: 4,
    img: product4,
    hImg: products4,
    name: "MG20",
    description: "Wireless Gaming Headphones",
    price: "$449.00",
  },
];

const LogoComp = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [isOpenSecondModal, setOpenSecondModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const onClickToggleSecondModal = useCallback(() => {
    setOpenSecondModal(!isOpenSecondModal);
  }, [isOpenSecondModal]);

  const isMd = useIsMd();
  const isMs = useIsMs();

  return (
    <>
      {!isMd ? (
        <div className="flex justify-center w-[30%]">
          <div className="flex justify-center w-[10rem] mm:w-[15rem]">
            <Image src={Logo as unknown as string} alt="" className="cursor-pointer" />
          </div>
        </div>
      ) : (
        <div className="flex w-[20%]">
          <div className="flex justify-start items-center cursor-pointer pl-2">
            <FontAwesomeIcon icon={faBars} size="lg" onClick={onClickToggleModal} />
            {isOpenModal && (
              <Modal onClickToggleModal={onClickToggleModal}>
                <div
                  className="fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-slate-400 opacity-50"
                  onClick={onClickToggleModal}
                ></div>
                <div className="fixed w-[19rem] h-[96%] bg-white left-5 top-5 rounded text-[#4c4c4c]">
                  <div className="pt-7 pb-3 pl-10" onClick={onClickToggleModal}>
                    <p className="pt-3 text-sm border w-12 h-12 rounded-full leading-12 ">X</p>
                  </div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]" onClick={onClickToggleSecondModal}>
                    HEADPHONES
                  </div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]">EARPHONES</div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]">ACCESSORIES</div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]">COLLABORATIONS</div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]">BLOG</div>
                  <div className="border-b w-[90%] mx-[5%] bottom-0"></div>
                  <div className="flex py-7 justify-between px-6">
                    <div>US</div>
                    <div className="flex gap-4">
                      <Image src={Info} alt=""></Image>
                      <div>Account</div>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
            {isOpenSecondModal && (
              <Modal onClickToggleModal={onClickToggleSecondModal}>
                <div
                  className="fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-slate-400 opacity-50"
                  onClick={onClickToggleSecondModal}
                ></div>
                <div className="fixed w-[19rem] bg-white left-5 top-5 rounded text-[#4c4c4c]">
                  <div className="pt-7 pb-3 pl-10" onClick={onClickToggleSecondModal}>
                    <p className="pt-3 text-sm border w-12 h-12 rounded-full leading-12 ">X</p>
                  </div>
                  <div className="py-2 pl-11 text-start text-[1rem]">Headphone</div>
                  <div>
                    <Swiper spaceBetween={20} slidesPerView={1.4} className="flex justify-center">
                      {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                          <div className="flex flex-col justify-center mb-5">
                            <Image src={slide.hImg ?? ""} alt="" className="w-full" />
                            <div className="pl-5 flex flex-col gap-2">
                              <div className="text-sm font-bold">{slide.name}</div>
                              <div className="text-sm">{slide.description}</div>
                              <div className="text-sm font-bold">From {slide.price}</div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div>View All Headphones(14)</div>
                    <div>Compare Products</div>
                    <div>
                      <div className="border-b w-[90%] mx-[5%] bottom-0"></div>
                    </div>
                    <div className="flex justify-between px-5">
                      <div className="flex gap-2">
                        <p>US</p>
                        <Image
                          src={DropArrow}
                          alt=""
                          className="w-4 flex items-center justify-center leading-4"
                        ></Image>
                      </div>
                      <div className="flex gap-2">
                        <Image src={Info} alt="" className="w-5"></Image>
                        <p>Account</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
            {!isMs ? "" : <Image src={Search as unknown as string} alt="" className="cursor-pointer block ml-2" />}
          </div>
        </div>
      )}
    </>
  );
};

export default LogoComp;
