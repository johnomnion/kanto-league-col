"use client";

import Link from "next/link";
import Image from "next/image";

const teams = [
  { name: "Refricol Unt.", slug: "refricol-fc", logo: "/assets/images/premier/second-season/team/logo-refricol.webp" },
  { name: "Puskas FC", slug: "puskas-fc", logo: "/assets/images/premier/second-season/team/logo-puskas.webp" },
  { name: "Magic Kings FC", slug: "magic-kings-fc", logo: "/assets/images/premier/second-season/team/logo-magic-kings.webp" },
  { name: "Armas x arte", slug: "armas-x-arte-fc", logo: "/assets/images/premier/second-season/team/logo-armas-x-arte.webp" },
  { name: "Ojito FC", slug: "ojito-fc", logo: "/assets/images/ascent-league/team/logo-ojito.webp" },
  { name: "Zeta FC", slug: "zeta-fc", logo: "/assets/images/ascent-league/team/logo-zeta.webp" },
  { name: "Fenix FC", slug: "fenix-fc", logo: "/assets/images/premier/second-season/team/logo-fenix.webp" },
  { name: "GG Zac FC", slug: "gg-zac-fc", logo: "/assets/images/premier/second-season/team/logo-gg-zac.webp" },
  { name: "Panitas FC", slug: "panitas-fc", logo: "/assets/images/premier/second-season/team/logo-panitas.webp" },
  { name: "R8remakia FC", slug: "r8remakia-fc", logo: "/assets/images/premier/second-season/team/logo-r8remakia.webp" },
];

export default function TeamNav() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <div className="bg-[#02241e] border-2 border-[#b99e52] rounded-full p-2 pointer-events-auto shadow-2xl max-w-[95vw] overflow-x-auto scrollbar-hide">
        <ul className="flex items-center gap-4 px-2">
          {teams.slice(0, 5).map((team) => (
            <li key={team.slug} className="shrink-0">
              <Link href={`/equipos/${team.slug}`} title={team.name} className="block hover:scale-125 transition-transform duration-300">
                <Image
                  src={team.logo}
                  alt={team.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </Link>
            </li>
          ))}

          {/* Center Logo (Home) */}
          <li className="shrink-0 -mt-8 mx-2">
            <Link href="/" className="block hover:scale-110 transition-transform duration-300 bg-[#02241e] border-2 border-[#b99e52] rounded-full p-1">
              <Image
                src="/assets/images/logos/kanto-league.webp"
                alt="Home"
                width={50}
                height={50}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </Link>
          </li>

          {teams.slice(5).map((team) => (
            <li key={team.slug} className="shrink-0">
              <Link href={`/equipos/${team.slug}`} title={team.name} className="block hover:scale-125 transition-transform duration-300">
                <Image
                  src={team.logo}
                  alt={team.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
