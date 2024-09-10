import useIsMd from "@/Hook/MediaMd";
import { useState, useCallback } from "react";
// import Modal from "../../Hook/Modal";
import TTTest from "./TTTest";

const FooterMenu = () => {
  const isMd = useIsMd();
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return (
    <>
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
          <TTTest></TTTest>
        </div>
      ) : (
        <div className="p-10 justify-between">
          <div className="w-3/4 pb-4">
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
          <TTTest></TTTest>
        </div>
      )}
    </>
  );
};

export default FooterMenu;
