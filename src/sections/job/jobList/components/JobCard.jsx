import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const JobCard = ({ image, company, location, salary, name, area, id }) => {
  return (
    <Link href={`/job/${id}`} className="border p-2 rounded-md border-gray-200 flex flex-col gap-2 hover:shadow-lg transition-all hover:border-[#0A65CC] duration-200 lg:p-8 lg:gap-3">
      <div className="flex items-center gap-2">
        <img src={image} alt="company" className="size-14 rounded-md" />
        <div className="flex flex-col gap-1 text-sm">
          <p className="font-regular lg:text-base">{company}</p>
          <div className="flex items-center text-[#939AAD] lg:text-[14px]">
            <Icon icon={"mingcute:location-line"} className="lg:text-lg" />
            <p className="w-28 truncate lg:w-40">{location}</p>
          </div>
        </div>
      </div>
      <h2 className="font-medium text-sm lg:text-xl">{name}</h2>
      <div className="text-[#636A80] flex text-xs items-center gap-2 lg:text-[14px]">
        <p>{area}</p>
        <span className="size-1 rounded-full inline-block bg-[#636A80]"></span>
        <p>$ {salary}</p>
      </div>
    </Link>
  );
};

export default JobCard;
