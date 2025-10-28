"use client";
import { ChatKit, useChatKit } from "@openai/chatkit-react";

export default function MyChat() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        // при желании можно обрабатывать refresh по existing
        const res = await fetch("/api/chatkit/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const { client_secret } = await res.json();
        return client_secret;
      },
    },
    ui: { lang: "ru" },
  });

  return <ChatKit control={control} className="h-[600px] w-[320px]" />;
}
