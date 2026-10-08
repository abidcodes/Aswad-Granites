import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Splash from "@/components/Splash";
import Cursor from "@/components/Cursor";
import ContactBar from "@/components/ContactBar";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aswad Granites | Premium Granite Slabs, Tiles & Export",
  description:
    "Aswad Granite Industries, Ongole since 1998 — quarrying, processing and exporting world-class granite worldwide.",
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} grain bg-base text-ink antialiased`}>
        <Providers>
          <Splash />
          <Cursor />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ContactBar />
        </Providers>
      </body>
    </html>
  );
}
