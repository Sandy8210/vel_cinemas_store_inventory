import { Skeleton } from "@/components/ui/skeleton";

export default function FormSkeleton() {
  return (
    <div className="w-full max-w-2xl space-y-6 rounded-lg p-8 bg-white shadow-lg animate-in fade-in-0 duration-300">
      <div className="flex items-center justify-between pb-4 border-b animate-in slide-in-from-top-2 duration-400">
        <Skeleton className="h-7 w-40 rounded" />
      </div>

      <div className="grid grid-cols-6 gap-x-4 gap-y-5">
        <div className="col-span-3 space-y-2 animate-in fade-in-0 slide-in-from-left-3 duration-500 delay-100">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-10 w-full rounded-md border" />
        </div>

        <div className="col-span-3 space-y-2 animate-in fade-in-0 slide-in-from-right-3 duration-500 delay-150">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-10 w-full rounded-md border" />
        </div>

        <div className="col-span-3 space-y-2 animate-in fade-in-0 slide-in-from-left-3 duration-500 delay-200">
          <Skeleton className="h-4 w-20 rounded" />
          <div className="relative">
            <Skeleton className="h-10 w-full rounded-md border" />
            <Skeleton className="h-4 w-4 rounded absolute right-3 top-3" />
          </div>
        </div>

        <div className="col-span-3 space-y-2 animate-in fade-in-0 slide-in-from-right-3 duration-500 delay-250">
          <Skeleton className="h-4 w-16 rounded" />
          <Skeleton className="h-10 w-full rounded-md border" />
        </div>

        <div className="col-span-3 space-y-2 animate-in fade-in-0 slide-in-from-left-3 duration-500 delay-300">
          <Skeleton className="h-4 w-12 rounded" />
          <Skeleton className="h-10 w-full rounded-md border" />
        </div>

        <div className="col-span-3 space-y-2 animate-in fade-in-0 slide-in-from-right-3 duration-500 delay-350">
          <Skeleton className="h-4 w-16 rounded" />
          <div className="flex items-center h-10">
            <Skeleton className="h-6 w-11 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 animate-in fade-in-0 slide-in-from-bottom-3 duration-500 delay-400">
        <Skeleton className="h-10 w-24 rounded-md" />
        <Skeleton className="h-10 w-28 rounded-md" />
      </div>
    </div>
  );
}
