"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const rankingPlayers = [
  {
    id: 1,
    name: "Juan Rubio",
    teamLogo: "/assets/images/premier/second-season/team/logo-panitas.webp",
    playerImage: "/assets/images/premier/second-season/top-players/3.webp",
    score: "9.8",
    position: "1",
  },
  {
    id: 2,
    name: "Samuel Arevalo",
    teamLogo: "/assets/images/premier/second-season/team/logo-refricol.webp",
    playerImage: "/assets/images/premier/second-season/top-players/10.webp",
    score: "9.5",
    position: "2",
  },
  {
    id: 3,
    name: "Diego Mayorga",
    teamLogo: "/assets/images/premier/second-season/team/logo-r8remakia.webp",
    playerImage: "/assets/images/premier/second-season/top-players/9.webp",
    score: "9.2",
    position: "3",
  },
  {
    id: 4,
    name: "Sebastian Rodriguez",
    teamLogo: "/assets/images/premier/second-season/team/logo-panitas.webp",
    playerImage: "/assets/images/premier/second-season/top-players/8.webp",
    score: "9.0",
    position: "4",
  },
  {
    id: 5,
    name: "Carlos Perez",
    teamLogo: "/assets/images/premier/second-season/team/logo-puskas.webp",
    playerImage: "/assets/images/premier/second-season/top-players/1.webp",
    score: "8.9",
    position: "5",
  },
];

export default function RankingFeature() {
  return (
    <section className="bg-white py-20 relative">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-6xl font-bold text-[#b99e52] mb-4 uppercase">
            Top 5 - Ranking
          </h2>
          <p className="text-[#0e1213] text-lg font-bold uppercase tracking-widest mb-2">
            Estos son los jugadores de la semana
          </p>
          <h6 className="text-[#b99e52] text-sm uppercase tracking-widest">Ranking</h6>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-[#b99e52] text-sm leading-relaxed">
            Nuestros grandes talentos están dando lo mejor en cada jornada,
            estos son el ranking de <br />todos los jugadores conoce como van
            tus preferidos...
          </p>
        </div>

        {/* Ranking Slider */}
        <div className="w-full max-w-6xl mx-auto mb-12 relative">
           <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            navigation
            className="pb-12 px-4"
          >
            {rankingPlayers.map((player) => (
              <SwiperSlide key={player.id}>
                <div className="group cursor-pointer relative">
                  {/* Card Container */}
                  <div className="relative bg-[#0e1213] rounded-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 shadow-xl">
                    
                    {/* Header: Position & Score */}
                    <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-20">
                       <div className="flex flex-col items-center">
                          <span className="text-4xl font-bold text-[#b99e52] leading-none">{player.position}</span>
                          <span className="text-[10px] uppercase text-white font-bold tracking-widest">Pos.</span>
                       </div>
                       <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                          <span className="text-2xl font-bold text-white leading-none">{player.score}</span>
                          <span className="text-[10px] uppercase text-[#b99e52] font-bold tracking-widest">Ptos</span>
                       </div>
                    </div>

                    {/* Player Image */}
                    <div className="relative w-full h-80 mt-4">
                       <Image 
                          src={player.playerImage} 
                          alt={player.name} 
                          fill 
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0e1213] via-transparent to-transparent opacity-90"></div>
                    </div>

                    {/* Footer: Name & Team */}
                    <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                       <div className="flex items-center justify-between border-t border-white/20 pt-3">
                          <h3 className="text-white font-bold text-lg uppercase text-left leading-tight max-w-[70%]">
                             {player.name}
                          </h3>
                          <div className="w-10 h-10 relative bg-white rounded-full p-1 shadow-lg">
                             <Image src={player.teamLogo} alt="Team" fill className="object-contain p-1" />
                          </div>
                       </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/ranking"
            className="inline-block border-2 border-[#0e1213] text-[#0e1213] px-10 py-3 font-bold uppercase tracking-widest hover:bg-[#0e1213] hover:text-white transition-all duration-300"
          >
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  );
}


