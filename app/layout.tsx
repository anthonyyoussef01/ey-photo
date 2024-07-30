import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextFont } from "next/dist/compiled/@next/font";
import { ReactNode } from "react";

const outfit: NextFont = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EY Photo & Video",
  description: "NY-based (Rockland County / Hudson Valley) Fujifilm Photographer, Videographer, " +
      "and Drone Pilot. Specializing in Weddings, Engagements, and Family Portraits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}