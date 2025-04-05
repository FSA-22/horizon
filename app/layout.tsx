import type { Metadata } from "next";
import {IBM_Plex_Serif } from "next/font/google";
import "./globals.css";



const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "Horizon is a modern banking platform, available all over the and it is for all",
  icons: '/icons/logo.svg'
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={` ${ibmPlexSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
