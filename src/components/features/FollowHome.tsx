import Link from "next/link";

export default function FollowHome() {
  return (
    <Link
      href="https://www.instagram.com/kantoleaguecol/"
      target="_blank"
      className="block text-[#134a41] hover:text-[#b99e52] transition-colors duration-300"
    >
      <section className="bg-gray-100 py-10 text-center">
        <p className="uppercase text-base tracking-[0.25rem] font-normal m-0">
          Síguenos en instagram
        </p>
      </section>
    </Link>
  );
}
