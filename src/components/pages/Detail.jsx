import { useNavigate } from "react-router-dom";
import FormInput from "../elements/Form";
import Form from "../elements/Form";
import MainLayout from "../layouts/Main";
import Navbar from "../Navbar";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <Navbar>
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Back Button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-8 h-8 bg-[#17A9E2] text-white rounded-full hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-sm md:text-md font-medium whitespace-nowrap">
              Bank Product Detail
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-2 md:pr-[280px]">
            <button className="flex items-center px-4 py-2 text-white text-xs md:text-md bg-[#17A9E2] rounded hover:bg-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232a4.5 4.5 0 00-6.364 6.364l6.364-6.364zm0 0L21 11M9 15l6.364-6.364"
                />
              </svg>
              Edit Product
            </button>
            <button className="flex items-center px-4 py-2 text-white text-xs md:text-md bg-red-600 rounded hover:bg-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete Product
            </button>
          </div>
        </div>
      </Navbar>
      <div className="md:mt-[150px] p-2">
        <FormInput />
      </div>
    </MainLayout>
  );
};

export default Detail;
