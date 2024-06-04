import { Metadata } from "next";
import { BackgroundBoxes } from "../components/ui/BackgroundBoxes";
import { HeroScroll } from "../components/ui/HeroScroll";
import SignupForm from "../components/ui/SignupForm";

export const metadata: Metadata = {
  title: "PFIX | About Us",
  description:
    "প্রিন্টার ও ফটোকপি মেশিনের সব সমস্যার নির্ভরযোগ্য সমাধান। সকল ব্র্যান্ডের সেবা দিয়ে থাকি। বাসা এবং অফিস সার্ভিস (ঢাকা সিটি)",
};

export default function AboutUs() {
  return (
    <div>
      <div className="container mx-auto">
        {/* <BackgroundBoxes /> */}
        <HeroScroll />
        <HeroScroll />
        <HeroScroll />
        {/* <SignupForm /> */}
      </div>
    </div>
  );
}
