import React from "react";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ScrollToTop } from "./ScrollToTop";
import { Header } from "./Header";
import { BackgroundCerveja } from "./BackgroundCerveja";
import Footer from "./Footer";

const NAV_ITEMS = [
  { name: "Início", link: "/" },
  { name: "A Cervejaria", link: "/cervejaria" },
  { name: "Catálogo", link: "/catalogo" },
  { name: "Contato", link: "/contato" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-kaf-cream selection:bg-kaf-gold selection:text-kaf-dark relative font-sans dark bg-kaf-dark overflow-x-hidden">
      <ScrollToTop />
      <BackgroundCerveja />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};
