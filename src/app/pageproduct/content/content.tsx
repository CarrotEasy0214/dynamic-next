import Image from "next/image";
import MW75First from "../../../img/color/MW75/MW75_first_color.jpg";

function Content() {
  return (
    <div>
      <div className="px-5">
        <div className="py-5 text-xl">MW75</div>
        <div className="font-extralight text-sm pb-3">
          Active Noise-Cancelling Wireless Headphones
        </div>
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
        <div className="text-sm pt-5">Collaboration Colors</div>
        <div className="bg-gray-200 h-[1px] w-full my-2"></div>
        <button className="cursor-pointer bg-gray-200 w-full text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700 border-2 border-gray-300">
          SOLD OUT
        </button>
      </div>
    </div>
  );
}

export default Content;
