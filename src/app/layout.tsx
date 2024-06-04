import dynamic from "next/dynamic";
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import InputFrom from "./components/ui/SignupForm";
// const Navbar = dynamic(() => import("./navbar"), { ssr: false });
// const Footer = dynamic(() => import("./footer"), { ssr: true });

export const metadata: Metadata = {
  title: "PFIX",
  description:
    "প্রিন্টার এবং ফটোকপিয়ার মেশিনের সকল সমস্যার নির্ভরযোগ্য সমাধান প্রিন্টার রিপেয়ার সার্ভিস। আমরা সকল ব্র্যান্ডের প্রিন্টার এবং ফটোকপিয়ার মেশিনের সার্ভিসিং এর জন্য ঢাকা শহরের যেকোনো প্রান্তে (বাড়ি বা অফিস) সেবা প্রদান করি।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full w-auto">
        <Navbar />
        <main className="pt-20 pb-2 bg-slate-300 text-slate-950 font-semibold">
          {/* <InputFrom /> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
