import { useEffect, useState } from "react";
import { navLinks, socials } from "@/lib/data";
import { usePortfolioData } from "@/lib/portfolio-context";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { setAdminOpen } = usePortfolioData();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-neutral-300 text-xs font-semibold shadow-xl hover:border-amber-500/60 hover:text-amber-300 transition-all backdrop-blur-md group"
        aria-label="Open Command Menu"
      >
        <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <span>Quick Menu</span>
        <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-[10px] text-neutral-400 font-mono group-hover:border-amber-500/40">
          Ctrl K
        </kbd>
      </button>
    );
  }

  const filteredNavs = navLinks.filter((l) =>
    l.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (href: string) => {
    setOpen(false);
    if (href === "admin") {
      setAdminOpen(true);
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden">
        {/* Search input header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800">
          <svg className="w-5 h-5 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Type a section or action..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setOpen(false)}
            className="px-2 py-1 rounded text-xs bg-neutral-800 text-neutral-400 hover:text-neutral-200"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1 text-left">
          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 px-3 py-1">
            Admin & Actions
          </div>
          <button
            onClick={() => handleSelect("admin")}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-colors text-left"
          >
            <span>⚙️ Open Web Admin Dashboard</span>
            <span className="text-xs text-amber-400/80">Ctrl+Shift+A</span>
          </button>

          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 px-3 py-1 pt-2">
            Navigation
          </div>
          {filteredNavs.map((link) => (
            <button
              key={link.href}
              onClick={() => handleSelect(link.href)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:bg-amber-500/10 hover:text-amber-300 transition-colors text-left"
            >
              <span>{link.label}</span>
              <span className="text-xs text-neutral-500">Jump to section</span>
            </button>
          ))}

          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 px-3 py-1 pt-2">
            Social & Contact
          </div>
          <button
            onClick={() => handleSelect(socials.github)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:bg-amber-500/10 hover:text-amber-300 transition-colors text-left"
          >
            <span>GitHub Profile</span>
            <span className="text-xs text-neutral-500">github.com/mikrajus</span>
          </button>
          <button
            onClick={() => handleSelect(socials.linkedin)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:bg-amber-500/10 hover:text-amber-300 transition-colors text-left"
          >
            <span>LinkedIn Profile</span>
            <span className="text-xs text-neutral-500">linkedin.com</span>
          </button>
          <button
            onClick={() => handleSelect(socials.email)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:bg-amber-500/10 hover:text-amber-300 transition-colors text-left"
          >
            <span>Send Email</span>
            <span className="text-xs text-neutral-500">mikrajus@gmail.com</span>
          </button>
        </div>
      </div>
    </div>
  );
}
