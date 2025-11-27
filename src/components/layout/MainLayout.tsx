"use client";

import { useState } from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import TeamNav from "../ui/TeamNav";
import Footer from "../ui/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main className="flex-grow pt-[120px] sm:pt-[150px]">
        {children}
      </main>

      <TeamNav />
      <Footer />
    </div>
  );
}
