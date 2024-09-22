// components/Modal.js
import { useState } from "react";
import Modalhead from "./modalhead";

const EarPads = () => {
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
              REPLACEABLE MAGNETIC EAR PADS
            </div>
            <div className="text-sm text-gray-700">
              Easily replaceable lambskin and memory foam ear pads for added
              durability
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EarPads;
