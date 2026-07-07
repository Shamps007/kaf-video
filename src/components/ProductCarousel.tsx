import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useMotionValue } from "motion/react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { cn } from "@/src/lib/utils";

const BEERS = [
  {
    id: 1,
    name: "KAF Pilsen",
    style: "Pilsen",
    ibu: 12,
    abv: "4.5%",
    temp: "2-4°C",
    description: "Leve, dourada e refrescante. O clássico que agrada a todos.",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Zimmermann IPA",
    style: "IPA",
    ibu: 45,
    abv: "6.2%",
    temp: "4-7°C",
    description: "Amargor marcante com notas cítricas e aroma intenso de lúpulo.",
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "KAF Weiss",
    style: "Weiss",
    ibu: 10,
    abv: "5.0%",
    temp: "4-6°C",
    description: "Cerveja de trigo com notas de cravo e banana. Turva e saborosa.",
    image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Zimmermann Stout",
    style: "Stout",
    ibu: 30,
    abv: "5.5%",
    temp: "8-12°C",
    description: "Escura, com notas de café e chocolate amargo. Encorpada e complexa.",
    image: "https://images.unsplash.com/photo-1535633302704-b021ee887b13?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "KAF APA",
    style: "APA",
    ibu: 35,
    abv: "5.4%",
    temp: "4-7°C",
    description: "Equilíbrio perfeito entre malte e lúpulos americanos.",
    image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=800",
  },
];

export const ProductCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        const offsetWidth = containerRef.current.offsetWidth;
        setConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const currentX = x.get();
    const step = 320 + 32; // card width + gap
    const targetX = direction === "left" ? currentX + step : currentX - step;
    
    controls.start({
      x: Math.max(constraints.left, Math.min(0, targetX)),
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 flex items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-kaf-cream mb-4">
            Nossas <span className="text-kaf-gold italic">Cervejas</span>
          </h2>
          <p className="text-kaf-cream/60 max-w-md">
            Descubra nossa seleção premium de chopes artesanais, produzidos com os melhores ingredientes.
          </p>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full text-kaf-cream hover:bg-kaf-cream/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full text-kaf-cream hover:bg-kaf-cream/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing px-4 md:px-12">
        <motion.div
          ref={containerRef}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          style={{ x }}
          animate={controls}
          className="flex gap-8 pb-16"
        >
          {BEERS.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const BeerCard = ({ beer }: { beer: typeof BEERS[0]; key?: number | string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative min-w-[280px] md:min-w-[320px] h-[500px] rounded-2xl overflow-hidden snap-center cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Layer 0: Background Base */}
      <div className="absolute inset-0 bg-kaf-dark z-0" />
      
      {/* Layer 1: Product Image (100% Opacity, Sharp) */}
      <img
        src={beer.image}
        alt={beer.name}
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-10 group-hover:scale-110 transition-transform duration-700"
        style={{ filter: "contrast(1.1) brightness(1.1)" }}
        referrerPolicy="no-referrer"
      />
      
      {/* Floating Light Effect (Replaces shadow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-white/5 blur-2xl rounded-[100%] group-hover:w-full transition-all duration-500 z-15" />

      {/* Layer 2: Content (Superior Layer) */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-30">
        <h3 className="text-2xl font-display font-bold text-kaf-cream mb-1">{beer.name}</h3>
        <p className="text-kaf-gold font-medium tracking-widest uppercase text-sm mb-4">{beer.style}</p>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-kaf-cream/90 text-sm mb-6 leading-relaxed">{beer.description}</p>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-kaf-cream/60 mb-1 font-bold">IBU</p>
                  <p className="font-bold text-kaf-cream">{beer.ibu}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-kaf-cream/60 mb-1 font-bold">ABV</p>
                  <p className="font-bold text-kaf-cream">{beer.abv}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-kaf-cream/60 mb-1 font-bold">Temp</p>
                  <p className="font-bold text-kaf-cream">{beer.temp}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
