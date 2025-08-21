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

Frontend: Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui
Backend: Next.js API Routes, Supabase
AI Layer: Vercel AI SDK + OpenAI GPT models
Database: Supabase (Postgres)
Auth: Supabase Auth (Email/Password + OAuth providers)
Hosting: Vercel


⚙️ Setup & Installation
1.Clone the repo

>> git clone https://github.com/your-username/travelmate.git
cd travelmate

2. Install Dependencies
npm install

3.Environment variables
create a .env.local file and add:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key

4.Run the development server
npm run dev


🤖 AI Chat Agent
The AI assistant acts like a virtual travel agent:
Suggests trips (e.g., “Plan me a 3-day trip to Bali”)
Finds hotels & flights (future API integration)
Answers travel FAQs (visa, best time to visit, etc.)
Provides personalized recommendations


📌 Roadmap
 Supabase Auth Integration
 AI SDK Integration
 Flights & Hotels API
 Real-time Notifications
 User Dashboard & Saved Trips
 Offline Support (PWA)

🤝 Contributing
Contributions are welcome!
Fork the repo
Create a feature branch
Submit a pull request

📜 License
This project is licensed under the MIT License.



