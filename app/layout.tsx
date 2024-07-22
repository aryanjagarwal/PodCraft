import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PodCraft",
  description: "Podcasting, reimagined",
  icons: {
    icon: "/icons/logoP.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <AudioProvider>
        <body className={`${manrope.className}`}>
          {children}
        </body>
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
