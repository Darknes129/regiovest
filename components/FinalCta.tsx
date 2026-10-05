'use client';

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Flame, BookOpen } from 'lucide-react';

interface FinalCtaProps {
  onOpenCheckout: (product?: string) => void;
}

export default function FinalCta({ onOpenCheckout }: FinalCtaProps) {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-notebook-grid opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs sm:text-sm font-black uppercase tracking-wider mb-6">
          <Flame className="w-4 h-4 text-orange-400 fill-current" />
          <span>SUA VAGA NA UNICAMP COMEÇA AQUI</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 text-balance">
          A UNICAMP já é difícil o bastante.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
            Seu material de estudo não precisa ser.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Diga adeus à pilha de PDFs desorganizados e estude com o mapa exato do que a banca espera de você.
        </p>

        {/* Big High-Converting CTA */}
        <div className="max-w-md mx-auto space-y-4">
          <a
            href="#precos"
            className="w-full inline-flex items-center justify-center gap-3 py-5 px-8 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-base sm:text-lg tracking-wide shadow-2xl shadow-orange-500/30 transform hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer group"
          >
            <span>COMEÇAR MINHA PREPARAÇÃO</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-blue-200 font-semibold">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Acesso Imediato no E-mail
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Garantia Incondicional de 7 Dias
            </span>
            <span>•</span>
            <span>A partir de R$ 37,90</span>
          </div>
        </div>
      </div>
    </section>
  );
}
