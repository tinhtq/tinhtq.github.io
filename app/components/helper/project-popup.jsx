import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function ProjectPopup({ title, images, togglePopup, isOpen, settings }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-[500px]">
              {" "}
              {/* Adjusted height */}
              <Image
                src={image}
                alt={`Project architecture ${index}`}
                layout="fill"
                objectFit="contain"
                className="w-full h-auto"
              />
            </div>
          ))}
        </Slider>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => togglePopup("")}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProjectPopup;
