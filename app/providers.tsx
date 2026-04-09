"use client";

import { SubscribeProvider } from "@/components/SubscribeContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SubscribeProvider>
      {children}
    </SubscribeProvider>
  );
}
