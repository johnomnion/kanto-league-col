"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import NavLeagues from "./NavLeagues";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isSplitOpen, setIsSplitOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300">
      {/* Top Bar */}
      <div className="w-full bg-[#0e1213] relative z-10">
        <div className="container mx-auto">
           <div className="relative w-full h-[43px] sm:h-[50px]">
              <Image 
                src="/assets/images/header.webp" 
                alt="Header Banner" 
                fill
                className="object-cover object-top"
                priority
              />
           </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-[70px] sm:h-[100px]">
          
          {/* Logo */}
          <Link href="/" className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] z-20 group">
            <div className="relative w-full h-full overflow-hidden">
               <Image
                 src="/assets/images/logos/kanto-league.webp"
                 alt="Kanto League"
                 fill
                 className="object-contain transition-transform duration-500 group-hover:-translate-y-full"
                 priority
               />
               <Image
                 src="/assets/images/logos/kanto-league.webp"
                 alt="Kanto League"
                 fill
                 className="object-contain absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-full grayscale"
                 priority
               />
            </div>
          </Link>

          {/* Splits Dropdown */}
          <div 
            className="absolute left-[80px] sm:left-[145px] z-10 flex"
            onMouseEnter={() => setIsSplitOpen(true)}
            onMouseLeave={() => setIsSplitOpen(false)}
          >
            <div className="relative group inline-block">
               <h4 className="cursor-pointer py-6 sm:py-8 text-normal text-[#0e1213] font-bold uppercase flex items-center text-sm sm:text-base">
                 Split 2º (2025) 
                 <ChevronDown className="ml-2 w-4 h-4 opacity-50" />
               </h4>
               
               {/* Dropdown Menu */}
               <ul className={`absolute left-0 top-full mt-0 bg-white text-black rounded-md shadow-lg min-w-[180px] border border-gray-100 overflow-hidden transition-all duration-300 ${isSplitOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                 <li className="border-b border-gray-100 last:border-0">
                   <Link href="/" className="flex items-center justify-between px-4 py-3 text-sm font-bold opacity-70 hover:opacity-100 hover:text-[#134a41] hover:bg-gray-50 transition-colors">
                     Split 2º (2025) 
                     <ChevronRight className="ml-2 w-3 h-3" />
                   </Link>
                 </li>
                 <li className="border-b border-gray-100 last:border-0">
                   <Link href="/temporada/uno" className="flex items-center justify-between px-4 py-3 text-sm font-bold opacity-70 hover:opacity-100 hover:text-[#134a41] hover:bg-gray-50 transition-colors">
                     Split 1º (2023)
                     <ChevronRight className="ml-2 w-3 h-3" />
                   </Link>
                 </li>
               </ul>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 sm:gap-8 ml-auto">
            {/* Live Button */}
            <a
              href="https://kick.com/kantoleaguecol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform group"
            >
              <div className="flex gap-1 items-center h-3">
                 <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                 <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse delay-75"></div>
                 <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse delay-150"></div>
              </div>
              <Image src="/assets/images/icons/kick-icon.svg" alt="Kick" width={12} height={12} className="w-3 h-3" />
              <h6 className="font-bold uppercase text-[11px] text-black group-hover:text-[#b99e52] transition-colors">En vivo</h6>
            </a>

            {/* Hamburger Menu */}
            <button 
              onClick={onMenuClick}
              className="w-10 h-5 flex flex-col justify-between items-end cursor-pointer group"
            >
              <span className="w-full h-[2px] bg-black transition-all duration-300 group-hover:w-3/4"></span>
              <span className="w-3/4 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              <span className="w-1/2 h-[2px] bg-black transition-all duration-300 group-hover:w-3/4"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Nav Leagues (Fixed Position) */}
      <NavLeagues />
    </header>
  );
}
