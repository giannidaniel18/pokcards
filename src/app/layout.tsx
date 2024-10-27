import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/ui/NavBar";

import useUserStore from "@/stores/auth/userStore";
import Providers from "@/config/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokeCards",
  description: "PokeCards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="es" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen flex flex-col items-center  `}>
          <Providers>
            <NavBar />
            <main className="flex flex-col w-full max-w-screen-2xl  items-center justify-between ">{children}</main>
          </Providers>
        </body>
      </html>
    </>
  );
}
