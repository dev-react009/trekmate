// app/api/create-checkout-session/route.ts
import Stripe from 'stripe';
import { NextRequest } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',

});

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') ?? 'http://localhost:3000';

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card','amazon_pay'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Appple Product',
            },
            unit_amount: 1000, // $10.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return Response.json({ id: session.id });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
