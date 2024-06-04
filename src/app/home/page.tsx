import { Metadata } from "next";
import Image from "next/image";
import printerRepair from "../../../public/image/printerRepair6.jpg";

export const metadata: Metadata = {
  title: "PFIX | Home",
  description:
    "প্রিন্টার ও ফটোকপি মেশিনের সব সমস্যার নির্ভরযোগ্য সমাধান। সকল ব্র্যান্ডের সেবা দিয়ে থাকি। বাসা এবং অফিস সার্ভিস (ঢাকা সিটি)",
};

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen w-1/12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <Image
            alt="hero"
            src={printerRepair}
            className="max-w-sm w-6 h-10 rounded-lg shadow-2xl"
            height={1024}
            width={1024}
          /> */}
          <div className="">
            <h1 className="text-5xl font-bold">Printer Repair Service!</h1>
            <p className="py-6">
              প্রিন্টার এবং ফটোকপিয়ার মেশিনের সকল সমস্যার নির্ভরযোগ্য সমাধান
              প্রিন্টার রিপেয়ার সার্ভিস। আমরা সকল ব্র্যান্ডের প্রিন্টার এবং
              ফটোকপিয়ার মেশিনের সার্ভিসিং এর জন্য ঢাকা শহরের যেকোনো প্রান্তে
              (বাড়ি বা অফিস) সেবা প্রদান করি।
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
