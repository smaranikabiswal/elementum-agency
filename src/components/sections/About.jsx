import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { OrangeUnderline } from "./Hero";
import image348 from "../../assets/images/image 348.png";
import image349 from "../../assets/images/image 349.png";

const About = () => {
  const [r1, v1] = useIntersectionObserver();
  const [r2, v2] = useIntersectionObserver();

  return (
    <section id="studio" className="relative bg-white overflow-hidden py-24">

  
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
        <path d="M 1500 -50 C 1100 200, 700 0, 300 350 C 0 600, -100 850, -150 1000" stroke="#f87171" strokeWidth="2" strokeLinecap="round" opacity="0.45" fill="none"/>
      </svg>

      <div className="max-w-[1140px] mx-auto px-8 relative z-10">
        <div
          ref={r1}
          className={`flex flex-col lg:flex-row items-center justify-between gap-16 mb-36 transition-all duration-1000 ease-out ${v1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
        >
          <div className="flex-1 max-w-xl">
            <h2
              className="text-black leading-tight mb-6 font-normal"
              style={{ fontFamily: "Gerbil, sans-serif", fontSize: "clamp(2rem, 3.2vw, 3.5rem)" }}
            >
             
              <span className="relative inline-block">Tomorrow<OrangeUnderline /></span>{" "}should
              <br />
              
              be better than{" "}
              <span className="inline-block px-5 bg-[#c6f6d5] rounded-full pb-0.5">today</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <button className="flex items-center gap-3 text-black font-medium group">
              Read more
              <div className="flex items-center">
                <div className="h-[1.5px] bg-black w-12 transition-all duration-300 group-hover:w-16" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>

         
          <div className="relative w-[340px] h-[340px] shrink-0">
            <svg width="130" height="130" viewBox="0 0 130 130" className="absolute -top-6 -left-8 z-0">
              <polygon points="65,8 122,122 8,122" fill="#f87171" />
            </svg>
            <div className="absolute inset-0 rounded-full border-4 border-white shadow-2xl overflow-hidden z-10">
  <img src={image348} alt="Team" className="w-full h-full object-cover" />

            </div>
          </div>
        </div>

     
        <div
          ref={r2}
          className={`flex flex-col lg:flex-row items-center justify-between gap-16 transition-all duration-1000 ease-out ${v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
        >
         
          <div className="relative w-[340px] h-[340px] shrink-0">
            <svg width="130" height="130" viewBox="0 0 130 130" className="absolute -bottom-6 -right-6 z-0">
              <polygon points="65,8 122,122 8,122" fill="#f87171" />
            </svg>
            <div className="absolute inset-0 rounded-full border-4 border-white shadow-2xl overflow-hidden z-10">
              <img src={image349} alt="Team" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h2
              className="text-black leading-tight mb-6 font-normal"
              style={{ fontFamily: "Gerbil, sans-serif", fontSize: "clamp(2rem, 3.2vw, 3.5rem)" }}
            >
           
              <span className="inline-block px-5 bg-[#c6f6d5] rounded-full pb-0.5">See</span>{" "}how we can
              <br />
              
              help you{" "}
              <span className="relative inline-block">progress<OrangeUnderline /></span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital programs, and social research.
            </p>
            <button className="flex items-center gap-3 text-black font-medium group">
              Read more
              <div className="flex items-center">
                <div className="h-[1.5px] bg-black w-12 transition-all duration-300 group-hover:w-16" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;