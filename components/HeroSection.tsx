'use client';

import React from 'react';
import Logo from './Logo';
import { Sparkles, Eye, CheckCircle2, ShieldCheck, Zap, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface HeroSectionProps {
  onOpenSample: () => void;
  onOpenCheckout: (product?: string) => void;
}

export default function HeroSection({
  onOpenSample,
  onOpenCheckout,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200/60">
      {/* Subtle background dynamic elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
        {/* Notebook grid effect */}
        <div className="absolute inset-0 bg-notebook-grid opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Emotional, High-Converting Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span>MATERIAIS DIGITAIS ESPECÍFICOS PARA A UNICAMP</span>
            </div>

            {/* Giant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08] text-balance">
              Se seu objetivo é a{' '}
              <span className="relative inline-block text-blue-600">
                UNICAMP
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-orange-500 fill-current opacity-80"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,12" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              ,<br className="hidden sm:inline" /> seu estudo{' '}
              <span className="marker-yellow text-slate-950">
                também precisa ser.
              </span>
            </h1>

            {/* Emotional punch subline */}
            <p className="text-lg sm:text-xl font-semibold text-slate-700">
              Pare de perder semanas com materiais genéricos feitos para outros vestibulares.
            </p>

            {/* Explanatory description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A <strong className="text-slate-900">RegioVest</strong> organiza guias digitais em PDF focados cirurgicamente no estilo da COMVEST (1ª e 2ª Fase). Você descobre o que priorizar, como a banca pontua e como resolver questões sem dar voltas.
            </p>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#precos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>QUERO ESTUDAR PRA UNICAMP</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">🚀</span>
              </a>
            </div>

            {/* Microcopy badges with checkmarks */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600">
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Material 100% digital</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acesso imediato no e-mail</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Estude no celular, tablet ou imprima</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tangible 3D Digital Study Kit Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Floating Student Stickers */}
              <div className="absolute -top-5 -left-4 z-20 bg-amber-300 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-amber-400 transform -rotate-6 hover:rotate-0 transition-transform flex items-center gap-1.5 animate-soft-float">
                <span>🔥</span>
                <span>PADRÃO COMVEST REVELADO</span>
              </div>

              <div className="absolute -bottom-4 right-2 z-20 bg-blue-600 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow-xl border border-blue-400/50 transform rotate-3 hover:rotate-0 transition-transform flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-300" />
                <span>SEM ENROLAÇÃO DE CURSINHO</span>
              </div>

              {/* Main Tablet Mockup Showcase */}
              <div className="relative bg-slate-900 p-3 sm:p-4 rounded-3xl shadow-2xl border-4 border-slate-800 shadow-blue-900/20 transform hover:scale-[1.01] transition-transform">
                {/* Tablet Top Camera and Speaker */}
                <div className="flex items-center justify-center gap-2 pb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
                  <div className="w-8 h-1 rounded-full bg-slate-800" />
                </div>

                {/* Tablet Screen: Realistic PDF Page Open */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-inner overflow-hidden border border-slate-200">
                  {/* PDF Document Header Bar */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <Logo size="sm" showWordmark={false} variant="dark" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">
                          RegioVest | Guia Estratégico UNICAMP
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium">
                          Módulo Biologia & Questões Interdisciplinares · Pág. 14 de 128
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      100% COMVEST
                    </span>
                  </div>

                  {/* Simulated PDF Question and Marker Highlights */}
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-900 font-black text-[11px] px-2 py-0.5 rounded">
                        QUESTÃO COMVEST
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Incidência: Alta (Caiu nos últimos 4 anos)
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed font-sans">
                      <p>
                        A UNICAMP valoriza a leitura crítica e conexão entre disciplinas. Observe o gráfico de fluxo energético...
                      </p>
                      <div className="mt-2 text-xs font-bold text-slate-900">
                        <span className="marker-yellow">
                          Ponto-Chave da Banca:
                        </span>{' '}
                        A banca costuma cobrar a distinção entre produtividade bruta e líquida sem fórmulas decoradas.
                      </div>
                    </div>

                    {/* Step-by-step resolution box with neon marker */}
                    <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200/90 text-xs">
                      <div className="font-extrabold text-blue-950 flex items-center gap-1.5 mb-1">
                        <span>⚡</span>
                        <span>Resolução Estratégica Passo a Passo:</span>
                      </div>
                      <div className="space-y-1 text-slate-700 text-[11px]">
                        <div><strong className="text-blue-900">Passo 1:</strong> Identifique o comando da questão no 1º parágrafo.</div>
                        <div><strong className="text-blue-900">Passo 2:</strong> Elimine as alternativas B e C (pegadinha clássica de escala).</div>
                        <div>
                          <strong className="text-emerald-700">Gabarito Comentado:</strong>{' '}
                          <span className="marker-lime font-bold">Alternativa A</span> — interpretação direta do gráfico.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Student margin note simulation */}
                  <div className="mt-3 p-2 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-2 text-[11px] text-amber-950">
                    <span className="text-base">💡</span>
                    <div>
                      <strong>Dica de Reta Final:</strong> Na 1ª fase você tem em média 3 minutos por questão. Não trave em contas longas.
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Phone Mockup Overlaid */}
              <div className="hidden sm:block absolute -bottom-8 -left-6 z-30 w-44 bg-slate-950 p-2 rounded-2xl shadow-2xl border-2 border-slate-700 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-1.5" />
                <div className="bg-white rounded-xl p-2.5 text-[10px] space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                    <span>REVISÃO RÁPIDA</span>
                    <span className="text-blue-600">UNICAMP</span>
                  </div>
                  <div className="font-extrabold text-slate-900 leading-tight">
                    🔥 5 Temas Que Mais Caem
                  </div>
                  <div className="space-y-1 text-slate-600">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>Ecologia e Impactos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>Funções e Gráficos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span>Cidadania e Brasil República</span>
                    </div>
                  </div>
                  <div className="pt-1 text-center">
                    <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[9px]">
                      Acesse no celular 📱
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
