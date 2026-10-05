'use client';

import React from 'react';
import { ArrowRight, Check, Flame, Zap, Sparkles, BookOpen, PenTool, Clock, Award } from 'lucide-react';

interface PhaseSelectorProps {
  onSelectPhase: (phase: '1' | '2') => void;
}

export default function PhaseSelector({ onSelectPhase }: PhaseSelectorProps) {
  return (
    <section id="fases" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <span>Foco Estratégico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Onde você está na sua jornada?
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            A 1ª e a 2ª fase da UNICAMP exigem habilidades diferentes. Escolha a sua fase e estude com o foco exato no que você precisa dominar agora.
          </p>
        </div>

        {/* 2 Big Distinctive Phase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: 1ª FASE */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white p-8 sm:p-10 border-2 border-blue-500/40 shadow-2xl flex flex-col justify-between group transform hover:-translate-y-1 transition-all duration-300">
            {/* Background dynamic light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform" />
            
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>1ª FASE OBJETIVA</span>
                </span>
                <span className="text-xs font-semibold text-blue-300">72 Questões · Múltipla Escolha</span>
              </div>

              {/* Title & Sub */}
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                🔥 UNICAMP 1ª Fase
              </h3>
              <p className="text-blue-100 text-base leading-relaxed mb-6 font-medium">
                Material focado em <strong>preparação objetiva, gestão de tempo, revisão rápida e domínio de pegadinhas clássicas</strong> da banca COMVEST.
              </p>

              {/* Visual Mini Mockup Representation */}
              <div className="mb-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between text-blue-200 font-bold border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-orange-400" />
                    <span>Caderno Digital de 1ª Fase</span>
                  </span>
                  <span className="text-[10px] bg-blue-500/30 px-2 py-0.5 rounded text-blue-100 font-bold">
                    Classificado por Tópico
                  </span>
                </div>
                <div className="text-slate-200 text-xs leading-relaxed">
                  • Raio-X dos temas mais recorrentes nos últimos 8 anos<br />
                  • Como identificar distratores em questões interdisciplinares<br />
                  • Resoluções objetivas diretas ao ponto, sem enrolar na álgebra
                </div>
              </div>

              {/* Bullet Checklist */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-blue-100 font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span>450+ questões COMVEST selecionadas e comentadas</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-blue-100 font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span>Técnica de leitura de enunciados longos e gráficos</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-blue-100 font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span>Checklist de revisão para os 15 dias anteriores à prova</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <a
                href="#produto-fase1"
                onClick={() => onSelectPhase('1')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-orange-500/25 transition-all group-hover:scale-[1.02] cursor-pointer"
              >
                <span>VER MATERIAIS DA 1ª FASE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: 2ª FASE */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950 via-slate-950 to-slate-900 text-white p-8 sm:p-10 border-2 border-purple-500/40 shadow-2xl flex flex-col justify-between group transform hover:-translate-y-1 transition-all duration-300">
            {/* Background dynamic light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-lime-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                  <Zap className="w-3.5 h-3.5 fill-current text-slate-950" />
                  <span>2ª FASE DISCURSIVA</span>
                </span>
                <span className="text-xs font-semibold text-purple-300">Respostas Escritas & Redação</span>
              </div>

              {/* Title & Sub */}
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                ⚡ UNICAMP 2ª Fase
              </h3>
              <p className="text-purple-100 text-base leading-relaxed mb-6 font-medium">
                Preparação direcionada para <strong>questões discursivas, critérios de pontuação da banca e estrutura de respostas nota máxima</strong>.
              </p>

              {/* Visual Mini Mockup Representation */}
              <div className="mb-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between text-purple-200 font-bold border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5">
                    <PenTool className="w-4 h-4 text-lime-400" />
                    <span>Guia de Domínio Discursivo</span>
                  </span>
                  <span className="text-[10px] bg-purple-500/30 px-2 py-0.5 rounded text-purple-100 font-bold">
                    Padrão de Resposta COMVEST
                  </span>
                </div>
                <div className="text-slate-200 text-xs leading-relaxed">
                  • O que o corretor procura em cada linha da folha de resposta<br />
                  • Como não perder pontos por falta de justificativa conceitual<br />
                  • Modelos comentados de respostas com pontuação máxima
                </div>
              </div>

              {/* Bullet Checklist */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-purple-100 font-medium">
                  <div className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-lime-400" />
                  </div>
                  <span>Exemplos reais de respostas nota 10 vs respostas que perderam ponto</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-purple-100 font-medium">
                  <div className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-lime-400" />
                  </div>
                  <span>Estratégia para Redação nos formatos característicos da UNICAMP</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-purple-100 font-medium">
                  <div className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-lime-400" />
                  </div>
                  <span>Treino prático com folhas no formato oficial da prova</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <a
                href="#produto-fase2"
                onClick={() => onSelectPhase('2')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-lime-400/20 transition-all group-hover:scale-[1.02] cursor-pointer"
              >
                <span>VER MATERIAIS DA 2ª FASE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
