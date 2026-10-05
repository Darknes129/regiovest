'use client';

import React from 'react';
import { Target, Clock, AlertTriangle, HelpCircle, Compass, ArrowDown, Sparkles } from 'lucide-react';

export default function PainPointsSection() {
  const painPoints = [
    {
      emoji: '😵‍💫',
      title: '“Tem matéria demais para cobrir.”',
      desc: 'Os editais de vestibular são gigantescos e tentar estudar tudo linha por linha só gera cansaço e sensação de que você está sempre atrasado.',
      tag: 'Sobrecarga de Conteúdo',
      borderColor: 'hover:border-rose-400',
      tagColor: 'bg-rose-100 text-rose-800',
    },
    {
      emoji: '📚',
      title: '“Não sei o que priorizar na reta final.”',
      desc: 'Você senta na mesa e fica 30 minutos decidindo o que abrir. Falta uma bússola clara dizendo: “a UNICAMP sempre cobra este padrão aqui”.',
      tag: 'Falta de Filtro',
      borderColor: 'hover:border-amber-400',
      tagColor: 'bg-amber-100 text-amber-800',
    },
    {
      emoji: '⏰',
      title: '“A prova está chegando e bate a dúvida.”',
      desc: 'A cada dia que passa no calendário, aumenta a sensação de que faltou revisar os pontos mais perigosos e as pegadinhas frequentes.',
      tag: 'Ansiedade de Calendário',
      borderColor: 'hover:border-orange-400',
      tagColor: 'bg-orange-100 text-orange-800',
    },
    {
      emoji: '📝',
      title: '“A 2ª fase parece outro vestibular.”',
      desc: 'Não basta saber a teoria: você precisa escrever respostas discursivas claras, completas e no exato padrão de correção da COMVEST.',
      tag: 'Choque das Discursivas',
      borderColor: 'hover:border-purple-400',
      tagColor: 'bg-purple-100 text-purple-800',
    },
    {
      emoji: '🤯',
      title: '“Cada cursinho e canal fala uma coisa.”',
      desc: 'Muitos professores tratam a UNICAMP como se fosse ENEM ou FUVEST. Mas a prova tem estilo, interdisciplinaridade e cobrança únicos.',
      tag: 'Ruído de Informação',
      borderColor: 'hover:border-blue-400',
      tagColor: 'bg-blue-100 text-blue-800',
    },
  ];

  return (
    <section id="dilemas" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <span>A Realidade do Vestibulando</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Você não precisa estudar tudo.{' '}
            <span className="marker-orange text-slate-950">
              Precisa estudar melhor.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Reconhece algum destes pensamentos na sua rotina de estudos?
          </p>
        </div>

        {/* 5 Dynamic Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 ${item.borderColor} flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl p-2 rounded-xl bg-white shadow-xs group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Transition Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 text-white p-8 sm:p-12 text-center shadow-xl shadow-blue-900/15">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>A Virada de Jogo</span>
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              É exatamente por isso que criamos a RegioVest.
            </h3>

            <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed">
              Em vez de empilhar 800 páginas de teoria densa que você nunca vai ler, a RegioVest organiza materiais digitais em PDF focados exclusivamente na UNICAMP: para você saber <strong>o que estudar, como revisar e como se preparar para o estilo exato da banca</strong>.
            </p>

            <div className="pt-2">
              <a
                href="#fases"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 transition-colors shadow-md cursor-pointer"
              >
                <span>Descubra o material ideal para sua fase</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
