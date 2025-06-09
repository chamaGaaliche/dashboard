"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { SearchForm } from "@/components/search-form"
import { PlayerProfile } from "@/components/player-profile"
import { ProgressSummary } from "@/components/progress-summary"
import { AIRecommendations } from "@/components/ai-recommendations"
import { HistorySection } from "@/components/history-section"
import { CommentsSection } from "@/components/comments-section"
import { mockPlayerData } from "@/lib/mock-data-fr"

export function MazeGameDashboard() {
  const [currentPlayer, setCurrentPlayer] = useState(mockPlayerData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Récupérer l'ID du joueur depuis l'URL
  const searchParams = useSearchParams()
  const playerId = searchParams.get("playerId")

  // Charger les données du joueur automatiquement si l'ID est présent
  useEffect(() => {
    if (playerId) {
      fetchPlayerData(playerId)
    }
  }, [playerId])

  const fetchPlayerData = async (playerId: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/player/${playerId}`)

      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`)
      }

      const data = await response.json()
      setCurrentPlayer(data)
    } catch (err) {
      console.error("Erreur lors de la récupération des données:", err)
      setError("Impossible de charger les données du joueur. Veuillez réessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (playerName: string, classGroup: string) => {
    // Recherche manuelle par nom et classe
    setIsLoading(true)

    // Simulation pour la démo
    setTimeout(() => {
      console.log(`Recherche du joueur: ${playerName} dans la classe: ${classGroup}`)
      // Dans une application réelle, vous feriez une requête API pour trouver l'ID du joueur
      fetchPlayerData("DEMO_PLAYER_ID")
    }, 800)
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
        </span>
        Tableau de Bord Maître du Labyrinthe
      </h1>

      {/* Afficher le formulaire de recherche uniquement si l'ID n'est pas dans l'URL */}
      {!playerId && <SearchForm onSearch={handleSearch} isLoading={isLoading} />}

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}
      {isLoading && <div className="text-center py-4">Chargement des données...</div>}

      <div className="grid gap-6 md:grid-cols-2">
        <PlayerProfile player={currentPlayer} />
        <ProgressSummary progress={currentPlayer.progress} />
      </div>

      <AIRecommendations recommendations={currentPlayer.recommendations} />

      <HistorySection history={currentPlayer.history} />

      <CommentsSection comments={currentPlayer.comments} />
    </div>
  )
}
