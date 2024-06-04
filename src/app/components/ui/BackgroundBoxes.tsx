"use client";
import React from "react";
import { Boxes } from "./background-boxes";
import { cn } from "../utils/cn";
import SignupForm from "./SignupForm";

export function BackgroundBoxes() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <div className="w-full h-full z-100">
        <SignupForm />
      </div>
      {/* <Boxes /> */}
    </div>
  );
}
