import Image from "next/image";
import Search from "../../img/svg/search-outline.svg";
import Myinfo from "../../img/svg/person-outline.svg";
import Cart from "../../img/svg/bag-outline.svg";
import downArrow from "../../img/svg/dropDown.svg";
import useIsXl from "@/Hook/MediaXl";
import useIsLg from "@/Hook/MediaLg";
import useIsMs from "@/Hook/MediaMs";

const UserMenu = () => {
  const isXl = useIsXl();
  const isLg = useIsLg();
  const isMs = useIsMs();
  return (
    <>
      {!isXl ? (
        <div className="xxl:mr-20 xxl:pr-20 flex justify-center gap-4 items-center w-[20%]">
          <Image src={Search as unknown as string} alt="" className="cursor-pointer" />
          <Image src={Myinfo as unknown as string} alt="" className="cursor-pointer" />
          <Image src={Cart as unknown as string} alt="" className="cursor-pointer mr-1" />
          <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
            <p>US</p>
            <Image
              src={downArrow as unknown as string}
              alt="Dropdown arrow"
              className="w-3 flex justufy-center pt-0.5"
            />
          </div>
          <button className="bg-black text-white px-6 py-2.5 text-sm my-3 font-bold">Support</button>
        </div>
      ) : (
        <div className="xxl:mr-20 xxl:pr-20 flex justify-center gap-4 items-center w-[20%]">
          {!isMs ? <Image src={Search as unknown as string} alt="" className="cursor-pointer" /> : ""}
          <Image src={Myinfo as unknown as string} alt="" className="cursor-pointer" />
          <Image src={Cart as unknown as string} alt="" className="cursor-pointer mr-1" />
          {!isLg ? (
            <div className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-600">
              <p>US</p>
              <Image
                src={downArrow as unknown as string}
                alt="Dropdown arrow"
                className="w-3 flex justufy-center pt-0.5"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default UserMenu;
