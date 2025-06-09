import { type NextRequest, NextResponse } from "next/server"

// Remplacez par vos vrais appels PlayFab
const PLAYFAB_TITLE_ID = process.env.NEXT_PUBLIC_PLAYFAB_TITLE_ID
const PLAYFAB_SECRET_KEY = process.env.PLAYFAB_SECRET_KEY

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const playerId = params.id

  try {
    // Appel réel à PlayFab pour récupérer les données du joueur
    const playerData = await getPlayerDataFromPlayFab(playerId)
    const playerStats = await getPlayerStatsFromPlayFab(playerId)

    // Formater les données pour notre interface
    const formattedData = formatPlayerDataForDashboard(playerData, playerStats)

    return NextResponse.json(formattedData)
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération des données du joueur" }, { status: 500 })
  }
}

async function getPlayerDataFromPlayFab(playerId: string) {
  const response = await fetch(`https://${PLAYFAB_TITLE_ID}.playfabapi.com/Server/GetUserData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-SecretKey": PLAYFAB_SECRET_KEY!,
    },
    body: JSON.stringify({
      PlayFabId: playerId,
    }),
  })

  if (!response.ok) {
    throw new Error(`Erreur PlayFab: ${response.status}`)
  }

  return response.json()
}

async function getPlayerStatsFromPlayFab(playerId: string) {
  const response = await fetch(`https://${PLAYFAB_TITLE_ID}.playfabapi.com/Server/GetPlayerStatistics`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-SecretKey": PLAYFAB_SECRET_KEY!,
    },
    body: JSON.stringify({
      PlayFabId: playerId,
    }),
  })

  if (!response.ok) {
    throw new Error(`Erreur PlayFab: ${response.status}`)
  }

  return response.json()
}

function formatPlayerDataForDashboard(userData: any, statsData: any) {
  // Adapter selon la structure de VOS données PlayFab existantes
  const data = userData.data?.Data || {}
  const stats = statsData.data?.Statistics || []

  // Extraire les zones complétées depuis vos données
  const completedZones = []
  const timePerZone = []

  // Parcourir vos données pour extraire les informations des zones
  for (const key in data) {
    if (key.startsWith("Zone_")) {
      try {
        const zoneData = JSON.parse(data[key].Value)
        completedZones.push({
          id: key,
          name: key.replace("Zone_", "").replace("_", " "),
          completed: zoneData.Completed || false,
          score: zoneData.Score || 0,
        })

        if (zoneData.TimeSpent) {
          timePerZone.push({
            zone: key.replace("Zone_", "").replace("_", " "),
            minutes: Math.floor(zoneData.TimeSpent / 60),
          })
        }
      } catch (e) {
        console.warn(`Erreur parsing zone ${key}:`, e)
      }
    }
  }

  // Extraire les statistiques
  const statsMap = stats.reduce((acc: any, stat: any) => {
    acc[stat.StatisticName] = stat.Value
    return acc
  }, {})

  return {
    id: userData.data?.PlayFabId || "unknown",
    name: data.DisplayName?.Value || "Joueur",
    class: data.Class?.Value || "Non assigné",
    avatarUrl: data.AvatarUrl?.Value || "/placeholder.svg?height=80&width=80",
    registrationDate: data.RegistrationDate?.Value || new Date().toLocaleDateString(),
    level: statsMap.Level || 1,
    rank: data.Rank?.Value || "Débutant",

    progress: {
      completedZones,
      totalScore: statsMap.TotalScore || 0,
      correctAnswers: statsMap.CorrectAnswers || 0,
      incorrectAnswers: statsMap.IncorrectAnswers || 0,
      timePerZone,
    },

    recommendations: [
      {
        id: "rec1",
        title: "Recommandation basée sur les données",
        description: "Analyse automatique des performances du joueur.",
        priority: "medium",
      },
    ],

    history: [], // À implémenter selon vos besoins

    comments: [], // À implémenter selon vos besoins
  }
}
