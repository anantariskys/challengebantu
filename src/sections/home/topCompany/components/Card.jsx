import Button from "@/components/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Card = ({item}) => {
  return (
    <div className="p-4 border rounded-md space-y-2 ">
      <div className="flex gap-2 items-center">
        <div className="w-16 aspect-square">
          <Image width={64} alt={`${item.company}`} height={64} src={`https://logo.clearbit.com/${item.logo}.com`}/>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <h3 className="font-medium">{item.company}</h3>
            {item.is_featured && (
              <p className="px-2 text-xs bg-red-200 text-red-500 rounded-md">
                Featured
              </p>
            )}
          </div>
          <p className="flex items-center text-xs gap-1">
            <Icon icon="mdi:map-marker" className="text-gray-300 text-sm" />
            {item.location}
          </p>
        </div>
      </div>
      <Button width="w-full" className={"text-sm"} variant="secondary">
        Lihat Lowongan
      </Button>
    </div>
  );
};

export default Card;
