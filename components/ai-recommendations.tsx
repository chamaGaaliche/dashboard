import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AIRecommendationsProps {
  recommendations: Array<{
    id: string
    title: string
    description: string
    priority: string // Changé de "high" | "medium" | "low" à string
  }>
}

export function AIRecommendations({ recommendations }: AIRecommendationsProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-400"
      case "medium":
        return "text-yellow-400"
      case "low":
        return "text-green-400"
      default:
        return "text-maze-accent"
    }
  }

  return (
    <Card className="bg-maze-card border-maze-accent/30 shadow-glow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-maze-accent/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl text-blue-600 flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-blue-500" />
          Recommandations IA
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="p-4 rounded-lg bg-maze-accent/5 border border-maze-accent/20">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-maze-glow">{rec.title}</h4>
                <span className={`text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                  {rec.priority.charAt(0).toUpperCase() + rec.priority.slice(1)} Priority
                </span>
              </div>
              <p className="text-sm text-maze-text mb-3">{rec.description}</p>
              <Button
                variant="outline"
                size="sm"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                Appliquer la Recommandation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
