import React from 'react';
import { ShimmerButton } from './UIComponents';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#00357A] text-white pt-24 pb-12 z-20 relative w-full border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Coluna 1 */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-8">
              <img src="/kaf-branco.png" alt="KAF Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              Tradição e excelência em distribuição de chopp e bebidas premium na Grande Florianópolis. Elevando o padrão do seu evento desde 1999.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="font-display text-sm font-bold text-white mb-8 uppercase tracking-widest text-[#2563eb]">Atendimento</h3>
            <ul className="space-y-4 text-white/70 text-base font-medium">
              <li><span className="text-white font-bold">Segunda - Sexta:</span> 08:00 - 18:00</li>
              <li><span className="text-white font-bold">Sábado:</span> 08:00 - 12:00</li>
              <li><span className="text-white/40 font-bold">Domingo:</span> Fechado</li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-display text-sm font-bold text-white mb-8 uppercase tracking-widest text-[#2563eb]">Contato</h3>
            <ul className="space-y-4 text-white/70 text-base font-medium w-full">
              <li>📞 (48) 3344-4222</li>
              <li>📱 (48) 99151-0012</li>
              <li>✉️ contato@kafchopp.com.br</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center text-sm text-white/30 font-medium">
        <p>© {new Date().getFullYear()} KAF Chopp Express. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
