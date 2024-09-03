import phone from "../../img/main/phone.jpg";
import MandDContents from "./MandDContents";
import ImageBox from "./ImageBox";

const MandD = () => {
  return (
    <div className="lg:flex pl-[3%] pr-[3%] py-[1%] w-[100%]">
      <div className="hidden lg:block flex-1 lg:flex justify-center items-center">
        <MandDContents></MandDContents>
      </div>
      <div className="lg:flex  flex-1">
        <ImageBox cardImg={phone}></ImageBox>
      </div>
      <div className="block lg:hidden flex-1">
        <MandDContents></MandDContents>
      </div>
    </div>
  );
};

export default MandD;
