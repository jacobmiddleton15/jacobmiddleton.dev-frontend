import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <head>
        { /* Preload theme script to avoid flash */ }
        <Script src="/js/theme-preload.js" strategy="beforeInteractive" />
        <meta name="color-scheme" content="light dark" />
      </head>

      <body className="pt-16 min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex flex-col flex-grow bg-background text-text">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      
    </html>
  );
}