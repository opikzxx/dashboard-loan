import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ children }) => {
  return (
    <div
      id="top"
      className="md:fixed top-0 w-full flex flex-col bg-white shadow-md z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        {/* Judul Dashboard */}
        <h1 className="text-[#4F5051] text-md md:text-3xl p-4 md:px-8">
          Dashboard
        </h1>

        {/* User Info Section */}
        <div className="flex items-center px-4 py-2 md:pr-[300px]">
          {/* Icon Bell */}
          <div className="flex items-center space-x-1">
            <button className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 7.165 8 9.388 8 11v3.159c0 .538-.214 1.055-.595 1.436L6 17h9"
                />
              </svg>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>

          {/* Divider */}
          <div className="border-l h-6 mx-4"></div>

          {/* User Name */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium text-xs text-lg">
              YOHANNES
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b-2 border-[#C1C1C1]" />

      {/* Main Content */}
      <div className="p-4 md:px-8">{children}</div>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
