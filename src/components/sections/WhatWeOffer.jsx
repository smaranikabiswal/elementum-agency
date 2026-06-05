import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { OrangeUnderline } from "./Hero";

const OFFERS = [
  { tag: "Office of multiple interest content",       title: "Collaborative & partnership" },
  { tag: "The hanger US Air force digital experimental", title: "We talk about our weight" },
  { tag: "Delta faucet content, social, digital",     title: "Piloting digital confidence" },
];

const WhatWeOffer = () => {
  const [r, v] = useIntersectionObserver();

  return (
    <section id="services" className="relative bg-white overflow-hidden py-24">

    
      <svg className="absolute top-0 right-0 pointer-events-none z-0" width="380" height="260" viewBox="0 0 380 260" fill="none">
        <path d="M 380 0 C 280 80, 180 40, 80 180 C 30 250, 0 260, 0 260" stroke="#f87171" strokeWidth="2" strokeLinecap="round" opacity="0.45" fill="none"/>
      </svg>

      <div className="max-w-[1140px] mx-auto px-8 relative z-10">

        
        <div
          ref={r}
          className={`mb-16 transition-all duration-1000 ease-out ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
        >
          <h2
            className="text-black leading-tight font-normal"
            style={{ fontFamily: "Gerbil, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
          >
            What we{" "}
            <span className="inline-block px-5 bg-[#c6f6d5] rounded-full pb-0.5">can</span>
            <br />
            <span className="relative inline-block">offer<OrangeUnderline /></span>{" "}you!
          </h2>
        </div>

       
        <div className="border-t border-gray-200">
          {OFFERS.map((o, i) => (
            <div
              key={i}
              className="group flex items-center justify-between py-9 border-b border-gray-200 cursor-pointer px-4 -mx-4 rounded-xl hover:bg-gray-50/50 transition-colors duration-300"
              style={{
                opacity: v ? 1 : 0,
                transform: v ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease ${300 + i * 150}ms, transform 0.7s ease ${300 + i * 150}ms, background 0.3s`
              }}
            >
              <div className="flex items-center gap-12 w-full max-w-4xl">
                <p className="text-gray-400 text-xs tracking-wide hidden md:block shrink-0" style={{ width: "200px" }}>
                  {o.tag}
                </p>
                <h3
                  className="text-black font-normal transition-colors duration-300 group-hover:text-gray-400"
                  style={{ fontFamily: "Gerbil, sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.6rem)" }}
                >
                  {o.title}
                </h3>
              </div>
              <div className="flex items-center shrink-0 ml-4">
                <div className="h-[1.5px] bg-black w-14 md:w-20 transition-all duration-300 group-hover:w-28" />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-[2px]">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;