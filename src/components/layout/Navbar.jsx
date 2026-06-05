import { useEffect, useState } from "react";

const NAV_LINKS = ["Home", "Studio", "Services", "Contact", "FAQs"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#home" style={{ fontFamily: "Gerbil, sans-serif" }} className="text-lg font-semibold text-black tracking-tight">
          Elementum
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-600 hover:text-black transition-colors relative group">
                {l}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0">
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-56" : "max-h-0"}`}>
        <ul className="flex flex-col px-8 py-4 gap-4 border-t border-gray-100 bg-white">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-600 hover:text-black" onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;