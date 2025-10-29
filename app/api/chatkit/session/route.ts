import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST() {
  try {
    // Временно отключаем строгую типизацию, пока ChatKit в SDK в preview
    const chatkitClient = (client as any).chatkit;

    if (!chatkitClient) {
      throw new Error("ChatKit API недоступен в текущей версии SDK");
    }

    const session = await chatkitClient.sessions.create({
      workflow_id: "wf_68fc024308608190a73c4a3010d0ae9c0473908472fa1005",
    });

    return NextResponse.json({ client_secret: session.client_secret });
  } catch (e: any) {
    console.error("chatkit session error:", e?.message || e);
    return NextResponse.json({ error: e?.message || "failed" }, { status: 500 });
  }
}
