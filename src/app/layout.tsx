

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';

import { HeroUIProvider } from "@heroui/react";
import ClientProvider from "@/utils/ClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata:Metadata = {
  title: "Wanderlogue - Travel Stories & Adventures",
  description: "Explore the world through the lens of a travel blogger.",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProvider>
          <main className="min-h-screen ">
          {children}
        </main>
        {/* <Footer/> */}
        </ClientProvider>
        {/* <Navbar/> */}
        
      </body>
    </html>
  );
}
