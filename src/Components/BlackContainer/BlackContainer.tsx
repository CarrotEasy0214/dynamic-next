import Image from "next/image";
import insta from "../../img/svg/instagram.svg";
import facebook from "../../img/svg/facebook.svg";
import youtube from "../../img/svg/youtube.svg";
import spotify from "../../img/svg/spotify.svg";
import twitter from "../../img/svg/twitter.svg";

const BlackContainer = () => {
  return (
    <div className="bg-black text-white pb-12">
      <div className="flex">
        <div className="w-[22rem] px-[10%] py-[5%] flex-1 flex flex-col justify-center">
          <div className="text-[1.6rem] font-semibold">Sign up for early access, news and exclusive offers</div>
          <div className="my-4 border-white border-solid border-2">
            <input type="text" placeholder="Your email" className="w-full h-12 bg-black border-none pl-4 text-white" />
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
        <div className="flex flex-2 gap-12 p-12 text-[1.1rem] text-center px-[10%] py-[7%]">
          <div className="flex-1">
            <div className="font-bold mb-4">Help & Info</div>
            <div className="mt-4">Product Comparisons</div>
            <div className="mt-4">Product Support</div>
            <div className="mt-4">Shopping Info</div>
          </div>
          <div className="flex-1">
            <div className="font-bold mb-4">About</div>
            <div className="mt-4">About Us</div>
            <div className="mt-4">News</div>
            <div className="mt-4">Contact Us</div>
          </div>
          <div className="flex-1">
            <div className="font-bold mb-4">Gifting</div>
            <div className="mt-4">Corporate Gifting</div>
            <div className="mt-4">Digital Gift Card</div>
          </div>
        </div>
      </div>
      <div className="flex py-10">
        <div className="flex justify-center flex-col flex-1 px-[10%]">
          <div className="flex justify-between">
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
        <div className="flex justify-center items-center gap-4 flex-1">
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
