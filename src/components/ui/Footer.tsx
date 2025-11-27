import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 font-bold">
      {/* Sponsors Section */}
      <div className="w-full bg-[#15191b] py-8 border-b border-white/5">
        <div className="container mx-auto px-4">
          <h4 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#8f9194] mb-6">
            Patrocinadores
          </h4>
          <div className="flex justify-center items-center">
            <a
              href="https://www.instagram.com/lyonuniformes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity grayscale hover:grayscale-0 duration-300"
            >
              <Image
                src="/assets/images/partners/logo-lyon.webp"
                alt="Lyon Uniformes"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#1b2326] text-white pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            
            {/* Column 1: Logo */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start items-center">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full p-2 flex items-center justify-center shadow-2xl">
                 <Image
                   src="/assets/images/logos/kanto-league.webp"
                   alt="Kanto League"
                   width={160}
                   height={160}
                   className="w-full h-full object-contain"
                 />
              </div>
            </div>

            {/* Column 2: Menu */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h5 className="text-[#b99e52] text-xs uppercase tracking-widest mb-6 hidden lg:block">Inicio</h5>
              <ul className="space-y-4">
                <li><Link href="/" className="text-white hover:text-[#b99e52] transition-colors uppercase text-xs tracking-widest font-bold">Inicio</Link></li>
                <li><Link href="/equipos" className="text-white hover:text-[#b99e52] transition-colors uppercase text-xs tracking-widest font-bold">Equipos</Link></li>
                <li><Link href="/calendario" className="text-white hover:text-[#b99e52] transition-colors uppercase text-xs tracking-widest font-bold">Calendario</Link></li>
                <li><Link href="/clasificacion" className="text-white hover:text-[#b99e52] transition-colors uppercase text-xs tracking-widest font-bold">Clasificación</Link></li>
                <li><Link href="/ranking" className="text-white hover:text-[#b99e52] transition-colors uppercase text-xs tracking-widest font-bold">Ranking Jugadores</Link></li>
                <li><Link href="/jugadores-draft" className="text-white hover:text-[#b99e52] transition-colors uppercase text-xs tracking-widest font-bold">Draft</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <ul className="space-y-6">
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                  <Mail className="w-4 h-4 mt-0.5 text-white group-hover:text-[#b99e52] transition-colors" />
                  <a href="mailto:kantoleaguecol@gmail.com" className="text-white hover:text-[#b99e52] transition-colors text-xs font-bold uppercase tracking-widest">
                    kantoleaguecol@gmail.com
                  </a>
                </li>
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                  <Phone className="w-4 h-4 mt-0.5 text-white group-hover:text-[#b99e52] transition-colors" />
                  <a href="https://api.whatsapp.com/send?phone=573160421988" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#b99e52] transition-colors text-xs font-bold uppercase tracking-widest">
                    +57 316 042 19 88
                  </a>
                </li>
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                  <MapPin className="w-4 h-4 mt-0.5 text-white group-hover:text-[#b99e52] transition-colors" />
                  <a href="https://maps.app.goo.gl/jZcLHRRoJbEkqEj98" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#b99e52] transition-colors text-xs font-bold uppercase tracking-widest leading-relaxed">
                    Complejo Deportivo - KantoLeague<br />
                    <span className="text-[10px] text-gray-400">Av. la Conejera #100 2 a<br />Bogotá, Colombia</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Links */}
            <div className="lg:col-span-3 text-center lg:text-left">
               <ul className="space-y-4 inline-block text-left">
                {[
                  { name: "Instagram", url: "https://www.instagram.com/kantoleaguecol/" },
                  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61553272852433" },
                  { name: "Youtube", url: "https://www.youtube.com/@kantoleaguecol." },
                  { name: "Kick", url: "https://kick.com/kantoleaguecol" },
                  { name: "Tiktok", url: "https://www.tiktok.com/@kantoleaguecol" },
                ].map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#b99e52] transition-colors text-xs font-bold uppercase tracking-widest block"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-[#15191b] py-6 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#8f9194] text-[10px] uppercase tracking-[0.2em]">
            &copy; Copyright {currentYear} KantoLeague -{" "}
            <a
              href="https://omnion.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              By: omnion
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
