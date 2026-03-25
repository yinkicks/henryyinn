import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const saans = localFont({
  src: "../public/fonts/Saans-TRIAL-VF.ttf",
  variable: "--font-saans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henry Yin",
  description: "Henry is designing health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${saans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-white text-[#111]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
