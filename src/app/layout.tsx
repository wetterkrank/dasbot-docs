import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dasbot.yak.supplies'),
  title: 'Dasbot - a Telegram bot that helps to learn German articles',
  description: 'Dasbot will send you a daily German articles quiz. Based on a frequency dictionary and spaced repetition technique.',
  openGraph: {
    title: 'Dasbot - a Telegram bot that helps to learn German articles',
    description: 'Dasbot will send you a daily German articles quiz. Based on a frequency dictionary and spaced repetition technique.',
    url: 'https://dasbot.yak.supplies',
    siteName: 'Dasbot',
    images: [
      {
        url: '/img/Obermaschinist-Johann.jpg',
        width: 1280,
        height: 694,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-h-screen flex flex-col`}>
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
