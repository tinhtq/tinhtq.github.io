import Image from "next/image";
import Marquee from "react-fast-marquee";
import { certificatesData } from "@/utils/data/certificates";

function Certificates() {
  return (
    <div
      id="certificates"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {certificatesData.map((certificate, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 mx-3 sm:mx-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 flex flex-col items-center justify-center p-6"
              >
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  width={80}
                  height={80}
                  className="h-20 w-auto mb-4"
                />
                <p className="text-white text-center text-sm sm:text-lg whitespace-nowrap">
                  {certificate.name}
                </p>
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Certificates;
