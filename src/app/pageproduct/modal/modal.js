// components/Modal.js
import { useState } from "react";
import Modalhead from "./modalhead";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="">
        <svg
          className="flex items-center justify-center cursor-pointer"
          role="presentation"
          strokeWidth="2"
          focusable="false"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            d="M1 5h20M1 11h20M1 17h20"
            stroke="currentColor"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex pt-[60%] px-5">
          <div className="bg-white w-96 h-[98%] rounded-lg p-10 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[105%] right-[45%] text-black h-12 w-12 rounded-full bg-white"
            >
              ✕
            </button>
            <div className="mt-5">
              <ul className="space-y-7">
                <li className="">
                  <Modalhead isOpen={isOpen} setIsOpen={setIsOpen}></Modalhead>
                </li>
                <li className="text-xl font-mono  text-gray-700">
                  EARPHONES{" >"}
                </li>
                <li className="text-xl font-mono text-gray-700">
                  ACCESSORIES{" >"}
                </li>
                <li className="text-xl font-mono text-gray-700">
                  COLLABORATIONS
                </li>
                <li className="text-xl font-mono text-gray-700">BLOG</li>
              </ul>
            </div>
            <div className="pt-[16rem]">
              <div className="flex justify-between">
                <div className="cursor-pointer text-gray-700 flex text-sm hover:text-black items-center ">
                  AT{" "}
                  <svg
                    role="presentation"
                    focusable="false"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                  >
                    <path
                      d="m1 1 4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
                <div className="cursor-pointer text-gray-700 flex text-sm hover:text-black items-center float-end">
                  <svg
                    className="min-w-8 cursor-pointer "
                    role="presentation"
                    focusable="false"
                    width="30"
                    height="30"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.25 13.75C18.3211 13.75 20 12.0711 20 10C20 7.92893 18.3211 6.25 16.25 6.25C14.1789 6.25 12.5 7.92893 12.5 10C12.5 12.0711 14.1789 13.75 16.25 13.75ZM21.25 10C21.25 12.7614 19.0114 15 16.25 15C13.4886 15 11.25 12.7614 11.25 10C11.25 7.23858 13.4886 5 16.25 5C19.0114 5 21.25 7.23858 21.25 10Z"
                      fill="#4A4A4A"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25 23.75V20.0855C25 19.1198 24.4641 18.3584 23.7023 18.105C21.9877 17.5349 19.3332 17.5 16.25 17.5C13.1668 17.5 10.5123 17.5349 8.79775 18.105C8.03589 18.3584 7.5 19.1198 7.5 20.0855V23.75L25 23.75ZM8.40332 16.9189C7.05549 17.3671 6.25 18.6651 6.25 20.0855L6.25 23.75C6.25 24.4404 6.80964 25 7.5 25H25C25.6904 25 26.25 24.4404 26.25 23.75V20.0855C26.25 18.6651 25.4445 17.3671 24.0967 16.9189C22.2968 16.3204 19.5052 16.25 16.25 16.25C12.9948 16.25 10.2032 16.3204 8.40332 16.9189Z"
                      fill="#4A4A4A"
                    ></path>
                  </svg>
                  Account
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
