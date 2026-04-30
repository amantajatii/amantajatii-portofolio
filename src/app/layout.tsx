import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amantajati.vercel.app"),
  title: {
    default: "Diaz Amantajati Susilo — Frontend Engineer",
    template: "%s — Diaz Amantajati Susilo",
  },
  description:
    "Portfolio of Diaz Amantajati Susilo, a frontend engineer and Web3 builder focused on scalable web applications, polished UX, and product-ready interfaces.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
    apple: [
      {
        url: "/apple-icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Diaz Amantajati Susilo — Frontend Engineer",
    description:
      "Selected work across Web3, AI recruitment, payment interfaces, and performance-focused frontend engineering.",
    url: "https://amantajati.vercel.app",
    siteName: "Amantajatii Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Diaz Amantajati Susilo — Frontend Engineer",
    description:
      "Frontend engineer and Web3 builder creating scalable, intuitive web products.",
  },
};

export const viewport: Viewport = {
  themeColor: "#242625",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
