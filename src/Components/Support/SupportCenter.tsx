import earphone from "../../img/main/earphone.jpg";
import ImageBox from "../M&D/ImageBox";
import MandDContents from "../M&D/MandDContents";

const SupportCenter = () => {
  return (
    <div className="lg:flex pl-[3%] pr-[3%] py-[1%] w-[100%]">
      <div className="lg:flex flex-1">
        <ImageBox cardImg={earphone}></ImageBox>
      </div>
      <div className="flex-1 flex justify-center pl-[2%]">
        <MandDContents></MandDContents>
      </div>
    </div>
    // <div>
    //   <div className="pl-[3%] pr-[3%] lg:flex-col-reverse">
    //     <div className="lg:flex bg-[#f3f2f2]">
    //       <ImageBox cardImg={earphone}></ImageBox>

    //       <MandDContents></MandDContents>
    //     </div>
    //     {/* <div className="bg-[#f3f2f2] flex-1">
    //       <div className="text-[2rem] text-[#585858] font-semibold">
    //         Need support? We're here to assist you every step of the way
    //       </div>
    //       <div className="font-semibold py-4">
    //         Access product support and frequently asked questions in our Support Center
    //       </div>
    //       <button className="bg-[#222222] text-white w-[12rem] h-[3rem] text-[0.9rem] font-semibold">
    //         Support Center
    //       </button>
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default SupportCenter;
