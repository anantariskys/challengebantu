import { Icon } from "@iconify/react";
import React from "react";

const Card = ({ item }) => {
  return (
    <div className="w-full gap-4 hover:shadow-md h-fit hover:bg-white duration-300 ease-in-out group rounded-md p-4 flex items-center">
      <div className="p-4 size-16 aspect-square flex items-center justify-center rounded-md text-primary group-hover:text-[#E7F0FA] duration-150 ease-in-out bg-[#E7F0FA] group-hover:bg-primary">
        <Icon icon={item.icon} className="text-2xl" />
      </div>
      <div className="">
        <h3 className=" font-medium">{item.title}</h3>
        <p className="text-sm">{item.open_positions} Open position</p>
      </div>
    </div>
  );
};

export default Card;
