import React from "react";
import { 
  Award, 
  Users, 
  CheckCircle2, 
  ChevronRight,
  Truck,
  Beer
} from "lucide-react";
import { 
  WobbleCard, 
  StickyScroll, 
  NumberTicker
} from "../components/UIComponents";

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const OPERATIONAL_DIFFERENTIALS = [
  {
    title: "Entrega Expressa",
    description: "Seu chopp gelado na porta de casa ou no seu evento, sem atrasos. Atendemos toda a Grande Florianópolis com frota própria e ágil.",
    icon: <Truck className="w-6 h-6" />,
    content: (
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center flex items-center justify-center">
      </div>
    ),
  },
  {
    title: "Instalação Grátis",
    description: "Nossa equipe técnica faz toda a instalação e regulagem da chopeira no local. Você não precisa se preocupar com nada, apenas em servir.",
    icon: <SettingsIcon className="w-6 h-6" />,
    content: (
      <div className="h-full w-full bg-[url('/barril-chopp.png')] bg-cover bg-center flex items-center justify-center">
      </div>
    ),
  },
  {
    title: "Qualidade Premium",
    description: "Trabalhamos apenas com equipamentos novos e revisados, garantindo que o seu chopp saia na temperatura ideal do primeiro ao último copo.",
    icon: <Beer className="w-6 h-6" />,
    content: (
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center flex items-center justify-center">
      </div>
    ),
  },
];

export const Cervejaria = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="opacity-100 pt-12 md:pt-16">
        <section id="historia" className="py-12 md:py-16 bg-transparent scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Nossa <span className="text-kaf-gold italic">História</span>
          </h1>
          <p className="text-kaf-cream/60 max-w-3xl mx-auto text-lg leading-relaxed">
            Desde 1999, a KAF Chopp tem sido sinônimo de qualidade e tradição na Grande Florianópolis. Nossa jornada começou com um compromisso simples: entregar o melhor chopp com o melhor serviço.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Anos de História", value: 25, suffix: "" },
            { label: "Eventos Realizados", value: 5000, suffix: "" },
            { label: "Barris Entregues", value: 15000, suffix: "" },
            { label: "Clientes Satisfeitos", value: 98, suffix: "%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-kaf-gold mb-2">
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-xs uppercase tracking-widest text-kaf-cream/50 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Human Element (Wobble Cards) */}
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <WobbleCard containerClassName="h-full bg-kaf-gold/5 border-kaf-gold/20">
            <div className="max-w-sm">
              <Award className="w-12 h-12 text-kaf-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-kaf-cream uppercase tracking-tighter mb-4">
                Qualidade <span className="text-kaf-gold italic">Garantida</span>
              </h2>
              <p className="text-kaf-cream/70 leading-relaxed mb-6">
                Trabalhamos apenas com marcas consagradas e equipamentos de ponta para garantir o melhor sabor. Cada barril é tratado com o máximo cuidado.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&q=80&w=1000"
              alt="História KAF"
              className="absolute -right-20 -bottom-20 w-[300px] h-[300px] object-cover rounded-full opacity-20"
              referrerPolicy="no-referrer"
            />
          </WobbleCard>
          <WobbleCard containerClassName="h-full bg-kaf-gold/5 border-kaf-gold/20">
            <div className="max-w-sm">
              <Users className="w-12 h-12 text-kaf-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-kaf-cream uppercase tracking-tighter mb-4">
                Atendimento <span className="text-kaf-gold italic">Premium</span>
              </h2>
              <p className="text-kaf-cream/70 leading-relaxed">
                Nossa equipe é treinada para oferecer um serviço impecável, desde o primeiro contato até o recolhimento da chopeira. Seu evento merece esse cuidado.
              </p>
              <div className="mt-8 p-4 rounded-xl bg-kaf-dark border border-kaf-gold/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-kaf-gold/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-kaf-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-kaf-gold uppercase tracking-widest mb-1">Satisfação</p>
                  <p className="text-sm text-kaf-cream/80">98% de aprovação dos nossos clientes.</p>
                </div>
              </div>
            </div>
          </WobbleCard>
        </div>
      </section>

      {/* Operational Differentials (Sticky Scroll) */}
      <section className="py-20 px-4 bg-transparent relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
              Vantagens de ser <span className="text-kaf-gold italic">Cliente KAF</span>
            </h2>
            <p className="text-kaf-cream/60 max-w-xl">
              Mais do que vender chopp, entregamos uma experiência completa para que o seu evento ou negócio seja um sucesso absoluto.
            </p>
          </div>
          <StickyScroll content={OPERATIONAL_DIFFERENTIALS} />
        </div>
      </section>
      </div>
    </div>
  );
};
