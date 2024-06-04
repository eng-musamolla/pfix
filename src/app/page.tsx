import { Metadata } from "next";
import Image from "next/image";
import printerRepair from "/public/image/printerRepair1.jpg";

export const metadata: Metadata = {
  title: "PFIX",
  description:
    "প্রিন্টার ও ফটোকপি মেশিনের সব সমস্যার নির্ভরযোগ্য সমাধান। সকল ব্র্যান্ডের সেবা দিয়ে থাকি। বাসা এবং অফিস সার্ভিস (ঢাকা সিটি)",
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="hero min-h-[90vh] w-full ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            alt="hero"
            src={printerRepair}
            className="max-w-sm w-full  rounded-lg shadow-2xl"
            height={1024}
            width={1024}
          />
          <div>
            <h1 className="text-3xl sm:text-5xl  font-bold ">
              Printer Repair Service!
            </h1>
            <p className="py-6">
              প্রিন্টার এবং ফটোকপিয়ার মেশিনের সকল সমস্যার নির্ভরযোগ্য সমাধান
              প্রিন্টার রিপেয়ার সার্ভিস। আমরা সকল ব্র্যান্ডের প্রিন্টার এবং
              ফটোকপিয়ার মেশিনের সার্ভিসিং এর জন্য ঢাকা শহরের যেকোনো প্রান্তে
              (বাড়ি বা অফিস) সেবা প্রদান করি।
            </p>

            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:animate-pulse">
              Service Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
