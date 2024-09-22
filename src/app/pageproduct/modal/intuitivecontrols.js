// components/Modal.js
import { useState } from "react";
import Modalhead from "./modalhead";

const IntuitiveControls = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="">
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex pt-[190%] pb-2 px-2">
          <div className="bg-white w-96 h-[98%] rounded-lg p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[115%] right-[45%] text-black h-12 w-12 rounded-full bg-white"
            >
              ✕
            </button>
            <div className="font-bold pb-3 text-xs text-gray-700">
              INTUITIVE CONTROLS
            </div>
            <div className="text-sm text-gray-700">
              A convenient three-button array allows you to effortlessly control
              playback, calls, voice assistant, and volume
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntuitiveControls;
