'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentVestibular?: 'home' | 'unicamp' | 'unesp' | 'fuvest';
  onOpenCheckout?: (productName?: string) => void;
}

export default function Navbar({
  currentVestibular = 'home',
  onOpenCheckout,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const vestibularTabs = [
    { id: 'unicamp', label: 'UNICAMP', href: '/unicamp', badge: '1ª e 2ª Fase' },
    { id: 'unesp', label: 'UNESP', href: '/unesp', badge: 'VUNESP' },
    { id: 'fuvest', label: 'FUVEST', href: '/fuvest', badge: 'USP' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single Element Contract) */}
        <Link href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
          <Logo size="md" />
        </Link>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <Link
            href="/"
            className={`transition-colors whitespace-nowrap ${
              currentVestibular === 'home'
                ? 'text-blue-600 font-extrabold border-b-2 border-blue-600 pb-0.5'
                : 'hover:text-blue-600'
            }`}
          >
            Início
          </Link>

          {/* Direct Vestibulares Links with active indicators */}
          {vestibularTabs.map((tab) => {
            const isActive = currentVestibular === tab.id;
            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={`relative px-2.5 py-1 rounded-lg transition-all whitespace-nowrap text-sm ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-extrabold border border-blue-200/90 shadow-2xs'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-bold'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                  </span>
                )}
              </Link>
            );
          })}

          <a
            href="#precos"
            className="hover:text-blue-600 transition-colors whitespace-nowrap text-slate-600"
          >
            Materiais
          </a>

          <a
            href="#faq"
            className="hover:text-blue-600 transition-colors whitespace-nowrap text-slate-600"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#precos"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-500/25 transition-all whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>VER MATERIAIS</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
            Escolha seu vestibular:
          </div>

          <div className="grid grid-cols-3 gap-2">
            {vestibularTabs.map((tab) => {
              const isActive = currentVestibular === tab.id;
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl text-center text-xs font-black border transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div>{tab.label}</div>
                  <div className={`text-[9px] font-semibold ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {tab.badge}
                  </div>
                </Link>
              );
            })}
          </div>

          <nav className="flex flex-col gap-1.5 font-semibold text-slate-700 text-sm border-t border-slate-100 pt-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg transition-colors ${
                currentVestibular === 'home' ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Início RegioVest
            </Link>
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors text-blue-600 font-bold"
            >
              Ver Materiais e Ofertas 🔥
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Dúvidas Frequentes
            </a>
          </nav>

          <div className="pt-2">
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md text-center"
            >
              <span>ACESSAR MATERIAIS 🚀</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
