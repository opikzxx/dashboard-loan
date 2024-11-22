import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../assets/logo.png";
import ButtonSidebar from "./elements/ButtonSidebar";
import { AiOutlineHome } from "react-icons/ai";
import {
  BsCardText,
  BsChevronRight,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import { FaRegFile } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiBank } from "react-icons/gi";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { LiaLayerGroupSolid } from "react-icons/lia";

const Sidebar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  // Toggle dropdown state for "Product"
  const toggleProductDropdown = () => {
    setIsProductOpen((prevState) => !prevState);
  };

  // Helper function to check if the current path matches
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`bg-white shadow-md fixed top-0 left-0 h-screen overflow-y-auto z-[99] ${
        isSidebarCollapsed ? "w-14" : "w-[270px]"
      }`}
    >
      <div className="flex justify-center items-center mb-10">
        <img src={logo} alt="logo" className="w-18 h-18" />
      </div>
      <div className="flex flex-col gap-1 text-left px-2">
        {/* Dashboard Button */}
        <ButtonSidebar
          onClick={() => navigate("/")}
          icon={<AiOutlineHome size={30} />}
          className={isActive("/") ? "bg-[#17A9E2] text-white" : ""}
          collapsed={isSidebarCollapsed}
        >
          Dashboard
        </ButtonSidebar>

        {/* Contact Button */}
        <ButtonSidebar
          icon={<BsCardText size={30} />}
          className={isActive("/contact") ? "bg-blue-500 text-white" : ""}
          collapsed={isSidebarCollapsed}
        >
          Contact
        </ButtonSidebar>

        {/* Loan Button */}
        <ButtonSidebar
          icon={<FaRegFile size={30} />}
          className={isActive("/loan") ? "bg-blue-500 text-white" : ""}
          collapsed={isSidebarCollapsed}
        >
          Loan
        </ButtonSidebar>

        {/* Product with Dropdown */}
        <div>
          <ButtonSidebar
            icon={<HiOutlineShoppingBag size={30} />}
            collapsed={isSidebarCollapsed}
            onClick={toggleProductDropdown}
            className={
              isActive("/product") || isProductOpen
                ? "bg-[#17A9E2] text-white"
                : ""
            }
          >
            <div className="flex justify-between items-center w-full">
              <span>Product</span>
              {isProductOpen ? (
                <BsChevronUp size={20} className="ml-14" />
              ) : (
                <BsChevronDown size={20} className="ml-14" />
              )}
            </div>
          </ButtonSidebar>

          {/* Dropdown Items */}
          {isProductOpen && (
            <div className="pl-14 mt-2">
              <ButtonSidebar
                collapsed={isSidebarCollapsed}
                onClick={() => navigate("/product")}
              >
                Bank Product
              </ButtonSidebar>
              <ButtonSidebar collapsed={isSidebarCollapsed}>
                Product
              </ButtonSidebar>
              <ButtonSidebar collapsed={isSidebarCollapsed}>
                Category Product
              </ButtonSidebar>
            </div>
          )}
        </div>

        {/* Bank Button */}
        <ButtonSidebar
          icon={<GiBank size={30} />}
          className={isActive("/bank") ? "bg-blue-500 text-white" : ""}
          collapsed={isSidebarCollapsed}
        >
          Bank
        </ButtonSidebar>

        {/* Credit Scoring Button */}
        <ButtonSidebar
          icon={<BsSpeedometer2 size={30} />}
          className={
            isActive("/credit-scoring") ? "bg-blue-500 text-white" : ""
          }
          collapsed={isSidebarCollapsed}
        >
          Credit Scoring
        </ButtonSidebar>

        {/* FAQ Button */}
        <ButtonSidebar
          icon={<FaRegCircleQuestion size={30} />}
          collapsed={isSidebarCollapsed}
          className={isActive("/faq") ? "bg-blue-500 text-white" : ""}
        >
          {` `}FAQ's
        </ButtonSidebar>

        {/* Pipeline Button */}
        <ButtonSidebar
          collapsed={isSidebarCollapsed}
          icon={<LiaLayerGroupSolid size={30} />}
          className={isActive("/pipeline") ? "bg-blue-500 text-white" : ""}
        >
          Pipeline
        </ButtonSidebar>

        <ButtonSidebar
          collapsed={isSidebarCollapsed}
          icon={<LiaLayerGroupSolid size={30} />}
          className={
            isActive("/pipeline-developer") ? "bg-blue-500 text-white" : ""
          }
        >
          Pipeline Developer
        </ButtonSidebar>

        {/* Collapse Button for Mobile */}
        <div className="flex justify-center items-center">
          <div className="block md:hidden" onClick={toggleSidebar}>
            <div className="flex justify-center items-center text-white font-bold bg-blue-800 w-10 h-10 md:w-12 md:h-12 rounded-full p-3">
              <BsChevronRight
                size={20}
                className={`transition-transform duration-300 ${
                  isSidebarCollapsed ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
