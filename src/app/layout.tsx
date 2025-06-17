import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import ParticleSystem from "@/components/ParticleSystem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blockchain Agent JP - Your Gateway to the Japanese Blockchain Market",
  description: "Comprehensive support for blockchain projects entering the Japanese market. From social media management to community building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ParticleSystem />
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}