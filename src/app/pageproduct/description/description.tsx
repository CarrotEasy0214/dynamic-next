import Image from "next/image";
import blue from "../../../img/feature/Icon_Bluetooth.svg";

function Description() {
  return (
    <div className="p-5">
      <div className="pt-5 flex items-center text-xs text-gray-600">
        <Image src={blue} alt=""></Image>
        ANC
      </div>
      <div className=" flex items-center text-xs text-gray-600">
        <Image src={blue} alt=""></Image>
        Anodized aluminum, tempered glass and lambskin leather
      </div>
      <div className=" flex items-center text-xs text-gray-600">
        <Image src={blue} alt=""></Image>
        40mm beryllium drivers
      </div>
      <div className=" flex items-center text-xs text-gray-600">
        <Image src={blue} alt=""></Image>
        32 hours of listening
      </div>
      <div className="flex items-center text-xs text-gray-600">
        <Image src={blue} alt=""></Image>
        Bluetooth® 5.1
      </div>
      <div className="flex items-center text-xs text-gray-600">
        <Image src={blue} alt=""></Image>4 beamforming microphones
      </div>
      <div className="py-10 text-center text-xs text-gray-400">
        Not sure if this is the best headset for you?
        <div className="after:justify-center after:content-'' after:w-32 after:h-0.5 after:bg-black after:absolute after:right-28 hover:after:hidden ">
          Compare Headphones
          <div className=" bg-gray-200 h-[1px] w-40  "></div>
        </div>
      </div>
      <div className="grid grid-flow-col justify-stretch">
        <button className="font-light hover:text-black text-gray-600 text-sm hover:after:content-'' hover:after:w-28 hover:after:h-0.5 hover:after:bg-black hover:after:absolute hover:after:mt-4 hover:after:block">
          Feature
        </button>
        <button className="font-light hover:text-black text-gray-600 text-sm hover:after:content-'' hover:after:w-24 hover:after:h-0.5 hover:after:bg-black hover:after:absolute hover:after:mt-4 hover:after:block">
          Tech
          <div>Specs</div>
        </button>
        <button className="font-light hover:text-black text-gray-600 text-sm hover:after:content-'' hover:after:w-28 hover:after:h-0.5 hover:after:bg-black hover:after:absolute hover:after:mt-4 hover:after:block">
          Support
        </button>
      </div>
    </div>
  );
}

export default Description;
