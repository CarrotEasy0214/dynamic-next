"use client";
import LogoComp from "./Logo";
import Menu from "./Menu";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between text-center items-center h-[3rem]">
        <LogoComp></LogoComp>
        <Menu></Menu>
        <UserMenu></UserMenu>
      </div>
    </div>
  );
};

export default NavBar;
