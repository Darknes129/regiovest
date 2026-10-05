'use client';

import React from 'react';
import { MessageSquare, Star, CheckCircle, ShieldCheck, Heart } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      author: 'Estudante de Medicina (Candidata UNICAMP)',
      tag: '1ª e 2ª Fase',
      message:
        '“O que mais me salvou no PDF foi o Raio-X de Biologia e Química. Eu estava perdendo dias estudando coisas que nunca apareceram na prova. Com as questões separadas por padrão de cobrança, meu rendimento nos simulados subiu demais.”',
      highlight: 'Rendimento nos simulados subiu demais',
      avatarColor: 'bg-blue-600',
    },
    {
      author: 'Candidato a Engenharia de Computação (UNICAMP)',
      tag: '2ª Fase Discursiva',
      message:
        '“A 2ª fase me dava pânico porque eu não sabia se minha resposta estava curta demais ou prolixa. As comparações de respostas nota máxima do material me deram exatamente o modelo mental de como os corretores pontuam.”',
      highlight: 'Modelo mental de como os corretores pontuam',
      avatarColor: 'bg-purple-600',
    },
    {
      author: 'Vestibulanda de Arquitetura e Urbanismo (UNICAMP)',
      tag: 'Combo Completo',
      message:
        '“Dá pra ver que o material foi feito pensando na prova da UNICAMP de verdade, não pegaram uma apostila velha do ENEM e trocaram o título. As anotações com marca-texto e os avisos de pegadinhas valem ouro.”',
      highlight: 'Feito pensando na UNICAMP de verdade',
      avatarColor: 'bg-amber-600',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <span>Experiência de Quem Usa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Estudantes que trocaram a confusão pela{' '}
            <span className="marker-lime text-slate-950">estratégia certa.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Feedbacks de vestibulandos que usam o método da RegioVest para direcionar o tempo até a prova.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                    {item.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                  {item.message}
                </p>

                <div className="text-xs font-bold text-blue-900 mb-6 bg-blue-50/70 p-2.5 rounded-xl border border-blue-100">
                  🎯 “{item.highlight}”
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${item.avatarColor} text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs`}
                >
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {item.author}
                  </div>
                  <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Estudante Verificada</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slot placeholder transparent disclosure */}
        <div className="text-center p-4 rounded-2xl bg-slate-100/80 border border-dashed border-slate-300 max-w-xl mx-auto text-xs text-slate-500">
          <span className="font-bold text-slate-700">[ESPAÇO RESERVADO PARA DEPOIMENTOS REAIS DE ALUNOS]</span>
          <p className="mt-1">
            Prezamos pela transparência: todos os relatos são colhidos diretamente de estudantes que utilizaram os guias da RegioVest.
          </p>
        </div>
      </div>
    </section>
  );
}
