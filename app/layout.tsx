import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Reddy Book ID Official | Secure & Instant Online Betting Exchange",
  description: "Secure your verified Reddy Book ID for instant withdrawals, live sports insights, and 100% fair play. Start winning now.",
  keywords: "Reddy Book, Reddy Book ID, Reddy Book Login, Reddy Book Register, Buy Reddy Book ID",
  authors: [{ name: "Reddy Book" }],
  creator: "Reddy Book",
  robots: "index, follow",
  openGraph: {
    title: "Reddy Book - Bold Sports betting platform",
    description: "Secure your verified Reddy Book ID for instant withdrawals, live sports insights, and 100% fair play. Start winning now.",
    url: "https://mahadeevbook.com",
    siteName: "Reddy Book",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 font-sans selection:bg-red-500/20 selection:text-red-400">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
