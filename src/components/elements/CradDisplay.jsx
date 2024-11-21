import React from "react";
import PropTypes from "prop-types";

const CardDisplay = ({ name, icon, qty }) => {
  return (
    <div className="bg-white w-full shadow-md rounded-md">
      <div className="flex gap-4 justify-center items-center p-4">
        <div className="flex justify-center items-center text-[#17A9E2] font-bold bg-[#E2F0FF] w-10 h-10 md:w-12 md:h-12 rounded-full p-3">
          {icon}
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="text-black font-bold text-sm md:text-md">{name}</div>
          <div className="text-[#17A9E2] font-bold text-md md:text-xl">
            {qty}
          </div>
        </div>
      </div>
    </div>
  );
};

CardDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  qty: PropTypes.number.isRequired,
};

export default CardDisplay;
