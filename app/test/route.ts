import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "API fonctionne correctement",
    timestamp: new Date().toISOString(),
  })
}

export async function POST() {
  return NextResponse.json({
    message: "POST fonctionne correctement",
    timestamp: new Date().toISOString(),
  })
}
