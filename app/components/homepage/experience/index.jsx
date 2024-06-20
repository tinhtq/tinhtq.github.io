// @flow strict
"use client";

import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from "/public/lottie/code.json";
import Popup from "../../helper/popup";

function Experience() {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");

  const togglePopup = (description) => {
    setIsOpen(!isOpen);
    setDescription(description);
  };
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6 -z-10">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                  isOpen={isOpen}
                >
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-x-8 px-3 py-5">
                      <div className="flex items-center gap-x-8">
                        <div
                          className="text-violet-500 transition-all duration-300"
                          style={{ marginLeft: "15px" }}
                        >
                          <Image
                            src={experience.companyLogo}
                            width={120}
                            height={120}
                            alt="Logo"
                            className="rounded-lg transition-all duration-1000 grayscale"
                          />{" "}
                        </div>
                        <div style={{ marginLeft: "25px" }}>
                          <p className="text-base sm:text-xl mb-2 font-medium ">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <div class="group relative m-12 flex justify-center">
                        <FaEye
                          size="20px"
                          className="z-1"
                          onClick={() => togglePopup(experience.description)}
                        />
                        <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                          Detail
                        </span>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
      H. Yến, [20/06/2024 22:58]
      {isOpen && (
        <Popup
          title="Description"
          description={description}
          togglePopup={togglePopup}
          isOpen={isOpen}
        />
      )}
    </div>
  );
}

export default Experience;
