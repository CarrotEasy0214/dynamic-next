import Image from "next/image";
import craft1 from "../../img/crafts/sound.jpg";
import craft2 from "../../img/crafts/materials.jpg";
import craft3 from "../../img/crafts/design.jpg";

import craft1Mobile from "../../img/crafts/SoundMobile.webp";
import craft2Mobile from "../../img/crafts/MaterialsMobile.webp";
import craft3Mobile from "../../img/crafts/DesignMobile.jpg";

import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width: 999px)" });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
};

const CompanyGuide = () => {
  const isMobile = useIsMobile();
  return (
    <div>
      {!isMobile ? (
        <div className="bg-[#1a1a1a]">
          <div className="my-[1%] px-[5%] py-[5%]">
            <div className="flex justify-between p-[1%]">
              <div className="text-white text-[2.5rem] font-bold w-[30rem]">The Finest Sound and Craftsmanship</div>
              <div className="text-white text-end">
                <p>Introduce yourself to a world of immersive sound and</p>
                <p>unrivalled design, where every detail is thoughtfully</p>
                <p>considered to enhance your listening experience</p>
              </div>
            </div>
            <div className="flex p-[1%] gap-4">
              <div>
                <Image src={craft1} alt="" />
              </div>
              <div>
                <Image src={craft2} alt="" />
              </div>
              <div>
                <Image src={craft3} alt="" />
              </div>
            </div>
            <div className="flex justify-between text-white p-[1%]">
              <div className="font-semibold">
                <p>We bring an uncompromising approach to the design and</p>
                <p>performance of our products</p>
              </div>
              <div className="w-[8rem] h-[3rem] text-[#4c4c4c] bg-white leading-[3rem] text-center font-semibold">
                Learn More
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#1a1a1a] w-full">
          <div className="my-[1%]">
            <div className="p-[1%]">
              <div className="text-white text-[2.5rem] font-bold">The Finest Sound and Craftsmanship</div>
              <div className="text-white">
                Introduce yourself to a world of immersive sound and unrivalled design, where every detail is
                thoughtfully considered to enhance your listening experience
              </div>
            </div>
            <div className="flex justify-center flex-col p-[1%] gap-4 w-full">
              <div className="flex justify-center">
                <Image src={craft1Mobile} alt="" />
              </div>
              <div className="flex justify-center">
                <Image src={craft2Mobile} alt="" />
              </div>
              <div className="flex justify-center">
                <Image src={craft3Mobile} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-between text-white p-[1%]">
              <div className="font-semibold">
                <p>We bring an uncompromising approach to the design and</p>
                <p>performance of our products</p>
              </div>
              <div className="w-[8rem] h-[3rem] text-[#4c4c4c] bg-white leading-[3rem] text-center font-semibold">
                Learn More
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyGuide;
