"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Play, Star } from "lucide-react";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [isSplitOpen, setIsSplitOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <section className="relative">
        {/* Top Bar */}
        <div className="w-full bg-[#0e1213]">
          <div className="container mx-auto">
            <div className="relative w-full h-[40px] sm:h-[50px]">
               {/* Header Image Placeholder - Adjust path as needed */}
               {/* <Image src="/assets/images/header.webp" alt="Header" fill className="object-cover" /> */}
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center h-[70px] px-4 sm:px-10 bg-white shadow-md relative">
          
          {/* Logo */}
          <Link href="/" className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] z-20">
            <Image
              src="/assets/images/logos/kanto-league.webp"
              alt="Kanto League"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Splits Dropdown */}
          <div className="absolute left-[80px] sm:left-[145px] z-10 hidden sm:flex">
            <div 
              className="relative group inline-block"
              onMouseEnter={() => setIsSplitOpen(true)}
              onMouseLeave={() => setIsSplitOpen(false)}
            >
              <h4 className="cursor-pointer py-6 text-normal text-[#0e1213] font-bold uppercase flex items-center text-sm sm:text-base">
                Split 2º (2025) 
                <ChevronDown className="ml-2 w-4 h-4 opacity-50" />
              </h4>
              
              {isSplitOpen && (
                <ul className="absolute left-0 top-full mt-0 bg-white text-black rounded-md shadow-lg min-w-[145px] border">
                  <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                    <Link href="/" className="flex items-center justify-between text-xs font-bold opacity-70 hover:text-primary">
                      Split 2º (2025)
                      <ChevronRight className="ml-2 w-3 h-3" />
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                    <Link href="/temporada/uno" className="flex items-center justify-between text-xs font-bold opacity-70 hover:text-primary">
                      Split 1º (2023)
                      <ChevronRight className="ml-2 w-3 h-3" />
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Right Side: Live Button & Menu */}
          <div className="flex items-center gap-4">
            
            {/* Live Button */}
            <a
              href="https://kick.com/kantoleaguecol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex gap-1 items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse delay-75"></span>
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse delay-150"></span>
              </div>
              <Image src="/assets/images/icons/kick-icon.svg" alt="Kick" width={12} height={12} />
              <h6 className="font-bold uppercase text-[11px] text-black">En vivo</h6>
            </a>

            {/* Hamburger Menu */}
            <button 
              onClick={onMenuClick}
              className="w-10 h-10 flex flex-col justify-center items-end gap-1.5 cursor-pointer group"
            >
              <span className="w-8 h-[2px] bg-black transition-all group-hover:w-6"></span>
              <span className="w-6 h-[2px] bg-black transition-all group-hover:w-8"></span>
              <span className="w-4 h-[2px] bg-black transition-all group-hover:w-6"></span>
            </button>
          </div>
        </div>
      </section>
      
      {/* League Selector (Floating) */}
      <div className="fixed right-[1rem] sm:right-[7rem] top-[80px] z-40 flex flex-col sm:flex-row gap-2">
         <Link href="/" className="flex items-center bg-white rounded-full h-9 px-2 py-2 shadow-lg hover:scale-105 transition-transform">
            <Image src="/assets/images/logos/kanto-league-medium.png" alt="Premier" width={28} height={28} className="rounded-full mr-2 shadow-md" />
            <h6 className="font-bold mr-2 uppercase text-[11px] hidden sm:block">Liga Premier</h6>
         </Link>
         <Link href="/femenina" className="flex items-center bg-white rounded-full h-9 px-2 py-2 shadow-lg hover:scale-105 transition-transform opacity-70 hover:opacity-100">
            <Image src="/assets/images/logos/kanto-league-medium-femenina.png" alt="Femenina" width={28} height={28} className="rounded-full mr-2 shadow-md" />
            <h6 className="font-bold mr-2 uppercase text-[11px] hidden sm:block">Liga Femenina</h6>
         </Link>
         <Link href="/ascenso" className="flex items-center bg-white rounded-full h-9 px-2 py-2 shadow-lg hover:scale-105 transition-transform opacity-70 hover:opacity-100">
            <Image src="/assets/images/logos/kanto-league-medium-ascenso.webp" alt="Ascenso" width={28} height={28} className="rounded-full mr-2 shadow-md" />
            <h6 className="font-bold mr-2 uppercase text-[11px] hidden sm:block">Liga Ascenso</h6>
         </Link>
      </div>
    </header>
  );
}
