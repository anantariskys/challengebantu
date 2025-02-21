"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/Button";
import Link from "next/link";

const FindJobSection = () => {
  return (
    <div className="bg-[#f1f2f4]">
      <div className="container py-6 lg:py-8">
        <div className="py-2 flex justify-between items-center">
          <h2 className="font-semibold text-lg">Find Job</h2>
          <div className="text-sm">
            <Link href={"/"} className="text-gray-500">
              Home /
            </Link>{" "}
            <Link href={"/job"}>Find Job</Link>
          </div>
        </div>
        <div className="bg-white w-full p-3 rounded-lg grid grid-cols-2 gap-1 gap-y-3 md:grid-cols-4 lg:px-8 lg:py-3">
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
          <Button className={"lg:ms-auto"}>Find Job</Button>
        </div>
      </div>
    </div>
  );
};

export default FindJobSection;
