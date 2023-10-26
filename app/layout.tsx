import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuzzyBees",
  description: "An eCommerce shop for all your bee and beekeeping needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-secondary`}>
        <ModalProvider />
        <ToasterProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
