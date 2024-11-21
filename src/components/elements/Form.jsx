import React from "react";

const FormInput = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-lg md:text-xl font-bold mb-6">
        Form Input Produk KPR
      </h1>
      <form className="flex flex-col gap-4 text-xs md:text-md">
        {/* Input Bank */}
        <div className="flex justify-between">
          <label className="font-semibold mb-1">Bank</label>
          <input
            type="text"
            placeholder="Mandiri"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Nama Produk */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Nama Product</label>
          <input
            type="text"
            placeholder="Bunga Special Tengah Imlek 2023"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Jaminan */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Jaminan</label>
          <input
            type="text"
            placeholder="Ruko, Rukan, Rumah, Apartemen"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Target Market */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Target Market</label>
          <input
            type="text"
            placeholder="Karyawan, Pengusaha"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Komisi */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Komisi</label>
          <input
            type="text"
            placeholder="1%"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Appraisal */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Appraisal</label>
          <input
            type="text"
            placeholder="1%"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Floating */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Floating</label>
          <input
            type="text"
            placeholder="1%"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Loan to Value */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Loan to Value</label>
          <input
            type="text"
            placeholder="1%"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Interest Rate */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Interest Rate</label>
          <input
            type="text"
            placeholder="3.65%"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Fix Rate */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Fix Rate %</label>
          <input
            type="text"
            placeholder="3.88%"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Fix Rate Year */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Fix Rate (year)</label>
          <input
            type="text"
            placeholder="3"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Max Tenor */}
        <div className=" flex justify-between  ">
          <label className="font-semibold mb-1">Max Tenor (year)</label>
          <input
            type="text"
            placeholder="12"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>

        {/* Input Keterangan */}
        <div className="col-span-2 flex justify-between  ">
          <label className="font-semibold mb-1">Keterangan</label>
          <textarea
            placeholder="Mandiri KPR adalah kredit pemilikan rumah..."
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
            rows="4"
          ></textarea>
        </div>

        {/* Input URL */}
        <div className="col-span-2 flex justify-between">
          <label className="font-semibold mb-1">URL</label>
          <input
            type="text"
            placeholder="null"
            className="md:w-[650px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>
      </form>
    </div>
  );
};

export default FormInput;
