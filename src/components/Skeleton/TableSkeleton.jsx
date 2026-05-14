import { Skeleton } from "@/components/ui/skeleton";

const TableSkeleton = () => {
  return (
    <div className="w-h-full space-y-4 animate-in fade-in-0 duration-300">
      <div className="bg-gray-50 border border-gray-200 rounded-t-lg animate-in slide-in-from-top-2 duration-400">
        <div className="grid grid-cols-12 gap-4 px-4 py-3">
          <div className="col-span-1">
            <Skeleton className="h-4 w-20 rounded" />
          </div>
          <div className="col-span-2">
            <Skeleton className="h-4 w-24 rounded" />
          </div>
          <div className="col-span-1">
            <Skeleton className="h-4 w-20 rounded" />
          </div>
          <div className="col-span-1">
            <Skeleton className="h-4 w-16 rounded" />
          </div>
          <div className="col-span-2">
            <Skeleton className="h-4 w-16 rounded" />
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 border-t-0 rounded-b-lg">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`grid grid-cols-12 gap-4 px-4 py-4 ${
              index !== 9 ? "border-b border-gray-100" : ""
            } animate-in fade-in-0 slide-in-from-left-2 duration-400`}
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            <div className="col-span-1 flex items-center">
              <Skeleton className="h-4 w-16 rounded" />
            </div>

            <div className="col-span-2 flex items-center">
              <Skeleton className="h-4 w-32 rounded" />
            </div>

            <div className="col-span-1 flex items-center">
              <Skeleton className="h-4 w-12 rounded" />
            </div>

            <div className="col-span-1 flex items-center">
              <Skeleton className="h-4 w-20 rounded" />
            </div>

            <div className="col-span-1 flex items-center">
              <Skeleton className="h-5 w-10 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;
