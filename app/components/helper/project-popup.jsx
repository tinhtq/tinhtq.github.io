import React, { useEffect, useRef, useCallback } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ProjectPopup({ title, images, togglePopup, isOpen, settings }) {
  const popupRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        togglePopup("");
      }
    },
    [togglePopup]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center z-99`}
    >
      <div
        ref={popupRef}
        className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full"
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-[450px]">
              <Zoom>
                <Image
                  src={image}
                  alt={`Project architecture ${index}`}
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-auto"
                />
              </Zoom>
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
