import React from "react";
import { Icon } from "@iconify/react";

const CategorySection = () => {
  return (
    <div className="flex items-center justify-between pb-4">
      <div>
        <div className="bg-[#f1f2f4] rounded-3xl flex items-center gap-2 w-fit px-2 lg:py-[6px] lg:px-4 lg:gap-3">
          <p className="text-sm lg:text-[14px]">Design</p>
          <button className="rounded-full bg-white size-4 flex items-center justify-center lg:size-5">
            <Icon icon={"stash:times-solid"} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="border w-20 rounded-md px-2 py-1 lg:w-[180px] lg:px-[20px] lg:py-[16px]">
          <select name="" id="" className="focus:outline-none w-full text-xs lg:text-[14px]">
            <option value="" className="text-xs" disabled>
              Latest
            </option>
            <option value="" className="text-xs">
              opt1
            </option>
            <option value="" className="text-xs">
              opt1
            </option>
          </select>
        </div>
        <div className="border w-20 rounded-md px-2 py-1 lg:w-[180px] lg:px-[20px] lg:py-[16px]">
          <select name="" id="" className="focus:outline-none w-full text-xs lg:text-[14px]">
            <option value="" className="text-xs" disabled>
              12 Per Page
            </option>
            <option value="" className="text-xs">
              opt1
            </option>
            <option value="" className="text-xs">
              opt1
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
