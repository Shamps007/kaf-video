import React from "react";
import { ShimmerButton } from "../components/UIComponents";
import { MessageCircle, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Contato = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="opacity-100 pt-12 md:pt-16">
        <section id="contato" className="py-12 md:py-16 bg-transparent scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Fale <span className="text-kaf-gold italic">Conosco</span>
          </h1>
          <p className="text-kaf-cream/60 max-w-2xl mx-auto text-lg">
            Estamos prontos para atender você. Solicite um orçamento ou tire suas dúvidas.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 relative overflow-hidden bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-kaf-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold uppercase tracking-tighter text-kaf-gold mb-6">Informações de Contato</h2>
              <p className="text-kaf-cream/60 mb-8">Escolha o canal de sua preferência para falar com nossa equipe.</p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-kaf-gold/10 text-kaf-gold border border-kaf-gold/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-kaf-cream mb-1">Telefone & WhatsApp</h4>
                    <p className="text-kaf-cream/60">(48) 3344-4222</p>
                    <p className="text-kaf-cream/60">(48) 99151-0012</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-kaf-gold/10 text-kaf-gold border border-kaf-gold/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-kaf-cream mb-1">Localização</h4>
                    <p className="text-kaf-cream/60">Palhoça, Santa Catarina</p>
                    <p className="text-kaf-cream/60">Grande Florianópolis - SC</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-kaf-cream mb-6">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/kafchoppexpress/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-kaf-cream/5 hover:bg-kaf-gold/20 transition-colors text-kaf-cream/70 hover:text-kaf-gold">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/kafchoppexpress" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-kaf-cream/5 hover:bg-kaf-gold/20 transition-colors text-kaf-cream/70 hover:text-kaf-gold">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-secondary/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center text-center space-y-8 border border-kaf-gold/20 shadow-[0_0_50px_rgba(170,93,0,0.05)]">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter text-kaf-cream">
                Peça seu Chopp <span className="text-kaf-gold italic">Agora</span>
              </h2>
              <p className="text-kaf-cream/60 text-lg max-w-md mx-auto">
                Não perca tempo com formulários. Clique no botão abaixo e fale diretamente com nossa equipe de vendas pelo WhatsApp.
              </p>
            </div>
            
            <a 
              href="https://wa.me/5548991510012" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-md"
            >
              <ShimmerButton className="w-full py-12 text-2xl uppercase tracking-widest neo-shadow group shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500">
                <div className="flex items-center justify-center gap-4 w-full">
                  <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span>Pedir Agora</span>
                </div>
              </ShimmerButton>
            </a>
            
            <div className="flex items-center gap-4 text-kaf-gold/60 text-xs uppercase tracking-widest font-bold">
              <span className="w-12 h-[1px] bg-kaf-gold/20"></span>
              Atendimento Imediato
              <span className="w-12 h-[1px] bg-kaf-gold/20"></span>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
