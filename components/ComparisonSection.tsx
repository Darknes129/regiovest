'use client';

import React from 'react';
import { X, Check, Flame } from 'lucide-react';

export default function ComparisonSection() {
  const withoutRegio = [
    'Mil abas do navegador e PDFs soltos abertos ao mesmo tempo',
    'Resolver questões de outros vestibulares com estilo completamente diferente',
    'Não ter clareza sobre quais temas a COMVEST mais cobra na reta final',
    'Perder mais tempo organizando resumos do que realmente estudando',
    'Insegurança sobre como estruturar respostas discursivas da 2ª fase',
    'Gastos absurdos com mensalidades caras de cursinhos tradicionais',
  ];

  const withRegio = [
    'Material único, organizado e com índice visual inteligente',
    'Foco 100% no padrão de prova e pegadinhas da UNICAMP',
    'Raio-X de incidência comprovado para priorizar o que pontua alto',
    'Comece a resolver questões em menos de 2 minutos do seu dia',
    'Modelos de respostas discursivas com critérios reais de pontuação da banca',
    'Preço acessível e pagamento único, sem assinatura recorrente',
  ];

  return (
    <section id="comparativo" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <span>Diferença Clara</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Compare a sua rotina:{' '}
            <span className="marker-lime text-slate-950">
              sem direção vs. com a RegioVest
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            A forma como você estuda na reta final define como você se sente no dia da prova.
          </p>
        </div>

        {/* 2-Column Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Card: Sem Direção */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-rose-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-100">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-black text-xl">
                    ❌
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Estudar Sem Direção
                    </h3>
                    <div className="text-xs text-rose-600 font-semibold">
                      O jeito cansativo e confuso
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {withoutRegio.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-rose-600" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-center text-xs font-bold text-slate-500">
              Sensação: Estresse constante e perda de tempo
            </div>
          </div>

          {/* Card: Com RegioVest */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white border-2 border-blue-500/50 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xl">
                    ✅
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Estudar com a RegioVest
                    </h3>
                    <div className="text-xs text-amber-300 font-bold">
                      Preparação estratégica e cirúrgica
                    </div>
                  </div>
                </div>
                <span className="text-[10px] bg-blue-500/30 text-blue-200 font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  FOCO TOTAL
                </span>
              </div>

              <div className="space-y-4">
                {withRegio.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-100 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 relative z-10">
              <a
                href="#precos"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>QUERO ESTUDAR DO JEITO CERTO</span>
                <Flame className="w-4 h-4 text-amber-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
