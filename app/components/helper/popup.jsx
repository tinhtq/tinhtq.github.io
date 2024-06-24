"use client";
import React, { useEffect } from "react";

const Popup = ({ title, description, isOpen, togglePopup }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Clean up function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <div className="flex justify-center items-center h-screen z-99">
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-[#10132A] p-8 rounded shadow-lg max-w-fit min-w-1/4 mx-10">
            <h2 className="text-lg font-bold mb-4 max-w-full truncate text-[#232134]">
              {title}
            </h2>
            <p className="max-w-full overflow-hidden overflow-ellipsis text-black">
              {description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
