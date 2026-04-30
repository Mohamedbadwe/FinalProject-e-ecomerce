import React from "react";
import { GrLinkNext } from "react-icons/gr";

export default function CardsSales() {
  return (
    <>
      <div className="w-[90%] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 mb-15 mt-5 gap-6">
        <div className="bg-[linear-gradient(135deg,#00BC7D_0%,#007A55_100%)] p-8 flex flex-col gap-4 rounded-[16px] ">
          <div className="">
            <div className="bg-amber-500 w-fit py-1 px-3 rounded-full">
              <p className="text-[#FFFFFF] font-['Font_1'] font-medium text-[14px] leading-5 tracking-[0] align-middle">
                🔥 Deal of the Day
              </p>
            </div>
            <h3 className="text-[#FFFFFF] font-['Font_1'] font-bold text-[30px] leading-9 tracking-[0] align-middle my-2">
              Fresh Organic Fruits
            </h3>
            <p className="font-['Font_1'] text-[#FFFFFF] text-opacity-80 font-medium text-[16px] leading-6 tracking-[0] align-middle">
              Get up to 40% off on selected organic fruits
            </p>
            <div className="flex gap-2 items-center my-2 ">
              <span className="font-['Font_1'] font-bold text-[30px] leading-9 tracking-[0] align-middle text-white">
                40% OFF
              </span>
              <p className="font-['Font_1'] font-medium text-[14px] leading-5 tracking-[0] align-middle">
                
                Use code: <span className="font-['Font_1'] font-bold text-[14px] leading-5 tracking-[0] align-middle text-white">ORGANIC40</span>
              </p>
            </div>
            <div className="bg-[#FFFFFF] w-fit p-3 px-6 rounded-full mt-4">
              <button className="cursor-pointer font-['Font_1'] font-semibold text-[16px] leading-6 tracking-[0] align-middle text-[#009966] flex items-center gap-2 ">
                Shop now
                <span>
                  <GrLinkNext />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[linear-gradient(135deg,#FF8904_0%,#FF2056_100%)] p-8 flex flex-col gap-4 rounded-[16px]  ">
          <div className="">
            <div className="bg-amber-500 w-fit py-1 px-3 rounded-full">
              <p className="text-[#FFFFFF] font-['Font_1'] font-medium text-[14px] leading-5 tracking-[0] align-middle">
                🔥 New Arrivals
              </p>
            </div>
            <h3 className="text-[#FFFFFF] font-['Font_1'] font-bold text-[30px] leading-9 tracking-[0] align-middle my-2">
              Exotic Vegetables
            </h3>
            <p className="font-['Font_1'] text-[#FFFFFF] text-opacity-80 font-medium text-[16px] leading-6 tracking-[0] align-middle">
              Discover our latest collection of premium vegetables
            </p>
            <div className="flex gap-2 items-center my-2 ">
              <span className="font-['Font_1'] font-bold text-[30px] leading-9 tracking-[0] align-middle text-white">
                25% OFF
              </span>
              <p className="font-['Font_1'] font-medium text-[14px] leading-5 tracking-[0] align-middle">
                {" "}
                Use code:  <span className="text-white font-['Font_1'] font-bold text-[14px] leading-[20px] tracking-[0] align-middle">FRESH25</span>
              </p>
            </div>
            <div className="mt-4 bg-[#FFFFFF] w-fit p-3 px-6 rounded-full ">
              <button className=" cursor-pointer font-['Font_1'] font-semibold text-[16px] leading-6 tracking-[0] align-middle text-[#FF6900] flex items-center gap-[8px]">
                Explore Now
                <span>
                  <GrLinkNext />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
