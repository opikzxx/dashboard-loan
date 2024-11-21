import React from "react";
import PropTypes from "prop-types";
import { MdOutlineAnalytics } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { AiOutlineSafety } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { PiClockCountdown } from "react-icons/pi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  logo,
  title,
  description,
  fixRate,
  maxTenor,
  jaminan,
  target,
  loanToValue,
  komisi,
  rating,
  reviews,
  userYearly,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col md:flex-row gap-4">
      {/* Logo/Image Section */}
      <div className="w-full md:w-[400px] flex flex-col justify-center items-center rounded-md bg-white px-10">
        {/* Logo */}
        <div className="bg-slate-100 h-[100px] md:h-[200px] w-full mb-4 rounded"></div>

        {/* Rating and Reviews */}
        <div className="flex gap-4 justify-center items-center w-full mb-4">
          <div className="flex flex-col justify-center items-center mb-2">
            <p className="text-sm font-medium text-gray-600">Reviews:</p>
            <div className="flex gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < rating ? "text-blue-500" : "text-gray-400"
                    }
                  >
                    ★
                  </span>
                ))}
            </div>
            <p className="ml-2 text-sm text-gray-500">({reviews} Reviews)</p>
          </div>
          {/* Divider */}
          <div className="h-10 w-px bg-gray-200"></div>
          {/* user */}
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">User:</p>
            <p className="text-gray-500">
              {userYearly}
              <br /> <div className="text-sm">Users yearly</div>
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[500px] flex flex-col gap-2">
        <h2 className="text-lg md:text-2xl font-bold text-black">
          {title} <span className="text-[#17A9E2]">{description}</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 text-xs md:text-md text-gray-600">
          <div className="flex gap-4 items-center mt-4 md:mt-8">
            <MdOutlineAnalytics size={30} />
            <p className="font-medium">
              Fix Rate (Year):
              {` `}
              {fixRate}
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 items-center mt-4 md:mt-8">
            <AiOutlineSafety size={30} />
            <p className="font-medium">
              Jaminan:
              {jaminan}
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 items-center">
            <GoClock size={30} />
            <p className="font-medium">
              Max Tenor:{` `}
              {maxTenor}
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 items-center ">
            <CiUser size={30} />
            <p className="font-medium">
              Target:{` `}
              {target}
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 items-center ">
            <PiClockCountdown size={30} />
            <p className="font-medium">
              Loan to Value:{` `}
              {loanToValue}
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 items-center ">
            <HiOutlineCurrencyDollar size={30} />
            <p className="font-medium">
              Komisi:{` `}
              {komisi}
            </p>
          </div>
        </div>
      </div>

      {/* Rating and Detail Section */}
      <div className="w-full md:w-auto flex justify-center items-center gap-2">
        {/* Detail Button */}
        <button
          onClick={() => navigate("/detail")}
          className="w-full md:w-[120px] border text-sm font-medium py-2 px-4 rounded-md shadow-md"
        >
          Detail
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  fixRate: PropTypes.string,
  maxTenor: PropTypes.string,
  jaminan: PropTypes.string,
  target: PropTypes.string,
  loanToValue: PropTypes.string,
  komisi: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  userYearly: PropTypes.number,
};

export default ProductCard;
