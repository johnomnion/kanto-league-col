import Slider from "@/components/ui/Slider";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import StatisticsLeague from "@/components/features/StatisticsLeague";
import RankingFeature from "@/components/features/RankingFeature";
import FollowHome from "@/components/features/FollowHome";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Slider */}
      <Slider />

      {/* Match Weekly / Upcoming Tournaments */}
      <section className="relative bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Vertical Title (Desktop) */}
          <div className="hidden md:flex w-[60px] lg:w-[80px] bg-[#f4f4f4] items-center justify-center py-10 border-r border-gray-200">
             <h3 className="text-3xl lg:text-4xl font-bold text-[#0e1213] uppercase tracking-widest rotate-180 whitespace-nowrap select-none opacity-20" style={{ writingMode: 'vertical-rl' }}>
                Prox. Torneos
             </h3>
          </div>

          {/* Mobile Title */}
          <div className="md:hidden p-8 bg-[#f4f4f4] text-center">
            <h3 className="text-3xl font-bold text-[#0e1213] uppercase tracking-widest opacity-20">
              Prox. Torneos
            </h3>
          </div>

          {/* Cards Container */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
            {/* Card 1: Liga Ascenso */}
            <Link href="/ascenso" className="group relative h-[400px] md:h-[500px] overflow-hidden">
              <article className="w-full h-full relative flex flex-col">
                {/* Background Image/Gradient */}
                <div className="absolute inset-0 bg-[#17314c] z-0">
                   {/* Overlay Image if needed */}
                   <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/bg-ascenso.webp')] bg-cover bg-center"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 flex-grow flex flex-col justify-center items-center text-center text-white">
                  <h4 className="text-3xl lg:text-4xl font-bold mb-2 uppercase tracking-wider">Liga Ascenso 2025</h4>
                  
                  <div className="flex flex-col gap-2 mb-8 opacity-90 text-sm lg:text-base">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>30 de Septiembre 2025</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Martes y Jueves 7:30pm y 9:00pm</span>
                    </div>
                  </div>
                </div>

                {/* Button Bar */}
                <div className="relative z-10 w-full bg-[#8cc63f] text-white py-4 text-center font-bold uppercase tracking-widest hover:bg-[#7ab332] transition-colors">
                   Ver más aquí
                </div>
              </article>
            </Link>

            {/* Card 2: Liga Femenina */}
            <Link href="/femenina" className="group relative h-[400px] md:h-[500px] overflow-hidden">
              <article className="w-full h-full relative flex flex-col">
                {/* Background Image/Gradient */}
                <div className="absolute inset-0 bg-[#4a182d] z-0">
                   <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/bg-femenina.webp')] bg-cover bg-center"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 flex-grow flex flex-col justify-center items-center text-center text-white">
                  <h4 className="text-3xl lg:text-4xl font-bold mb-2 uppercase tracking-wider">Liga Femenino 2025</h4>
                  
                  <div className="flex flex-col gap-2 mb-8 opacity-90 text-sm lg:text-base">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>29 de Agosto 2025</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Lunes y Miércoles - 7:30pm a 9:00pm</span>
                    </div>
                  </div>
                </div>

                {/* Button Bar */}
                <div className="relative z-10 w-full bg-[#c34d8a] text-white py-4 text-center font-bold uppercase tracking-widest hover:bg-[#b03c78] transition-colors">
                   Ver más aquí
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics League */}
      <StatisticsLeague />

      {/* Ranking Feature */}
      <RankingFeature />

      {/* Follow Home */}
      <FollowHome />
    </div>
  );
}

