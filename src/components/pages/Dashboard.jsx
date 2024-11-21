import MainLayout from "../layouts/Main";
import Navbar from "../Navbar";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { BsCardText } from "react-icons/bs";
import { FaRegFile } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiBank } from "react-icons/gi";

import CardDisplay from "../elements/CradDisplay";
import BankApprovalChart from "../elements/BankApprovalChart";
import Timeline from "../elements/TImeline";

const Dashboard = () => {
  return (
    <MainLayout>
      <Navbar>
        <div className="flex flex-wrap gap-6">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-slate-700 rounded-full" />
          <div className="flex flex-col gap-4">
            <div className="text-[#17A9E2] font-bold text-sm md:text-2xl">
              YOHANNES AFFANDY (JOJO)
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="flex flex-col gap-2 md:gap-4 border-r border-gray-300 md:pr-4">
                <div className="flex gap-2 md:gap-4 items-center">
                  <div className="flex justify-center items-center text-[#17A9E2] font-bold bg-[#E2F0FF] w-8 h-8 md:w-10 md:h-10 rounded-full p-1 md:p-2">
                    <HiOutlineBuildingOffice2 size={20} />
                  </div>
                  <div className="text-xs md:text-sm">
                    Loan Market Office Dev
                  </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-center">
                  <div className="flex justify-center items-center text-[#17A9E2] font-bold bg-[#E2F0FF] w-8 h-8 md:w-10 md:h-10 rounded-full p-1 md:p-2">
                    <div className="text-[#17A9E2] font-bold text-xs md:text-md">
                      ID:
                    </div>
                  </div>
                  <div className="text-xs md:text-sm">LM9990001</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-4">
                <div className="flex gap-2 md:gap-4 items-center">
                  <div className="flex justify-center items-center text-[#17A9E2] font-bold bg-[#E2F0FF] w-8 h-8 md:w-10 md:h-10 rounded-full p-1 md:p-2">
                    <MdMailOutline size={20} />
                  </div>
                  <div className="text-xs md:text-sm">it@loanmarket.co.id </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-center">
                  <div className="flex justify-center items-center text-[#17A9E2] font-bold bg-[#E2F0FF] w-8 h-8 md:w-10 md:h-10 rounded-full p-1 md:p-2">
                    <LuPhone size={20} />
                  </div>
                  <div className="text-xs md:text-sm">6281234567890 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>

      <div className="grid md:grid-cols-6 gap-6 p-2 md:mt-[250px] md:p-6 ">
        <div className="md:col-span-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <CardDisplay
              name="CONTACT"
              icon={<BsCardText size={40} />}
              qty={51}
            />
            <CardDisplay name="LOAN" icon={<FaRegFile size={20} />} qty={56} />
            <CardDisplay
              name="PRODUCT"
              icon={<HiOutlineShoppingBag size={40} />}
              qty={80}
            />
            <CardDisplay name="BANK" icon={<GiBank size={40} />} qty={30} />
          </div>

          <div className="bg-white w-full shadow-md rounded-md mt-6 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center border-r pr-4">
                <h2 className="flex justify-center items-center text-black text-center font-bold text-sm md:text-md mb-2 h-10">
                  PINJAMAN DISETUJUI
                </h2>
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <svg className="w-24 h-24" viewBox="0 0 36 36">
                      <circle
                        className="text-gray-300"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        r="16"
                        cx="18"
                        cy="18"
                      />
                      <circle
                        className="text-[#17A9E2]"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeDasharray="40,100"
                        fill="transparent"
                        r="16"
                        cx="18"
                        cy="18"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                      40%
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-center">
                    2/5 Pinjaman telah disetujui
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center pl-4">
                <div className="flex justify-center items-center w-full mb-2">
                  <h2 className="flex justify-center items-center text-black font-bold text-sm md:text-md mb-2 h-10">
                    TARGET
                  </h2>
                  {/* <button className="text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20h9M12 4h9m-9 8h9m-9 8H3m9-16H3m0 8h9"
                      />
                    </svg>
                  </button> */}
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <svg className="w-24 h-24" viewBox="0 0 36 36">
                      <circle
                        className="text-gray-300"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        r="16"
                        cx="18"
                        cy="18"
                      />
                      <circle
                        className="text-[#17A9E2]"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeDasharray="280,100"
                        fill="transparent"
                        r="16"
                        cx="18"
                        cy="18"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                      280%
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-center">
                    Rp14.000.000.000 / Rp5.000.000.000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-full h-[300px] shadow-md rounded-md mt-6">
            <h2 className="text-black text-center font-bold text-sm md:text-md mb-2 pt-6">
              Top 5 Bank Approval Tertinggi
            </h2>
            <BankApprovalChart />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="bg-white shadow-md rounded-md">
            <Timeline />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
