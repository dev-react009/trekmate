'use client';

import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";
import {ToastProvider} from "@heroui/react"

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
       <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
