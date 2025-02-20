import React from "react";
import { Icon } from "@iconify/react";

const FindJobSection = () => {
  return (
    <div className="bg-[#f1f2f4]">
      <div className="max-w-[1320px] mx-auto p-4 flex flex-col gap-2 md:py-6 lg:px-0 lg:py-8">
        <div>
          <h2 className="font-semibold text-lg">Find Job</h2>
          <p></p>
        </div>
        <div className="bg-white w-full p-3 rounded-lg grid grid-cols-2 gap-1 gap-y-3 md:grid-cols-4 lg:px-8 lg:py-7">
          <div className="flex items-center gap-1">
            <Icon icon={"mingcute:search-line"} className="text-blue-500 lg:size-6" />
            <input type="text" placeholder="Job tittle, Keyword..." className="focus:outline-none text-xs w-20 md:w-full lg:text-base" />
          </div>
          <div className="flex items-center gap-1">
            <Icon icon={"mingcute:location-line"} className="text-blue-500 lg:size-6" />
            <input type="text" placeholder="location" className="focus:outline-none text-xs w-20 md:w-full lg:text-base" />
          </div>
          <div className="flex items-center gap-1">
            <Icon icon={"solar:layers-linear"} className="text-blue-500 lg:size-6" />
            <select className="focus:outline-none text-xs md:w-full lg:text-base">
              <option value="" disabled>
                Select Category
              </option>
              <option value="">option2</option>
              <option value="">option3</option>
            </select>
          </div>
          <button className="w-fit text-xs bg-[#042852] text-white px-3 py-2 rounded-[4px] md:ms-auto lg:px-8 lg:py-4 lg:text-base">Find Job</button>
        </div>
      </div>
    </div>
  );
};

export default FindJobSection;
