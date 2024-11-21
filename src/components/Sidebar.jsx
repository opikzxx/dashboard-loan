import React, { useState } from "react";
import logo from "../assets/logo.png";
import ButtonSidebar from "./elements/ButtonSidebar";
import { AiOutlineHome } from "react-icons/ai";
import { BsCardText, BsChevronRight } from "react-icons/bs";
import { FaRegFile } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiBank } from "react-icons/gi";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"; // Import arrow icons
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle dropdown state when clicking on the "Product" button
  const toggleProductDropdown = () => {
    setIsProductOpen((prevState) => !prevState); // toggle the current state
  };

  return (
    <div className="bg-white shadow-md fixed top-0 left-0 w-14 md:w-[270px] h-screen overflow-y-auto z-50">
      <div className="flex justify-center items-center mb-10">
        <img src={logo} alt="logo" className="w-18 h-18" />
      </div>
      <div className="flex flex-col gap-1 text-left px-2">
        <ButtonSidebar icon={<AiOutlineHome size={30} />}>
          Dashboard
        </ButtonSidebar>
        <ButtonSidebar icon={<BsCardText size={30} />}>Contact</ButtonSidebar>
        <ButtonSidebar icon={<FaRegFile size={30} />}>Loan</ButtonSidebar>

        {/* Product with dropdown */}
        <div className="">
          <ButtonSidebar
            icon={<HiOutlineShoppingBag size={30} />}
            onClick={toggleProductDropdown}
          >
            <div className="flex justify-between items-center w-full">
              <span>Product</span>
              {isProductOpen ? (
                <BsChevronUp size={20} className="ml-14" /> // Up arrow when dropdown is open
              ) : (
                <BsChevronDown size={20} className="ml-14" /> // Down arrow when dropdown is closed
              )}
            </div>
          </ButtonSidebar>

          {/* Dropdown menu */}
          {isProductOpen && (
            <div className="pl-14 mt-2">
              <ButtonSidebar onClick={() => navigate("/product")}>
                Bank Product
              </ButtonSidebar>
              <ButtonSidebar>Product</ButtonSidebar>
              <ButtonSidebar>Category Product</ButtonSidebar>
            </div>
          )}
        </div>

        <ButtonSidebar icon={<GiBank size={30} />}>Bank</ButtonSidebar>
        <ButtonSidebar icon={<BsSpeedometer2 size={30} />}>
          Credit Scoring
        </ButtonSidebar>
        <ButtonSidebar icon={<FaRegCircleQuestion size={30} />}>
          {`FAQ's`}
        </ButtonSidebar>
        <ButtonSidebar icon={<LiaLayerGroupSolid size={30} />}>
          Pipeline
        </ButtonSidebar>
        <ButtonSidebar icon={<LiaLayerGroupSolid size={30} />}>
          Pipeline Developer
        </ButtonSidebar>
        <div className="block md:hidden">
          <div className="flex justify-center items-center text-white font-bold bg-blue-800 w-10 h-10 md:w-12 md:h-12 rounded-full p-3">
            <BsChevronRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
