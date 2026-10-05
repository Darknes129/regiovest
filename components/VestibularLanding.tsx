'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyMobileCta from './StickyMobileCta';
import VestibularSwitcher from './VestibularSwitcher';
import UnicampPricingSection from './UnicampPricingSection';
import FuvestPricingSection from './FuvestPricingSection';
import UnespPricingSection from './UnespPricingSection';
import { VestibularData } from '@/lib/vestibulares-data';
import {
  Sparkles,
  Eye,
  CheckCircle2,
  Zap,
  Flame,
  ArrowRight,
  BookOpen,
  Check,
  ShieldCheck,
  Download,
  CreditCard,
  ChevronDown,
  HelpCircle,
  AlertCircle,
  Clock,
  Layers,
  ZoomIn,
} from 'lucide-react';

interface VestibularLandingProps {
  data: VestibularData;
}

export default function VestibularLanding({ data }: VestibularLandingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(data.samplePages[0].id);
  const [zoomActive, setZoomActive] = useState(false);

  const handleScrollToPricing = () => {
    document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeSample =
    data.samplePages.find((s) => s.id === activeTab) || data.samplePages[0];

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-300 selection:text-slate-950">
      {/* Top Navbar with active vestibular indicator */}
      <Navbar
        currentVestibular={data.slug}
        onOpenCheckout={handleScrollToPricing}
      />

      <main className="flex-1">
        {/* =========================================
            HERO SECTION
        ========================================== */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-100/60 via-white to-slate-50 border-b border-slate-200/60">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-notebook-grid opacity-60" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Kicker */}
                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${data.theme.badgeBg} text-xs sm:text-sm font-bold shadow-xs`}>
                  <span className="flex h-2 w-2 rounded-full bg-current animate-ping" />
                  <span>{data.heroKicker}</span>
                </div>

                {/* Giant Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08] text-balance">
                  {data.heroTitleLeading}{' '}
                  <span className={`relative inline-block ${data.theme.primary}`}>
                    {data.heroTitleHighlight}
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-3 text-orange-500 fill-current opacity-80"
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                    >
                      <path d="M0,15 Q50,0 100,12" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>
                  ,<br className="hidden sm:inline" />{' '}
                  <span className={`${data.theme.highlightMarker} text-slate-950`}>
                    {data.heroTitleTrailing}
                  </span>
                </h1>

                {/* Punch Subtitle */}
                <p className="text-lg sm:text-xl font-semibold text-slate-700">
                  {data.heroSubtitle}
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {data.heroDescription}
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#precos"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r ${data.theme.primaryGradient} shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group`}
                  >
                    <span>{data.slug === 'unesp' ? 'EM BREVE' : `QUERO ESTUDAR PRA ${data.name}`}</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">🚀</span>
                  </a>
                </div>

                {/* Microcopy */}
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

              {/* Right Column: 3D Digital Study Kit Mockup */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Floating Stickers */}
                  <div className="absolute -top-5 -left-4 z-20 bg-amber-300 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-amber-400 transform -rotate-6 hover:rotate-0 transition-transform flex items-center gap-1.5 animate-soft-float">
                    <span>🔥</span>
                    <span>PADRÃO {data.name} REVELADO</span>
                  </div>

                  <div className="absolute -bottom-4 right-2 z-20 bg-slate-900 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow-xl border border-slate-700 transform rotate-3 hover:rotate-0 transition-transform flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>SEM ENROLAÇÃO DE CURSINHO</span>
                  </div>

                  {/* Tablet Frame */}
                  <div className="relative bg-slate-900 p-3 sm:p-4 rounded-3xl shadow-2xl border-4 border-slate-800 shadow-blue-900/20 transform hover:scale-[1.01] transition-transform">
                    <div className="flex items-center justify-center gap-2 pb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
                      <div className="w-8 h-1 rounded-full bg-slate-800" />
                    </div>

                    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-inner overflow-hidden border border-slate-200">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                            R
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 leading-tight">
                              RegioVest | Guia Estratégico {data.name}
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium">
                              {data.fullName} · 1ª e 2ª Fase
                            </div>
                          </div>
                        </div>
                        <span className="text-[11px] font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          100% {data.name}
                        </span>
                      </div>

                      {/* Question Content */}
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-100 text-blue-900 font-black text-[11px] px-2 py-0.5 rounded">
                            QUESTÃO OFICIAL {data.name}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">
                            Incidência: Alta no histórico recente
                          </span>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed font-sans">
                          <p>
                            A prova da {data.name} exige raciocínio estruturado e foco nos conceitos essenciais...
                          </p>
                          <div className="mt-2 text-xs font-bold text-slate-900">
                            <span className={data.theme.highlightMarker}>
                              Ponto-Chave da Banca:
                            </span>{' '}
                            Compreensão do comando e eliminação direta dos distratores comuns.
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200/90 text-xs">
                          <div className="font-extrabold text-blue-950 flex items-center gap-1.5 mb-1">
                            <span>⚡</span>
                            <span>Resolução Estratégica Passo a Passo:</span>
                          </div>
                          <div className="space-y-1 text-slate-700 text-[11px]">
                            <div><strong className="text-blue-900">Passo 1:</strong> Identifique a variável determinante no enunciado.</div>
                            <div><strong className="text-blue-900">Passo 2:</strong> Elimine as alternativas contraditórias.</div>
                            <div>
                              <strong className="text-emerald-700">Gabarito Comentado:</strong>{' '}
                              <span className="marker-lime font-bold">Alternativa A</span> — justificativa conceitual direta.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 p-2 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-2 text-[11px] text-amber-950">
                        <span className="text-base">💡</span>
                        <div>
                          <strong>Dica RegioVest:</strong> Mantenha o ritmo cronometrado por questão e evite travar em contas longas.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone floating */}
                  <div className="hidden sm:block absolute -bottom-8 -left-6 z-30 w-44 bg-slate-950 p-2 rounded-2xl shadow-2xl border-2 border-slate-700 transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-1.5" />
                    <div className="bg-white rounded-xl p-2.5 text-[10px] space-y-1.5">
                      <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                        <span>REVISÃO RÁPIDA</span>
                        <span className="text-blue-600 font-bold">{data.name}</span>
                      </div>
                      <div className="font-extrabold text-slate-900 leading-tight">
                        🔥 Top Conteúdos da Banca
                      </div>
                      <div className="space-y-1 text-slate-600">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                          <span>1ª Fase: Objetivas e Raio-X</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span>2ª Fase: Discursivas & Redação</span>
                        </div>
                      </div>
                      <div className="pt-1 text-center">
                        <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[9px]">
                          PDF 100% no celular 📱
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Vestibular Switcher Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-30 mb-8">
          <VestibularSwitcher current={data.slug} />
        </div>

        {/* =========================================
            IDENTIFICAÇÃO / DILEMAS
        ========================================== */}
        <section id="dilemas" className="py-16 sm:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                <span>A Realidade do Vestibulando da {data.name}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
                Você não precisa estudar tudo.{' '}
                <span className={`${data.theme.highlightMarker} text-slate-950`}>
                  Precisa estudar melhor.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600">
                Seu tempo até a prova da {data.name} é limitado. Estudar sem direcionamento é a fórmula do estresse.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {data.dilemmas.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl p-2 rounded-xl bg-white shadow-xs group-hover:scale-110 transition-transform">
                        {item.emoji}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Transition banner */}
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${data.theme.primaryGradient} text-white p-8 sm:p-12 text-center shadow-xl`}>
              <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>A Abordagem RegioVest para a {data.name}</span>
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Organizamos o caminho para você estudar com foco cirúrgico.
                </h3>

                <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                  Sem 800 páginas de enrolação. Você recebe exatamente o raio-x da banca, as resoluções comentadas no padrão esperado e a técnica para pontuar alto na 1ª e na 2ª fase.
                </p>

                <div className="pt-2">
                  <a
                    href="#fases"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-md cursor-pointer"
                  >
                    <span>Escolha a sua fase de estudo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            BENTO PILLARS / BENEFÍCIOS
        ========================================== */}
        <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
                <span>Diferenciais RegioVest</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
                Mais clareza. Mais economia de tempo. Menos ansiedade.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.bentoPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        {pillar.tag}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-500">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Metodologia 100% {data.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            ESCOLHA SUA FASE (1ª FASE vs 2ª FASE)
        ========================================== */}
        <section id="fases" className="py-16 sm:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
                <span>Para qual fase você está se preparando?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
                Onde você está na sua jornada para a {data.name}?
              </h2>

              <p className="text-base sm:text-lg text-slate-600">
                A 1ª e a 2ª fase exigem habilidades diferentes. Escolha o material com o foco exato no que você precisa dominar agora.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* CARD 1ª FASE */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white p-8 sm:p-10 border-2 border-blue-500/40 shadow-2xl flex flex-col justify-between group transform hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      <span>1ª FASE OBJETIVA</span>
                    </span>
                    <span className="text-xs font-semibold text-blue-300">{data.phase1.questionsCount}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                    {data.phase1.title}
                  </h3>

                  <p className="text-blue-100 text-base leading-relaxed mb-6 font-medium">
                    {data.phase1.description}
                  </p>

                  <div className="mb-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                    <div className="font-bold text-blue-200 border-b border-white/10 pb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-orange-400" />
                        <span>Caderno Digital 1ª Fase {data.name}</span>
                      </span>
                      <span className="text-[10px] bg-blue-500/30 px-2 py-0.5 rounded text-blue-100 font-bold">
                        {data.phase1.badge}
                      </span>
                    </div>
                    <div className="text-slate-200 space-y-1">
                      {data.phase1.keyPoints.map((kp, kIdx) => (
                        <div key={kIdx}>• {kp}</div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-8">
                    {data.phase1.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-blue-100 font-medium">
                        <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CARD 2ª FASE */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950 via-slate-950 to-slate-900 text-white p-8 sm:p-10 border-2 border-purple-500/40 shadow-2xl flex flex-col justify-between group transform hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-lime-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                      <Zap className="w-3.5 h-3.5 fill-current text-slate-950" />
                      <span>2ª FASE DISCURSIVA</span>
                    </span>
                    <span className="text-xs font-semibold text-purple-300">{data.phase2.format}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                    {data.phase2.title}
                  </h3>

                  <p className="text-purple-100 text-base leading-relaxed mb-6 font-medium">
                    {data.phase2.description}
                  </p>

                  <div className="mb-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                    <div className="font-bold text-purple-200 border-b border-white/10 pb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-lime-400" />
                        <span>Guia de Domínio Discursivo & Redação</span>
                      </span>
                      <span className="text-[10px] bg-purple-500/30 px-2 py-0.5 rounded text-purple-100 font-bold">
                        {data.phase2.badge}
                      </span>
                    </div>
                    <div className="text-slate-200 space-y-1">
                      {data.phase2.keyPoints.map((kp, kIdx) => (
                        <div key={kIdx}>• {kp}</div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {data.phase2.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-purple-100 font-medium">
                        <div className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-lime-400" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SHOWCASE INTERATIVO DO PRODUTO
        ========================================== */}
        <section id="amostra" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <span>Olha o que você vai ter na mão 👀</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Veja o padrão visual dos PDFs da {data.name}
              </h2>

              <p className="text-base sm:text-lg text-slate-300">
                Páginas diagramadas com clareza, fontes confortáveis, marca-textos nas palavras decisivas e gabaritos comentados.
              </p>

              {/* Tabs */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
                {data.samplePages.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Document Mockup Viewport */}
            <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-700 space-y-6">
              <div className="border-b pb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {activeSample.category} · {data.name}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {activeSample.title}
                </h3>
              </div>

              <div className="p-4 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-lg font-bold text-slate-900">
                  {activeSample.content.headline}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeSample.content.description}
                </p>
                <div className="p-3 bg-yellow-100/70 rounded-xl text-slate-900 text-xs font-semibold">
                  <span className="marker-yellow font-bold">Destaque:</span> {activeSample.content.highlight}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200 text-blue-950">
                  <strong>💡 Dica de Banca:</strong> {activeSample.content.tip}
                </div>
                <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 font-medium">
                  <strong>✓ Gabarito & Análise:</strong> {activeSample.content.answerKey}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            PRODUTOS & OFERTAS
        ========================================== */}
        {data.slug === 'unicamp' ? (
          <UnicampPricingSection />
        ) : data.slug === 'fuvest' ? (
          <FuvestPricingSection />
        ) : data.slug === 'unesp' ? (
          <UnespPricingSection onSelectProduct={handleScrollToPricing} />
        ) : (
          <section id="precos" className="py-16 sm:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-bold uppercase tracking-wider">
                  <span>Investimento de Baixo Ticket</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
                  Escolha o seu material para a{' '}
                  <span className={`${data.theme.highlightMarker} text-slate-950`}>
                    {data.name}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600">
                  Preço acessível, pagamento único e acesso imediato para você não perder tempo.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
                {data.products.map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    className={`rounded-3xl bg-slate-50/60 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${item.borderClass} ${
                      item.popular ? 'bg-white ring-1 ring-orange-500/20 lg:-translate-y-2' : ''
                    }`}
                  >
                    {item.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                        MELHOR CUSTO-BENEFÍCIO 🔥
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">100% Digital PDF</span>
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">
                        {item.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 mb-6 shadow-xs">
                        <div className="text-xs text-slate-400 font-medium">
                          De <span className="line-through">R$ {item.originalPrice}</span> por apenas:
                        </div>
                        <div className="flex items-baseline gap-1 my-1">
                          <span className="text-xs font-bold text-slate-600">R$</span>
                          <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
                            {item.currentPrice}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">à vista</span>
                        </div>
                        <div className="text-xs text-slate-600 font-bold">
                          ou em até <span className="text-blue-700">{item.installments}</span> no cartão
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                          Você recebe acesso a:
                        </div>
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-emerald-700" />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <a
                        href="#precos"
                        className={`w-full py-4 px-6 rounded-2xl font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${item.buttonClass}`}
                      >
                        <span>{item.ctaText}</span>
                      </a>
                      <div className="pt-3 text-center text-[11px] text-slate-500 font-medium">
                        ⚡ Envio imediato no seu e-mail após a confirmação
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="rounded-2xl bg-slate-100/80 border border-slate-200/80 p-6 sm:p-8 flex flex-wrap items-center justify-around gap-6 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Liberação Instantânea</div>
                    <div className="text-xs text-slate-500">Pague no PIX e receba em menos de 1 minuto</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Garantia de 7 Dias</div>
                    <div className="text-xs text-slate-500">Se não te ajudar, devolvemos 100% do valor</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Pagamento Seguro</div>
                    <div className="text-xs text-slate-500">PIX ou Cartão em até 6x</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================
            FAQ ESPECÍFICO
        ========================================== */}
        <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Dúvidas Frequentes</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
                Perguntas Frequentes sobre a {data.name}
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-blue-500 bg-blue-50/20 shadow-sm'
                        : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                    } ${faq.highlight ? 'ring-1 ring-amber-400/40' : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-extrabold text-slate-900 text-base sm:text-lg">
                        {faq.q}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                        {faq.highlight && (
                          <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Declaração Oficial</span>
                          </div>
                        )}
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            FINAL CTA
        ========================================== */}
        <section className={`py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white relative overflow-hidden`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs sm:text-sm font-black uppercase tracking-wider">
              <Flame className="w-4 h-4 text-orange-400 fill-current" />
              <span>SUA APROVAÇÃO NA {data.name} COMEÇA AQUI</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] text-balance">
              A {data.name} já é difícil o bastante.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
                Seu material de estudo não precisa ser.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto font-medium">
              Tenha em mãos o filtro do que realmente cai e encare o vestibular com a confiança de quem estudou com método.
            </p>

            <div className="max-w-md mx-auto pt-2">
              <a
                href="#precos"
                className="w-full inline-flex items-center justify-center gap-3 py-5 px-8 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-base sm:text-lg tracking-wide shadow-2xl shadow-orange-500/30 transform hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>{data.slug === 'unesp' ? 'EM BREVE' : 'COMEÇAR MINHA PREPARAÇÃO'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <StickyMobileCta
        vestibularLabel={data.name}
        vestibularSlug={data.slug}
        onOpenCheckout={handleScrollToPricing}
      />
    </div>
  );
}
