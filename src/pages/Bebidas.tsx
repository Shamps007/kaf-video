import React from "react";
import { ProductCarousel } from "../components/ProductCarousel";
import { DrinksSection } from "../components/DrinksSection";

export const Bebidas = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="opacity-100 pt-12 md:pt-16">
        <section id="bebidas" className="py-12 md:py-16 bg-transparent scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Nossas <span className="text-kaf-gold italic">Bebidas</span>
          </h1>
          <p className="text-kaf-cream/60 max-w-2xl mx-auto text-lg">
            Desde o chopp pilsen clássico até bebidas não alcoólicas artesanais. Qualidade em cada copo.
          </p>
        </div>
      </section>

      <div className="pb-20">
        <ProductCarousel />
      </div>

      <div className="pb-20">
        <DrinksSection />
      </div>
      </div>
    </div>
  );
};
