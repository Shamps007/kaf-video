import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Beer, Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const NAV_ITEMS = [
  { name: "Serviços", link: "/#servicos" },
  { name: "Produtos", link: "/catalogo" },
  { name: "Diferenciais", link: "/#history" },
  { name: "Contato", link: "/contato" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[5000] bg-[#00357A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/kaf-branco.png" alt="KAF Chopp Express" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5548991510012"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-white text-[#00357A] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Solicitar Orçamento
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#00357A] border-t border-white/10 flex flex-col p-6 gap-6 animate-in slide-in-from-top duration-300">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-xl font-medium"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://wa.me/5548991510012"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#00357A] px-6 py-4 rounded-full font-bold text-lg text-center"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
