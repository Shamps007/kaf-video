import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5548991510012"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
      
      <MessageCircle className="w-8 h-8 relative z-10" />
      
      <span className="absolute right-full mr-4 bg-kaf-dark text-kaf-cream text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-kaf-cream/10">
        Acesso Rápido
      </span>
    </motion.a>
  );
};
