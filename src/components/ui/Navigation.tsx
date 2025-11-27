"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Equipos", href: "/equipos" },
  { name: "Calendario", href: "/calendario" },
  { name: "Clasificación", href: "/clasificacion" },
  { name: "Ranking Jugadores", href: "/ranking" },
  { name: "Reglamento", href: "/reglamento" },
  { name: "Estadio Kanto League", href: "/estadio-kantoleague" },
];

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-[#02241e] transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Nav Logo */}
      <div className="absolute top-8 left-8 z-20 w-[60px] sm:w-[80px]">
        <Image
          src="/assets/images/logos/kanto-league.webp"
          alt="Kanto League"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-20 text-white hover:rotate-90 transition-transform duration-300"
      >
        <X size={40} />
      </button>

      {/* Menu Items */}
      <div className="flex flex-col justify-center items-center h-full relative z-10">
        <ul className="flex flex-col gap-6 text-center">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="text-3xl sm:text-5xl font-bold text-transparent text-stroke hover:text-white transition-colors duration-300 uppercase tracking-wider"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Background Image Overlay (Changes on Hover) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         {/* Default Background */}
         <Image
            src="/assets/images/premier/second-season/promo/lanzamiento-premier-league-2025.webp"
            alt="Background"
            fill
            className={`object-cover transition-opacity duration-500 ${hoveredItem ? 'opacity-0' : 'opacity-100'}`}
         />
         
         {/* Dynamic Backgrounds could be added here based on hoveredItem */}
      </div>
    </div>
  );
}
