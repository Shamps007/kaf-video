import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useMotionValue } from "motion/react";
import { ChevronLeft, ChevronRight, Droplets } from "lucide-react";
import { cn } from "@/src/lib/utils";

const DRINKS = [
  {
    id: 1,
    name: "Água Tônica Premium",
    style: "Tônica",
    calories: "35 kcal",
    sugar: "8g",
    temp: "2-4°C",
    description: "Refrescante e equilibrada, produzida com quinino natural e notas cítricas sutis.",
    image: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Ginger Beer Artesanal",
    style: "Gengibre",
    calories: "45 kcal",
    sugar: "10g",
    temp: "4-6°C",
    description: "Refrigerante natural de gengibre com picância marcante e frescor intenso.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Suco de Uva Integral",
    style: "Suco",
    calories: "60 kcal",
    sugar: "14g (Natural)",
    temp: "4-8°C",
    description: "100% fruta, sem adição de açúcares ou conservantes. O puro sabor da uva.",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Soda de Frutas Vermelhas",
    style: "Soda Italiana",
    calories: "40 kcal",
    sugar: "9g",
    temp: "2-5°C",
    description: "Mix de framboesa, amora e morango em uma base levemente gaseificada.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Guaraná da Amazônia",
    style: "Refrigerante",
    calories: "38 kcal",
    sugar: "9g",
    temp: "3-6°C",
    description: "Extrato natural de guaraná selecionado, com sabor autêntico e energia natural.",
    image: "https://images.unsplash.com/photo-1556710807-8127ea411377?auto=format&fit=crop&q=80&w=800",
  },
];

export const DrinksSection = () => {
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
    <section id="bebidas" className="py-24 bg-kaf-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 flex items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-kaf-cream mb-4 uppercase tracking-tighter">
            Nossas <span className="text-kaf-gold italic">Bebidas</span>
          </h2>
          <p className="text-kaf-cream/60 max-w-md">
            Opções não alcoólicas premium para acompanhar seus momentos com sofisticação e sabor.
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
          {DRINKS.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const DrinkCard = ({ drink }: { drink: typeof DRINKS[0]; key?: number | string }) => {
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
        src={drink.image}
        alt={drink.name}
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-10 group-hover:scale-110 transition-transform duration-700"
        style={{ filter: "contrast(1.1) brightness(1.1)" }}
        referrerPolicy="no-referrer"
      />
      
      {/* Floating Light Effect (Replaces shadow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-white/5 blur-2xl rounded-[100%] group-hover:w-full transition-all duration-500 z-15" />

      {/* Layer 2: Content (Superior Layer) */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-30">
        <div className="mb-4 w-10 h-10 rounded-full bg-kaf-gold/20 flex items-center justify-center border border-kaf-gold/40">
          <Droplets className="w-5 h-5 text-kaf-gold" />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-kaf-cream mb-1 uppercase tracking-tight">{drink.name}</h3>
        <p className="text-kaf-gold font-medium tracking-widest uppercase text-xs mb-4">{drink.style}</p>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-kaf-cream/90 text-sm mb-6 leading-relaxed font-light italic">{drink.description}</p>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-[9px] uppercase tracking-widest text-kaf-cream/60 mb-1 font-bold">Calorias</p>
                  <p className="text-xs font-bold text-kaf-cream">{drink.calories}</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] uppercase tracking-widest text-kaf-cream/60 mb-1 font-bold">Açúcar</p>
                  <p className="text-xs font-bold text-kaf-cream">{drink.sugar}</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] uppercase tracking-widest text-kaf-cream/60 mb-1 font-bold">Temp</p>
                  <p className="text-xs font-bold text-kaf-cream">{drink.temp}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
