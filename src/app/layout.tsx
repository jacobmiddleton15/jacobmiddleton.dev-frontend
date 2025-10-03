import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main className="pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}