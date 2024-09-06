import Image from "next/image";
import { useCallback, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../img/svg/logo.svg";
import Search from "../../img/svg/search-outline.svg";
import useIsMd from "@/Hook/MediaMd";
import useIsMs from "@/Hook/MediaMs";
import Modal from "@/Hook/Modal";

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
                  className="fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-slate-50 opacity-50"
                  onClick={onClickToggleModal}
                ></div>
                <div className="fixed w-20 h-20 bg-white left-10 top-20"></div>
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
