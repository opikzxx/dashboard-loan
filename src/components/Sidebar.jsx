import React from "react";
import logo from "../assets/logo.png";
import ButtonSidebar from "./elements/ButtonSidebar";
import { AiOutlineHome } from "react-icons/ai";
import { BsCardText, BsBag, BsBank } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-md flex-none w-14 md:w-[270px] h-screen">
      <div className="flex justify-center items-center mb-10">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-2 text-left px-2">
        <ButtonSidebar icon={<AiOutlineHome size={35} />}>
          Dashboard
        </ButtonSidebar>
        <ButtonSidebar icon={<BsCardText size={35} />}>Contact</ButtonSidebar>
        <ButtonSidebar icon={<MdOutlineAttachMoney size={35} />}>
          Loan
        </ButtonSidebar>
        <ButtonSidebar icon={<BsBag size={35} />}>Market</ButtonSidebar>
        <ButtonSidebar icon={<BsBank size={35} />}>Bank</ButtonSidebar>
      </div>
    </div>
  );
};

export default Sidebar;
