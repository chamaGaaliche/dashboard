export type Priority = "high" | "medium" | "low"

export interface Recommendation {
  id: string
  title: string
  description: string
  priority: Priority
}

export interface PlayerData {
  id: string
  name: string
  class: string
  avatarUrl: string
  registrationDate: string
  level: number
  rank: string
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
  recommendations: Recommendation[]
  history: Array<{
    id: string
    date: string
    theme: string
    zone: string
    score: number
    duration: number
    result: "completed" | "failed" | "partial"
  }>
  comments: Array<{
    id: string
    author: {
      name: string
      avatarUrl: string
      role: "teacher" | "ai"
    }
    date: string
    content: string
  }>
}
