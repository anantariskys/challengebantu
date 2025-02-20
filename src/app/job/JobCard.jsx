import React from "react";
import { Icon } from "@iconify/react";

const JobCard = () => {
  return (
    <div className="border p-2 rounded-md border-gray-200 flex flex-col gap-2 lg:p-8 lg:gap-6">
      <div className="flex items-center gap-2">
        <img src="company.png" alt="company" />
        <div className="flex flex-col gap-2 text-sm">
          <p className="font-semibold lg:text-base">Figma</p>
          <div className="flex items-center text-[#939AAD] lg:text-[14px]">
            <Icon icon={"mingcute:location-line"} className="lg:text-lg" />
            <p>Indonesia</p>
          </div>
        </div>
      </div>
      <h2 className="font-medium text-sm lg:text-xl">UI/UX Designer</h2>
      <div className="text-[#636A80] flex text-xs items-center gap-2 lg:text-[14px]">
        <p>Full Time</p>
        <span className="size-1 rounded-full inline-block bg-[#636A80]"></span>
        <p>$50K-$70K</p>
      </div>
    </div>
  );
};

export default JobCard;
