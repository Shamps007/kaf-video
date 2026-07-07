import React from "react";
import { CatalogBento } from "../components/CatalogBento";

export const Catalogo = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="opacity-100 pt-12 md:pt-16">
        <section id="catalogo" className="py-12 md:py-16 bg-transparent scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Nosso <span className="text-kaf-gold italic">Catálogo</span>
          </h1>
          <p className="text-kaf-cream/60 max-w-2xl mx-auto text-lg">
            Explore nossa seleção completa de barris, equipamentos e serviços para o seu evento ou estabelecimento.
          </p>
        </div>
      </section>

      <div className="pb-20">
        <CatalogBento />
      </div>
      </div>
    </div>
  );
};
