"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const stats = [
  {
    id: 202,
    name: "Samuel Arevalo",
    teamLogo: "/assets/images/premier/second-season/team/logo-refricol.webp",
    playerImage: "/assets/images/premier/second-season/top-players/10.webp",
    statValue: "23",
    statLabel: "GOL.",
    cardTitle: "LIDER GOLEADORES",
    cardSubtitle: "GOLES",
    type: "GOL",
  },
  {
    id: 201,
    name: "Juan Rubio",
    teamLogo: "/assets/images/premier/second-season/team/logo-panitas.webp",
    playerImage: "/assets/images/premier/second-season/top-players/3.webp",
    statValue: "MVP",
    statLabel: "MVP",
    cardTitle: "LIDER DE MVP's",
    cardSubtitle: "MVP",
    type: "MVP",
    isIcon: true,
  },
  {
    id: 203,
    name: "Sebastian Rodriguez",
    teamLogo: "/assets/images/premier/second-season/team/logo-panitas.webp",
    playerImage: "/assets/images/premier/second-season/top-players/8.webp",
    statValue: "24",
    statLabel: "GOL.",
    cardTitle: "VALLA MENOS VENCIDA",
    cardSubtitle: "PORTERO",
    type: "VALLA",
  },
  {
    id: 204,
    name: "Diego Mayorga",
    teamLogo: "/assets/images/premier/second-season/team/logo-r8remakia.webp",
    playerImage: "/assets/images/premier/second-season/top-players/9.webp",
    statValue: "5",
    statLabel: "AMA.",
    statValue2: "2",
    statLabel2: "ROJ.",
    cardTitle: "LIDER TARJETAS",
    cardSubtitle: "TARJETAS",
    type: "TARJETAS",
  },
];

export default function StatisticsLeague() {
  return (
    <section className="bg-[#0e1213] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-6xl font-bold text-white text-center mb-12 uppercase tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          TOP / SEMIFINALES
        </h2>

        <div className="w-full max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".swiper-pagination-players" }}
            className="pb-12"
          >
            {stats.map((stat) => (
              <SwiperSlide key={stat.id}>
                <div className="group cursor-pointer">
                  {/* Card Player */}
                  <div className="relative bg-[#1a1f22] rounded-lg overflow-hidden mb-2 transition-transform duration-300 group-hover:scale-105">
                    {/* Mask / Header */}
                    <div className="relative h-24 bg-gradient-to-b from-black/50 to-transparent p-3 z-10">
                      
                      {/* Stat Value (Top Left) */}
                      <div className="absolute top-3 left-3 flex flex-col items-center">
                        {stat.isIcon ? (
                          <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 text-yellow-400 mb-1" viewBox="0 0 21 21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7.5 11.5L2.5 14.5L4.5 9.369L0.5 5.5H5.5L7.5 0.5L9.5 5.5H14.5L10.5 9.369L12.5 14.5L7.5 11.5Z" transform="translate(3 3)" />
                            </svg>
                            <span className="text-xs font-bold text-white">{stat.statLabel}</span>
                          </div>
                        ) : (
                          <>
                            <h5 className="font-bold text-[#b99e52] text-2xl leading-none">{stat.statValue}</h5>
                            <span className="text-xs font-bold text-white">{stat.statLabel}</span>
                            {stat.statValue2 && (
                              <div className="mt-2 flex flex-col items-center">
                                <h5 className="font-bold text-[#b99e52] text-2xl leading-none">{stat.statValue2}</h5>
                                <span className="text-xs font-bold text-white">{stat.statLabel2}</span>
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      {/* Name & Team (Bottom) */}
                      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                        <h3 className="text-white font-bold text-sm uppercase leading-tight max-w-[70%]">
                          {stat.name}
                        </h3>
                        <div className="w-8 h-8 relative">
                          <Image src={stat.teamLogo} alt="Team" fill className="object-contain" />
                        </div>
                      </div>
                    </div>

                    {/* Player Image */}
                    <div className="relative w-full h-64 bg-[#1a1f22]">
                      <Image
                        src={stat.playerImage}
                        alt={stat.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Bottom Label (e.g. GOL) */}
                    <div className="absolute bottom-0 right-0 bg-[#b99e52] text-[#0e1213] text-xs font-bold px-2 py-1 uppercase">
                      {stat.type}
                    </div>
                  </div>

                  {/* Bottom Info Card */}
                  <div className="bg-[#1a1f22] p-4 rounded-sm text-center border-t-2 border-[#b99e52]">
                    <h2 className="text-white font-bold text-lg uppercase">{stat.cardTitle}</h2>
                    <span className="text-gray-400 text-xs uppercase tracking-widest">{stat.cardSubtitle}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="swiper-pagination-players flex justify-center gap-2 mt-8"></div>
        </div>
      </div>
    </section>
  );
}
