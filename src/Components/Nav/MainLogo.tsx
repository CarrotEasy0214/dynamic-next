"use client";

import Logo from "../../img/svg/logo.svg";
import Image from "next/image";

const MainLogo = () => {
  return (
    <div className="bg-red-500">
      <Image src={Logo} alt=""></Image>
    </div>
  );
};

export default MainLogo;
