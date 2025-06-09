"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

interface SearchFormProps {
  onSearch: (playerName: string, classGroup: string) => void
  isLoading: boolean
}

export function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const [playerName, setPlayerName] = useState("")
  const [classGroup, setClassGroup] = useState("")
  const [searchError, setSearchError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSearchError("")

    if (!playerName.trim()) {
      setSearchError("Veuillez entrer un nom de joueur")
      return
    }

    try {
      // Rechercher le joueur dans PlayFab
      const response = await fetch("/api/search-player", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playerName: playerName.trim(),
          playerClass: classGroup.trim(),
        }),
      })

      const data = await response.json()

      if (data.success) {
        // Rediriger vers la page du joueur avec son ID PlayFab
        router.push(`/?playerId=${data.playerId}`)
      } else {
        setSearchError(data.message || "Joueur non trouvé")
      }
    } catch (error) {
      console.error("Erreur lors de la recherche:", error)
      setSearchError("Erreur lors de la recherche. Veuillez réessayer.")
    }
  }

  return (
    <Card className="bg-maze-card border-maze-accent/30 shadow-glow-sm">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="playerName" className="text-gray-700">
                Nom du Joueur (Unity)
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-maze-accent" />
                <Input
                  id="playerName"
                  placeholder="Nom exact du joueur dans Unity"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="pl-10 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="classGroup" className="text-gray-700">
                Classe (optionnel)
              </Label>
              <div className="relative">
                <Users className="absolute left-3 top-2.5 h-4 w-4 text-maze-accent" />
                <Input
                  id="classGroup"
                  placeholder="Classe du joueur"
                  value={classGroup}
                  onChange={(e) => setClassGroup(e.target.value)}
                  className="pl-10 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {searchError && <div className="text-red-600 text-sm bg-red-50 p-2 rounded">{searchError}</div>}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            {isLoading ? "Recherche..." : "Rechercher dans PlayFab"}
          </Button>
        </form>

        <div className="mt-4 text-xs text-gray-500">
          <p>💡 Conseil: Utilisez le nom exact tel qu'il apparaît dans votre jeu Unity</p>
        </div>
      </CardContent>
    </Card>
  )
}
