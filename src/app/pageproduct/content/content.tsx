"use client";

import Image from "next/image";
import MW75First from "../../../img/color/MW75/MW75_first_color.jpg";
import { useCallback, useState } from "react";
import Modal from "@/Hook/Modal";

function Content() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return (
    <div>
      <div className="px-5">
        <div className="py-5 text-xl">MW75</div>
        <div className="font-extralight text-sm pb-3">Active Noise-Cancelling Wireless Headphones</div>
        <div className="flex pb-7">
          <div className="text-lg font-medium text-gray-600 pr-1">€629,00</div>
          <div className=" flex text-xs border-gray-700 border-[1px]  rounded-md bg-gray-700 text-white items-center justify-center">
            Sold out
          </div>
        </div>
        <div className="text-sm">Color (Silver Metal / Grey Leather)</div>
        <div className="bg-gray-200 h-[1px] w-full my-2"></div>
        <div className="flex space-x-1">
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <Image src={MW75First} alt="" className="rounded-full"></Image>
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <Image src={MW75First} alt="" className="rounded-full"></Image>
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <Image src={MW75First} alt="" className="rounded-full"></Image>
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <Image src={MW75First} alt="" className="rounded-full"></Image>
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <Image src={MW75First} alt="" className="rounded-full"></Image>
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <Image src={MW75First} alt="" className="rounded-full"></Image>
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <Image src={MW75First} alt="" className="rounded-full"></Image>
          </div>
        </div>
        <div className="text-sm pt-5 transition-all border-b my-2 py-2" onClick={onClickToggleModal}>
          Collaboration Colors
        </div>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <div>MW75 Automobili Lamborghini</div>
            <div>MW75 BUGATTI</div>
            <div>MW75 Mercedes-AMG</div>
          </Modal>
        )}
        <div className="border border-gray-500 rounded p-3 flex justify-between my-2">
          <div>Add Engraving</div>
          <div>$30</div>
        </div>
        <button className="text-white bg-gray-700 w-full py-5 font-bold">ADD TO CART</button>
      </div>
    </div>
  );
}

export default Content;
