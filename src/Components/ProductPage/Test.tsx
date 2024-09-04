import Image from "next/image";
import { StaticImageData } from "next/image";

import product1 from "../../img/feature/MW09.png";
import product2 from "../../img/feature/MW75.png";
import product3 from "../../img/feature/MH401.webp";
import product4 from "../../img/feature/MG20.png";
import products1 from "../../img/product/MW09/MW09_Side.png";
import products2 from "../../img/product/MW75/MW75_Side.png";
import products3 from "../../img/product/MH40/MH40_Side.png";
import products4 from "../../img/product/MW75/MW75_Side.png";
import MW09Black from "../../img/color/MW09BK1-Swatch_V2.png";
import MW09Blue from "../../img/color/MW09BL4-Swatch_V2.png";
import MW09G3 from "../../img/color/MW09G3-Swatch_V2.png";
import MW09GD from "../../img/color/MW09GD10-Swatch_V2.png";
import MW09GR from "../../img/color/MW09GR9-Swatch_V2.png";
import MW09S5 from "../../img/color/MW09S5-Swatch_V2.png";

import { useState } from "react";

const Colors = [
  {
    MW09Colors: {
      MW09Black: MW09Black,
      MW09Blue: MW09Blue,
      MW09G3: MW09G3,
      MW09GD: MW09GD,
      MW09GR: MW09GR,
      MW09S5: MW09S5,
    },
  },
];

const Color = ({
  MW09Black,
  MW09Blue,
  MW09G3,
  MW09GD,
  MW09GR,
  MW09S5,
}: {
  MW09Black: StaticImageData | undefined;
  MW09Blue: StaticImageData | undefined;
  MW09G3: StaticImageData | undefined;
  MW09GD: StaticImageData | undefined;
  MW09GR: StaticImageData | undefined;
  MW09S5: StaticImageData | undefined;
}): JSX.Element => {
  return (
    <div className="px-[15%] pt-[2%] flex gap-3">
      <Image src={MW09Black ?? ""} alt="" className="w-5 h-5"></Image>
      <Image src={MW09Blue ?? ""} alt="" className="w-5 h-5"></Image>
      <Image src={MW09G3 ?? ""} alt="" className="w-5 h-5"></Image>
      <Image src={MW09GD ?? ""} alt="" className="w-5 h-5"></Image>
      <Image src={MW09GR ?? ""} alt="" className="w-5 h-5"></Image>
      <Image src={MW09S5 ?? ""} alt="" className="w-5 h-5"></Image>
    </div>
  );
};

const Item = ({
  title,
  content,
  price,
  image,
  hImage,
}: {
  title: string | number;
  content: string;
  price: string | number;
  image: StaticImageData | undefined;
  hImage: StaticImageData | undefined;
}): JSX.Element => {
  const [isListHover, setIsListHover] = useState(false);
  return (
    <div className="flex-1">
      <div className="">
        <Image
          src={isListHover ? hImage ?? "" : image ?? ""}
          alt=""
          onMouseOver={() => setIsListHover(true)}
          onMouseOut={() => setIsListHover(false)}
          className="transition-all"
        />
        <div className="text-slate-600">
          <div className="flex justify-between pt-[10%] px-[15%] text-slate-600">
            <div className="text-xl font-bold">{title}</div>
            <div className="flex items-end justify-center font-bold">{price}</div>
          </div>
          <div className="px-[15%] pt-[2%]">{content}</div>
          {Colors.map((props) => (
            <Color
              MW09Black={props.MW09Colors.MW09Black}
              MW09Blue={props.MW09Colors.MW09Blue}
              MW09G3={props.MW09Colors.MW09G3}
              MW09GD={props.MW09Colors.MW09GD}
              MW09GR={props.MW09Colors.MW09GR}
              MW09S5={props.MW09Colors.MW09S5}
            ></Color>
          ))}
        </div>
      </div>
    </div>
  );
};

const Items = [
  {
    ItemData: {
      title: "MW09",
      content: "Active Noise-Cancelling True Wireless Earphones",
      price: "From $ 349.00",
      image: product1,
      hImage: products1,
      mwblck: MW09Black,
      mwblue: MW09Blue,
      mwg3: MW09G3,
      mwgd: MW09GD,
      mwgr: MW09GR,
      mws5: MW09S5,
    },
  },
  {
    ItemData: {
      title: "MW11",
      content: "Active Noise-Cancelling True Wireless Earphones1",
      price: "From $ 448.00",
      image: product2,
      hImage: products2,
      mwblck: MW09Black,
      mwblue: MW09Blue,
      mwg3: MW09G3,
      mwgd: MW09GD,
      mwgr: MW09GR,
      mws5: MW09S5,
    },
  },
  {
    ItemData: {
      title: "MW12",
      content: "Active Noise-Cancelling True Wireless Earphones2",
      price: "From $ 549.00",
      image: product3,
      hImage: products3,
      mwblck: MW09Black,
      mwblue: MW09Blue,
      mwg3: MW09G3,
      mwgd: MW09GD,
      mwgr: MW09GR,
      mws5: MW09S5,
    },
  },
  {
    ItemData: {
      title: "MW13",
      content: "Active Noise-Cancelling True Wireless Earphones3",
      price: "From $ 649.00",
      image: product4,
      hImage: products4,
      mwblck: MW09Black,
      mwblue: MW09Blue,
      mwg3: MW09G3,
      mwgd: MW09GD,
      mwgr: MW09GR,
      mws5: MW09S5,
    },
  },
];

const Test = (): JSX.Element => {
  return (
    <div className="flex">
      {Items.map((props) => (
        <Item
          title={props.ItemData.title}
          content={props.ItemData.content}
          price={props.ItemData.price}
          image={props.ItemData.image}
          hImage={props.ItemData.hImage}
        />
      ))}
    </div>
  );
};
export default Test;
