import useIsMd from "@/Hook/MediaMd";
import TTTest from "./TTTest";

import Image from "next/image";
import insta from "../../img/svg/instagram.svg";
import facebook from "../../img/svg/facebook.svg";
import youtube from "../../img/svg/youtube.svg";
import spotify from "../../img/svg/spotify.svg";
import twitter from "../../img/svg/twitter.svg";

const BlackCon = () => {
  const isMd = useIsMd();
  return (
    <div className="bg-black text-white">
      {!isMd ? (
        <div className="flex p-10 justify-between">
          <div className="flex-col flex-2 pl-10 pr-36 w-1/2 pt-12">
            <div className="text-[1.6rem] font-semibold">Sign up for early access, news and exclusive offers</div>
            <div className="my-4 border-white border-solid border-2">
              <input
                type="text"
                placeholder="Your email"
                className="w-full h-12 bg-black border-none pl-4 text-white"
              />
            </div>
            <div className="flex">
              <input type="checkbox" name="" id="" className="w-8 mr-4" />
              <div className="text-[0.8rem]">
                By checking this box you are agreeing to receive brand updates, promotions and content from Master &
                Dynamic.
              </div>
            </div>
            <button className="w-full h-12 mt-4 text-[#4c4c4c] font-bold bg-white ">SUBMIT</button>
          </div>
        </div>
      ) : (
        <div className="px-4 pt-6">
          <div className="pb-4">
            <div className="text-[1.3rem] font-semibold">Sign up for early access, news and exclusive offers</div>
            <div className="my-4 border-white border-solid border-2">
              <input type="text" placeholder="Your email" className="w-full h-12 border-none pl-4 text-white" />
            </div>
            <div className="flex">
              <input type="checkbox" name="" id="" className="w-10 mr-1 mb-9 accent-black border-white" />
              <div className="text-[0.8rem]">
                By checking this box you are agreeing to receive brand updates, promotions and content from Master &
                Dynamic.
              </div>
            </div>
            <button className="w-full h-12 mt-4 text-[#4c4c4c] font-bold bg-white ">SUBMIT</button>
          </div>
          <TTTest></TTTest>
          <div className="flex justify-center items-center gap-4 pr-[6%]">
            <div className="">
              <Image src={insta} alt="" className="w-10 h-10 bg-white rounded-full p-1 cursor-pointer" />
            </div>
            <div>
              <Image src={facebook} alt="" className="w-10 h-10 bg-white rounded-full p-1 cursor-pointer" />
            </div>
            <div>
              <Image src={youtube} alt="" className="w-10 h-10 bg-white rounded-full p-1 cursor-pointer" />
            </div>
            <div>
              <Image src={spotify} alt="" className="w-10 h-10 bg-white rounded-full p-1 cursor-pointer" />
            </div>
            <div>
              <Image src={twitter} alt="" className="w-10 h-10 bg-white rounded-full p-1 cursor-pointer" />
            </div>
          </div>
          <div className="pt-[6%]">
            <div className="flex flex-col items-center text-xs gap-5">
              <div>Do Not Sell / Share</div>
              <div>Notice At Collection</div>
              <div>Web Accessibility</div>
              <div>Personal Data Requests</div>
              <div>Privacy</div>
              <div>Terms</div>
            </div>
            <div className="my-4 border-b border-solid border-[#ddd]"></div>
            <div className="text-xs">
              <p>
                Designed and developed in New York City. P.O Box 20257 Greeley Square Station 4 East 27th street New
                York, NY 10001
              </p>
              <p>© 2024. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlackCon;
