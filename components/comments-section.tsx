import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, BotIcon as Robot } from "lucide-react"

interface CommentsSectionProps {
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

export function CommentsSection({ comments }: CommentsSectionProps) {
  return (
    <Card className="bg-maze-card border-maze-accent/30 shadow-glow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-blue-600 flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
          Commentaires et Retours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              <Avatar className="h-10 w-10 border border-maze-accent/30">
                {comment.author.role === "ai" ? (
                  <div className="h-full w-full flex items-center justify-center bg-maze-accent/20">
                    <Robot className="h-5 w-5 text-maze-accent" />
                  </div>
                ) : (
                  <>
                    <AvatarImage src={comment.author.avatarUrl || "/placeholder.svg"} alt={comment.author.name} />
                    <AvatarFallback className="bg-maze-accent/20 text-maze-accent">
                      {comment.author.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </>
                )}
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h4 className="font-medium text-maze-glow">{comment.author.name}</h4>
                    {comment.author.role === "ai" && (
                      <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-600 border-blue-300 text-xs">
                        Assistant IA
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-maze-text/70">{comment.date}</span>
                </div>
                <p className="mt-1 text-sm text-maze-text">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
