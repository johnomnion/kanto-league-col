"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import RankingCard from "../ui/RankingCard";

const rankingPlayers = [
  {
    id: 1,
    name: "Samuel Arevalo",
    teamLogo: "/assets/images/premier/second-season/team/logo-refricol.webp",
    playerImage: "/assets/images/premier/second-season/top-players/10.webp",
    score: "8.9",
    position: "VOL",
    cardBg: "/assets/images/cards/card-refricol-fc.webp",
    stats: { matches: 10, goals: 23, assists: 0 },
  },
  {
    id: 2,
    name: "Juan Sebastian",
    teamLogo: "/assets/images/premier/second-season/team/logo-puskas.webp",
    playerImage: "/assets/images/premier/second-season/top-players/8.webp",
    score: "8.7",
    position: "VOL",
    cardBg: "/assets/images/cards/card-puskas-fc.webp",
    stats: { matches: 11, goals: 17, assists: 0 },
  },
  {
    id: 3,
    name: "Juan Rubio",
    teamLogo: "/assets/images/premier/second-season/team/logo-panitas.webp",
    playerImage: "/assets/images/premier/second-season/top-players/3.webp",
    score: "8.7",
    position: "DEL",
    cardBg: "/assets/images/cards/card-panitas-fc.webp",
    stats: { matches: 11, goals: 19, assists: 0 },
  },
  {
    id: 4,
    name: "Andres Rodriguez",
    teamLogo: "/assets/images/premier/second-season/team/logo-gg-zac.webp",
    playerImage: "/assets/images/premier/second-season/top-players/1.webp",
    score: "8.7",
    position: "VOL",
    cardBg: "/assets/images/cards/card-gg-zac-fc.webp",
    stats: { matches: 9, goals: 6, assists: 0 },
  },
];

export default function RankingFeature() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-5xl sm:text-7xl font-bold text-[#b99e52] mb-2 uppercase tracking-tighter">
            Top 5 - Ranking
          </h2>
          <p className="text-[#0e1213] text-sm font-bold uppercase tracking-[0.3em]">
            Estos son los jugadores de la semana
          </p>
          <h6 className="text-[#b99e52] text-xs uppercase tracking-widest mt-2">Ranking</h6>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-[#b99e52] text-sm leading-relaxed font-medium">
            Nuestros grandes talentos están dando lo mejor en cada jornada,
            estos son el ranking de <br />todos los jugadores conoce como van
            tus preferidos...
          </p>
        </div>

        {/* Ranking Cards Slider */}
        <div className="w-full max-w-6xl mx-auto mb-12 relative">
           <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="pb-12 px-4 ranking-swiper"
          >
            {rankingPlayers.map((player) => (
              <SwiperSlide key={player.id}>
                <RankingCard {...player} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation and View All Button */}
        <div className="flex justify-center items-center gap-8 mt-8">
           {/* Prev Arrow */}
           <button className="swiper-button-prev-custom cursor-pointer hover:scale-110 transition-transform group">
              <ChevronLeft className="w-8 h-8 text-[#0e1213] group-hover:text-[#b99e52] transition-colors" />
           </button>

           {/* View All Button */}
           <Link
             href="/ranking"
             className="inline-flex items-center gap-2 bg-[#b99e52] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-[#a08845] transition-colors shadow-lg text-sm"
           >
             Ver todos
             <ChevronRight className="w-4 h-4" />
           </Link>

           {/* Next Arrow */}
           <button className="swiper-button-next-custom cursor-pointer hover:scale-110 transition-transform group">
              <ChevronRight className="w-8 h-8 text-[#0e1213] group-hover:text-[#b99e52] transition-colors" />
           </button>
        </div>
      </div>
    </section>
  );
}
