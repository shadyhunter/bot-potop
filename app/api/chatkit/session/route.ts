import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // Vercel → Project → Settings → Environment Variables
});

export async function POST() {
  try {
    const session = await client.chatkit.sessions.create({
      workflow_id: "wf_68fc024308608190a73c4a3010d0ae9c0473908472fa1005",
    });

    return NextResponse.json({ client_secret: session.client_secret });
  } catch (e: any) {
    console.error("chatkit session error:", e?.message || e);
    return NextResponse.json({ error: e?.message || "failed" }, { status: 500 });
  }
}
