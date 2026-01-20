import React, { useState, useRef, useEffect, useMemo } from "react";
import { Wine } from "../types";

interface WineCarouselProps {
  wines: Wine[];
  onSelect: (wine: Wine) => void;
}

const WineCarousel: React.FC<WineCarouselProps> = ({ wines, onSelect }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Constants for calculation to ensure images stay in sync
  const ITEM_WIDTH_VW = 40; // The width of each bottle container in vw
  const GAP_VW = 10; // The gap between bottles in vw

  // Each "step" in the scroll corresponds to moving one item + its gap
  const stepSize = ITEM_WIDTH_VW + GAP_VW;
  const totalTravel = (wines.length - 1) * stepSize;

  // Total vertical height of the section to control scroll speed (e.g., 150vh per wine)
  const totalScrollHeight = useMemo(() => wines.length * 150, [wines]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate progress relative to the sticky range
      // 0 when section top is at 0, 1 when section bottom is at windowHeight
      if (rect.top <= 0 && rect.top >= -(sectionHeight - windowHeight)) {
        const progress = Math.abs(rect.top) / (sectionHeight - windowHeight);
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalScrollHeight]);

  // The index is derived from progress to sync text panels
  const activeIndex = Math.min(
    Math.round(scrollProgress * (wines.length - 1)),
    wines.length - 1,
  );

  // The translation moves the content based on fixed vw steps
  const currentTranslation = scrollProgress * totalTravel;

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${totalScrollHeight}vh` }}
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-winery-green">
        {/* Background Decorative Word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden">
          <h2
            className="text-[25vw] font-serif italic text-winery-cream whitespace-nowrap transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${(0.5 - scrollProgress) * 30}%)` }}
          >
            VINTAGE COLLECTION
          </h2>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-center gap-16">
            {/* Left side: Info Panel (Synced to activeIndex) */}
            <div className="lg:w-1/3 order-2 lg:order-1 h-[300px] flex flex-col justify-center relative z-20">
              <div className="transition-all duration-500 transform">
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-winery-gold">
                    Selected vintage
                  </span>
                  <div className="overflow-hidden h-16 relative">
                    {wines.map((wine, idx) => (
                      <h3
                        key={wine.id}
                        className={`text-3xl sm:text-4xl font-serif italic text-winery-cream mt-2 absolute w-full transition-all duration-700 ${activeIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                      >
                        {wine.name}
                      </h3>
                    ))}
                  </div>
                  <div className="mt-4 min-h-[60px] relative overflow-hidden">
                    {wines.map((wine, idx) => (
                      <p
                        key={`desc-${wine.id}`}
                        className={`text-winery-cream/60 leading-relaxed font-light text-sm italic absolute transition-all duration-700 ${activeIndex === idx ? "opacity-100" : "opacity-0"}`}
                      >
                        {wine.tastingNotes}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 space-y-4 max-w-xs">
                  <div className="flex justify-between items-center border-b border-winery-cream/10 pb-2">
                    <span className="text-[9px] uppercase tracking-wider text-winery-cream/40">
                      Colheita
                    </span>
                    <span className="text-sm font-medium">
                      {wines[activeIndex].vintage}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-winery-cream/10 pb-2">
                    <span className="text-[9px] uppercase tracking-wider text-winery-cream/40">
                      Região
                    </span>
                    <span className="text-sm font-medium">
                      {wines[activeIndex].region}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSelect(wines[activeIndex])}
                  className="mt-10 px-8 py-3 bg-winery-gold text-winery-dark text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-winery-cream transition-all duration-300 rounded-full"
                >
                  Descobrir Notas
                </button>

                {/* Vertical-aware Progress Bar */}
                <div className="mt-12 flex items-center gap-4 max-w-xs">
                  <span className="text-winery-gold font-serif italic text-lg">
                    0{activeIndex + 1}
                  </span>
                  <div className="h-px bg-winery-gold/20 flex-grow relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-winery-gold transition-transform duration-150 ease-out origin-left"
                      style={{ transform: `scaleX(${scrollProgress})` }}
                    />
                  </div>
                  <span className="text-winery-cream/40 text-xs">
                    0{wines.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: Horizontal Slider Wrapper */}
            <div className="lg:w-2/3 order-1 lg:order-2 h-[45vh] lg:h-[60vh] overflow-visible flex items-center relative">
              <div
                className="flex items-center transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(calc(-${currentTranslation}vw))`,
                }}
              >
                {wines.map((wine, idx) => (
                  <div
                    key={wine.id}
                    className="shrink-0 flex items-center justify-center transition-all duration-700 ease-out"
                    style={{
                      width: `${ITEM_WIDTH_VW}vw`,
                      marginRight: idx === wines.length - 1 ? 0 : `${GAP_VW}vw`,
                      transform:
                        activeIndex === idx
                          ? "scale(1.15) rotate(0deg)"
                          : "scale(0.7) rotate(-5deg)",
                      opacity: activeIndex === idx ? 1 : 0.1,
                      filter: activeIndex === idx ? "blur(0px)" : "blur(4px)",
                    }}
                  >
                    <img
                      src={wine.bottleImageUrl}
                      alt={wine.name}
                      className="h-full max-h-[50vh] lg:max-h-[60vh] w-auto object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.9)]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-winery-gold/30">
          <span className="text-[7px] uppercase tracking-[0.5em]">
            Deslizar
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-winery-gold to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default WineCarousel;
