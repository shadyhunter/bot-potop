"use client";

import { ChatKit, useChatKit } from "@openai/chatkit-react";

export function MyChat() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        if (existing) {
          // можно реализовать обновление сессии
        }

        const res = await fetch("/api/chatkit/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        const { client_secret } = await res.json();
        return client_secret;
      },
    },
    // Убираем ui: { lang: "ru" }, оно пока не поддерживается
  });

  return (
    <ChatKit
      control={control}
      className="w-full h-[640px] border border-slate-200 rounded-2xl shadow"
    />
  );
}
