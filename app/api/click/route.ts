import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  const { userId } = await req.json()

  const { count } = await supabase
    .from("button_clicks")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)

  if (count && count > 20) {
    return new Response("Limit reached", { status: 403 })
  }

  await supabase.from("button_clicks").insert({ user_id: userId })

  return new Response("OK")
}
