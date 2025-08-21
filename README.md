This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# TravelMate


✈️ TravelMate – AI-Powered Travel App
📌 Overview

TravelMate is a modern travel application that helps users plan, book, and manage trips effortlessly.
With integrated AI chat agent, users can interact with a virtual travel assistant to get personalized recommendations, itineraries, and booking support.

This project is built with Next.js, Supabase, AI SDK, and Tailwind CSS to deliver a sleek and responsive travel experience.


🚀 Features

✅ User Authentication – Secure sign up & login using Supabase Auth (Email, Google, GitHub, Facebook).
✅ AI Travel Agent – Integrated AI SDK for smart conversational trip planning.
✅ Trip Planning – AI suggests itineraries, destinations, and activities.
✅ Booking Engine (Upcoming) – Integration with Flights, Hotels & Attractions APIs.
✅ Personalized Recommendations – Based on user profile & history.
✅ Real-time Notifications – Stay updated about bookings & offers.
✅ Modern UI – Responsive design with Tailwind + shadcn/ui.
✅ Database – Supabase with support for future pgvector embeddings for AI memory.


🛠️ Tech Stack

# # Frontend: Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui
# # Backend: Next.js API Routes, Supabase
# # AI Layer: Vercel AI SDK + OpenAI GPT models
# # Database: Supabase (Postgres)
# # Auth: Supabase Auth (Email/Password + OAuth providers)
# # Hosting: Vercel


⚙️ Setup & Installation
1.Clone the repo

>> git clone https://github.com/your-username/travelmate.git
# cd travelmate

2. Install Dependencies
# npm install

3.Environment variables
# create a .env.local file and add:
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# OPENAI_API_KEY=your_openai_api_key

4.Run the development server
npm run dev


🤖 AI Chat Agent
# The AI assistant acts like a virtual travel agent:
# Suggests trips (e.g., “Plan me a 3-day trip to Bali”)
# Finds hotels & flights (future API integration)
# Answers travel FAQs (visa, best time to visit, etc.)
# Provides personalized recommendations


📌 Roadmap
 # Supabase Auth Integration
 # AI SDK Integration
 # Flights & Hotels API
 # Real-time Notifications
 # User Dashboard & Saved Trips
 # Offline Support (PWA)

🤝 Contributing
# Contributions are welcome!
# Fork the repo
# Create a feature branch
# Submit a pull request

📜 License
# This project is licensed under the MIT License.




