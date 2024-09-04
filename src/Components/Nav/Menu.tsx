import Image from "next/image";

import downArrow from "../../img/svg/dropDown.svg";
import Logo from "../../img/svg/logo.svg";
import useIsMd from "@/Hook/MediaMd";

const Menu = () => {
  const isMd = useIsMd();

  return (
    <>
      {!isMd ? (
        <div className="flex flex-1 gap-7 items-center justify-center w-[70%]">
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
      ) : (
        <div className="flex justify-center w-[10rem] mm:w-[15rem]">
          <Image src={Logo as unknown as string} alt="" className="cursor-pointer" />
        </div>
      )}
    </>
  );
};

export default Menu;
