import Link from "next/link";
import Image from "next/image";

export default function NavLeagues() {
  return (
    <section className="hidden lg:flex fixed right-[7rem] top-[67px] z-50 gap-3">
      {/* Liga Premier (Hidden in original HTML but keeping structure) */}
      <Link
        href="/"
        className="flex items-center bg-white rounded-full h-9 px-2 py-2 shadow-lg hover:bg-[#b99e52] hover:text-white transition-colors duration-300 group hidden"
      >
        <Image
          src="/assets/images/logos/kanto-league-medium.png"
          alt="Kanto League Premier"
          width={28}
          height={28}
          className="w-7 h-auto mr-2 shadow-md rounded-full"
        />
        <h6 className="font-bold mr-2 uppercase text-[11px] group-hover:text-white">Liga Premier</h6>
      </Link>

      {/* Liga Femenina */}
      <Link
        href="/femenina"
        className="flex items-center bg-white rounded-full h-9 px-2 py-2 shadow-lg hover:bg-[#ca5794] hover:text-white transition-colors duration-300 group"
      >
        <Image
          src="/assets/images/logos/kanto-league-medium.png"
          alt="Kanto League Femenina"
          width={28}
          height={28}
          className="w-7 h-auto mr-2 shadow-md rounded-full"
        />
        <h6 className="font-bold mr-2 uppercase text-[11px] group-hover:text-white">Liga Femenina</h6>
      </Link>

      {/* Liga Ascenso */}
      <Link
        href="/ascenso"
        className="flex items-center bg-white rounded-full h-9 px-2 py-2 shadow-lg hover:bg-[#17314c] hover:text-white transition-colors duration-300 group"
      >
        <Image
          src="/assets/images/logos/kanto-league-medium.png"
          alt="Kanto League Ascenso"
          width={28}
          height={28}
          className="w-7 h-auto mr-2 shadow-md rounded-full"
        />
        <h6 className="font-bold mr-2 uppercase text-[11px] group-hover:text-white">Liga Ascenso</h6>
      </Link>
    </section>
  );
}
