'use client';

import React from 'react';
import { Check, ShieldCheck, Zap, Sparkles, CreditCard, Clock, Download, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectProduct: (productName: string) => void;
}

export default function PricingSection({ onSelectProduct }: PricingSectionProps) {
  const products = [
    {
      id: 'produto-fase1',
      name: 'Kit Estratégico UNICAMP 1ª Fase',
      badge: 'Foco em Questões Objetivas',
      badgeColor: 'bg-blue-100 text-blue-900',
      description: 'Ideal para quem quer poupar meses de estudo disperso e dominar o raio-x e as pegadinhas da primeira fase.',
      originalPrice: '79,00',
      currentPrice: '37,90',
      installments: '4x de R$ 9,98',
      features: [
        'Raio-X de Recorrência estatística por disciplina',
        '450+ questões selecionadas com resolução comentada',
        'Técnica prática para interpretar textos e gráficos longos',
        'Alerta de pegadinhas e distratores clássicos da COMVEST',
        'Checklist de revisão rápida para a semana final',
        'Formato PDF otimizado para celular, tablet ou impressão',
      ],
      popular: false,
      ctaText: 'QUERO O GUIA DA 1ª FASE 🔥',
      borderClass: 'border-slate-200 hover:border-blue-500',
      buttonClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      id: 'produto-combo',
      name: 'Combo Aprovação Total (1ª + 2ª Fase)',
      badge: '⭐ MAIS ESCOLHIDO',
      badgeColor: 'bg-amber-400 text-slate-950 font-black',
      description: 'A preparação completa do início ao fim: do filtro da 1ª fase até o padrão discursivo de nota máxima na 2ª fase.',
      originalPrice: '158,00',
      currentPrice: '57,00',
      installments: '6x de R$ 10,38',
      features: [
        'Tudo do Guia Estratégico de 1ª Fase (450+ questões)',
        'Tudo do Guia de Domínio Discursivo de 2ª Fase',
        'Padrão Oficial de Respostas esperadas pela banca COMVEST',
        'BÔNUS EXCLUSIVO: Cronograma Tático de Reta Final',
        'Modelos de respostas reais comentadas (nota máxima vs perda de pontos)',
        'Acesso vitalício aos PDFs e futuras atualizações do ciclo',
        'Economia de mais de 60% em relação aos materiais avulsos',
      ],
      popular: true,
      ctaText: 'GARANTIR COMBO COM DESCONTO 🚀',
      borderClass: 'border-2 border-orange-500 shadow-2xl shadow-orange-500/15',
      buttonClass: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black',
    },
    {
      id: 'produto-fase2',
      name: 'Mestria Discursiva UNICAMP 2ª Fase',
      badge: 'Foco em Respostas Escritas',
      badgeColor: 'bg-purple-100 text-purple-900',
      description: 'Para quem passou da 1ª fase ou já quer treinar a escrita objetiva e o raciocínio interdisciplinar exigido na fase final.',
      originalPrice: '79,00',
      currentPrice: '39,90',
      installments: '4x de R$ 10,51',
      features: [
        'Critérios de pontuação reais dos corretores da COMVEST',
        'Como redigir respostas diretas sem perder tempo ou linha',
        'Resoluções passo a passo de questões discursivas reais',
        'Estratégia de Redação nos formatos característicos UNICAMP',
        'Folhas modelo de treino no padrão gráfico da prova',
        'Dicas de ouro para não zerar por falta de justificativa',
      ],
      popular: false,
      ctaText: 'QUERO O GUIA DA 2ª FASE ⚡',
      borderClass: 'border-slate-200 hover:border-purple-500',
      buttonClass: 'bg-purple-700 hover:bg-purple-800 text-white',
    },
  ];

  return (
    <section id="precos" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-bold uppercase tracking-wider">
            <span>Investimento Acessível</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Escolha seu material e comece{' '}
            <span className="marker-orange text-slate-950">
              a estudar certo agora.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Preço justo, ticket baixo e entrega digital instantânea para você não perder nem um dia a mais.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {products.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className={`rounded-3xl bg-slate-50/60 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${item.borderClass} ${
                item.popular ? 'bg-white ring-1 ring-orange-500/20 lg:-translate-y-2' : ''
              }`}
            >
              {/* Popular floating badge */}
              {item.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                  MELHOR CUSTO-BENEFÍCIO 🔥
                </div>
              )}

              <div>
                {/* Header Tag */}
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

                {/* Price Display */}
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

                {/* Features list */}
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

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={() => onSelectProduct(item.name)}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${item.buttonClass}`}
                >
                  <span>{item.ctaText}</span>
                </button>

                <div className="pt-3 text-center text-[11px] text-slate-500 font-medium">
                  ⚡ Envio imediato no seu e-mail após a confirmação
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security and Trust Strip */}
        <div className="rounded-2xl bg-slate-100/80 border border-slate-200/80 p-6 sm:p-8 flex flex-wrap items-center justify-around gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Liberação Imediata</div>
              <div className="text-xs text-slate-500">Pague via PIX e acesse em menos de 1 minuto</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Garantia Incondicional de 7 Dias</div>
              <div className="text-xs text-slate-500">Se não te ajudar no estudo, devolvemos 100%</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Pagamento 100% Seguro</div>
              <div className="text-xs text-slate-500">PIX ou Cartão em até 6x sem complicações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
