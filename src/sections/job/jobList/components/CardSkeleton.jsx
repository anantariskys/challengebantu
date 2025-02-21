import React from "react";

const CardSkeleton = () => {
  const skeletons = Array.from({ length: 6 });
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3  lg:gap-6">
      {skeletons.map((_, index) => {
        return (
          <div key={index} className="border p-2 rounded-md border-gray-200 flex flex-col gap-2 lg:p-8 lg:gap-6">
            <div className="flex items-center gap-2 w-full">
              <div className="size-8 bg-gray-200 animate-pulse lg:size-16"></div>
              <div className="w-full">
                <span className="inline-block bg-gray-200 w-full h-2 lg:h-3"></span>
                <span className="inline-block bg-gray-200 w-full h-2 lg:h-3"></span>
              </div>
            </div>
            <div className="w-full">
              <span className="inline-block w-full h-2 bg-gray-200 animate-pulse lg:h-3"></span>
              <span className="inline-block w-full h-2 bg-gray-200 animate-pulse lg:h-3"></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSkeleton;
