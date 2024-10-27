"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Providers = ({ children }: { children: ReactNode }) => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
