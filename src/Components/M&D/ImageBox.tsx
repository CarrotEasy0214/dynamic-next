import Image from "next/image";

const ImageBox = ({ cardImg }: any): JSX.Element => {
  return <Image src={cardImg} alt="" className="w-full h-full" />;
};

// const ImageBox = (): JSX.Element => {
//   return <Images cardImg={phone}></Images>;
// };

export default ImageBox;
