import Image from "next/image";
import card1 from "../../img/feature/MH40card.jpg";
import card2 from "../../img/feature/MW09card.jpg";
import card3 from "../../img/feature/MW75card.jpg";

import card1Mobile from "../../img/feature/Card1_Mobile.webp";
import card2Mobile from "../../img/feature/Card2_Mobile.webp";
import card3Mobile from "../../img/feature/Card3_Mobile.webp";
import useIsMs from "@/Hook/MediaMs";

const Card = () => {
  const isMs = useIsMs();
  return (
    <>
      {!isMs ? (
        <div className="my-10">
          <div className="pb-[0.5%] px-[4%]">
            <div className="ms:flex justify-between gap-[1.5%] pb-[1.5%]">
              <div className="cursor-pointer relative">
                <Image src={card1} alt="" className="w-[100%] h-[100%]" />
                <div className="absolute bottom-[8%] left-[7%]">
                  <div className="text-white w-30 mb-2 lg:text-base text-sm font-bold">MH40 Wireless</div>
                  <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
                  <div className="text-white lg:text-xl text-lg font-semibold mb-[2.5%] w-[95%]">
                    Up to 30-hours of continuous playtime, unlimited style
                  </div>
                  <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold text-[#4c4c4c]">
                    LEARN MORE
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative mt-2 ms:mt-0">
                <Image src={card2} alt="" className="w-[100%] h-[100%]" />
                <div className="absolute bottom-[8%] left-[7%]">
                  <div className="text-white w-30 mb-2 lg:text-base text-sm font-bold">MH40 Wireless</div>
                  <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
                  <div className="text-white lg:text-xl text-lg font-semibold mb-[2.5%] w-[95%]">
                    Up to 30-hours of continuous playtime, unlimited style
                  </div>
                  <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold text-[#4c4c4c]">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer relative">
              <Image src={card3} alt="" className="w-[100%] h-[100%]" />
              <div className="absolute bottom-[8%] left-[7%]">
                <div className="text-white w-30 mb-2 lg:text-base text-sm font-bold">MH40 Wireless</div>
                <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
                <div className="text-white lg:text-xl text-lg font-semibold mb-[2.5%] w-[95%]">
                  Up to 30-hours of continuous playtime, unlimited style
                </div>
                <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold text-[#4c4c4c]">
                  LEARN MORE
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-10">
          <div className="pb-[0.5%] px-[4%]">
            <div className="ms:flex justify-between gap-[1.5%] pb-[1.5%]">
              <div className="cursor-pointer relative">
                <Image src={card1Mobile} alt="" className="w-[100%] h-[100%]" />
                <div className="absolute bottom-[8%] left-[7%]">
                  <div className="text-white w-30 mb-2 lg:text-base text-sm font-bold">MH40 Wireless</div>
                  <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
                  <div className="text-white lg:text-xl text-lg font-semibold mb-[2.5%] w-[95%]">
                    Up to 30-hours of continuous playtime, unlimited style
                  </div>
                  <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold text-[#4c4c4c]">
                    LEARN MORE
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative mt-2 ms:mt-0">
                <Image src={card2Mobile} alt="" className="w-[100%] h-[100%]" />
                <div className="absolute bottom-[8%] left-[7%]">
                  <div className="text-white w-30 mb-2 lg:text-base text-sm font-bold">MH40 Wireless</div>
                  <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
                  <div className="text-white lg:text-xl text-lg font-semibold mb-[2.5%] w-[95%]">
                    Up to 30-hours of continuous playtime, unlimited style
                  </div>
                  <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold text-[#4c4c4c]">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer relative">
              <Image src={card3Mobile} alt="" className="w-[100%] h-[100%]" />
              <div className="absolute bottom-[8%] left-[7%]">
                <div className="text-white w-30 mb-2 lg:text-base text-sm font-bold">MH40 Wireless</div>
                <div className="border-b-[0.5px] border-solid border-white w-[18%] mb-[2.5%]"></div>
                <div className="text-white lg:text-xl text-lg font-semibold mb-[2.5%] w-[95%]">
                  Up to 30-hours of continuous playtime, unlimited style
                </div>
                <div className="bg-white w-[9.786875rem] leading-[3.375rem] text-center font-semibold text-[#4c4c4c]">
                  LEARN MORE
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
