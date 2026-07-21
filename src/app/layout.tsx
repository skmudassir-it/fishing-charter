import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "ReelTime Fishing Charters — Gulf Coast Fishing Adventures",
    template: "%s — ReelTime Fishing Charters",
  },
  description: "Experience world-class fishing charters along the Gulf Coast. Deep sea, inshore, fly fishing, and sunset cruises in Destin, FL. Book your adventure today!",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
