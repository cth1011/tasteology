"use client";
import CookingSection from "~/components/CookingSection";
import TasteColorsSection from "~/components/TasteColorsSection";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-center bg-[#0e1414] text-white">
      <CookingSection />
      <TasteColorsSection />
    </main>
  );
}
