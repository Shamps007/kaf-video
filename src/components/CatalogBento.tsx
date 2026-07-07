import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Filter } from "lucide-react";
import { cn } from "@/src/lib/utils";

const CATALOG = [
  {
    id: 1,
    name: "Chopp KAF Pilsen 30L",
    style: "Pilsen",
    category: "Barril",
    image: "/kaf-pilsen.png",
  },
  {
    id: 5,
    name: "KAF Weiss 50L",
    style: "Weiss",
    category: "Barril",
    image: "/kaf-50L.png",
  },
  {
    id: 4,
    name: "Chopp de Vinho 30L",
    style: "Vinho",
    category: "Barril",
    image: "/chopp-vinho.png",
  },
  {
    id: 2,
    name: "Chopp Zimmermann IPA 50L",
    style: "IPA",
    category: "Barril",
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Chopeira Elétrica 2 Vias",
    style: "Equipamento",
    category: "Serviço",
    image: "/chopp-eletrica-KAF.png",
  },
];

const FILTERS = ["Todos", "Pilsen", "IPA", "Weiss", "Vinho", "Equipamento", "Suporte"];

export const CatalogBento = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filteredCatalog = CATALOG.filter(
    (item) => activeFilter === "Todos" || item.style === activeFilter
  );

  return (
    <section id="produtos" className="py-32 px-4 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6 text-kaf-cream">
              Catálogo <span className="text-kaf-gold italic">Comercial</span>
            </h2>
            <p className="text-kaf-cream/60 max-w-2xl">
              Soluções completas para o seu negócio ou evento. Escolha o estilo e nós garantimos a qualidade.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all",
                  activeFilter === filter
                    ? "bg-kaf-gold text-kaf-dark"
                    : "bg-kaf-dark/50 text-kaf-cream/60 hover:border-kaf-gold/50 hover:text-kaf-cream"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8">
          {filteredCatalog.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-kaf-dark/80 border border-kaf-gold/20 hover:border-kaf-gold/60 transition-all duration-500 flex flex-col h-[460px]"
            >
                <div className="relative flex-1 overflow-hidden bg-gradient-to-b from-black/60 to-kaf-dark p-6 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 z-10"
                    style={{ filter: "contrast(1.1) brightness(1.1)" }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-kaf-dark/80 backdrop-blur-md text-kaf-gold rounded-full border border-kaf-gold/30">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-kaf-dark z-20 flex flex-col justify-between shrink-0 border-t border-kaf-gold/10">
                  <h3 className="font-display font-bold text-kaf-cream mb-4 text-xl line-clamp-2">
                    {item.name}
                  </h3>
                  
                  <a 
                    href={`https://wa.me/5548991510012?text=${encodeURIComponent(`Olá! Gostaria de pedir mais informações sobre o ${item.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-kaf-gold/10 flex items-center justify-center gap-2 text-kaf-gold border border-kaf-gold/30 hover:bg-kaf-gold hover:text-kaf-dark transition-all duration-300 font-bold uppercase tracking-wider text-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Mais Informações
                  </a>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};
