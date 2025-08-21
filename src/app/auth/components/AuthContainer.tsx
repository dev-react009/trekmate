"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AuthContainer({
  children,
  mode,
}: {
  children: ReactNode;
  mode: "signin" | "signup";
}) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1c1c2a] text-white w-full">
      {/* Left Panel */}
      <div className="hidden md:flex w-1/2 flex-1 flex-col items-center justify-center p-10 bg-gradient-to-br from-purple-800/50 to-indigo-800/50 relative ">
        {/* Background image */}
        <div
          className="absolute  inset-0 
          bg-cover bg-center"
          aria-hidden="true"
        >
          {/* Overlay */}
          <div className="absolute  flex items-center justify-center inset-0 bg-gradient-to-br from-black/50 to-black/30">
            {/* Content on top */}
            <div className="relative z-10  text-center">
              <h1 className="text-4xl font-bold mb-4">
                Capturing Moments, Creating Memories
              </h1>
              <p className="text-gray-300 text-lg">
                {mode === "signup"
                  ? "Join us today and start your journey."
                  : "Your journey continues here. Sign in to explore more."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <motion.div
        key={mode}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.9 }}
        className=" w-1/2 flex-1 flex items-center justify-center p-8"
      >
        <div className="w-full  max-w-md bg-[#1c1c2a]/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-700">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
