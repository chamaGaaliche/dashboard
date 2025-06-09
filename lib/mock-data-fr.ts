export const mockPlayerData = {
  id: "PLY12345",
  name: "Alex Johnson",
  class: "CM2 - Einstein",
  avatarUrl: "/placeholder.svg?height=80&width=80",
  registrationDate: "15 Sep 2023",
  level: 8,
  rank: "Explorateur de Labyrinthe",

  progress: {
    completedZones: [
      { id: "z1", name: "Labyrinthe des Nombres", completed: true, score: 850 },
      { id: "z2", name: "Forêt des Fractions", completed: true, score: 720 },
      { id: "z3", name: "Carrefour Géométrique", completed: true, score: 930 },
      { id: "z4", name: "Avenue de l'Algèbre", completed: false, score: 340 },
      { id: "z5", name: "Place des Statistiques", completed: false, score: 0 },
    ],
    totalScore: 2840,
    correctAnswers: 87,
    incorrectAnswers: 23,
    timePerZone: [
      { zone: "Labyrinthe des Nombres", minutes: 45 },
      { zone: "Forêt des Fractions", minutes: 62 },
      { zone: "Carrefour Géométrique", minutes: 38 },
      { zone: "Avenue de l'Algèbre", minutes: 27 },
    ],
  },

  recommendations: [
    {
      id: "rec1",
      title: "Se concentrer sur les équations algébriques",
      description:
        "Alex a des difficultés avec la résolution d'équations à plusieurs étapes. Recommandation de s'entraîner avec le mini-jeu 'Explorateur d'Équations' dans l'Avenue de l'Algèbre.",
      priority: "high" as const,
    },
    {
      id: "rec2",
      title: "Réviser les concepts de fractions",
      description:
        "Bien qu'Alex ait terminé la Forêt des Fractions, le taux de précision n'était que de 68%. Considérer la révision des opérations de base sur les fractions.",
      priority: "medium" as const,
    },
    {
      id: "rec3",
      title: "Prêt pour la géométrie avancée",
      description:
        "Basé sur les performances au Carrefour Géométrique, Alex est prêt pour des concepts plus avancés comme la géométrie des coordonnées et les transformations.",
      priority: "low" as const,
    },
  ],

  history: [
    {
      id: "h1",
      date: "5 Juin 2023",
      theme: "Géométrie",
      zone: "Carrefour Géométrique",
      score: 930,
      duration: 38,
      result: "completed" as const,
    },
    {
      id: "h2",
      date: "22 Mai 2023",
      theme: "Fractions",
      zone: "Forêt des Fractions",
      score: 720,
      duration: 62,
      result: "completed" as const,
    },
    {
      id: "h3",
      date: "10 Mai 2023",
      theme: "Nombres",
      zone: "Labyrinthe des Nombres",
      score: 850,
      duration: 45,
      result: "completed" as const,
    },
    {
      id: "h4",
      date: "8 Juin 2023",
      theme: "Algèbre",
      zone: "Avenue de l'Algèbre",
      score: 340,
      duration: 27,
      result: "partial" as const,
    },
    {
      id: "h5",
      date: "15 Mai 2023",
      theme: "Nombres",
      zone: "Labyrinthe de Multiplication",
      score: 480,
      duration: 30,
      result: "failed" as const,
    },
  ],

  comments: [
    {
      id: "c1",
      author: {
        name: "Mme Peterson",
        avatarUrl: "/placeholder.svg?height=40&width=40",
        role: "teacher" as const,
      },
      date: "9 Juin 2023",
      content:
        "Alex montre d'excellents progrès dans les concepts géométriques. Je suis impressionnée par les compétences de raisonnement spatial démontrées lors de la dernière évaluation.",
    },
    {
      id: "c2",
      author: {
        name: "Assistant IA Labyrinthe",
        avatarUrl: "",
        role: "ai" as const,
      },
      date: "8 Juin 2023",
      content:
        "Basé sur les modèles d'activité récents, Alex passe plus de temps sur les problèmes visuels mais les résout avec une grande précision. Considérer l'accent sur les approches d'apprentissage visuel pour les concepts algébriques.",
    },
    {
      id: "c3",
      author: {
        name: "Mme Peterson",
        avatarUrl: "/placeholder.svg?height=40&width=40",
        role: "teacher" as const,
      },
      date: "25 Mai 2023",
      content:
        "Alex a besoin d'un soutien supplémentaire avec la division des fractions. J'ai assigné des activités de pratique supplémentaires dans la zone Forêt des Fractions.",
    },
  ],
}
