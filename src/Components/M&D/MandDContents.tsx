// import Button from "./Button";

const MandDContents = () => {
  return (
    <div className="flex justify-center flex-col gap-6 flex-1 w-full">
      <div className="text-4xl text-[#4c4c4c] w-[95%] pt-[1%]">Get The Most Out Of Your Sound with M&D Connect</div>
      <div className="flex flex-col items-center w-[95%] text-sm">
        The M&D Connect App lets you download firmware updates, adjust settings, and change default preferences for your
        headset, all from your mobile device
      </div>
      <button className="text-white bg-[#4c4c4c] w-40 h-14 text-center items-center hover:bg-[#989898]">
        Learn More
      </button>
      {/* <Button className="text-white bg-[#4c4c4c] w-40 h-14 text-center items-center ml-[20%] hover:bg-[#989898]"></Button> */}
    </div>
  );
};

export default MandDContents;

// import { MouseEvent } from "react";

// interface IProps {
//   textColor: "white" | "black" | "red";
//   bgColor: "blue" | "gray" | "red" | "green" | "white" | "yellow" | "realRed" | "chatRed";
//   isBorder?: boolean;
//   children: string;
//   onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
// }

// const LongButton = ({ textColor, bgColor, children, isBorder = false, onClick }: IProps): JSX.Element => {
//   const textColorStorage = {
//     black: " text-black",
//     white: " text-white",
//     red: " text-red",
//   };
//   const bgColorStorage = {
//     blue: " bg-blueButton-long",
//     gray: " bg-cusGray",
//     red: " bg-redButton",
//     green: " bg-greenButton",
//     white: "bg-white",
//     yellow: " bg-yellow",
//     realRed: " bg-realRed",
//     chatRed: " bg-chatRed",
//   };
//   return (
//     <button
//       className={
//         "w-full text-sm text-center font-bold p-2 rounded-lg" +
//         textColorStorage[textColor] +
//         bgColorStorage[bgColor] +
//         `${isBorder ? " border border-cusGray" : ""}`
//       }
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default LongButton;
