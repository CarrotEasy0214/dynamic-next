import Image from "next/image";
import bugatti from "../../img/main/bugatti.jpg";
import buggattiMobile from "../../img/feature/MD_Bugatti_Homepage_Mobile-V1.webp";

const Collabo = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center flex-col relative">
        <Image src={bugatti} alt="" className="w-[100%] h-[100%] hidden ms:block" />
        <Image src={buggattiMobile} alt="" className="w-[100%] h-[100%] block ms:hidden" />
        <div className="absolute text-center w-full">
          <p className="text-[1.3rem] text-white font-semibold px-auto lg:text-[1.7rem]">BUGATTI</p>
          <p className="text-[1.7rem] text-white font-semibold lg:text-[2.5rem]">Uniting Performance And Luxury</p>
          <div className="flex justify-center mt-[5%]">
            <button className="bg-white cursor-pointer w-[10rem] h-[3.5rem] font-bold text-[#4c4c4c]">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collabo;