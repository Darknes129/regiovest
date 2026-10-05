'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame, X } from 'lucide-react';

interface StickyMobileCtaProps {
  vestibularLabel?: string;
  vestibularSlug?: string;
  priceLabel?: string;
  unicampPlan?: 'combo' | 'total';
  onOpenCheckout?: (product?: string) => void;
}

export default function StickyMobileCta({
  vestibularLabel = 'UNICAMP',
  vestibularSlug,
  priceLabel,
  unicampPlan = 'combo',
  onOpenCheckout,
}: StickyMobileCtaProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'combo' | 'total'>(unicampPlan);
  const [prevUnicampPlan, setPrevUnicampPlan] = useState(unicampPlan);

  const isUnicamp = vestibularSlug === 'unicamp' || vestibularLabel.toLowerCase().includes('unicamp');
  const isFuvest = vestibularSlug === 'fuvest' || vestibularLabel.toLowerCase().includes('fuvest');
  const isUnesp = vestibularSlug === 'unesp' || vestibularLabel.toLowerCase().includes('unesp');

  if (unicampPlan !== prevUnicampPlan) {
    setPrevUnicampPlan(unicampPlan);
    setSelectedPlan(unicampPlan);
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 280px and if not dismissed
      if (window.scrollY > 280 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  if (isUnesp) {
    const isFoco = selectedPlan === 'total'; // re-use toggle state for 2nd option
    const activeProductName = isFoco ? 'FOCO 2ª FASE' : 'UNESP COMPLETA 2027';
    const activeLabel = isFoco ? 'FOCO 2ª • R$ 22,90 • QUERO' : 'UNESP COMPLETA • R$ 24,90 • QUERO 🔥';

    return (
      <aside
        aria-label="Acesso rápido à oferta UNESP"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 shadow-2xl transition-all duration-200"
      >
        <div className="flex items-center justify-between gap-1.5 max-w-md mx-auto">
          {/* Quick toggle pill */}
          <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-[10px] font-bold shrink-0">
            <button
              type="button"
              onClick={() => setSelectedPlan('combo')}
              className={`px-2 py-1 rounded-md transition-colors ${
                !isFoco
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Completa R$ 24,90
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlan('total')}
              className={`px-2 py-1 rounded-md transition-colors ${
                isFoco
                  ? 'bg-orange-500 text-white font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2ª Fase R$ 22,90
            </button>
          </div>

          {/* Action CTA */}
          <button
            type="button"
            disabled
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-black text-xs cursor-not-allowed bg-slate-800 text-slate-400"
          >
            <span>Em breve</span>
          </button>

          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg shrink-0"
            aria-label="Fechar barra rápida"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </aside>
    );
  }

  if (isUnicamp || isFuvest) {
    const isTotal = selectedPlan === 'total';
    const activeProductName = isFuvest
      ? (isTotal ? 'FUVEST 2027 — COLEÇÃO TOTAL' : 'COMBO COMPLETO — EXATAS')
      : (isTotal ? 'UNICAMP TOTAL' : 'COMBO COMPLETO');

    const totalLabel = isFuvest ? 'FUVEST TOTAL • R$ 29,90 • QUERO 👑' : 'UNICAMP TOTAL • R$ 29,90 • QUERO 👑';
    const comboLabel = 'COMBO COMPLETO • R$ 24,90 • QUERO 🔥';

    return (
      <aside
        aria-label={`Acesso rápido à oferta ${isFuvest ? 'FUVEST' : 'UNICAMP'}`}
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 shadow-2xl transition-all duration-200"
      >
        <div className="flex items-center justify-between gap-1.5 max-w-md mx-auto">
          {/* Quick toggle pill */}
          <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-[10px] font-bold shrink-0">
            <button
              type="button"
              onClick={() => setSelectedPlan('combo')}
              className={`px-2 py-1 rounded-md transition-colors ${
                !isTotal
                  ? (isFuvest ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-orange-500 text-slate-950 font-black')
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Combo R$ 24,90
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlan('total')}
              className={`px-2 py-1 rounded-md transition-colors ${
                isTotal
                  ? 'bg-amber-400 text-slate-950 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Total R$ 29,90
            </button>
          </div>

          {/* Action CTA */}
          <button
            type="button"
            onClick={() => {
              if (isUnicamp && isTotal) {
                window.location.href = 'https://sun.eduzz.com/D0R88RE69Y';
                return;
              }
              if (isFuvest && isTotal) {
                window.location.href = 'https://sun.eduzz.com/39VKKGYKWR';
                return;
              }
              const el = document.getElementById('precos');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                onOpenCheckout?.(activeProductName);
              }
            }}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-black text-xs shadow-md active:scale-95 transition-all truncate ${
              isTotal
                ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-amber-400/25'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-orange-500/25'
            }`}
          >
            <span className="truncate">{isTotal ? totalLabel : comboLabel}</span>
          </button>

          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg shrink-0"
            aria-label="Fechar barra rápida"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Acesso rápido à oferta"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 shadow-2xl transition-all duration-200"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div className="flex flex-col text-left pl-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
            {vestibularLabel} • 1ª e 2ª Fase
          </span>
          <span className="text-xs font-black text-amber-300">
            {priceLabel || 'A partir de R$ 37,90'}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="#precos"
            className="inline-flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-xs shadow-md shadow-orange-500/20 active:scale-95 transition-transform"
          >
            <span>VER MATERIAIS</span>
            <Flame className="w-3.5 h-3.5 text-slate-950 fill-current" />
          </a>

          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg"
            aria-label="Fechar barra rápida"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
