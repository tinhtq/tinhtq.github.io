import React from "react";
import Image from "next/image";

const ProjectPopup = ({ title, image, togglePopup, isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-[#0D1324] p-6 rounded-lg max-w-4xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#3DF2B3]">{title}</h2>
          <button
            onClick={togglePopup}
            className="text-gray-300 hover:text-[#3DF2B3]"
          >
            Close
          </button>
        </div>
        <div className="my-4">
          <Image
            src={image}
            alt="Project Image"
            layout="responsive"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
