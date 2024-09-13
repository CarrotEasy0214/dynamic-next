// import Button from "./Button";

const MandDContents = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-[1.5rem] lg:text-[2rem] text-[#4c4c4c] w-[100%] pt-[1%] text-center ms:text-start">
        <p className="w-[100%] lg:w-[80%]">Get The Most Out Of Your Sound with M&D Connect</p>
      </div>
      <div className="w-[100%] text-sm text-center ms:text-start">
        <p className="w-[100%] lg:w-[80%]">
          The M&D Connect App lets you download firmware updates, adjust settings, and change default preferences for
          your headset, all from your mobile device
        </p>
      </div>
      <div className="w-[100%] flex ms:justify-start justify-center">
        <button className="text-white bg-[#4c4c4c] w-36 h-12 text-center items-center hover:bg-[#989898] text-sm font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MandDContents;
