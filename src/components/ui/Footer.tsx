import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e1213] text-white py-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social Links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Instagram", url: "https://www.instagram.com/kantoleaguecol/" },
              { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61553272852433" },
              { name: "Youtube", url: "https://www.youtube.com/@kantoleaguecol." },
              { name: "Kick", url: "https://kick.com/kantoleaguecol" },
              { name: "Tiktok", url: "https://www.tiktok.com/@kantoleaguecol" },
            ].map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-widest hover:text-[#b99e52] transition-colors relative group"
                >
                  {social.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#b99e52] transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <div className="text-center md:text-right text-xs text-gray-400">
            <p>
              &copy; Copyright {currentYear} KantoLeague -{" "}
              <a
                href="https://omnion.com.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                By: omnion
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
