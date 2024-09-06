import useIsMd from "@/Hook/MediaMd";
import { useState, useCallback } from "react";
import Modal from "../../Hook/Modal";

const MenuItem = ({
  title,
  menu1,
  menu2,
  menu3,
}: {
  title: string | number;
  menu1: string | any;
  menu2: string | any;
  menu3: string | any;
}): JSX.Element => {
  const isMd = useIsMd();
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return (
    <>
      {!isMd ? (
        <div className="flex flex-1 gap-16 justify-center text-center pt-24">
          <div className="flex flex-col">
            <div className="font-bold mb-4">{title}</div>
            <div className="mt-4">{menu1}</div>
            <div className="mt-4">{menu2}</div>
            <div className="mt-4">{menu3}</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 py-5">
          <div className="flex flex-col">
            <div className="font-bold mb-4 cursor-pointer transition-all" onClick={onClickToggleModal}>
              {title}
            </div>
            {isOpenModal && (
              <Modal onClickToggleModal={onClickToggleModal}>
                <div className="mt-4">{menu1}</div>
                <div className="mt-4">{menu2}</div>
                <div className="my-4">{menu3}</div>
              </Modal>
            )}
            <div className="border-b"></div>
          </div>
        </div>
      )}
    </>
  );
};

const MenuItems = [
  {
    MenuItemData: {
      title: "Help & Info",
      menu1: "Product Comparisons",
      menu2: "Product Support",
      menu3: "Shopping Info",
    },
  },
  {
    MenuItemData: {
      title: "About",
      menu1: "About Us",
      menu2: "News",
      menu3: "Contact Us",
    },
  },
  {
    MenuItemData: {
      title: "Gifting",
      menu1: "Corporate Gifting",
      menu2: "Digital Gift Card",
      menu3: "",
    },
  },
];

const TTTest = (): JSX.Element => {
  return (
    <>
      {MenuItems.map((props) => (
        <MenuItem
          title={props.MenuItemData.title}
          menu1={props.MenuItemData.menu1}
          menu2={props.MenuItemData.menu2}
          menu3={props.MenuItemData.menu3}
        />
      ))}
    </>
  );
};
export default TTTest;
