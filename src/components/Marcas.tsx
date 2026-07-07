import React from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const BRANDS = [
  { src: "/amstel.png" },
  { src: "/colina.png" },
  { src: "/duck-1.png" },
  { src: "/heineken.png" },
  { src: "/serra-gerais.png" },
  { src: "/zimmermann.png", isLarge: true },
];

export const Marcas = () => {
  // Duplicate the brands to create a seamless loop
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="flex flex-col items-center justify-center w-full py-24 relative z-10 bg-transparent overflow-hidden">
      {/* O TÍTULO ENTRA AQUI, ANTES DOS LOGOS */}
      <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center relative z-20 block w-full uppercase tracking-tighter">
        Marcas Parceiras
      </h2>

      {/* A DIV DOS LOGOS VEM LOGO ABAIXO - Carrossel Marquee */}
      <div className="w-full overflow-hidden flex relative">
        {/* Gradient overlays for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-kaf-dark to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-kaf-dark to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-24 items-center shrink-0 px-12"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt="Marca Parceira"
              className={cn(
                "h-20 md:h-28 w-auto object-contain shrink-0 select-none pointer-events-none transition-transform hover:scale-110 duration-300",
                brand.isLarge && "h-40 md:h-64 scale-[2.5]"
              )}
              referrerPolicy="no-referrer"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marcas;
