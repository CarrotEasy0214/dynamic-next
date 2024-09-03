"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import Logo from "../../img/svg/logo.svg";
import Search from "../../img/svg/search-outline.svg";
import Myinfo from "../../img/svg/person-outline.svg";
import Cart from "../../img/svg/bag-outline.svg";
import downArrow from "../../img/svg/dropDown.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between text-center items-center">
        <div className="flex justify-center w-[30%]">
          <div
            className="flex justify-start items-center cursor-pointer md:hidden pl-6"
            onClick={toggleMenu}
            aria-expanded={isToggled}
          >
            <FontAwesomeIcon icon={faBars} size="lg" className="" />
            <Image src={Search as unknown as string} alt="" className="cursor-pointer block ms:hidden ml-2" />
          </div>
          <div className="flex justify-center w-[10rem] mm:w-[20rem]">
            <Image src={Logo as unknown as string} alt="" className="cursor-pointer" />
          </div>
        </div>
        <div
          className={`md:flex md:flex-1 gap-7 items-center justify-center w-[70%] ${
            isToggled ? "flex flex-col w-2/5 bg-white absolute top-0 left-5 p-4" : "hidden"
          }`}
        >
          <div className="flex items-center gap-1 cursor-pointer font-bold text-sm text-gray-600">
            <p>HEADPHONES</p>
            <Image
              src={downArrow as unknown as string}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center gap-1 cursor-pointer font-bold text-sm text-gray-600">
            <p>EARPHONES</p>
            <Image
              src={downArrow as unknown as string}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center gap-1 cursor-pointer font-bold text-sm text-gray-600">
            <p>ACCESSORIES</p>
            <Image
              src={downArrow as unknown as string}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <div className="flex items-center cursor-pointer font-bold text-sm text-gray-600">
            <p>COLLABORATIONS</p>
          </div>
          <div className="flex items-center cursor-pointer font-bold text-sm text-gray-600">
            <p>BLOG</p>
          </div>
        </div>
        <div className="xxl:mr-20 xxl:pr-20 flex justify-center gap-4 items-center w-[20%]">
          <Image src={Search as unknown as string} alt="" className="cursor-pointer hidden ms:block" />
          <Image src={Myinfo as unknown as string} alt="" className="cursor-pointer" />
          <Image src={Cart as unknown as string} alt="" className="cursor-pointer mr-1" />
          <div className="lg:flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600 hidden lg:block">
            <p>US</p>
            <Image
              src={downArrow as unknown as string}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <button className="bg-black text-white px-6 py-2.5 text-sm my-3 font-bold hidden xl:block">Support</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
