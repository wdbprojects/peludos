"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
