import Image from "next/image";
import Link from "next/link";

interface RankingCardProps {
  id: number;
  name: string;
  teamLogo: string;
  playerImage: string;
  score: string;
  position: string;
  cardBg: string;
  stats: {
    matches: number;
    goals: number;
    assists: number;
  };
  rank?: number;
}

export default function RankingCard({
  name,
  teamLogo,
  playerImage,
  score,
  position,
  cardBg,
  stats,
}: RankingCardProps) {
  return (
    <article 
      className="card text-white w-9/12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group transition-all hover:scale-105"
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      {/* Ranking Badge */}
      <Link href="/ranking" className="absolute z-10 -right-3.5 top-5 p-2 bg-gray-800/90 rounded-full opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-[#b99e52] group-hover:text-black hover:scale-105">
        <h3 className="w-8 h-4 text-xl leading-5 font-bold" title="Ranking">
          {score}
        </h3>
        <span className="font-bold uppercase text-[8px] block">Ranking</span>
      </Link>

      {/* Main Content Link */}
      <div className="cursor-pointer">
        <div className="flex pt-9">
          {/* Left Info: Team, Pos, Country */}
          <div className="flex flex-col pl-7 pt-8 sm:pl-5 sm:pt-6 2xl:pl-7 2xl:pt-8 absolute z-10 items-center">
            <span className="mb-1">
              <Image 
                src={teamLogo} 
                alt="Team Logo" 
                width={36} 
                height={36} 
                className="w-9 block h-auto mb-1" 
              />
            </span>
            <span className="mt-0 text-xl font-semibold mb-1 uppercase text-white">{position}</span>
            <span className="-mt-2 text-[0.6rem] font-semibold text-white">POS</span>
            <Image 
              src="/assets/images/players-draft/country/icon-co.png" 
              alt="country player" 
              width={24} 
              height={24} 
              className="w-6 block h-auto m-auto mt-2" 
            />
          </div>

          {/* Player Image */}
          <Image 
            src={playerImage} 
            alt={name} 
            width={204} 
            height={181}
            className="object-contain object-top h-auto aspect-[198/157] xxs:aspect-[204/165] xs:aspect-[204/177] sm:aspect-[204/158] 2xl:aspect-[203/181] pl-16 mask-images" 
            loading="lazy" 
          />
        </div>

        <div className="flex flex-col">
          {/* Player Name */}
          <h3 className="pb-2 font-bold text-center text-[1.5rem] sm:text-xl 2xl:text-[1.5rem] uppercase after:w-4/5 after:h-[1px] after:mt-1 after:opacity-20 after:bg-current after:m-auto after:block text-white">
            {name}
          </h3>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 w-full pb-1 pt-1 px-5">
            <div className="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1">
              <p className="text-gray-400 text-[10px] text-center">Partidos</p>
              <p className="lg:mt-auto font-bold text-lg text-white">{stats.matches}</p>
            </div>  
            <div className="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1"> 
              <p className="text-gray-400 text-[10px] text-center">Goles</p>
              <p className="lg:mt-auto font-bold text-lg text-white">{stats.goals}</p>
            </div>  
            <div className="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1">
              <p className="text-gray-400 text-[10px] text-center">Asist.</p>
              <p className="lg:mt-auto font-bold text-lg text-white">{stats.assists}</p>
            </div>
          </div>

          {/* Bottom Icon */}
          <div className="flex align-center justify-center mt-1">
            <Image 
              src="/assets/images/icon/android-icon-36x36.png" 
              alt="icon" 
              width={28} 
              height={28} 
              className="w-7 sm:w-5 py-1" 
            />
          </div>
        </div>
      </div>
    </article>
  );
}
