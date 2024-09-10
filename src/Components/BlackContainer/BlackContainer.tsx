import Image from "next/image";
import insta from "../../img/svg/instagram.svg";
import facebook from "../../img/svg/facebook.svg";
import youtube from "../../img/svg/youtube.svg";
import spotify from "../../img/svg/spotify.svg";
import twitter from "../../img/svg/twitter.svg";
import FooterMenu from "./FooterMenu";

const BlackContainer = () => {
  return (
    <div className="bg-black text-white pb-12">
      <FooterMenu></FooterMenu>
      <div className="md:flex justify-between py-10 text-sm">
        <div className="flex justify-center flex-col">
          <div className="flex gap-6">
            <div>Do Not Sell / Share</div>
            <div>Notice At Collection</div>
            <div>Web Accessibility</div>
            <div>Personal Data Requests</div>
            <div>Privacy</div>
            <div>Terms</div>
          </div>
          <div className="my-4 border-b border-solid border-[#ddd]"></div>
          <div>
            <p>
              Designed and developed in New York City. P.O Box 20257 Greeley Square Station 4 East 27th street New York,
              NY 10001
            </p>
            <p>© 2024. All Rights Reserved.</p>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default BlackContainer;
