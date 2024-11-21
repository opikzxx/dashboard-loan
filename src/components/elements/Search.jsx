import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      {/* Input Cari */}
      <div className="flex items-center flex-grow bg-white rounded-md px-3 py-3 border shadow-md">
        <input
          type="text"
          placeholder="Cari berdasarkan nama"
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 text-xs md:text-sm"
        />
        <button>
          <IoIosSearch size={20} className="text-[#17A9E2] " />
        </button>
      </div>

      {/* Dropdown */}
      <div className="flex items-center bg-white rounded-md px-3 py-3 border shadow-md p-4 md:w-auto w-full">
        <select
          className="bg-transparent outline-none text-gray-700 cursor-pointer w-full md:w-auto text-xs md:text-sm"
          defaultValue="Kredit Pemilikan"
        >
          <option value="Kredit Pemilikan">Kredit Pemilikan</option>
          <option value="Kredit Usaha">Kredit Usaha</option>
          <option value="Kredit Kendaraan">Kredit Kendaraan</option>
        </select>
      </div>

      {/* Tombol Sort */}
      <div className="flex items-center bg-white rounded-md px-3 py-3 border shadow-md p-4 md:w-auto w-full">
        <button className="flex items-center text-gray-700 w-full md:w-auto justify-center md:justify-start">
          <span className="mr-2 text-xs md:text-md">Sort</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h11M9 21V3m0 18H5m4 0h4"
            />
          </svg>
        </button>
      </div>

      {/* Tombol Tambah Product */}
      <button className="flex items-center gap-2 bg-[#17A9E2] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-500 w-full md:w-auto justify-center">
        <span>+ Tambah Product</span>
      </button>
    </div>
  );
};

export default SearchBar;
