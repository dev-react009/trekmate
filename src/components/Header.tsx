'use client';

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 h-[75px] flex items-center justify-between">
        
        {/* Logo & Nav */}
        <div className="flex items-center gap-10 min-w-0">
          <Image
            src="/images/Wanderlouge.png"
            alt="Wanderlogue Logo"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-800">
            {["Flights", "Hotels", "Activities"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-sm">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src="/images/search-icon.png"
                alt="Search icon"
                width={18}
                height={18}
              />
            </span>
            <input
              type="text"
              aria-label="Search destinations"
              placeholder="Where to?"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-mint text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brandBlue transition shadow-sm"
            />
          </div>
        </div>

        {/* Globe Icon & Avatar */}
        <div className="flex items-center gap-4">
          <button
            className="w-10 h-10 rounded-full bg-mint flex items-center justify-center hover:ring-2 ring-brandBlue transition"
            aria-label="Change language or region"
          >
            <Image
              src="/images/globe-icon.png"
              alt="Globe icon"
              width={20}
              height={20}
            />
          </button>

          <Image
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User avatar"
            width={36}
            height={36}
            className="rounded-full ring-1 ring-gray-200"
          />
        </div>
      </div>
    </header>
  );
}
