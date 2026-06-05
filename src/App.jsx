import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhatWeOffer from "./components/sections/WhatWeOffer";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeOffer />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
}

export default App;