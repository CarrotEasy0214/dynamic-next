import useIsLg from "@/Hook/MediaLg";
import earphone from "../../img/main/earphone.jpg";
import ImageBox from "../M&D/ImageBox";
import MandDContents from "../M&D/MandDContents";

const SupportCenter = () => {
  const isLg = useIsLg();
  return (
    <>
      {!isLg ? (
        <div className="flex pl-28 pr-14 py-8">
          <div className="flex-1 flex justify-center">
            <ImageBox cardImg={earphone}></ImageBox>
          </div>
          <div className="flex-1 flex items-center bg-gray-200 pl-14">
            <MandDContents></MandDContents>
          </div>
        </div>
      ) : (
        <div className="py-8 px-8">
          <div className="">
            <ImageBox cardImg={earphone}></ImageBox>
          </div>
          <div className="flex px-4 py-8 items-center bg-gray-200">
            <MandDContents></MandDContents>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportCenter;
