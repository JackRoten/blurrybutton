"use client"

import { supabase } from "@/lib/supabase"

export default function Home() {
  const playSound = async () => {
    const audio = new Audio("/sound.mp3")
    audio.play()

    const { data: { user } } = await supabase.auth.getUser()

    await supabase.from("button_clicks").insert({
      user_id: user?.id ?? null
    })
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <button
        onClick={playSound}
        className="rounded-xl bg-white px-10 py-6 text-2xl font-bold hover:scale-105 transition"
      >
        🔊 PLAY SOUND
      </button>
    </main>
  )
}
