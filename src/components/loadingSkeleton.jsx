export default function LoadingDetail() {
    return (
      <div className="container mx-auto w-[80%] rounded-md p-4">
        <div className="flex flex-col animate-pulse space-x-4">
            <div className="flex flex-row space-x-4">
                <div className="size-20 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-5 rounded bg-gray-200"></div>
                    <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 h-5 rounded bg-gray-200"></div>
                        <div className="col-span-1 h-5 rounded bg-gray-200"></div>
                    </div>
                    <div className="h-5 rounded bg-gray-200"></div>
                    </div>
                </div>
            </div>


            <div className="flex-1 space-y-6 py-1 mt-20">
                <div className="h-5 rounded bg-gray-200"></div>
                <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-5 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-5 rounded bg-gray-200"></div>
                </div>
                <div className="h-5 rounded bg-gray-200"></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  