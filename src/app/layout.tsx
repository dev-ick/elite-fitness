import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Fitness",
  description: "Training for Your Best Life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className} bg-black text-white min-h-screen flex flex-col m-0 p-0 overflow-x-hidden`}>
        {/* Fixed transparent navbar overlays everything */}
        <Navbar />

        {/* Main content – no padding-top here anymore */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}