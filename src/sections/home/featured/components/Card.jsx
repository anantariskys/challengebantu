"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import { calculateTimeRemaining } from "@/utils/dateUtils";
import useFeaturedJobStore from "@/store/useFeaturedJobStore";

const Card = ({ item }) => {
  const { bookmarks, toggleBookmark } = useFeaturedJobStore();
  const isBookmarked = bookmarks.has(item.id);

  return (
    <div className="border rounded-md p-4 w-full flex md:flex-row flex-col gap-2 md:items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 aspect-square rounded-md">
          <Image
            src={`https://logo.clearbit.com/${item.company_logo}.com`}
            width={16}
            height={16}
            className="size-full object-contain"
            alt={item.name}
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium line-clamp-2">{item.name}</h3>
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
              <Icon icon="mdi:clock-outline" className="text-orange-500 text-sm" />
              {calculateTimeRemaining(item.expired_at)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          id={`bookmark-${item.id}`}
          onClick={() => toggleBookmark(item.id)}
          className="p-2 rounded-md border bg-[#E7F0FA] transition"
        >
          <Icon
            icon={isBookmarked ? "mdi:bookmark" : "mdi:bookmark-outline"}
            className="text-primary text-lg"
          />
        </button>
        <Link href={`/job/${item.id}`}>
          <Button
            iconPosition="right"
            className={"text-sm"}
            icon={"mingcute:arrow-right-fill"}
            variant="secondary"
            width="w-full"
          >
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
