import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlowTracker - User Analytics Dashboard",
  description: "FlowTracker is a full-stack analysis application that tracks user sessions, page views, clicks, and visualizes user behaviour through session journeys and click heatmaps.",
  keywords: ["Next.js","Node.js","MongoDB", "Analytics", "Heatmap", "Session Tracking", "User Analytics", "Full Stack"],
  authors: [{name: "Mohd Abdul Sabeeh"}],
  creator: "Mohd Abdul Sabeeh"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Script src="/tracker.js" strategy="afterInteractive"></Script>
      </body>
    </html>
  );
}
