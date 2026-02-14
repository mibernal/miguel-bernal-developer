import { Skeleton } from "@/components/ui/skeleton";

export function RouteSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-20 sm:px-8 lg:px-10">
      <Skeleton className="h-12 w-56" />
      <Skeleton className="h-6 w-full max-w-2xl" />
      <div className="grid gap-6 md:grid-cols-2">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  );
}
