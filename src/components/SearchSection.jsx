import React from "react";
import { Icon } from "@iconify/react";

const SearchSection = () => {
  return (
    <div className="container  py-4 flex justify-between items-center ">
      <div className="flex items-center gap-1 md:gap-4">
        <div className="flex items-center gap-1 ">
          <Icon icon={"tabler:briefcase"} className="text-blue-500 size-6 md:size-10" />
          <h1 className="font-bold md:text-xl ">Bantu</h1>
        </div>
        <div className="flex items-center border p-2 rounded-md gap-1 md:p-4 lg:gap-4 lg:px-6 lg:w-[668px]">
          <div className="flex items-center gap-1 border-r">
            <img src="/india.png" alt="flag" className="w-4 md:w-6" />
            <p className="font-semibold text-xs md:text-sm">India</p>
            <Icon icon={"mdi:chevron-down"} className=" lg:size-6" />
          </div>
          <div className="flex items-center ">
            <Icon icon={"mingcute:search-line"} className="text-blue-500 lg:size-6" />
            <input type="text" placeholder="Job tittle, keyword, company" className="placeholder:text-xs focus:outline-none text-xs md:text-sm md:placeholder:text-sm lg:w-[200px]" />
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:gap-2">
        <Icon icon={"mdi:bell-outline"} className="size-6" />
        <img src="/user.png" alt="user" className="md:size-8 lg:size-12" />
      </div>
    </div>
  );
};

export default SearchSection;
