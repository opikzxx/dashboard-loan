import { AiOutlineHome } from "react-icons/ai";
import { LiaUserTieSolid } from "react-icons/lia";

import MainLayout from "../layouts/Main";
import Navbar from "../Navbar";
import { BsBuilding, BsPiggyBank, BsWallet } from "react-icons/bs";
import { LuBuilding, LuPiggyBank } from "react-icons/lu";
import SearchBar from "../elements/Search";
import Card from "../elements/Card";
import ProductCard from "../elements/Card";

const products = [
  {
    logo: "path/to/mandiri-logo.png",
    title: "Mandiri",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/bri-logo.png",
    title: "BRI",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/bni-logo.png",
    title: "BNI",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/bca-logo.png",
    title: "BCA",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/permata-logo.png",
    title: "Permata",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/panin-logo.png",
    title: "Panin",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/hsbc-logo.png",
    title: "HSBC",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/cimb-logo.png",
    title: "CIMB",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/maybank-logo.png",
    title: "Maybank",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/dbs-logo.png",
    title: "DBS",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
  {
    logo: "path/to/ocbc-logo.png",
    title: "OCBC NISP",
    description: "Bunga Special Tengah Imlek 2023",
    fixRate: "3.88",
    maxTenor: "12",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    loanToValue: "1",
    komisi: "1",
    rating: 3,
    reviews: 14,
    userYearly: 220,
  },
];

const BankProduct = () => {
  return (
    <MainLayout>
      <Navbar>
        <div className="flex justify-center items-center gap-10 md:gap-20 md:ml-[-300px]">
          <div className="">
            <h2 className="flex justify-center items-center text-[#17A9E2] text-xs md:text-xl mb-2">
              Bank
            </h2>
            <div className="w-16 md:w-28 border-2 border-[#17A9E2]"></div>
          </div>

          <h2 className="flex justify-center items-center text-black text-xs md:text-xl mb-2">
            Developer
          </h2>
        </div>
      </Navbar>

      <div className="p-2 mt-6 md:mt-[150px] md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          <div className="bg-white w-full shadow-md rounded-md">
            <div className="flex justify-center items-center flex-col gap-2 p-4 text-gray-400">
              <AiOutlineHome size={40} />
              <div className="text-xs md:text-md">KPR dan Multiguna</div>
            </div>
          </div>
          <div className="bg-white w-full shadow-md rounded-md">
            <div className="flex justify-center items-center flex-col gap-2 p-4 text-gray-400">
              <LiaUserTieSolid size={40} />
              <div className="text-xs md:text-md">Reifinancing</div>
            </div>
          </div>
          <div className="bg-white w-full shadow-md rounded-md">
            <div className="flex justify-center items-center flex-col gap-2 p-4 text-gray-400">
              <BsWallet size={40} />
              <div className="text-center text-xs md:text-md">
                Kredit Modal Usaha dan Investasi
              </div>
            </div>
          </div>
          <div className="bg-white w-full shadow-md rounded-md">
            <div className="flex justify-center items-center flex-col gap-2 p-4 text-gray-400">
              <BsPiggyBank size={40} />
              <div className="text-center text-xs md:text-md">Deposito </div>
            </div>
          </div>
          <div className="bg-white w-full shadow-md rounded-md">
            <div className="flex justify-center items-center flex-col gap-2 p-4 text-gray-400">
              <BsBuilding size={40} />
              <div className="text-center text-xs md:text-md">
                Take Over dan Bridging Loan{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 md:p-6">
        <SearchBar />
      </div>

      <div className="p-2 md:p-6">
        <div className="flex flex-col gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BankProduct;
