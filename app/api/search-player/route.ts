import { type NextRequest, NextResponse } from "next/server"

const PLAYFAB_TITLE_ID = process.env.NEXT_PUBLIC_PLAYFAB_TITLE_ID
const PLAYFAB_SECRET_KEY = process.env.PLAYFAB_SECRET_KEY

export async function POST(request: NextRequest) {
  try {
    const { playerName, playerClass } = await request.json()

    console.log(`Recherche du joueur: ${playerName}, classe: ${playerClass || "non spécifiée"}`)

    // Vérifier que les variables d'environnement sont définies
    if (!PLAYFAB_TITLE_ID || !PLAYFAB_SECRET_KEY) {
      console.error("Variables d'environnement PlayFab non configurées")
      return NextResponse.json(
        {
          success: false,
          message: "Configuration PlayFab manquante",
        },
        { status: 500 },
      )
    }

    // Rechercher le joueur par nom d'affichage
    const response = await fetch(`https://${PLAYFAB_TITLE_ID}.playfabapi.com/Server/GetPlayFabIDsFromDisplayNames`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-SecretKey": PLAYFAB_SECRET_KEY,
      },
      body: JSON.stringify({
        DisplayNames: [playerName],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Erreur PlayFab (${response.status}): ${errorText}`)
      throw new Error(`Erreur PlayFab: ${response.status}`)
    }

    const data = await response.json()
    console.log("Réponse PlayFab:", JSON.stringify(data))

    if (data.data?.Data && data.data.Data.length > 0) {
      const playerId = data.data.Data[0].PlayFabId

      // Optionnel: Vérifier la classe si fournie
      if (playerClass) {
        const playerData = await getPlayerDataFromPlayFab(playerId)
        const playerClassData = playerData.data?.Data?.PlayerClass?.Value || playerData.data?.Data?.Class?.Value

        if (playerClassData && !playerClassData.includes(playerClass)) {
          return NextResponse.json({
            success: false,
            message: "Joueur trouvé mais la classe ne correspond pas",
          })
        }
      }

      return NextResponse.json({
        success: true,
        playerId: playerId,
        message: "Joueur trouvé!",
      })
    } else {
      return NextResponse.json({
        success: false,
        message: "Aucun joueur trouvé avec ce nom",
      })
    }
  } catch (error) {
    console.error("Erreur recherche joueur:", error)
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Erreur lors de la recherche",
      },
      { status: 500 },
    )
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

  return response.json()
}
