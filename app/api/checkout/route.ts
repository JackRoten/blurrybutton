import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Sound Button Access",
          },
          unit_amount: 300, // $3.00
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
  })

  return NextResponse.json({ url: session.url })
}



// import Stripe from "stripe"

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// export async function POST() {
//   const session = await stripe.checkout.sessions.create({
//     mode: "payment",
//     line_items: [{
//       price: process.env.STRIPE_PRICE_ID!,
//       quantity: 1,
//     }],
//     success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
//     cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
//   })

//   return Response.json({ url: session.url })
// }
