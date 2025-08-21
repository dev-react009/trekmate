'use client';

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutButton() {
  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', { method: 'POST' });
    const { id } = await res.json();

    const stripe = await stripePromise;
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: id });
    }
  };

  return (
 <button
      onClick={handleCheckout}
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
    >
      Pay 
    </button>
  );
}
