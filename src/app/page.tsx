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
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-12">
             <h3 className="text-4xl sm:text-6xl font-bold text-transparent text-stroke uppercase tracking-wider opacity-20 absolute select-none" style={{ WebkitTextStroke: "2px #0e1213" }}>
                Prox. Torneos
             </h3>
             <h3 className="text-3xl sm:text-4xl font-bold text-[#0e1213] relative z-10 uppercase">
                Próximos Torneos
             </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Liga Ascenso */}
            <Link href="/ascenso" className="group">
              <article className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-2">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#134a41] to-[#02241e] z-0"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-[#b99e52]">Liga Ascenso 2025</h4>
                    <div className="flex items-center gap-2 mb-2 text-sm opacity-90">
                      <Calendar className="w-4 h-4 text-[#b99e52]" />
                      <span>30 de Septiembre 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Clock className="w-4 h-4 text-[#b99e52]" />
                      <span>Martes y Jueves 7:30pm y 9:00pm</span>
                    </div>
                  </div>

                  <div className="mt-4">
                     <span className="inline-block text-xs font-bold border border-white/30 px-3 py-1 rounded-full group-hover:bg-[#b99e52] group-hover:border-[#b99e52] transition-colors">
                        Ver Detalles
                     </span>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#b99e52] rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
              </article>
            </Link>

            {/* Card 2: Liga Femenina */}
            <Link href="/femenina" className="group">
              <article className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b99e52] to-[#8a7332] z-0"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-[#02241e]">Liga Femenina 2025</h4>
                    <div className="flex items-center gap-2 mb-2 text-sm opacity-90">
                      <Calendar className="w-4 h-4 text-[#02241e]" />
                      <span>29 de Septiembre 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Clock className="w-4 h-4 text-[#02241e]" />
                      <span>Domingos 8:00am - 12:00pm</span>
                    </div>
                  </div>
                  <div className="mt-4">
                     <span className="inline-block text-xs font-bold border border-white/30 px-3 py-1 rounded-full group-hover:bg-[#02241e] group-hover:border-[#02241e] transition-colors">
                        Ver Detalles
                     </span>
                  </div>
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

