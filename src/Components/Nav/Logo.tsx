import Image from "next/image";
import { useCallback, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../img/svg/logo.svg";
import Search from "../../img/svg/search-outline.svg";
import useIsMd from "@/Hook/MediaMd";
import useIsMs from "@/Hook/MediaMs";

const LogoComp = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

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
          <div
            className="flex justify-start items-center cursor-pointer pl-6"
            onClick={toggleMenu}
            aria-expanded={isToggled}
          >
            <FontAwesomeIcon icon={faBars} size="lg" className="" />
            {!isMs ? "" : <Image src={Search as unknown as string} alt="" className="cursor-pointer block ml-2" />}
          </div>
        </div>
      )}
    </>
  );
};

export default LogoComp;
