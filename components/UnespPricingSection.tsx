'use client';

import React from 'react';
import {
  Check,
  Star,
  ArrowRight,
  Zap,
  ShieldCheck,
  CreditCard,
  Sparkles,
} from 'lucide-react';

interface UnespPricingSectionProps {
  onSelectProduct: (productName: string, area?: string) => void;
  onActiveCardChange?: (cardKey: 'combo' | 'foco') => void;
}

export default function UnespPricingSection({
  onSelectProduct,
}: UnespPricingSectionProps) {
  return (
    <section id="precos" className="py-20 sm:py-28 bg-white relative overflow-hidden font-sans">
      {/* Background subtle ambiance in UNESP Warm Vibrant Palette (Orange, Amber, Warm Yellow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-16 left-1/3 w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-3xl" />
        <div className="absolute top-36 right-1/4 w-[450px] h-[450px] bg-amber-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================
            SECTION HEADER: FORTE, CLARA & PERSUASIVA
        ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Planos & Investimento · UNESP 2027</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] text-balance">
            Escolha a forma mais inteligente de se preparar para a UNESP.
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto text-balance">
            Você pode começar pela fase que precisa ou garantir a preparação completa por uma diferença mínima.
          </p>
        </div>

        {/* =========================================
            OS 3 CARDS PRINCIPAIS UNESP
            FOCO MÁXIMO: UNESP COMPLETA 2027 (ESCALA MAIOR)
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto mb-12">
          {/* =========================================
              CARD 1: ESSENCIAL (DISCRETO, NEUTRO E ELEGANTE)
          ========================================== */}
          <div className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-slate-300">
            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200/90 text-slate-700 uppercase tracking-wider">
                  1ª FASE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                Essencial
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                Tudo o que você precisa para focar na 1ª fase da UNESP.
              </p>

              {/* Preço */}
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

              {/* CTA */}
              <button
                type="button"
                disabled
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-slate-200 text-slate-500 cursor-not-allowed mb-6"
              >
                Em breve
              </button>

              {/* 3 Benefícios Máximo */}
              <div className="space-y-2.5 pt-4 border-t border-slate-200/60 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1ª Fase Completa</span>
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
              CARD 2: FOCO 2ª FASE (DISCRETO, LARANJA SUAVE)
          ========================================== */}
          <div className="rounded-3xl bg-orange-50/30 border border-orange-200/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-orange-300">
            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-950 uppercase tracking-wider">
                  2ª FASE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                Foco 2ª Fase
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                Dia 1 + Dia 2 reunidos em um único pacote.
              </p>

              {/* Preço */}
              <div className="mb-6">
                <div className="text-[11px] text-slate-400 font-medium">
                  R$ 37,80 em materiais avulsos
                </div>
                <div className="flex items-baseline gap-1 my-0.5">
                  <span className="text-xs font-bold text-slate-500">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight tabular-nums">
                    22,90
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-md">
                    Economize R$ 14,90
                  </span>
                  <span className="text-[11px] text-orange-950 font-semibold">
                    Por + R$ 2 leve a 1ª fase
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                disabled
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-slate-200 text-slate-500 cursor-not-allowed mb-6"
              >
                Em breve
              </button>

              {/* 3 Benefícios Máximo */}
              <div className="space-y-2.5 pt-4 border-t border-orange-200/60 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dia 1 (Humanas + Natureza + Matemática)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dia 2 + Redação Nota Máxima</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Material digital</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              CARD 3: UNESP COMPLETA 2027 ⭐ (DESTAQUE MÁXIMO DA UNESP)
          ========================================== */}
          <div className="rounded-3xl bg-white border-2 border-orange-500 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xl shadow-orange-500/20 lg:scale-[1.04] lg:-translate-y-3 relative ring-2 ring-orange-400/40 z-10">
            {/* Badge Único */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>MELHOR OFERTA</span>
            </div>

            <div>
              {/* Header */}
              <div className="mt-1 mb-2">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  UNESP Completa 2027
                </h3>
                <p className="text-xs sm:text-sm font-bold text-orange-950 mt-1">
                  1ª + 2ª fase em um único pacote
                </p>
              </div>

              {/* Bloco de Preço com Respiro & Grande Contraste */}
              <div className="mb-5">
                <div className="text-[11px] text-slate-400 font-medium">
                  R$ 50,70 em materiais avulsos
                </div>
                <div className="flex items-baseline gap-1 my-0.5">
                  <span className="text-xs font-bold text-slate-600">R$</span>
                  <span className="text-5xl font-black text-slate-950 tracking-tight tabular-nums">
                    24,90
                  </span>
                </div>
                <span className="inline-block text-[11px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md mt-1">
                  Economize R$ 25,80
                </span>
              </div>

              {/* Argumento Mais Importante */}
              <div className="mb-6 p-3.5 rounded-2xl bg-orange-50 border border-orange-200/90 text-left">
                <p className="text-xs sm:text-sm font-black text-orange-950">
                  Só R$ 2 a mais que o Foco 2ª Fase.
                </p>
                <p className="text-xs font-semibold text-slate-700 mt-0.5">
                  Leve também toda a preparação da 1ª fase.
                </p>
              </div>

              {/* CTA Grande */}
              <button
                type="button"
                disabled
                className="w-full py-4 px-4 rounded-xl font-black text-sm sm:text-base tracking-wide bg-slate-200 text-slate-500 cursor-not-allowed mb-6"
              >
                Em breve
              </button>

              {/* Benefícios Essenciais */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5] shrink-0" />
                  <span>1ª Fase Completa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5] shrink-0" />
                  <span>Dia 1 (Humanas + Natureza + Matemática)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5] shrink-0" />
                  <span>Dia 2 + Redação Nota Máxima</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha discreta de valores avulsos */}
        <p className="text-center text-xs text-slate-400 font-medium mb-16">
          Valores avulsos: 1ª fase R$ 12,90 • Dia 1 R$ 19,90 • Dia 2 R$ 17,90
        </p>

        {/* =========================================
            FAIXA DE COMPARAÇÃO VISUAL REFINADA (UNESP)
            "Veja como pouca diferença existe entre os combos."
        ========================================== */}
        <div className="max-w-2xl mx-auto mb-20 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Veja como pouca diferença existe entre os combos.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
              Por R$ 2 a mais, você adiciona toda a 1ª fase:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            {/* Step 1: Foco 2ª Fase */}
            <div className="w-full sm:w-auto p-4 rounded-2xl bg-white border border-slate-200 text-center flex-1 shadow-xs">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                2ª Fase Completa
              </span>
              <span className="text-2xl font-black text-slate-900 block my-0.5 tabular-nums">
                R$ 22,90
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Dia 1 + Dia 2</span>
            </div>

            {/* Transition + R$ 2 */}
            <div className="flex sm:flex-col items-center gap-1 text-center shrink-0">
              <span className="px-3.5 py-1.5 rounded-full bg-orange-500 text-slate-950 font-black text-xs shadow-xs">
                + R$ 2
              </span>
              <ArrowRight className="w-4 h-4 text-orange-500 hidden sm:block" />
            </div>

            {/* Step 2: UNESP Completa */}
            <div className="w-full sm:w-auto p-4 rounded-2xl bg-white border-2 border-orange-500 text-center flex-1 shadow-md ring-1 ring-orange-500/20">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-wider block">
                UNESP Completa ⭐
              </span>
              <span className="text-2xl font-black text-slate-950 block my-0.5 tabular-nums">
                R$ 24,90
              </span>
              <span className="text-[11px] font-bold text-slate-700">1ª + 2ª fase inteiras</span>
            </div>
          </div>
        </div>

        {/* =========================================
            OPÇÕES AVULSAS DA 2ª FASE (SEÇÃO SECUNDÁRIA)
        ========================================== */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Prefere comprar somente um dia da 2ª fase?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Você também pode escolher os materiais separadamente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Avulso Dia 1 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase tracking-wider">
                  2ª FASE · DIA 1
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-2 mb-1">
                  Humanas + Natureza + Matemática
                </h4>
                <div className="text-2xl font-black text-slate-900 mb-4 tabular-nums">
                  R$ 19,90
                </div>
              </div>
              <button
                type="button"
                disabled
                className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-200 text-slate-500 cursor-not-allowed"
              >
                Em breve
              </button>
            </div>

            {/* Avulso Dia 2 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase tracking-wider">
                  2ª FASE · DIA 2
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-2 mb-1">
                  Linguagens + Redação
                </h4>
                <div className="text-2xl font-black text-slate-900 mb-4 tabular-nums">
                  R$ 17,90
                </div>
              </div>
              <button
                type="button"
                disabled
                className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-200 text-slate-500 cursor-not-allowed"
              >
                Em breve
              </button>
            </div>
          </div>
        </div>

        {/* =========================================
            TABELA COMPARATIVA REFINADA (UNESP)
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
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-slate-800 text-slate-200 text-[11px] uppercase tracking-wider font-bold">
                    <th className="py-3 px-5">Plano</th>
                    <th className="py-3 px-4 text-center">1ª Fase</th>
                    <th className="py-3 px-4 text-center">Dia 1</th>
                    <th className="py-3 px-4 text-center">Dia 2 + Redação</th>
                    <th className="py-3 px-4 text-center">2ª Fase Completa</th>
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
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3 px-5 text-right font-black text-slate-900">R$ 22,90</td>
                  </tr>

                  {/* UNESP Completa - Linha em Destaque */}
                  <tr className="bg-orange-50/70 hover:bg-orange-50 font-bold border-y-2 border-orange-400">
                    <td className="py-3 px-5 text-slate-950 font-black flex items-center gap-1.5">
                      <span>UNESP Completa</span>
                      <span className="text-[10px] bg-orange-500 text-slate-950 font-black px-1.5 py-0.2 rounded">
                        ⭐
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-black">✓</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-black">✓</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-black">✓</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-black">✓</td>
                    <td className="py-3 px-5 text-right font-black text-orange-950 text-base">R$ 24,90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Dúvida CTA após tabela */}
          <div className="text-center mt-7">
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-2">
              Ainda em dúvida?
            </p>
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-200 text-slate-500 font-black text-xs sm:text-sm cursor-not-allowed"
            >
              <span>Em breve</span>
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
