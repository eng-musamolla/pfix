import dynamic from "next/dynamic";
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./navbar";
import Footer from "./footer";
// const Navbar = dynamic(() => import("./navbar"), { ssr: false });
// const Footer = dynamic(() => import("./footer"), { ssr: true });

export const metadata: Metadata = {
  title: "PFIX",
  description:
    "প্রিন্টার ও ফটোকপি মেশিনের সব সমস্যার নির্ভরযোগ্য সমাধান। সকল ব্র্যান্ডের সেবা দিয়ে থাকি। বাসা এবং অফিস সার্ভিস (ঢাকা সিটি)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
