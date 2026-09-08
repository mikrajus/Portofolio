import { navLinks } from "@/lib/data";
import { usePortfolioData } from "@/lib/portfolio-context";

export default function Footer() {
  const { toggleAdmin } = usePortfolioData();

  return (
    <footer className="py-8 bg-neutral-950 border-t border-neutral-800 text-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-sm font-bold tracking-tight text-neutral-200 hover:text-amber-400 transition-colors">
          Mikrajuz<span className="text-amber-400">.</span>Sulthan
        </a>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-amber-300 transition-colors">
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleAdmin}
            className="text-amber-400/90 hover:text-amber-300 transition-colors font-bold flex items-center gap-1"
          >
            <span>⚙️ Admin Panel</span>
          </button>
        </div>

        <p className="text-xs text-neutral-500 font-mono">
          &copy; {new Date().getFullYear()} Mikrajuz Sulthan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
