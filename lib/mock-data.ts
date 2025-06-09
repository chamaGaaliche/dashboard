export const mockPlayerData = {
  id: "PLY12345",
  name: "Alex Johnson",
  class: "Grade 5 - Einstein",
  avatarUrl: "/placeholder.svg?height=80&width=80",
  registrationDate: "Sep 15, 2023",
  level: 8,
  rank: "Maze Explorer",

  progress: {
    completedZones: [
      { id: "z1", name: "Number Labyrinth", completed: true, score: 850 },
      { id: "z2", name: "Fraction Forest", completed: true, score: 720 },
      { id: "z3", name: "Geometry Junction", completed: true, score: 930 },
      { id: "z4", name: "Algebra Avenue", completed: false, score: 340 },
      { id: "z5", name: "Statistics Square", completed: false, score: 0 },
    ],
    totalScore: 2840,
    correctAnswers: 87,
    incorrectAnswers: 23,
    timePerZone: [
      { zone: "Number Labyrinth", minutes: 45 },
      { zone: "Fraction Forest", minutes: 62 },
      { zone: "Geometry Junction", minutes: 38 },
      { zone: "Algebra Avenue", minutes: 27 },
    ],
  },

  recommendations: [
    {
      id: "rec1",
      title: "Focus on Algebraic Equations",
      description:
        "Alex is struggling with solving multi-step equations. Recommend practicing with the 'Equation Explorer' mini-game in Algebra Avenue.",
      priority: "high",
    },
    {
      id: "rec2",
      title: "Review Fraction Concepts",
      description:
        "While Alex completed Fraction Forest, the accuracy rate was only 68%. Consider revisiting basic fraction operations.",
      priority: "medium",
    },
    {
      id: "rec3",
      title: "Ready for Advanced Geometry",
      description:
        "Based on performance in Geometry Junction, Alex is ready for more advanced concepts like coordinate geometry and transformations.",
      priority: "low",
    },
  ],

  history: [
    {
      id: "h1",
      date: "Jun 5, 2023",
      theme: "Geometry",
      zone: "Geometry Junction",
      score: 930,
      duration: 38,
      result: "completed",
    },
    {
      id: "h2",
      date: "May 22, 2023",
      theme: "Fractions",
      zone: "Fraction Forest",
      score: 720,
      duration: 62,
      result: "completed",
    },
    {
      id: "h3",
      date: "May 10, 2023",
      theme: "Numbers",
      zone: "Number Labyrinth",
      score: 850,
      duration: 45,
      result: "completed",
    },
    {
      id: "h4",
      date: "Jun 8, 2023",
      theme: "Algebra",
      zone: "Algebra Avenue",
      score: 340,
      duration: 27,
      result: "partial",
    },
    {
      id: "h5",
      date: "May 15, 2023",
      theme: "Numbers",
      zone: "Multiplication Maze",
      score: 480,
      duration: 30,
      result: "failed",
    },
  ],

  comments: [
    {
      id: "c1",
      author: {
        name: "Ms. Peterson",
        avatarUrl: "/placeholder.svg?height=40&width=40",
        role: "teacher",
      },
      date: "Jun 9, 2023",
      content:
        "Alex is showing great progress in geometry concepts. I'm impressed with the spatial reasoning skills demonstrated in the last assessment.",
    },
    {
      id: "c2",
      author: {
        name: "MazeAI Assistant",
        avatarUrl: "",
        role: "ai",
      },
      date: "Jun 8, 2023",
      content:
        "Based on recent activity patterns, Alex spends more time on visual problems but solves them with high accuracy. Consider emphasizing visual learning approaches for algebraic concepts.",
    },
    {
      id: "c3",
      author: {
        name: "Ms. Peterson",
        avatarUrl: "/placeholder.svg?height=40&width=40",
        role: "teacher",
      },
      date: "May 25, 2023",
      content:
        "Alex needs additional support with fraction division. I've assigned extra practice activities in the Fraction Forest zone.",
    },
  ],
}
