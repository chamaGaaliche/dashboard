import { Suspense } from "react"
import { MazeGameDashboard } from "@/components/maze-game-dashboard"
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Suspense fallback={<DashboardSkeleton />}>
        <MazeGameDashboard />
      </Suspense>
    </div>
  )
}

function DashboardSkeleton() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-12 w-48 bg-maze-accent/20" />
        <Skeleton className="h-10 w-full max-w-md bg-maze-accent/20" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Skeleton className="h-64 bg-maze-accent/20 rounded-lg" />
        <Skeleton className="h-64 bg-maze-accent/20 rounded-lg" />
      </div>
      <Skeleton className="h-96 bg-maze-accent/20 rounded-lg" />
      <Skeleton className="h-64 bg-maze-accent/20 rounded-lg" />
    </div>
  )
}
