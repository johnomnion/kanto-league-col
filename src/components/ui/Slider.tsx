"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/assets/images/premier/second-season/banners/jornada-1/5.webp",
    title: "Torneo de Ascenso 2025 a la Kanto Premier 🏆",
    description: "Este 30 de septiembre en Bogotá, la Kanto League da inicio al Torneo de Ascenso a la Kanto Premier, una competencia donde 4 equipos de fútbol 7 buscarán el cupo a la Kanto Premier League...",
    link: "/ascenso",
    linkText: "Ver más",
  },
  {
    id: 2,
    image: "/assets/images/premier/second-season/banners/jornada-1/6.webp",
    title: "🌟 El Torneo Femenino de la Kanto League inicia este 29 de septiembre",
    description: "La Kanto League presenta un nuevo capítulo con el Torneo Femenino de Fútbol 7, que arranca este 29 de septiembre en la sede de La Conejera (Bogotá)...",
    link: "/noticias/torneo-femenino-inicia-29-septiembre",
    linkText: "Ver más",
  },
];

export default function Slider() {
  return (
    <section className="relative w-full h-[calc(100vh-120px)] sm:h-[calc(100vh-150px)] min-h-[600px] bg-[#0e1213]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1213] via-transparent to-transparent opacity-90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto h-full flex items-center px-4 sm:px-10">
              <div className="max-w-2xl text-white">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>
                <Link
                  href={slide.link}
                  className="inline-block border-2 border-[#b99e52] text-[#b99e52] px-8 py-3 font-bold uppercase tracking-widest hover:bg-[#b99e52] hover:text-white transition-all duration-300"
                >
                  {slide.linkText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
