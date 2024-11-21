import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <main className="flex ">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">{children}</div>
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
