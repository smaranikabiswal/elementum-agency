import { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { OrangeUnderline } from "./Hero";
import ellipse263 from "../../assets/images/Ellipse 263.png";
import ellipse268 from "../../assets/images/Ellipse 268.png";
import ellipse267 from "../../assets/images/Ellipse 267.png";
import ellipse266 from "../../assets/images/Ellipse 266.png";
import ellipse270 from "../../assets/images/Ellipse 270.png";
import ellipse269 from "../../assets/images/Ellipse 269.png";


const TESTIMONIALS = [
  { text: "Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable." },
  { text: "Working with Elementum was transformative. Their strategic thinking and execution surpassed every expectation we had going into the project. The results speak for themselves." },
  { text: "The team brought our brand to life in ways we could not have imagined. Attention to detail, creative vision, and flawless execution. Truly outstanding." },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [r, v] = useIntersectionObserver();

  const handleDot = (i) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 280);
  };

  return (
    <section id="testimonials" className="relative bg-white py-24 overflow-hidden">
      <div
        ref={r}
        className={`max-w-[1140px] mx-auto px-8 transition-all duration-1000 ease-out ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
      >

        <h2
          className="text-black text-center leading-tight mb-16 font-normal"
          style={{ fontFamily: "Gerbil, sans-serif", fontSize: "clamp(2rem, 3.2vw, 3.5rem)" }}
        >
          <span className="inline-block px-7 bg-[#c6f6d5] rounded-full pb-0.5">
            what
          </span> our customer
          <br />
          says {" "}
          <span className="relative inline-block">
           about us
            <OrangeUnderline />
          </span>
        </h2>

        <div className="relative w-full min-h-[380px] flex flex-col items-center justify-center">

          
          <div className="absolute left-0 top-0 w-1/4 h-full hidden md:block pointer-events-none">
            <img src={ellipse263} alt="" className="absolute w-14 h-14 rounded-full object-cover border-[3px] border-white shadow-md" style={{ top: "4%",  left: "8%",  animation: "floatShape 5s ease-in-out infinite" }} />
<img src={ellipse268} alt="" className="absolute w-20 h-20 rounded-full object-cover border-[3px] border-white shadow-md" style={{ top: "38%", left: "50%", animation: "floatShape 6.5s ease-in-out infinite 1s" }} />
<img src={ellipse267} alt="" className="absolute w-12 h-12 rounded-full object-cover border-[3px] border-white shadow-md" style={{ top: "74%", left: "15%", animation: "floatShape 4.5s ease-in-out infinite 0.5s" }} />
   </div>      
          <div className="absolute right-0 top-0 w-1/4 h-full hidden md:block pointer-events-none">
           <img src={ellipse266} alt="" className="absolute w-12 h-12 rounded-full object-cover border-[3px] border-white shadow-md" style={{ top: "8%",  right: "18%", animation: "floatShape 5.5s ease-in-out infinite 0.8s" }} />
<img src={ellipse270} alt="" className="absolute w-16 h-16 rounded-full object-cover border-[3px] border-white shadow-md" style={{ top: "36%", right: "52%", animation: "floatShape 4s ease-in-out infinite 1.2s" }} />
<img src={ellipse269} alt="" className="absolute w-44 h-44 rounded-full object-cover border-[4px] border-white shadow-xl" style={{ top: "26%", right: "-14%", animation: "floatShape 7s ease-in-out infinite 0.3s" }} />
</div>
         
          <div className="max-w-lg w-full mx-auto text-center relative z-10">
            <div
              className="relative bg-[#eaf5ea] rounded-3xl px-10 pt-10 pb-8"
              style={{ opacity: fading ? 0 : 1, transition: "opacity 0.28s ease" }}
            >
              <span className="absolute top-3 left-6 text-[5rem] leading-none text-gray-400 select-none font-serif" style={{ fontFamily: "Georgia, serif" }}>"</span>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-6 pb-4 px-2">
                {TESTIMONIALS[active].text}
              </p>
              <span className="absolute bottom-0 right-6 text-[5rem] leading-none text-gray-400 select-none font-serif" style={{ fontFamily: "Georgia, serif" }}>"</span>
            </div>

            
            <div className="flex justify-center gap-2.5 mt-7">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDot(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: active === i ? 28 : 10, height: 10, background: active === i ? "#000" : "#d1d5db" }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;