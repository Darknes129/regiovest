'use client';

import React from 'react';
import { Compass, CheckCircle, FileText, Smartphone, Zap, Flame, BarChart3, Clock } from 'lucide-react';

export default function SolutionOverview() {
  const pillars = [
    {
      icon: BarChart3,
      color: 'bg-blue-600',
      tag: 'Raio-X de Recorrência',
      title: 'Saiba o que realmente cai',
      desc: 'Mapeamos os últimos anos da prova para você não perder tempo com temas que a UNICAMP praticamente não cobra. Foque sua energia onde estão 80% dos pontos.',
      accent: 'border-blue-200 bg-blue-50/40',
      badge: 'Filtro Cirúrgico',
    },
    {
      icon: Zap,
      color: 'bg-amber-500',
      tag: 'Padrão COMVEST',
      title: 'Aprenda a pensar como o corretor',
      desc: 'Na UNICAMP, o raciocínio interdisciplinar e a clareza de argumentação valem muito. Nossos materiais mostram o caminho que a banca espera ver na sua resolução.',
      accent: 'border-amber-200 bg-amber-50/40',
      badge: 'Critério de Banca',
    },
    {
      icon: FileText,
      color: 'bg-purple-600',
      tag: 'Visual & Direto',
      title: 'Anotações prontas e marcações de estudo',
      desc: 'Diagramas limpos, caixas de atenção para pegadinhas clássicas e marca-textos nas palavras decisivas do enunciado. Tudo pensado para fixar rápido.',
      accent: 'border-purple-200 bg-purple-50/40',
      badge: 'Sem Enrolação',
    },
    {
      icon: Smartphone,
      color: 'bg-emerald-600',
      tag: 'Flexibilidade Total',
      title: 'Em qualquer tela ou no papel',
      desc: 'PDF diagramado com tipografia grande e confortável. Abra no iPad, leia no smartphone no caminho do colégio ou imprima para resolver com sua caneta.',
      accent: 'border-emerald-200 bg-emerald-50/40',
      badge: '100% Digital',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <span>A Abordagem RegioVest</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Mais clareza.{' '}
            <span className="marker-lime text-slate-950">Mais economia de tempo.</span>{' '}
            Mais confiança no dia da prova.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Não vendemos apenas “arquivos em PDF”. Entregamos um atalho organizado para você entrar na sala do vestibular sabendo exatamente como a UNICAMP funciona.
          </p>
        </div>

        {/* 4 Colored Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-white border ${item.accent} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    {item.tag}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Metodologia 100% UNICAMP</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
