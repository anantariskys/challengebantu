const SkeletonCard = () => (
  <div className="border rounded-md p-4 w-full flex md:flex-row flex-col gap-2 md:items-center justify-between animate-pulse">
    <div className="flex items-center gap-4">
      <div className="w-16 aspect-square rounded-md bg-gray-300" />
      <div>
        <div className="h-4 bg-gray-300 rounded w-32 mb-2" />
        <div className="h-3 bg-gray-200 rounded w-24" />
      </div>
    </div>
    <div className="h-8 bg-gray-300 rounded w-24" />
  </div>
);

export default SkeletonCard;
