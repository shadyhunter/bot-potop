import { NextResponse } from "next/server";
import OpenAI from "openai";

// На Vercel переменная берётся из Project → Settings → Environment Variables
// Никаких .env.local коммитить не нужно.
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // <-- Vercel env
});

export async function POST() {
  try {
    const session = await client.chatkit.sessions.create({
      // Твой workflow
      workflow_id: "wf_68fc024308608190a73c4a3010d0ae9c0473908472fa1005",
      // опционально: ttl_seconds, metadata, user_id и т.д.
    });

    return NextResponse.json({ client_secret: session.client_secret });
  } catch (e: any) {
    console.error("chatkit session error:", e?.message || e);
    return NextResponse.json({ error: e?.message || "failed" }, { status: 500 });
  }
}
