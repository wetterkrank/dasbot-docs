import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dasbot.yak.supplies'),
  title: 'Dasbot - a Telegram bot that helps you learn German articles',
  description: 'Dasbot will send you a daily German articles quiz. Based on a frequency dictionary and spaced repetition technique.',
  openGraph: {
    title: 'Dasbot - a Telegram bot that helps you learn German articles',
    description: 'Dasbot will send you a daily German articles quiz. Based on a frequency dictionary and spaced repetition technique.',
    url: 'https://dasbot.yak.supplies',
    siteName: 'Dasbot',
    images: [
      {
        url: '/img/dasbot.png',
        width: 980,
        height: 916,
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
      <GoogleAnalytics gaId="G-LW9L1X7J7C" />
    </html>
  );
}
