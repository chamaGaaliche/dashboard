import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, Clock } from "lucide-react"

interface ProgressSummaryProps {
  progress: {
    completedZones: Array<{
      id: string
      name: string
      completed: boolean
      score: number
    }>
    totalScore: number
    correctAnswers: number
    incorrectAnswers: number
    timePerZone: Array<{
      zone: string
      minutes: number
    }>
  }
}

export function ProgressSummary({ progress }: ProgressSummaryProps) {
  const totalAnswers = progress.correctAnswers + progress.incorrectAnswers
  const correctPercentage = Math.round((progress.correctAnswers / totalAnswers) * 100)

  return (
    <Card className="bg-maze-card border-maze-accent/30 shadow-glow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-blue-600">Résumé des Progrès</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Zones Complétées</h4>
          <div className="space-y-2">
            {progress.completedZones.map((zone) => (
              <div key={zone.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  {zone.completed ? (
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 mr-2 rounded-full border border-maze-accent/50" />
                  )}
                  <span className="text-sm text-gray-600">{zone.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{zone.score} pts</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Score Total</h4>
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">{progress.totalScore}</div>
            <div className="ml-2 text-xs text-blue-600">points</div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Précision des Réponses</h4>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-1 text-green-500" />
              <span className="text-sm text-gray-600">Correctes</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{progress.correctAnswers}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <XCircle className="h-4 w-4 mr-1 text-red-500" />
              <span className="text-sm text-gray-600">Incorrectes</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{progress.incorrectAnswers}</span>
          </div>
          <Progress value={correctPercentage} className="h-2 bg-maze-accent/20">
            <div
              className="h-full bg-gradient-to-r from-maze-accent to-green-500"
              style={{ width: `${correctPercentage}%` }}
            />
          </Progress>
          <div className="mt-1 text-xs text-right text-gray-600">{correctPercentage}% correct</div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Temps par Zone</h4>
          <div className="space-y-2">
            {progress.timePerZone.map((item) => (
              <div key={item.zone} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{item.zone}</span>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1 text-maze-accent" />
                  <span className="text-sm font-medium text-gray-900">{item.minutes} min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
