'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Escolheu',
      desc: 'Encontre o material ideal: 1ª Fase, 2ª Fase ou o Combo Completo com desconto.',
      color: 'bg-blue-600',
    },
    {
      step: '2',
      title: 'Comprou',
      desc: 'Finalize sua compra com segurança total via PIX imediato ou Cartão de Crédito.',
      color: 'bg-amber-500',
    },
    {
      step: '3',
      title: 'Recebeu',
      desc: 'Receba o link de download direto no seu e-mail em menos de 1 minuto.',
      color: 'bg-emerald-600',
    },
    {
      step: '4',
      title: 'Estudou',
      desc: 'Abra no celular, tablet, computador ou imprima para rabiscar e começar sua reta final.',
      color: 'bg-purple-600',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <span>Passo a Passo Simples</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Zero complicação: da compra ao estudo em{' '}
            <span className="marker-yellow text-slate-950">menos de 2 minutos</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Sem cadastro longo, sem aplicativo pesado, sem mensalidades ocultas.
          </p>
        </div>

        {/* 4 Steps Visual Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between relative group hover:border-blue-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`w-10 h-10 rounded-2xl ${item.color} text-white font-black text-lg flex items-center justify-center shadow-md`}
                  >
                    {item.step}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Etapa 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1 text-xs font-bold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% automático</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
