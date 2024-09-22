// components/Modal.js
import { useState } from "react";

const HeadBand = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="">
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex pt-[200%] pb-2 px-2">
          <div className="bg-white rounded-lg p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[115%] right-[45%] text-black h-12 w-12 rounded-full bg-white"
            >
              ✕
            </button>
            <div className="font-bold pb-3 text-xs text-gray-700">
              FIT AND COMFORT
            </div>
            <div className="text-sm text-gray-700">
              Adjustable memory foam headband offers optimal fit and comfort
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadBand;
