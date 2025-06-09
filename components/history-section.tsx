"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Filter } from "lucide-react"

interface HistorySectionProps {
  history: Array<{
    id: string
    date: string
    theme: string
    zone: string
    score: number
    duration: number
    result: "completed" | "failed" | "partial"
  }>
}

export function HistorySection({ history }: HistorySectionProps) {
  const [themeFilter, setThemeFilter] = useState("all")

  const uniqueThemes = Array.from(new Set(history.map((item) => item.theme)))

  const filteredHistory = themeFilter === "all" ? history : history.filter((item) => item.theme === themeFilter)

  const getResultBadge = (result: string) => {
    switch (result) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-green-300">Complété</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-red-300">Échoué</Badge>
      case "partial":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-yellow-300">Partiel</Badge>
      default:
        return null
    }
  }

  return (
    <Card className="bg-maze-card border-maze-accent/30 shadow-glow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl text-blue-600">Historique</CardTitle>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-maze-accent" />
          <Select value={themeFilter} onValueChange={setThemeFilter}>
            <SelectTrigger className="w-[180px] bg-white border-gray-300 text-gray-900 focus:ring-blue-500">
              <SelectValue placeholder="Filtrer par thème" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="all">Tous les Thèmes</SelectItem>
              {uniqueThemes.map((theme) => (
                <SelectItem key={theme} value={theme}>
                  {theme}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-maze-accent/20 overflow-hidden">
          <Table>
            <TableHeader className="bg-maze-accent/10">
              <TableRow className="hover:bg-transparent border-maze-accent/20">
                <TableHead className="text-gray-700">Date</TableHead>
                <TableHead className="text-gray-700">Thème/Zone</TableHead>
                <TableHead className="text-gray-700">Score</TableHead>
                <TableHead className="text-gray-700">Durée</TableHead>
                <TableHead className="text-gray-700">Résultat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredHistory.map((item) => (
                <TableRow key={item.id} className="hover:bg-maze-accent/5 border-maze-accent/20">
                  <TableCell className="text-maze-text flex items-center">
                    <Calendar className="h-3 w-3 mr-2 text-maze-accent" />
                    {item.date}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-maze-glow">{item.theme}</div>
                    <div className="text-xs text-maze-text/70">{item.zone}</div>
                  </TableCell>
                  <TableCell className="font-medium text-maze-glow">{item.score}</TableCell>
                  <TableCell className="text-maze-text flex items-center">
                    <Clock className="h-3 w-3 mr-1 text-maze-accent" />
                    {item.duration} min
                  </TableCell>
                  <TableCell>{getResultBadge(item.result)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
