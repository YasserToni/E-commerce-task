import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[394px] w-[342px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[342px]" />
        <Skeleton className="h-4 w-[342px]" />
      </div>
    </div>
  );
}

export default SkeletonCard;
