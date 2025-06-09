// Configuration PlayFab
export const PLAYFAB_TITLE_ID = process.env.NEXT_PUBLIC_PLAYFAB_TITLE_ID || "VOTRE_TITLE_ID"
export const PLAYFAB_SECRET_KEY = process.env.PLAYFAB_SECRET_KEY

// Endpoints API PlayFab
export const PLAYFAB_API_URL = `https://${PLAYFAB_TITLE_ID}.playfabapi.com`

// Types pour les données PlayFab
export interface PlayFabPlayerData {
  PlayFabId: string
  DisplayName?: string
  Class?: string
  AvatarUrl?: string
  RegistrationDate?: string
  Rank?: string
}

export interface PlayFabStatistic {
  StatisticName: string
  Value: number
}
