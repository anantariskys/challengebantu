"use client";
import Button from "@/components/Button";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const Card = ({ item }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="border rounded-md p-4 w-full flex md:flex-row flex-col gap-2 md:items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 aspect-square rounded-md bg-black"></div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{item.title}</h3>
            <p className="px-2 rounded-lg text-xs bg-[#E7F0FA] text-primary">
              {item.employment_type}
            </p>
          </div>
          <div className="flex gap-2 items-center text-gray-500 text-xs">
            <p className="flex items-center gap-1">
              <Icon icon="mdi:map-marker" className="text-blue-500 text-sm" />
              {item.location}
            </p>
            <p className="flex items-center gap-1">
              <Icon icon="mdi:cash" className="text-green-500 text-sm" />
              {item.salary}
            </p>
            <p className="flex items-center gap-1">
              <Icon
                icon="mdi:clock-outline"
                className="text-orange-500 text-sm"
              />
              {item.time_remaining}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={toggleBookmark}
          className="p-2 rounded-md border bg-[#E7F0FA] transition"
        >
          <Icon
            icon={isBookmarked ? "mdi:bookmark" : "mdi:bookmark-outline"}
            className="text-primary text-lg"
          />
        </button>

        <Button
          iconPosition="right"
          className={"text-sm"}
          icon={"mingcute:arrow-right-fill"}
          variant="secondary"
          width="w-full"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default Card;
