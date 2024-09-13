import Image from "next/image";
import { useCallback, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../img/svg/logo.svg";
import Search from "../../img/svg/search-outline.svg";
import useIsMd from "@/Hook/MediaMd";
import useIsMs from "@/Hook/MediaMs";
import Modal from "@/Hook/Modal";
import Info from "../../img/svg/person-outline.svg";

const LogoComp = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const isMd = useIsMd();
  const isMs = useIsMs();

  return (
    <>
      {!isMd ? (
        <div className="flex justify-center w-[30%]">
          <div className="flex justify-center w-[10rem] mm:w-[15rem]">
            <Image src={Logo as unknown as string} alt="" className="cursor-pointer" />
          </div>
        </div>
      ) : (
        <div className="flex w-[20%]">
          <div className="flex justify-start items-center cursor-pointer pl-6">
            <FontAwesomeIcon icon={faBars} size="lg" onClick={onClickToggleModal} />
            {isOpenModal && (
              <Modal onClickToggleModal={onClickToggleModal}>
                <div
                  className="fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-slate-400 opacity-50"
                  onClick={onClickToggleModal}
                ></div>
                <div className="fixed w-[19rem] h-[96%] bg-white left-5 top-5 rounded text-[#4c4c4c]">
                  <div className="pt-7 pb-3 pl-10" onClick={onClickToggleModal}>
                    <p className="pt-3 text-sm border w-12 h-12 rounded-full leading-12 ">X</p>
                  </div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]">HEADPHONES</div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]">EARPHONES</div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]">ACCESSORIES</div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]">COLLABORATIONS</div>
                  <div className="py-2 pl-11 text-start text-[1.3rem]">BLOG</div>
                  <div className="border-b w-[90%] mx-[5%] bottom-0"></div>
                  <div className="flex py-7 justify-between px-6">
                    <div>US</div>
                    <div className="flex gap-4">
                      <Image src={Info} alt=""></Image>
                      <div>Account</div>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
            {!isMs ? "" : <Image src={Search as unknown as string} alt="" className="cursor-pointer block ml-2" />}
          </div>
        </div>
      )}
    </>
  );
};

export default LogoComp;
