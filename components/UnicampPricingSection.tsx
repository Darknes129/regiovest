'use client';

import React, { useState } from 'react';
import {
  Check,
  Star,
  Crown,
  ArrowRight,
  Zap,
  ShieldCheck,
  CreditCard,
  Sparkles,
} from 'lucide-react';

interface UnicampPricingSectionProps {
  onSelectProduct?: (productName: string, area?: string) => void;
  onActiveCardChange?: (cardKey: 'combo' | 'total') => void;
}

export type AreaType = 'Biológicas e Saúde' | 'Exatas e Tecnológicas' | 'Humanas e Artes';
export type AreaKey = 'biologicas' | 'exatas' | 'humanas';

// Checkout links mapping as required by RegioVest - UNICAMP 2027
const checkoutLinks = {
  essencial: 'https://sun.eduzz.com/Q9N224RP01',

  foco: {
    biologicas: 'https://sun.eduzz.com/797ZZ8KV0E',
    exatas: 'https://chk.eduzz.com/htfyxl4e',
    humanas: 'https://sun.eduzz.com/7WXGG34D0A',
  },

  combo: {
    biologicas: 'https://sun.eduzz.com/69K11XKAWO',
    exatas: 'https://sun.eduzz.com/VWGNNDBO07',
    humanas: 'https://sun.eduzz.com/Q9N22K3101',
  },

  total: 'https://sun.eduzz.com/D0R88RE69Y',
};

