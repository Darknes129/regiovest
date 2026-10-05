'use client';

import React from 'react';
import { Clock, TrendingUp, Sparkles, Coffee, BookOpen } from 'lucide-react';

export default function ValueAnchor() {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Decisão Simples</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight mb-6">
          Menos tempo procurando o que estudar.{' '}
          <span className="text-amber-400">
            Mais tempo realmente se preparando.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Quanto vale não chegar no dia da UNICAMP com aquela sensação desesperadora de ter esquecido de revisar o que mais cai?
        </p>

        {/* Visual Comparison Card */}
        <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-left">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <Coffee className="w-4 h-4" />
              <span>O que você gasta sem perceber:</span>
            </div>
            <div className="text-2xl font-black text-white">R$ 40 – 50</div>
            <p className="text-xs text-slate-400">
              Em um único lanche ou delivery de final de semana que dura 20 minutos.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-950/70 border border-blue-500/40 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <BookOpen className="w-4 h-4" />
              <span>O que a RegioVest te entrega:</span>
            </div>
            <div className="text-2xl font-black text-amber-300">R$ 37,90</div>
            <p className="text-xs text-blue-200">
              Direção definitiva, questões no padrão da banca e semanas de estudo focado para o vestibular dos seus sonhos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
