import { Skeleton } from "@/components/ui/skeleton"

function loading() {
  return (
    <div className="p-10">
              <h1 className="text-3xl font-bold mb-2 ">Searching Result</h1>
              <h2 className="text-gray-400 mb-5">  We wont be long    </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-4">
                <Skeleton className="w[300px] h-[400px]" />
                <Skeleton className="w[300px] h-[400px]" />
                <Skeleton className="w[300px] h-[400px]" />
                <Skeleton className="w[300px] h-[400px]" />
                <Skeleton className="w[300px] h-[400px]" />
                <Skeleton className="w[300px] h-[400px]" />
                <Skeleton className="w[300px] h-[400px]" />
                <Skeleton className="w[300px] h-[400px]" />
              </div>
    </div>
  )
}

export default loading