export default function UnicampPricingSection({
  // onSelectProduct is intentionally not invoked on UNICAMP buttons to prevent internal site modal
}: UnicampPricingSectionProps) {
  // Global area selector (updates all cards at once, eliminating in-card selector clutter)
  // Default: "biologicas" ("Biológicas e Saúde")
  const [selectedArea, setSelectedArea] = useState<AreaKey>('biologicas');

  const areas: { id: AreaKey; label: AreaType; short: string }[] = [
    { id: 'biologicas', label: 'Biológicas e Saúde', short: 'Biológicas' },
    { id: 'exatas', label: 'Exatas e Tecnológicas', short: 'Exatas' },
    { id: 'humanas', label: 'Humanas e Artes', short: 'Humanas' },
  ];

  const currentAreaObj = areas.find((a) => a.id === selectedArea) || areas[0];

  return (
    <section id="precos" className="py-20 sm:py-28 bg-white relative overflow-hidden font-sans">
      {/* Background subtle ambiance: Clean, luminous, minimal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-16 left-1/3 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-3xl" />
        <div className="absolute top-36 right-1/4 w-[450px] h-[450px] bg-amber-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================
            SECTION HEADER: FORTE, CLARA & PERSUASIVA
        ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Planos & Investimento · UNICAMP 2027</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] text-balance">
            Escolha a forma mais inteligente de se preparar para a UNICAMP.
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto text-balance">
            Você pode começar pela fase que precisa ou garantir a preparação completa por uma diferença mínima.
          </p>
        </div>

        {/* =========================================
            SELETOR GLOBAL DE ÁREA (ÚNICO, LIMPO & CENTRADO)
        ========================================== */}
        <div className="max-w-xl mx-auto mb-12 sm:mb-16 text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Qual é a sua área para a 2ª fase?
          </p>
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/90 shadow-inner gap-1">
            {areas.map((a) => {
              const isSelected = selectedArea === a.id;
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setSelectedArea(a.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {a.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================
            OS 4 CARDS: HIERARQUIA 80% CLEAN / 20% DOPAMINÉRGICO
            FOCO MÁXIMO: COMBO COMPLETO (ESCALA MAIOR) & UPGRADE UNICAMP TOTAL
        ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {/* =========================================
              CARD 1: ESSENCIAL (DISCRETO, PORÉM SEGURO)
          ========================================== */}
          <div className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-slate-300">
            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200/90 text-slate-700 uppercase tracking-wider">
                  SÓ 1ª FASE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                Essencial
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                Tudo o que você precisa para focar na 1ª fase da UNICAMP.
              </p>

              {/* Preço com mais respiro e impacto */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-slate-500">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight tabular-nums">
                    12,90
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium block mt-1">
                  Pagamento único
                </span>
              </div>

              {/* CTA orientada para ação com redirecionamento fixo direto para o Eduzz */}
              <button
                type="button"
                onClick={() => {
                  window.location.href = checkoutLinks.essencial;
                }}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-slate-900 hover:bg-slate-800 text-white transition-all active:scale-95 cursor-pointer mb-6"
              >
                Quero começar pela 1ª fase
              </button>

              {/* 3 Benefícios Máximo */}
              <div className="space-y-2.5 pt-4 border-t border-slate-200/60 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1ª fase completa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Material digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Acesso após a compra</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              CARD 2: FOCO 2ª FASE (DISCRETO, ROXO SUAVE)
          ========================================== */}
          <div className="rounded-3xl bg-purple-50/40 border border-purple-200/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-purple-300">
            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 uppercase tracking-wider">
                  2ª FASE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                Foco 2ª Fase
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                Conhecimentos Gerais + específica de {currentAreaObj.short}.
              </p>

              {/* Preço com respiro */}
              <div className="mb-6">
                <div className="text-[11px] text-slate-400 font-medium">
                  R$ 36,80 em materiais avulsos
                </div>
                <div className="flex items-baseline gap-1 my-0.5">
                  <span className="text-xs font-bold text-slate-500">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight tabular-nums">
                    22,90
                  </span>
                </div>
                <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-md mt-1">
                  Economize R$ 13,90
                </span>
              </div>

              {/* CTA orientada para ação com redirecionamento dinâmico direto para o Eduzz */}
              <button
                type="button"
                onClick={() => {
                  window.location.href = checkoutLinks.foco[selectedArea];
                }}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-purple-900 hover:bg-purple-950 text-white transition-all active:scale-95 cursor-pointer mb-6"
              >
                Quero focar na 2ª fase
              </button>

              {/* 3 Benefícios Máximo */}
              <div className="space-y-2.5 pt-4 border-t border-purple-200/60 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Conhecimentos Gerais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">Específica de {currentAreaObj.short}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Material digital</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              CARD 3: COMBO COMPLETO (DESTAQUE MÁXIMO DA SEÇÃO)
          ========================================== */}
          <div className="rounded-3xl bg-white border-2 border-orange-500 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xl shadow-orange-500/20 lg:scale-[1.04] lg:-translate-y-3 relative ring-2 ring-orange-400/40 z-10">
            {/* Badge Único */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>MAIS VANTAJOSO</span>
            </div>

            <div>
              {/* Header */}
              <div className="mt-1 mb-2">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Combo Completo
                </h3>
                <p className="text-xs sm:text-sm font-bold text-orange-950 mt-1">
                  1ª + 2ª fase da sua área
                </p>
              </div>

              {/* Bloco de Preço com Respiro & Grande Contraste */}
              <div className="mb-5">
                <div className="text-[11px] text-slate-400 font-medium">
                  R$ 49,70 em materiais avulsos
                </div>
                <div className="flex items-baseline gap-1 my-0.5">
                  <span className="text-xs font-bold text-slate-600">R$</span>
                  <span className="text-5xl font-black text-slate-950 tracking-tight tabular-nums">
                    24,90
                  </span>
                </div>
                <span className="inline-block text-[11px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md mt-1">
                  Economize R$ 24,80
                </span>
              </div>

              {/* Argumento Mais Importante em Destaque Visual Limpo */}
              <div className="mb-6 p-3.5 rounded-2xl bg-orange-50 border border-orange-200/90 text-left">
                <p className="text-xs sm:text-sm font-black text-orange-950">
                  Só R$ 2 a mais que o Foco 2ª Fase.
                </p>
                <p className="text-xs font-semibold text-slate-700 mt-0.5">
                  Leve também toda a preparação da 1ª fase.
                </p>
              </div>

              {/* CTA Grande de Máximo Contraste direto para o Eduzz */}
              <button
                type="button"
                onClick={() => {
                  window.location.href = checkoutLinks.combo[selectedArea];
                }}
                className="w-full py-4 px-4 rounded-xl font-black text-sm sm:text-base tracking-wide bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 hover:from-orange-600 hover:to-amber-600 text-slate-950 transition-all shadow-xl shadow-orange-500/30 active:scale-95 cursor-pointer mb-6"
              >
                QUERO 1ª + 2ª FASE 🔥
              </button>

              {/* Benefícios Essenciais */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5] shrink-0" />
                  <span>1ª Fase Completa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5] shrink-0" />
                  <span>Conhecimentos Gerais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5] shrink-0" />
                  <span className="truncate">Específica de {currentAreaObj.short}</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              CARD 4: UNICAMP TOTAL (UPGRADE PREMIUM, ENXUTO & DIRETO)
          ========================================== */}
          <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-xl lg:-translate-y-1 relative">
            {/* Badge Único */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 fill-current" />
              <span>COLEÇÃO COMPLETA</span>
            </div>

            <div>
              {/* Header */}
              <div className="mt-1 mb-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  UNICAMP Total
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  Todos os materiais em um único pacote.
                </p>
              </div>

              {/* Preço com respiro */}
              <div className="mb-5">
                <div className="text-[11px] text-slate-400 font-medium">
                  R$ 89,50 em materiais avulsos
                </div>
                <div className="flex items-baseline gap-1 my-0.5">
                  <span className="text-xs font-bold text-amber-300">R$</span>
                  <span className="text-5xl font-black text-white tracking-tight tabular-nums">
                    29,90
                  </span>
                </div>
                <span className="inline-block text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-md mt-1">
                  Economize R$ 59,60
                </span>
              </div>

              {/* Principal Argumento Enxuto */}
              <div className="mb-6 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-left">
                <p className="text-xs sm:text-sm font-black text-amber-300">
                  Apenas + R$ 5 em relação ao Combo Completo
                </p>
                <p className="text-xs text-slate-300 mt-0.5 font-medium">
                  para levar todas as áreas do vestibular.
                </p>
              </div>

              {/* CTA orientada para ação com redirecionamento fixo direto para o Eduzz */}
              <button
                type="button"
                onClick={() => {
                  window.location.href = checkoutLinks.total;
                }}
                className="w-full py-4 px-4 rounded-xl font-black text-sm sm:text-base tracking-wide bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 transition-all shadow-lg shadow-amber-400/20 active:scale-95 cursor-pointer mb-6"
              >
                Quero a coleção completa 👑
              </button>

              {/* Benefícios: Lista Curta e Limpa das 5 Partes */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>1ª Fase</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Conhecimentos Gerais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Biológicas e Saúde</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Exatas e Tecnológicas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Humanas e Artes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha discreta de valores avulsos */}
        <p className="text-center text-xs text-slate-400 font-medium mb-16">
          Valores avulsos: 1ª fase R$ 12,90 • Conhecimentos Gerais R$ 16,90 • Específica R$ 19,90
        </p>

        {/* =========================================
            FAIXA DE COMPARAÇÃO VISUAL REFINADA
            "Por uma diferença muito pequena, você leva muito mais"
        ========================================== */}
        <div className="max-w-3xl mx-auto mb-20 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Por uma diferença muito pequena, você leva muito mais
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
              É aqui que o Combo Completo faz mais sentido:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Step 1: Foco 2ª Fase */}
            <div className="w-full sm:w-auto p-4 rounded-2xl bg-white border border-slate-200 text-center flex-1 shadow-xs">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                2ª Fase
              </span>
              <span className="text-2xl font-black text-slate-900 block my-0.5 tabular-nums">
                R$ 22,90
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Sua área discursiva</span>
            </div>

            {/* Transition + R$ 2 */}
            <div className="flex sm:flex-col items-center gap-1 text-center shrink-0">
              <span className="px-3 py-1 rounded-full bg-orange-500 text-slate-950 font-black text-xs shadow-xs">
                + R$ 2
              </span>
              <ArrowRight className="w-4 h-4 text-orange-500 hidden sm:block" />
            </div>

            {/* Step 2: Combo Completo */}
            <div className="w-full sm:w-auto p-4 rounded-2xl bg-white border-2 border-orange-500 text-center flex-1 shadow-md ring-1 ring-orange-500/20">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-wider block">
                Combo Completo ⭐
              </span>
              <span className="text-2xl font-black text-slate-950 block my-0.5 tabular-nums">
                R$ 24,90
              </span>
              <span className="text-[11px] font-bold text-slate-700">1ª + 2ª fase</span>
            </div>

            {/* Transition + R$ 5 */}
            <div className="flex sm:flex-col items-center gap-1 text-center shrink-0">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow-xs">
                + R$ 5
              </span>
              <ArrowRight className="w-4 h-4 text-amber-500 hidden sm:block" />
            </div>

            {/* Step 3: UNICAMP Total */}
            <div className="w-full sm:w-auto p-4 rounded-2xl bg-slate-950 text-white border border-slate-800 text-center flex-1 shadow-md">
              <span className="text-[11px] font-black text-amber-400 uppercase tracking-wider block">
                Coleção Total 👑
              </span>
              <span className="text-2xl font-black text-white block my-0.5 tabular-nums">
                R$ 29,90
              </span>
              <span className="text-[11px] text-slate-300 font-medium">Todas as 3 áreas</span>
            </div>
          </div>
        </div>

        {/* =========================================
            TABELA COMPARATIVA REFINADA (LEVE & ELEGANTE)
        ========================================== */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              Compare o que está incluído
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Visão rápida dos conteúdos por plano.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-slate-800 text-slate-200 text-[11px] uppercase tracking-wider font-bold">
                    <th className="py-3 px-5">Plano</th>
                    <th className="py-3 px-4 text-center">1ª Fase</th>
                    <th className="py-3 px-4 text-center">Conhecimentos Gerais</th>
                    <th className="py-3 px-4 text-center">Específica da sua área</th>
                    <th className="py-3 px-4 text-center">Todas as áreas</th>
                    <th className="py-3 px-5 text-right">Preço</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-semibold">
                  {/* Essencial */}
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-800">Essencial</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3 px-4 text-center text-slate-300 font-normal">—</td>
                    <td className="py-3 px-4 text-center text-slate-300 font-normal">—</td>
                    <td className="py-3 px-4 text-center text-slate-300 font-normal">—</td>
                    <td className="py-3 px-5 text-right font-black text-slate-900">R$ 12,90</td>
                  </tr>

                  {/* Foco 2ª Fase */}
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-800">Foco 2ª Fase</td>
                    <td className="py-3 px-4 text-center text-slate-300 font-normal">—</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3 px-4 text-center text-slate-300 font-normal">—</td>
                    <td className="py-3 px-5 text-right font-black text-slate-900">R$ 22,90</td>
                  </tr>

                  {/* Combo Completo - Linha em Destaque */}
                  <tr className="bg-orange-50/70 hover:bg-orange-50 font-bold border-y-2 border-orange-400">
                    <td className="py-3 px-5 text-slate-950 font-black flex items-center gap-1.5">
                      <span>Combo Completo</span>
                      <span className="text-[10px] bg-orange-500 text-slate-950 font-black px-1.5 py-0.2 rounded">
                        ⭐
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-black">✓</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-black">✓</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-black">✓</td>
                    <td className="py-3 px-4 text-center text-slate-300 font-normal">—</td>
                    <td className="py-3 px-5 text-right font-black text-orange-950 text-base">R$ 24,90</td>
                  </tr>

                  {/* UNICAMP Total - Linha Premium Sutil */}
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-5 font-bold text-slate-900 flex items-center gap-1.5">
                      <span>UNICAMP Total</span>
                      <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.2 rounded">
                        👑
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3 px-5 text-right font-black text-slate-900">R$ 29,90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Dúvida CTA após tabela com redirecionamento dinâmico direto para o Eduzz */}
          <div className="text-center mt-7">
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-2">
              Ainda em dúvida?
            </p>
            <button
              type="button"
              onClick={() => {
                window.location.href = checkoutLinks.combo[selectedArea];
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-black text-xs sm:text-sm shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <span>QUERO O COMBO COMPLETO — R$ 24,90</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* =========================================
            ELEMENTOS DE CONFIANÇA (UMA ÚNICA BARRA LIMPA)
        ========================================== */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Acesso após a compra</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garantia incondicional de 7 dias</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
              <span>PIX e cartão</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
