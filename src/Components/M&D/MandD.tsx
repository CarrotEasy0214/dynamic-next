import phone from "../../img/main/phone.jpg";
import MandDContents from "./MandDContents";
import ImageBox from "./ImageBox";
import useIsLg from "@/Hook/MediaLg";

const MandD = () => {
  const isLg = useIsLg();
  return (
    <>
      {!isLg ? (
        <div className="flex pl-28 pr-14 py-8">
          <div className="flex-1 flex items-center pl-14">
            <MandDContents></MandDContents>
          </div>
          <div className="flex-1 flex justify-center">
            <ImageBox cardImg={phone}></ImageBox>
          </div>
        </div>
      ) : (
        <div className="py-8 px-8">
          <div className="">
            <ImageBox cardImg={phone}></ImageBox>
          </div>
          <div className="flex px-4 items-center justify-center">
            <MandDContents></MandDContents>
          </div>
        </div>
      )}
    </>
  );
};

export default MandD;
