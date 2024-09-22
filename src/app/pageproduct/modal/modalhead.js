"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import { Pagination, Parallax, FreeMode } from "swiper/modules";

const FFP = () => {
  return <div className="pl-5"></div>;
};

// components/Modal.js
import { useState } from "react";
import Link from "next/link";

const Modalhead = ({ isOpen, setIsOpen }) => {
  const [isOpen2, setIsOpen2] = useState(false);
  let link =
    "http://ec2-13-211-167-18.ap-southeast-2.compute.amazonaws.com/product";
  let name = "손";

  return (
    <div>
      <button
        onClick={() => setIsOpen2(true)}
        className="text-xl font-mono font-thin text-gray-700"
      >
        HEADPHONES{" >"}
      </button>

      {isOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex pt-[60%] px-5">
          <div className="bg-white w-96 h-[98%] rounded-lg p-10 relative">
            <button
              onClick={() => {
                setIsOpen2(false) && setIsOpen(false);
              }}
              className="absolute bottom-[105%] right-[45%] text-black h-12 w-12 rounded-full bg-white"
            >
              ✕
            </button>
            <div className="mt-5">
              <button
                onClick={() => setIsOpen2(false)}
                className=" text-black font-extralight text-sm"
              >
                {"< "}
                HEADPHONES
              </button>
              <Swiper
                modules={[Pagination, Parallax, FreeMode]}
                parallax={true}
                spaceBetween={10}
                className="w-full flex space-x-5"
                slidesPerView={1.6} //한 슬라이드에 보여줄 갯수
              >
                <SwiperSlide className=" flex text-center ">
                  <li className="p-3 ">
                    <Link
                      href={link}
                      onClick={() => {
                        setIsOpen(false) && setIsOpen2(false);
                      }}
                      className=""
                    >
                      <img
                        className=""
                        src="/img/hamburger/MW75S1-PDP_1350x1350_Hero_V2_1a4bd298-a68f-47ca-b050-b3cc3f47283e.webp"
                      ></img>
                      <div className="text-center">
                        <div className=" text-xs font-medium text-gray-700 ">
                          MW75
                        </div>
                        {/* <div className="flex justify-center items-center bg-black h-[1px] text-center w-10 "></div> */}
                        <div className="text-xs text-gray-600 block">
                          Active Noise-Canceling
                          <p>Wireless Headphones</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </SwiperSlide>
                <SwiperSlide className=" flex text-center ">
                  <li className="p-3">
                    <img
                      className=""
                      src="/img/hamburger/MH40G4-W2-PDP_1350x1350_Hero_V1_06e56a75-704e-47e6-a742-ef7a3709fefd.webp"
                    ></img>
                    <div className="text-center">
                      <div className=" text-xs font-medium text-gray-700 ">
                        MH40 WIRELESS
                      </div>
                      {/* <div className="flex justify-center items-center bg-black h-[1px] text-center w-10"></div> */}
                      <div className="text-xs text-gray-600">
                        Wireless Over-Ear <p>Headphones</p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide className=" flex text-center">
                  <li className="p-3">
                    <img
                      className=""
                      src="/img/hamburger/MG20GR8-PDP_1350x1350_Hero_V1_f2f54fb6-9d53-4bec-b64f-1477819cfd81.webp"
                    ></img>
                    <div className="text-center">
                      <div className=" text-xs font-medium text-gray-700 ">
                        MG20
                      </div>
                      {/* <div className="flex justify-center items-center bg-black h-[1px] text-center w-10"></div> */}
                      <div className="text-xs text-gray-600">
                        Wireless Gaming <p>Headphones</p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide className=" flex text-center mr-5">
                  <li className="p-3">
                    <img
                      className=""
                      src="/img/hamburger/Lambo_MW75_1350x1350_Hero_V1_7b519536-b15c-4720-8ad4-97778194be29.webp"
                    ></img>
                    <div className="text-center">
                      <div className=" text-xs font-medium text-gray-700 ">
                        MW75 Automobili Lamborghini
                      </div>
                      {/* <div className="flex justify-center items-center bg-black h-[1px] text-center w-10"></div> */}
                      <div className="text-xs text-gray-600">
                        Active Noise-Cancelling <p>Wireless Headphones</p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
              <ul className="flex overflow-scroll mt-2"></ul>
              <div className="font-semibold text-gray-500 mt-6">
                View All Headphones (14)
              </div>
              <div className="flex  mt-6 p-5 border-2 border-gray-900 mr-10 ">
                <div className="font-semibold text-xs text-gray-500 flex-1">
                  Compare Products
                </div>
                <svg
                  role="presentation"
                  focusable="false"
                  width="20"
                  height="20 "
                  viewBox="0 0 20 20"
                  fill="none"
                  class="icon icon-compare"
                >
                  <rect
                    x="0.5"
                    y="6.01758"
                    width="13.4828"
                    height="13.4828"
                    stroke="currentColor"
                  ></rect>
                  <rect
                    x="6.01709"
                    y="0.5"
                    width="13.4828"
                    height="13.4828"
                    stroke="currentColor"
                  ></rect>
                </svg>
              </div>
            </div>
            <div className="pt-[8rem]">
              <div className="flex justify-between">
                <div className="cursor-pointer text-gray-700 flex text-sm hover:text-black items-center ">
                  AT{" "}
                  <svg
                    role="presentation"
                    focusable="false"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                  >
                    <path
                      d="m1 1 4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
                <div className="cursor-pointer text-gray-700 flex text-sm hover:text-black items-center float-end">
                  <svg
                    className="min-w-8 cursor-pointer "
                    role="presentation"
                    focusable="false"
                    width="30"
                    height="30"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.25 13.75C18.3211 13.75 20 12.0711 20 10C20 7.92893 18.3211 6.25 16.25 6.25C14.1789 6.25 12.5 7.92893 12.5 10C12.5 12.0711 14.1789 13.75 16.25 13.75ZM21.25 10C21.25 12.7614 19.0114 15 16.25 15C13.4886 15 11.25 12.7614 11.25 10C11.25 7.23858 13.4886 5 16.25 5C19.0114 5 21.25 7.23858 21.25 10Z"
                      fill="#4A4A4A"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25 23.75V20.0855C25 19.1198 24.4641 18.3584 23.7023 18.105C21.9877 17.5349 19.3332 17.5 16.25 17.5C13.1668 17.5 10.5123 17.5349 8.79775 18.105C8.03589 18.3584 7.5 19.1198 7.5 20.0855V23.75L25 23.75ZM8.40332 16.9189C7.05549 17.3671 6.25 18.6651 6.25 20.0855L6.25 23.75C6.25 24.4404 6.80964 25 7.5 25H25C25.6904 25 26.25 24.4404 26.25 23.75V20.0855C26.25 18.6651 25.4445 17.3671 24.0967 16.9189C22.2968 16.3204 19.5052 16.25 16.25 16.25C12.9948 16.25 10.2032 16.3204 8.40332 16.9189Z"
                      fill="#4A4A4A"
                    ></path>
                  </svg>
                  Account
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modalhead;
