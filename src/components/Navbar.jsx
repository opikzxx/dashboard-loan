import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ children }) => {
  return (
    <div
      id="top"
      className="md:fixed top-0 w-full justify-between items-center bg-white shadow-md z-50"
    >
      <h1 className="text-[#4F5051] text-md md:text-3xl p-4 md:px-8">
        Dashboard
      </h1>
      <div className="border-b-2 border-[#C1C1C1]" />
      <div className="p-4 md:px-8">{children}</div>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
