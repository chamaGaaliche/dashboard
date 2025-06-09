import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Award, Star } from "lucide-react"

interface PlayerProfileProps {
  player: {
    id: string
    name: string
    class: string
    avatarUrl: string
    registrationDate: string
    level: number
    rank: string
  }
}

export function PlayerProfile({ player }: PlayerProfileProps) {
  return (
    <Card className="bg-maze-card border-maze-accent/30 shadow-glow-sm overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-maze-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl text-blue-600 flex items-center justify-between">
          Profil du Joueur
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
            Niveau {player.level}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20 border-2 border-maze-accent shadow-glow-sm">
            <AvatarImage src={player.avatarUrl || "/placeholder.svg"} alt={player.name} />
            <AvatarFallback className="bg-maze-accent/30 text-maze-glow">
              {player.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-maze-glow">{player.name}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <CalendarDays className="mr-1 h-4 w-4 text-blue-500" />
              Inscrit le {player.registrationDate}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Award className="mr-1 h-4 w-4 text-blue-500" />
              Rang {player.rank}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-maze-accent/10 p-2">
            <Star className="h-5 w-5 mx-auto text-maze-accent" />
            <div className="mt-1 text-xs text-gray-600">Étoiles Totales</div>
            <div className="font-bold text-gray-900">247</div>
          </div>
          <div className="rounded-lg bg-maze-accent/10 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mx-auto text-maze-accent"
            >
              <path d="M12 2v20" />
              <path d="m17 5-5-3-5 3" />
              <path d="m17 19-5 3-5-3" />
              <path d="M2 12h20" />
              <path d="m5 7-3 5 3 5" />
              <path d="m19 7 3 5-3 5" />
            </svg>
            <div className="mt-1 text-xs text-gray-600">Labyrinthes</div>
            <div className="font-bold text-gray-900">18</div>
          </div>
          <div className="rounded-lg bg-maze-accent/10 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mx-auto text-maze-accent"
            >
              <path d="M12 8v4l3 3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <div className="mt-1 text-xs text-gray-600">Heures</div>
            <div className="font-bold text-gray-900">12.5</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
