import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Beer } from "lucide-react";
import { ShimmerButton } from "./UIComponents";

export const AgeGate = ({ onAccept }: { onAccept: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    try {
      const isVerified = sessionStorage.getItem("age-verified");
      if (isVerified === "true") {
        setIsVisible(false);
        onAccept();
      } else {
        document.body.style.overflow = "hidden";
      }
    } catch (e) {
      console.error("Session storage not available", e);
      document.body.style.overflow = "hidden";
    }
  }, [onAccept]);

  const handleVerify = () => {
    try {
      sessionStorage.setItem("age-verified", "true");
    } catch (e) {
      console.error("Session storage not available", e);
    }
    setIsVisible(false);
    document.body.style.overflow = "unset";
    onAccept();
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-kaf-dark/95 backdrop-blur-xl px-4"
    >
      <div
        className="max-w-md w-full bg-kaf-dark border-2 border-kaf-gold/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-kaf-gold to-transparent" />
        
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-kaf-gold/10 border border-kaf-gold/20 flex items-center justify-center">
            <Beer className="w-10 h-10 text-kaf-gold" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-display font-bold text-kaf-cream mb-4 uppercase tracking-tighter">
          VOCÊ TEM MAIS DE <span className="text-kaf-gold italic">18 ANOS?</span>
        </h2>
        
        <p className="text-kaf-cream/60 mb-10 leading-relaxed font-serif italic text-lg">
          Para acessar este site, você deve ter a idade legal para consumo de bebidas alcoólicas.
        </p>

        <div className="flex flex-col gap-4">
          <ShimmerButton
            onClick={handleVerify}
            className="w-full h-14 uppercase tracking-widest rounded-xl"
          >
            SIM, SOU MAIOR
          </ShimmerButton>
          
          <button
            onClick={handleReject}
            className="w-full py-4 bg-transparent text-kaf-cream/40 font-bold uppercase tracking-widest rounded-xl hover:border-red-500/50 hover:text-red-500 transition-all active:scale-95"
          >
            NÃO
          </button>
        </div>

        <p className="mt-8 text-[10px] text-kaf-cream/30 uppercase tracking-[0.2em] font-medium">
          Beba com responsabilidade. Se beber, não dirija.
        </p>
      </div>
    </div>
  );
};
