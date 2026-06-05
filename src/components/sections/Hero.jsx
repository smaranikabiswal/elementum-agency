import ellipse255 from "../../assets/images/Ellipse 255.png";
import ellipse256 from "../../assets/images/Ellipse 256.png";
import ellipse257 from "../../assets/images/Ellipse 257.png";
import ellipse258 from "../../assets/images/Ellipse 258.png";
import ellipse259 from "../../assets/images/Ellipse 259.png";
import ellipse260 from "../../assets/images/Ellipse 260.png";
import ellipse261 from "../../assets/images/Ellipse 261.png";
import ellipse262 from "../../assets/images/Ellipse 262.png";
import { useEffect, useState } from "react";
export const OrangeUnderline = () => (
  <svg
    className="absolute left-0 pointer-events-none"
    style={{ bottom: "-20px", height: "28px", width: "100%", zIndex: 1 }}
    viewBox="0 0 100 28"
    preserveAspectRatio="none"
  >
    <line
      x1="0"  y1="8"
      x2="100" y2="6"
      stroke="#F59E0B"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <line
      x1="10"  y1="16"
      x2="100" y2="6"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const Hero = () => {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-visible flex flex-col items-center pt-28 pb-12">
      <svg
        width="75" height="38" viewBox="0 0 75 38"
        className="absolute pointer-events-none z-10"
        style={{ top: "13%", right: "9%", animation: "floatShape 5s ease-in-out infinite" }}
      >
        <path d="M 0 38 A 37.5 37.5 0 0 1 75 38 Z" fill="#7c3aed" />
      </svg>

      
      <div
        className={`text-center px-6 w-full max-w-5xl mx-auto mt-6 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ position: "relative", zIndex: 2 }}
      >
       
        <h1
          className="text-black font-normal tracking-tight"
          style={{ fontFamily: "Gerbil, sans-serif", fontSize: "clamp(2.6rem, 5vw, 5rem)", lineHeight: 1.18 }}
        >
          The{" "}
          <span className="relative inline-block">
            thinkers
            <OrangeUnderline />
          </span>
          {" "}and doers were {" "}
          <span className="inline-block px-7 bg-[#fbcfe8] rounded-full pb-0.5">
            changing
          </span>
          <br />
          the{" "}
          <span className="inline-block px-7 bg-[#c6f6d5] rounded-full pb-0.5">
            status
          </span>
          {" "}Quo with
        </h1>
      </div>

    
      <p
        className={`mt-8 text-gray-500 text-base max-w-lg text-center px-6 leading-relaxed transition-all duration-1000 delay-200 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ position: "relative", zIndex: 2 }}
      >
        We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
      </p>

     
    <div
  className={`relative w-full max-w-5xl mx-auto mt-20 flex flex-wrap items-end justify-center transition-all duration-1000 delay-400 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
  style={{ zIndex: 2 }}
>
  <img src={ellipse262} alt="Team" className="w-20 h-20 rounded-full border-[3px] border-white shadow-md object-cover z-10" />
  <img src={ellipse261} alt="Team" className="w-24 h-24 rounded-full border-[3px] border-white shadow-md object-cover z-20 -ml-6 mb-2" />
  <img src={ellipse255} alt="Team" className="w-28 h-28 rounded-full border-[3px] border-white shadow-md object-cover z-10 ml-6 mb-6" />
  <img src={ellipse256} alt="Team" className="w-16 h-16 rounded-full border-[3px] border-white shadow-md object-cover z-10 ml-6" />
  <img src={ellipse257} alt="Team" className="w-24 h-24 rounded-full border-[3px] border-white shadow-md object-cover z-10 ml-8 mb-4" />
  <img src={ellipse258} alt="Team" className="w-28 h-28 rounded-full border-[3px] border-white shadow-md object-cover z-20 -ml-8 mb-8" />
  <img src={ellipse259} alt="Team" className="w-20 h-20 rounded-full border-[3px] border-white shadow-md object-cover z-10 ml-6 mb-2" />
  <img src={ellipse260} alt="Team" className="w-16 h-16 rounded-full border-[3px] border-white shadow-md object-cover z-10 ml-4 mb-8" />
</div>
    </section>
  );
};

export default Hero;