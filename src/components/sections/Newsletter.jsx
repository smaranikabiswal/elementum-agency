import { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const FOOTER_COLS = {
  "Company":          ["Home", "Studio", "Service", "Blog"],
  "Terms & Policies": ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"],
  "Follow Us":        ["Instagram", "LinkedIn", "Youtube", "Twitter"],
};

const Newsletter = () => {
  const [done, setDone] = useState(false);
  const [r, v] = useIntersectionObserver();

  return (
    <section className="bg-[#e4f0e0] overflow-hidden">
      <div className="relative pt-24 pb-16">

       
        <svg className="absolute hidden md:block pointer-events-none" style={{ top: "14%", left: "26%" }} width="50" height="90" viewBox="0 0 50 90" fill="none">
          <path d="M 25 5 C 20 35, 28 55, 25 82" stroke="#f87171" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M 14 70 L 25 84 L 36 70" stroke="#f87171" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute hidden md:block pointer-events-none" style={{ top: "14%", right: "26%" }} width="50" height="90" viewBox="0 0 50 90" fill="none">
          <path d="M 25 5 C 30 35, 22 55, 25 82" stroke="#f87171" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M 14 70 L 25 84 L 36 70" stroke="#f87171" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

       
        <svg width="70" height="35" viewBox="0 0 70 35" className="absolute hidden md:block pointer-events-none" style={{ top: "8%", right: "12%", animation: "floatShape 5s ease-in-out infinite" }}>
          <path d="M 0 35 A 35 35 0 0 1 70 35 Z" fill="#7c3aed"/>
        </svg>

        <div
          ref={r}
          className={`max-w-2xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
          style={{ position: "relative", zIndex: 2 }}
        >
          <h2
            className="text-black leading-tight mt-8 mb-4 font-normal tracking-tight"
            style={{ fontFamily: "Gerbil, sans-serif", fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)" }}
          >
            Subscribe to<br />our newsletter
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
            To make your stay special and even more memorable
          </p>
          {done ? (
            <div className="inline-block bg-black text-white text-sm px-10 py-3.5 rounded-full font-medium shadow-md">
              🎉 Subscribed Successfully!
            </div>
          ) : (
            <button
              onClick={() => setDone(true)}
              className="inline-block bg-black text-white text-sm font-medium px-10 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
            >
              Subscribe Now
            </button>
          )}
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-8">
        <div className="h-px bg-gray-300 w-full" />
      </div>

      <div className="max-w-[1140px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {Object.entries(FOOTER_COLS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-black text-sm mb-5 font-normal tracking-wide" style={{ fontFamily: "Gerbil, sans-serif" }}>{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-black transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-black text-sm mb-5 font-normal tracking-wide" style={{ fontFamily: "Gerbil, sans-serif" }}>Contact Us</h4>
            <ul className="space-y-2.5">
              <li className="text-gray-500 text-sm leading-relaxed">1498w Fluton ste, STE<br />2D Chicago, IL 63867.</li>
              <li className="text-gray-500 text-sm">(123) 456789000</li>
              <li><a href="mailto:Info@elementum.com" className="text-gray-500 text-sm hover:text-black transition-colors">Info@elementum.com</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-10 mt-10 border-t border-gray-300/60">
          <p className="text-gray-400 text-xs">©2023 Elementum. All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;