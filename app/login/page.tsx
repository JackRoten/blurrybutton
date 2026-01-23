"use client"

export default function Home() {
  const handlePay = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    })

    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white gap-6">
      <h1 className="text-4xl font-bold">🔊 Sound Button</h1>

      <button
        onClick={handlePay}
        className="rounded-xl bg-white px-8 py-4 text-xl font-bold text-black hover:scale-105 transition"
      >
        Unlock for $3
      </button>
    </main>
  )
}



// "use client"

// import { useState } from "react"
// import { supabase } from "@/lib/supabase"

// export default function LoginPage() {
//   const [email, setEmail] = useState("")
//   const [sent, setSent] = useState(false)

//   const signIn = async () => {
//     const { error } = await supabase.auth.signInWithOtp({
//       email,
//       options: {
//         emailRedirectTo: `${location.origin}/auth/callback`,
//       },
//     })

//     if (!error) setSent(true)
//   }

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-black text-white">
//       <div className="w-80 space-y-4">
//         <h1 className="text-2xl font-bold">Sign in</h1>

//         {sent ? (
//           <p>Check your email for the login link</p>
//         ) : (
//           <>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full rounded p-2 text-black"
//             />
//             <button
//               onClick={signIn}
//               className="w-full rounded bg-white p-2 font-bold text-black"
//             >
//               Send magic link
//             </button>
//           </>
//         )}
//       </div>
//     </main>
//   )
// }
