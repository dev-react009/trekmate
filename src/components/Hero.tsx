'use client';

import { useEffect, useState } from "react";
import {  Button, Card } from "@heroui/react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden px-4 sm:px-8"
      style={{ backgroundImage: "url('/images/dashboard-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-none z-0   "></div>

      <div className="relative z-10 px-6 py-24 max-w-5xl mx-auto">
        {/* Badge */}
        {/* <Badge variant="shadow" className="mb-6 !bg-white/90 text-black font-medium px-5 py-2 shadow-lg">
          🏔️ Trusted by 25,000+ adventurers
        </Badge> */}
        <h2 className="mb-6 bg-white/100 text-black font-medium px-5 py-2 shadow-lg">
          🏔️ Trusted by 25,000+ adventurers
        </h2>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-shadow-white drop-shadow-2xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Trekmate
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Discover your next adventure with the ultimate trekking companion.
        </p>

        <p className="text-sm sm:text-base text-white/70 mb-10 max-w-xl mx-auto">
          Advanced navigation, safety features, and a thriving community — everything you need for epic outdoor adventures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
          <Button size="lg" variant="light" className="flex justify-center items-center px-8 py-5 text-lg shadow-md bg-white/10 text-teal-50">
            Start Free Trial
          <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="flat"
            className=" flex px-8 py-5 text-lg border border-white/30 text-white hover:bg-white/10 transition"
          >
            <Play className="mr-2 w-5 h-5" />
            <span className="text-white">Watch Demo</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Trails Mapped", value: "50K+" },
            { label: "Active Users", value: "25K+" },
            { label: "App Rating", value: "4.9★" },
          ].map((stat, i) => (
            <Card
              key={i}
              className="p-6 bg-white/10 border border-white/20 backdrop-blur-md hover:scale-[1.03] transition"
            >
              <h3 className="text-2xl font-semibold text-green-300 mb-1">{stat.value}</h3>
              <p className="text-sm text-white/80">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-5  text-white/60 text-sm animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center items-start mx-auto">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
        <div className="mt-2">Scroll to explore</div>
      </div>
    </section>
  );
}
